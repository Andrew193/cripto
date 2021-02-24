import s from "../../styles/Profile/style.module.css"
import List from "./listMarks"
import Script from "./script"
import Ginfo from "./generalInfo"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function FL(props) {
    let Input=null;
    let Notify=null;
    useEffect(()=>{
        if(props.UserInfo.avatar)
        document.querySelector(`.${props.Ava}`).style.backgroundImage=props.UserInfo.avatar;
    })
    const dispatch=useDispatch();
    return(<>{!props.UserInfo.avatar?<div className={props.AvaStock+' '+s.Avatar} onClick={(e)=>Script.uploadFile(Input)}>
        <p>У вас нет аватара.<br></br>Выберите из ваших файлов.</p></div>:<div className={props.Ava} />}
    <div className={s.kInfo}>
        <h1>Контактная информация пользователя</h1>
        <div className={s.kItems}>
        <Ginfo args={["Имя: ","E-mail: ","Возраст: ","Чистыми: "]} values={[...Object.values(props.UserInfo).slice(0,3),
        Object.values(props.MoneyInfo).shift()]}/>
        <div onMouseOver={(e)=>{Script.onmouseover(e,Notify)}} onMouseOut={()=>Script.onmouseout(Notify)}><span className={s.Pref}>Псевдоним:</span>
        <span className={s.Kpart}>{props.UserInfo.Psevdonim || "Не задано"}</span></div>
        <div><span className={s.Pref}>В обороте:</span> <span className={s.Kpart}><List values={Object.values(props.MoneyInfo).slice(1)}
         names={Object.keys(props.MoneyInfo).slice(1)}/></span></div>
        </div>
    </div>
    <input type="file"ref={el=>Input=el} onChange={e=>Script.setImg(e,props.Ava,dispatch)} style={{display:"none"}} />
    <div className={s.Tooltip} ref={el=>Notify=el}>Задать псевдоним</div>
    </>
    )
}
export default FL