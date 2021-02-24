import types from "./types"
let initState=null
if(JSON.parse(localStorage.getItem("user"))){
    initState={Name:JSON.parse(localStorage.getItem("user")).Name,
    Email:JSON.parse(localStorage.getItem("user")).Email,
    Age:JSON.parse(localStorage.getItem("user")).Age,
    login:JSON.parse(localStorage.getItem("user")).login,
    avatar:JSON.parse(localStorage.getItem("user")).avatar,} 
} else
    initState={Name:"",Email:"",Age:"",avatar:null,login:false}
function Reducer(state=initState,action) {
    switch (action.type) {
        case types.INIT:{
            state.Name=action.Name;
            state.Email=action.Email;
            state.Age=action.Age;
            state.login=action.login
            return JSON.parse(JSON.stringify(state))
        }
        case types.SETIMAGE:{
            state.avatar=action.avatar;
            return JSON.parse(JSON.stringify(state))
        }
        default:
            return JSON.parse(JSON.stringify(state))
    }
}
export default Reducer