

function withLofgProps(Component) {
    return function Container(props) {
        console.log(props);
        return <Component {...props}/>
    }
}
export default withLofgProps