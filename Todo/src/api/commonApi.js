import axios from 'axios'

const commonApi=(reqUrl,reqMethod,reqData,header)=>{
    const config={
        url:reqUrl,
        method:reqMethod,
        data:reqData,
        headers:header?header:{'Content-type':'application/json'}
    }
    
    return axios(config)
    
}
export default commonApi