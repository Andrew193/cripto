import s from "../../styles/Profile/style.module.css"

function List(props) {
    console.log(props.names);
    console.log(props.values);
    let items=props.names.map((value,index)=>{
        return <li key={index}>{value}: {props.values[index]}</li>
    })
    return(
        <ul className={s.Criptos}>{items}</ul>
    )
}
export default List;