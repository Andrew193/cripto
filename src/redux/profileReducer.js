import types from "./types"
let initState={Name:"",Email:"",Age:"",avatar:null,login:false},
user=JSON.parse(localStorage.getItem("user"))
user && (initState={Name:user.Name,Email:user.Email,Age:user.Age,login:user.login,avatar:user.avatar} )
function Reducer(state=initState,action) {
    switch (action.type) {
        case types.INIT:{
            return JSON.parse(JSON.stringify({Name:action.Name,Email:action.Email,Age:action.Age,login:action.login}))
        }
        case types.SETIMAGE:{
            return JSON.parse(JSON.stringify({...state,avatar:action.avatar}))
        }
        default:
            return JSON.parse(JSON.stringify(state))
    }
}
export default Reducer