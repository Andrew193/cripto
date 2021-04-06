import types from "./types"
let initState={Name:"",Email:"",Age:"",avatar:null,login:false},
user=JSON.parse(localStorage.getItem("user"))
user && (initState={Name:user.Name,Email:user.Email,Age:user.Age,login:user.login,avatar:user.avatar,Password:user.Password} )

const initCreator=(type,values,Password)=>({type:type,Name: values.name, Email: values.email, Age: values.age, login:true,Password:Password}),
addCreator=(type,toAdd)=>({type:type,toAdd:toAdd}),
generalInit=(values)=>({Name: values.name, Email: values.email, Age: values.age, total: 300,login: true, Mark: 0, Dark: 0, Zark: 0, Infine: 0,Password:values.password})
function Reducer(state=initState,action) {
    switch (action.type) {
        case types.INIT:{
            return JSON.parse(JSON.stringify({Name:action.Name,Email:action.Email,Age:action.Age,login:action.login,Password:action.Password}))
        }
        case types.SETIMAGE:{
            return JSON.parse(JSON.stringify({...state,avatar:action.avatar}))
        }
        default:
            return JSON.parse(JSON.stringify(state))
    }
}
const Creators={
    initCreator:initCreator,
    addCreator:addCreator,
    generalInit:generalInit
}
export {Creators}
export default Reducer