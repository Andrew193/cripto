import Valid from "./formValidator"
import Errors from "./errorMessages"
const obj={
    f1Valid:(values) => {
        let errors = {}
        if (Valid.validName(values.name)) errors.name = Errors.nameError
        if (Valid.validAge(values.age)) errors.age = Errors.ageError
        if (!Valid.validEmail(values.email)) errors.email = Errors.emailError
        if (!Valid.validPassword(values.password)) errors.password = Errors.passwordError
        return errors
      },
    f2Valid:(values) => {
        let errors = {}
        if (Valid.validName(values.name)) errors.name = Errors.nameError
        if (!Valid.validPassword(values.password)) errors.password = Errors.passwordError
        return errors
      },
    f1Submit:(values,resetForm,dispatch,notify,LogInfo) => {
        dispatch({ type: "ADD", toAdd: 300 })
        dispatch({ type: "INIT", Name: values.name, Email: values.email, Age: values.age, login: true })
        localStorage.setItem("user", JSON.stringify({
          Name: values.name, Email: values.email, Age: values.age, total: 300,
          login: true, Mark: 0, Dark: 0, Zark: 0, Infine: 0
        }))
        LogInfo({ variables: { Name: values.name, Password: values.password, Age: +values.age } })
        notify()
        resetForm()
      }
}
export default obj;