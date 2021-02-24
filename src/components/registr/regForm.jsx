import "../../App.css"
import Line from "../chooseLine"
function RegForm(props) {
    return(
        <form onSubmit={props.Formik.handleSubmit}>
        <Line setFlag={props.setFlag}/>
        <label htmlFor="name" ><h1>Name</h1> 
        <input type="name" id="name" {...props.Formik.getFieldProps("name")}/>
        {props.Formik.touched.name && props.Formik.errors.name &&<div className="ErrorMessage">{props.Formik.errors.name}</div>}
        </label>
        <label htmlFor="age" ><h1>Age</h1>
        <input type="text" id="age" {...props.Formik.getFieldProps("age")} maxLength={2}/>
        {props.Formik.touched.age && props.Formik.errors.age &&<div className="ErrorMessage">{props.Formik.errors.age}</div>}
        </label>
        <label htmlFor="email" ><h1>Email</h1>
        <input type="email" id="email" {...props.Formik.getFieldProps("email")}/>
        {props.Formik.touched.email && props.Formik.errors.email &&<div className="ErrorMessage">{props.Formik.errors.email}</div>}
        </label>
        <label htmlFor="password" ><h1>Password</h1>
        <input type="password" id="password" {...props.Formik.getFieldProps("password")}/>
        {props.Formik.touched.password && props.Formik.errors.password &&<div className="ErrorMessage">{props.Formik.errors.password}</div>}
        </label>
        <button type="submit" className="MainFormButton">Sign Up</button>
      </form>
    )
}
export default RegForm