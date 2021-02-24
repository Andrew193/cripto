import { useFormik } from 'formik';
import './App.css';
import Valid from "./slaves/formValidator"
import Errors from "./slaves/errorMessages"
import Reg from "./components/registr/regForm"
import Log from "./components/registr/logForm"
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import MainContent from "./components/MainContent"
import { useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch=useDispatch();
  const Formik=useFormik({
    initialValues:{
      name:"",
      age:"",
      email:"",
      password:""
    },
    validate:(values)=>{
      let errors={}
      if(Valid.validName(values.name)) errors.name=Errors.nameError
      if(Valid.validAge(values.age)) errors.age=Errors.ageError
      if(!Valid.validEmail(values.email)) errors.email=Errors.emailError
      if(!Valid.validPassword(values.password)) errors.password=Errors.passwordError
      return errors
    },
    onSubmit:(values,{ resetForm })=>{
      dispatch({type:"ADD",toAdd:300})
      dispatch({type:"INIT",Name:values.name,Email:values.email,Age:values.age,login:true})
      localStorage.setItem("user",JSON.stringify({Name:values.name,Email:values.email,Age:values.age,total:300,
        login:true,Mark:0,Dark:0,Zark:0,Infine:0}))
      fetch("/loginfo",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({Name:values.name,Password:values.password,Age:values.age})
      })
      fetch("/logmoney",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({Mark:0,Dark:0,Zark:0,Infine:0,owner:values.name,total:300})
      })
      notify()
      resetForm()
    }
  })
  const Formik2=useFormik({
    initialValues:{
      name:"",
      password:""
    },
    validate:(values)=>{
      let errors={}
      if(Valid.validName(values.name)) errors.name=Errors.nameError
      if(!Valid.validPassword(values.password)) errors.password=Errors.passwordError
      return errors
    },
    onSubmit:(values,{ resetForm })=>{
      notify()
      resetForm()
    }
  })
  const [flag,setFlag]=useState((false))
  const login=useSelector(state=>state.profile.login)
  const notify = () => toast("You have been registered !");
  
  return (
    <BrowserRouter>
    <div className="App">
      {!login &&<div className="Modal"><div className="MainForm">
        {!flag?<Reg Formik={Formik} setFlag={setFlag} />:<Log Formik={Formik2} setFlag={setFlag}/>}
      </div></div>}
      {login && <MainContent />}
      <ToastContainer toastStyle={{background:"black",borderRadius:"15px"}} hideProgressBar={true} autoClose={2000} position="top-center"/>
    </div>
    </BrowserRouter>
  );
}

export default App;
