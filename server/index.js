const MySql = require("mysql2");
const Express = require("express")
const path = require("path");
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const Connection = MySql.createConnection({
    host: "localhost",
    database: "cripto",
    password: "radeongraphics",
    user: "root",
}).promise();
var schema = buildSchema(`
  type Query {
    getMoney( owner : String !,password: String!):MoneyBatch,
    getPerson(id:Int):Person,
  }
  type Person{
    idPlayer:ID,
    Name:String,
    Age:Int,
    Password:String
  }
  type MoneyBatch{
    idMoney: ID,
    Mark: Int,
    Dark: Int,
    Zark: Int,
    Infine: Int,
    total:Int
  }
`);
var root = {
    getMoney: (params) => {
        return Connection.query(`select * from money where owner=(select Name from player where Password="${params.password}" and  Name="${params.owner}")`)
        .then((v) =>  v[0][0])
    },
    getPerson: (params) => Connection.query(`select * from player where idPlayer=${params.id}`).then((res) => JSON.stringify(res[0][0]))
};
const App = Express()
App.use('/getinfo', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
const jsonParser = Express.json()
App.use(Express.static(path.join(__dirname, "..", "build")));
App.use(Express.static("public"))

App.use(jsonParser)
App.post("/loginfo", (req, res) => {
    Connection.query(`INSERT INTO player(Name,Password,Age) values(?,?,?) ON DUPLICATE KEY UPDATE Name = Name`, [req.body.Name, req.body.Password,
    req.body.Age])
})
App.post("/logmoney", (req, res) => {
    Connection.query(`INSERT INTO money(Mark,Dark,Zark,Infine,owner,total) values(?,?,?,?,?,?) ON DUPLICATE KEY UPDATE owner = owner`,
        [req.body.Mark, req.body.Dark, req.body.Zark, req.body.Infine, req.body.owner,req.body.total])
})
App.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"))
});
App.listen(5000, "localhost", () => {
    console.log("started");
})