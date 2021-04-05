const MySql = require("mysql2");
const Express = require("express")
const CookieParser=require("cookie-parser")
const path = require("path");
const { graphqlHTTP } = require('express-graphql');
const Script = require("./schema")
const App = Express(),jsonParser = Express.json()
App.use(CookieParser("radeongraphics"))
const Connection = MySql.createConnection({
  host: "localhost",
  database: "cripto",
  password: "radeongraphics",
  user: "root",
}).promise(),
root = {
  getMoney: (params) => {
    return Connection.query(`select * from money where owner=(select Name from player where Password="${params.password}" and  Name="${params.owner}")`)
      .then((v) => v[0][0])
  },
  getPerson: (params) => Connection.query(`select * from player where idPlayer=${params.id}`).then((res) => JSON.stringify(res[0][0])),
  loginfo:(params)=>{
    console.log(params);
    return Connection.query(`INSERT INTO player(Name,Password,Age) values(?,?,?) ON DUPLICATE KEY UPDATE Name = Name`, [params.Name,params.Password,params.Age]).then((value,error)=>error?{"status":true}:{"status":false})
  },
  logmoney:(params)=>{
    return Connection.query(`INSERT INTO money(Mark,Dark,Zark,Infine,owner,total) values(?,?,?,?,?,?) ON DUPLICATE KEY UPDATE owner = owner`,[params.Mark, params.Dark, params.Zark, params.Infine, params.owner, params.total]). 
    then((value,error)=>error?{"status":true}:{"status":false})
  }
};
App.use('/getinfo',(req,res)=>{
  graphqlHTTP({
  schema: Script,
  rootValue: root,
  graphiql: true,
  context: { req, res },
  })(req, res)});
App.use(Express.static(path.join(__dirname, "..", "build")));
App.use(Express.static("public"))

App.use(jsonParser)
//here
App.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"))
});
App.listen(5000, "localhost", () => {
  console.log("started");
})