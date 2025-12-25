import commonApi from "./commonApi";

export const userRegister=(data)=>{
    return commonApi("http://127.0.0.1:8000/user/","POST",data,"")
}
export const userLogin=(data)=>{
    return commonApi("http://127.0.0.1:8000/token","POST",data,"")
}

export const getTodo=(header)=>{
    return commonApi("http://127.0.0.1:8000/todo/","GET","",header)
}
export const createTodo=(header,data)=>{
    return commonApi("http://127.0.0.1:8000/todo/","POST",data,header)
}
export const deleteTodo=(header,id)=>{
    return commonApi(`http://127.0.0.1:8000/todo/${id}/`,"DELETE","",header)
}

