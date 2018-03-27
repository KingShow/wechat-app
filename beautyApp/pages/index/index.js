//index.js
var app = getApp();
Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    vertical: true,
    scrollTop: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  detail: function(event) {
    var id = event.currentTarget.id;
    wx.navigateTo({
      url: '../detail/detail?id='+id+''
    });
  },
  upper: function(e) {
    console.log('upper',e)
  },
  lower: function(e) {
    console.log('lower',e)
  },
  scroll: function(e) {
    console.log('scroll',e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  onLoad: function () {
    this.setData({
      imgUrls: app.globalData.imgUrls,
    });
  }
})
