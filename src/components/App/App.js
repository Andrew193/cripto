import { useFormik } from 'formik';
import "../../App.css";
import FormikDep from "../../slaves/formikDep"
import Reg from "../registr/regForm"
import Log from "../registr/logForm"
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import MainContent from "../MainContent/MainContent"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
function App() {
  const [LogInfo] = useMutation(gql`
    mutation Loginfo($Name:String,$Password:String,$Age:Int) {
      loginfo(Name:$Name,Password:$Password,Age:$Age){
      status
    }
  }`),dispatch = useDispatch(),Formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      password: ""
    },
    validate:(values)=>FormikDep.f1Valid(values),
    onSubmit: (values, { resetForm }) => FormikDep.f1Submit(values,resetForm,dispatch,notify,LogInfo)
  }),Formik2 = useFormik({
    initialValues: {
      name: "",
      password: ""
    },
    validate:(values)=>FormikDep.f2Valid(values),
    onSubmit: (values, { resetForm }) => {notify("You have been registered !");resetForm();}
  }),[flag, setFlag] = useState((false)),
  login = useSelector(state => state.profile.login),
  notify = (message) => toast(message);

  return (
    <BrowserRouter>
      <div className="App">
        {!login && <div className="Modal"><div className="MainForm">
          {!flag ? <Reg Formik={Formik} setFlag={setFlag} /> : <Log Formik={Formik2} setFlag={setFlag} />}
        </div></div>}
        {login && <MainContent />}
        <ToastContainer toastStyle={{ background: "black", borderRadius: "15px" }} hideProgressBar={true} autoClose={2000} position="top-center" />
      </div>
    </BrowserRouter>
  );
}

export default App;
