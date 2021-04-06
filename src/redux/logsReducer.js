import types from "./types"
let initState={logs:[]}
const user=JSON.parse(localStorage.getItem("user"));
user && (initState={logs:user.logs})

function Reducer(state=initState,action) {
    switch (action.type) {
        case types.ADDLOG:{
            state.logs.push(action.toAdd);
            return JSON.parse(JSON.stringify(state))
        }
        default:
            return JSON.parse(JSON.stringify(state))
    }
}
export default Reducer