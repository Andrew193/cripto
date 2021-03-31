import { gql, useQuery } from "@apollo/client";
import { useSelector} from "react-redux";
import { withRouter } from "react-router";
import s from "../../styles/Profile/style.module.css"
import FirstLine from "./FirstLine"
function Profile(props) {
    const UserInfo=useSelector(state=>state.profile),
    { loading, error, data } = useQuery(gql`{
        data : getMoney(owner:"Андрей Самсунг",password:"Sadovinskiy@gmail.com2"){
          Zark
          Mark
          Dark
          Infine
          total
        }
      }
    `)
    console.log(props);
    return(
        <div className={s.Body}>
            {loading &&<div>Loading</div>}
            {!loading &&<div className={s.FirstLine}>
              <FirstLine UserInfo={{...UserInfo}} MoneyInfo={data.data} AvaStock={s.AvatarStock} Ava={s.Ava}/>
            </div>}
        </div>
    )
}
export default withRouter(Profile);