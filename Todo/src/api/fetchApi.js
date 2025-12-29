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

export const obtainTodo=(id,header)=>{
    return commonApi(`http://127.0.0.1:8000/todo/${id}/`,"GET","",header)
}

export const updateTodo=(id,header,data)=>{
    return commonApi(`http://127.0.0.1:8000/todo/${id}/`,"PUT",data,header)
}

