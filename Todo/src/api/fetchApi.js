import commonApi from "./commonApi";

export const userRegister=(data)=>{
    return commonApi("http://127.0.0.1:8000/user/","POST",data)
}
export const userLogin=(data)=>{
    return commonApi("http://127.0.0.1:8000/token","POST",data)
}

