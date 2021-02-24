import s from "../../styles/Profile/style.module.css"
function Ginfo(props) {
    return(props.values.map((value,index)=><div key={index}><span className={s.Pref}> {props.args[index]}</span> 
    <span className={s.Kpart}>{value}</span></div>))
}
export default Ginfo;