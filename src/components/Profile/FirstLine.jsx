import s from "../../styles/Profile/style.module.css"
import Script from "./script"
import CompInfo from "./CompInfo"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
function FL(props) {
    let Input=null;
    let [Notify,setNotify]=useState(null)
    useEffect(()=>{
        if(props.UserInfo.avatar)
        document.querySelector(`.${props.Ava}`).style.backgroundImage=props.UserInfo.avatar;
    })
    const dispatch=useDispatch();
    return(<>{!props.UserInfo.avatar?<div className={props.AvaStock+' '+s.Avatar} onClick={(e)=>Script.uploadFile(Input)}>
    <p>У вас нет аватара.<br></br>Выберите из ваших файлов.</p></div>:<div className={props.Ava} onClick={(e)=>Script.uploadFile(Input)} />}
    <input type="file"ref={el=>Input=el} onChange={e=>Script.setImg(e,props.Ava,dispatch)} style={{display:"none"}} />
    <div className={s.Tooltip} ref={el=>setNotify(el)}>Задать псевдоним</div>
    <CompInfo UserInfo={props.UserInfo} MoneyInfo={props.MoneyInfo} onmouseover={Script.onmouseover} onmouseout={Script.onmouseout}
    Notify={Notify}/>
    </>
    )
}
export default FL