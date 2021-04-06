import types from "./types"
let initState={totalMoney:0,Mark:0,Dark:0,Zark:0,Infine:0}
const user=JSON.parse(localStorage.getItem("user"))
user && (initState={totalMoney:user.total,Mark:user.Mark,Dark:user.Dark,Zark:user.Zark,Infine:user.Infine})

function Reducer(state=initState,action) {
    switch (action.type) {
        case types.ADD:{
            return  JSON.parse(JSON.stringify({...state,totalMoney:state.totalMoney+action.toAdd}))
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