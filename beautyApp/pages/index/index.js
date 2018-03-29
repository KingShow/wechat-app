//index.js
var app = getApp();
Page({
  data: {
    dishsList: [],
    menusList: [],
    menuActive: 0,
  },
  //事件处理函数
  menuClick: function(event) {
    this.setData({
      menuActive: event.currentTarget.dataset.index,
    })
  },
  detail: function(event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../detail/detail?id=${id}`
    });
  },
  onLoad: function () {
    this.setData({
      dishsList: app.globalData.dishsList,
      menusList: app.globalData.menusList,
    });
  }
})
