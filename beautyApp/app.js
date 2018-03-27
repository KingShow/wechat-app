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
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1131667667,3746694063&fm=200&gp=0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504183246772&di=0b4a6cf4ff38c051a1b56b6867ac1833&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dc66d6cc1871001e95a311c4cd0671199%2F3801213fb80e7bec314626c9252eb9389b506b7d.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1131667667,3746694063&fm=200&gp=0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504183246772&di=0b4a6cf4ff38c051a1b56b6867ac1833&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dc66d6cc1871001e95a311c4cd0671199%2F3801213fb80e7bec314626c9252eb9389b506b7d.jpg'
    ],
  }
})
