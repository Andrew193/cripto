function Line(props) {
    return(
        <div className="ChooseLine"><button className="ChooseButton" onClick={()=>props.setFlag(false)}>Sign in</button>
        <button className="ChooseButton" onClick={()=>props.setFlag(true)}>Sign Up</button></div>
    )
}
export default Line;