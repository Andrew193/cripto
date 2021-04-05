import Header from "../header"
import Footer from "../footer"
import Profile from "../Profile/Profile"
import Exchange from "../Exchange"
import Logs from "../logs"
import Home from "../Home"
import s from "../../styles/MainContent/style.module.css"
import { Route } from "react-router"
function MainContent() {
    return(
        <div className={s.MainContent}>
            <Header />
            <Footer />
            <Route  path="/profile/:id?" render={()=><Profile/>}/>
            <Route exact path="/" render={()=><Home/>}/>
            <Route exact path="/exchange" render={()=><Exchange/>}/>
            <Route exact path="/logs" render={()=><Logs/>}/>
        </div>
    )
}
export default MainContent;