import types from "./types"
let initState=null
if(JSON.parse(localStorage.getItem("user")))
    initState={
    totalMoney:JSON.parse(localStorage.getItem("user")).total,
    Mark:JSON.parse(localStorage.getItem("user")).Mark,
    Dark:JSON.parse(localStorage.getItem("user")).Dark,
    Zark:JSON.parse(localStorage.getItem("user")).Zark,
    Infine:JSON.parse(localStorage.getItem("user")).Infine}
else
    initState={totalMoney:0,Mark:0,Dark:0,Zark:0,Infine:0}
function Reducer(state=initState,action) {
    switch (action.type) {
        case types.ADD:{
            debugger
            state.totalMoney+=action.toAdd;
            return JSON.parse(JSON.stringify(state))
        }
        case types.MINUS:{
            state.totalMoney-=action.toMinus;
            return JSON.parse(JSON.stringify(state))
        }
        default:
            return JSON.parse(JSON.stringify(state))
    }
}
export default Reducer