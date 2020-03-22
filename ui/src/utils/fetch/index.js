/**
 * 响应结果处理
 */
const responseHadding = function (resp){

}

export default async(opts) => {
    // opts.method = (opts.method).toUpperCase();
    if (opts.method == 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            opts.url = opts.url + '?' + dataStr;
        }
    }
    if (window.fetch && opts.type == 'fetch') {
        let requestConfig = {
            credentials: 'include',//为了在当前域名内自动发送 cookie ， 必须提供这个选项
            method: opts.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors",// 确定跨域请求是否导致有效的响应
            cache: "no-store",
        }
        if (opts.method == 'POST') {
            Object.defineProperty(requestConfig, 'body', {
                value: JSON.stringify(opts.data)
            })
        }
        try {
            const response = await fetch(opts.url, requestConfig);
            const responseJson = await response.json();
            return responseJson
        } catch (error) {
            throw new Error(error)
        }
    } else {
        return new Promise((resolve, reject) => {
            let requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
                requestObj = new ActiveXObject;
            }

            let sendData = '';
            if (opts.method == 'POST') {
                sendData = JSON.stringify(opts.data);
            }

            requestObj.open(opts.method, opts.url, true);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send(sendData);

            requestObj.onreadystatechange = () => {
                if (requestObj.readyState == 4) {
                    if (requestObj.status == 200) {
                        let obj = requestObj.response
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        resolve(obj)
                    } else {
                        reject(requestObj)
                    }
                }
            }
        })
    }
}