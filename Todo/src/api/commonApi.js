import axios from 'axios'

const commonApi=(reqUrl,reqMethod,reqData)=>{
    const config={
        url:reqUrl,
        method:reqMethod,
        data:reqData,
        headers:{'content-type':'applicat/jeson'}
    }
    return axios(config)
    
}
export default commonApi