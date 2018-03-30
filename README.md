# wechat-app
## 生命周期
> 小程序全局有App,Page内置的全局变量，用于注册小程序以及注册页面

### App实例生命周期
* App() 函数用来注册一个小程序。接受一个 object 参数，其指定小程序的生命周期函数等。
* 全局的 getApp() 函数可以用来获取到小程序实例。
* App() 必须在 app.js 中注册，且不能注册多个。
* 通过 getApp() 获取实例之后，不要私自调用生命周期函数。
```  
App({
  onLaunch: function(options) {
    // Do something initial when launch.
    //初始化完成触发，只触发一次
    //不要在 onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。
  },
  onShow: function(options) {
      // Do something when show.
      //当小程序启动，或从后台进入前台显示，会触发 onShow,多次调用
  },
  onHide: function() {
      // Do something when hide.
      //当小程序从前台进入后台，会触发 onHide
  },
  onError: function(msg) {
    console.log(msg)
    //当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  },
  globalData: 'I am global data'
})
```

### Page实例生命周期
``` 
Page({
  data: {
    text: "This is page data."
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    //一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。
  },
  onReady: function() {
    // Do something when page ready.
    //一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
  },
  onShow: function() {
    // Do something when page show.
    //每次打开页面都会调用一次
  },
  onHide: function() {
    // Do something when page hide.
    //当navigateTo或底部tab切换时调用。
  },
  onUnload: function() {
    // Do something when page close.
    //当redirectTo或navigateBack的时候调用。
  },
  //页面相关事件处理函数
  onPullDownRefresh: function() {
    // Do something when pull down.
    //监听用户下拉刷新事件。
    //需要在app.json的window选项中或页面配置中开启enablePullDownRefresh。
    //当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
    //监听用户上拉触底事件。
    //可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance。
    //在触发距离内滑动期间，本事件只会被触发一次。
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
   //用户转发
   //只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
   //用户点击转发按钮的时候会调用
   //此事件需要 return 一个 Object，用于自定义转发内容
   return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  onPageScroll: function() {
    // Do something when page scroll
    //监听用户滑动页面事件。
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
})

``` 

### 数据变化


