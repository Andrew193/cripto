import Ginfo from "./generalInfo"
import s from "../../styles/Profile/style.module.css"
import List from "./listMarks"
function CompInfo(props) {
    console.log(Object.values(props.MoneyInfo) +"rest");
    return(
        <div className={s.kInfo}>
        <h1>Контактная информация пользователя</h1>
        <div className={s.kItems}>
        <Ginfo args={["Имя: ","E-mail: ","Возраст: ","Чистыми: "]} values={[...Object.values(props.UserInfo).slice(0,3),
        Object.values(props.MoneyInfo).pop()]}/>
        <div onMouseOver={(e)=>{props.onmouseover(e,props.Notify)}} onMouseOut={()=>props.onmouseout(props.Notify)}><span className={s.Pref}>Псевдоним:</span>
        <span className={s.Kpart}>{props.UserInfo.Psevdonim || "Не задано"}</span></div>
        <div><span className={s.Pref}>В обороте:</span> <span className={s.Kpart}><List values={Object.values(props.MoneyInfo).slice(1)}
         names={Object.keys(props.MoneyInfo).slice(1)}/></span></div>
        </div>
    </div>
    )
}
export default CompInfo;