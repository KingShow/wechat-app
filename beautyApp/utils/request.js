const {DEVURL} = require('./app.config');

module.exports = function (method, url, data = {}, success, fail) {
    wx.request({
        url: `${DEVURL + url}`, //仅为示例，并非真实的接口地址
        data: data,
        header: {
            'content-type': 'application/json' // 默认值
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
        complete: function () {

        }
    })
}