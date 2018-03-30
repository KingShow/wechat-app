# wechat-app
## 生命周期
> 小程序全局有App,Page内置的全局变量，用于注册小程序以及注册页面

### App实例生命周期
>App() 函数用来注册一个小程序。接受一个 object 参数，其指定小程序的生命周期函数等。
>全局的 getApp() 函数可以用来获取到小程序实例。
>App() 必须在 app.js 中注册，且不能注册多个。
>通过 getApp() 获取实例之后，不要私自调用生命周期函数。
```  
App({
  onLaunch: function(options) {
    // Do something initial when launch.
    //初始化完成触发，只触发一次
    //不要在 onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。
  },
  onShow: function(options) {
      // Do something when show.
      //当小程序启动，或从后台进入前台显示，会触发 onShow
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
