const {DEVURL} = require('./app.config');

const request = function (method, url, data = {}, success, fail) {
    wx.request({
        method,
        url: `${DEVURL + url}`,
        data: data,
        header: {
            'Content-Type': 'multipart/form-data' // 默认值
        },
        success: function(res) {
            //成功回调
            if (typeof success === 'function') {
                success(res.data);
            }
        },
        fail: function (err) {
            console.log(err);
        },
        complete: function (res) {
        }
    })
}
const _request = function (method, url, data = {}) {
    return new Promise((resolve, reject) => {
        wx.request({
            method,
            url: `${DEVURL + url}`,
            data: data,
            header: {
                'Content-Type': 'multipart/form-data' // 默认值
            },
            success: function(res) {
                //成功回调
                resolve(res.data);
            },
            fail: function (err) {
                reject(err);
            },
            complete: function (res) {
                console.log('complete', res);
            }
        })
    }) 
}
module.exports = {
    request,
    _request,
}