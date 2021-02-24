import types from "./types"
let initState=null
if(JSON.parse(localStorage.getItem("user")))
    initState={logs:JSON.parse(localStorage.getItem("user")).logs}
else
    initState={logs:[]}
function Reducer(state=initState,action) {
    switch (action.type) {
        case types.ADDLOG:{
            debugger
            state.logs.push(action.toAdd);
            return JSON.parse(JSON.stringify(state))
        }
        default:
            return JSON.parse(JSON.stringify(state))
    }
}
export default Reducer