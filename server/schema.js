const { buildSchema } = require('graphql');
module.exports=buildSchema(`
type Mutation{
  loginfo(Name:String,Password:String,Age:Int):error,
  logmoney(Mark:Int,Dark:Int,Zark:Int,Infine:Int,owner:String,total:Int):error
}
type error{
  status:Boolean
}
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