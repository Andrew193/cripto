import { NavLink } from "react-router-dom";
import s from "../styles/Header/style.module.css"
function header() {
    return(
        <div className={s.NavBar}>
            <ul>
                <li><NavLink exact to="/profile" activeClassName={s.Active}>Profile</NavLink></li>
                <li><NavLink exact to="/exchange" activeClassName={s.Active}>Stock exchange</NavLink></li>
                <li><NavLink exact to="/logs" activeClassName={s.Active}>Logs</NavLink></li>
                <li><NavLink exact to="/" activeClassName={s.Active}>Home</NavLink></li>
            </ul>
        </div>
    )
}
export default header;