import {getCookie} from "./utils"
let domin = "";
let headers = {
    'content-type': "application/json",
}
let http_port = {
    post(url, params) {
        return new Promise((resolve, reject) => {
            if(url === "/user/login") {
                fetch(domin + url, {
                    body: JSON.stringify(params),
                    method: "POST",
                    headers: {
                        ...headers
                    }
                }).then(res => res.json())
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
            }else {
                fetch(domin + url, {
                    body: JSON.stringify(params),
                    method: "POST",
                    headers: {
                       ...headers,
                       'authorization': getCookie('user_token')
                    }
                }).then(res => res.json())
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
            }
        })
    },
    get(url, params) {
        let param = "?";
        if(params) {
            Object.keys(params).forEach((item) => {
                param += item + '=' + params[item] + '&'
            })
            param = param.slice(0, param.length - 1);
            console.log(param,456789)
        }
        return new Promise((resolve, reject) => {
            fetch(url + param, {
                headers: {
                    'authorization': getCookie('user_token')
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
export default http_port;
