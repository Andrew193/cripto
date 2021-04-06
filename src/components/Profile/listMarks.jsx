import s from "../../styles/Profile/style.module.css"

function List(props) {
    return(
        <ul className={s.Criptos}>{props.names.map((value,index)=><li key={index}>{value}: {props.values[index]}</li>)}</ul>
    )
}
export default List;