import axios from 'axios'

const commonApi=(reqUrl,reqMethod,reqData)=>{
    const config={
        url:reqUrl,
        method:reqMethod,
        data:reqData,
        headers:{'Content-type':'application/json'}
    }
    console.log(axios(config));
    
    return axios(config)
    
}
export default commonApi