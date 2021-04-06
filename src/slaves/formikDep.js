import Valid from "./formValidator"
import Errors from "./errorMessages"
import {Creators} from "../redux/profileReducer"
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
      localStorage.setItem("user", JSON.stringify(Creators.generalInit(values)))
        dispatch(Creators.addCreator("ADD",300))
        dispatch(Creators.initCreator("INIT",values,values.password))
        LogInfo({ variables: { Name: values.name, Password: values.password, Age: +values.age } })
        notify()
        resetForm()
      }
}
export default obj;