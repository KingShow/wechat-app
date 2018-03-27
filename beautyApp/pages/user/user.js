var app = getApp();
Page({
    data: {
        list:[{
            text: '优惠卷',
            route: '',
        }, {
            text: '我的积分',
            route: '',
        }, {
            text: '我的余额',
            route: '',
        }],
        userInfo: {},
    },
    onLoad: function() {
        var that = this;
        app.getUserInfo(function(userInfo){
          that.setData({
            userInfo:userInfo
          })
        });
    },
    onShow: function() {
        
    }
});