//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
  },

  getUserInfo: function(cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo;
          typeof cb == "function" && cb(that.globalData.userInfo);
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    menusList: [{
      id: '001',
      name: '热菜',
    }, {
      id: '002',
      name: '凉菜',
    }],
    dishsList: [{
      id: '001',
      name: '小白菜',
      src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }, {
      id: '002',
      name: '甘蓝',
      src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }, {
      id: '003',
      name: '甘蓝',
      src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    },{
      id: '004',
      name: '小白菜',
      src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }, {
      id: '005',
      name: '甘蓝',
      src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }, {
      id: '006',
      name: '甘蓝',
      src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    },]
  }
})
