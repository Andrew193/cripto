const validBatch={
    validAge:(age)=>{return Number.parseInt(age)<18},
    validEmail:(email)=>{
        const reg=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    },
    validName:(name)=>{return name===""},
    validPassword:(password)=>{
        const reg=/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
        return reg.test(password)
    }
}
export default validBatch;