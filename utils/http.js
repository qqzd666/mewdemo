import cookie from './cookie';
let headers = {
    'content-type': "application/json"
}

let https = {
    post(url, params){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                body:JSON.stringify(params),
                method:'POST',
                headers:{
                    ...headers,
                    'authorization': cookie.get('student_id')
                }
            }).then(res => res.json())
            .then(res => {
                resolve(res)
            })
            .catch(err =>{
                reject(err)
            })
        })
    },
    get(url, params){
        var param = '';
        if (params) {
            param = '?';
            Object.keys(params).forEach((item) => {
                param += item + '=' + params[item] + '&'
            })
            param = param.slice(0, param.length - 1)
        }
        return new Promise((resolve, reject) => {
            fetch(param + url, {
                headers: {
                    ...headers,
                    'authorization':cookie.get('student_id')
                }
            }).then(res => res.json())
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}

export default https; 