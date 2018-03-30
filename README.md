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
> 数据驱动视图更新，在逻辑层修改数据，视图层响应数据更新,数据单向流动
* setData 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）
* 直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致
* 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
* 不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题。

``` 
Page({
  data: {
    text: 'init data',
  },
  changeText: function() {
    this.setData({
      text: 'changed data'
    })
  }
})
``` 
### 路由管理
> 小程序中所有页面的路由全部由框架进行管理。
* getCurrentPages() 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
* 不要尝试修改页面栈，会导致路由以及页面状态错误。
* navigateTo, redirectTo 只能打开非 tabBar 页面。
* switchTab 只能打开 tabBar 页面。
* reLaunch 可以打开任意页面。
* 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
* 调用页面路由带的参数可以在目标页面的onLoad中获取。
* 注意: 页面重定向（redirectTo）以及打开新页面（navigateTo），因为小程序限制了也页面栈最多只有5个元素，所以当你深度达到5个，再调用navigateTo想让新页面再入栈就会报错，所以官方建议是避免多层级的交互方式，或者使用wx.redirectTo

### 模块化
> require加载机制不同于nodejs，加了一些限制，比如不能用绝对路径，也不支持node_modules，所以如果要使用node_modules的内容需要手动拷贝到目录里
* 模块只有通过 module.exports 或者 exports 才能对外暴露接口。
* ES6转ES5使用import/export,小程序开发工具带有babel es6转es5设置，勾选即可
* 注意： module.exports和exports 的区别

### 组件
> 框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发,详见 [小程序文档-组件](https://developers.weixin.qq.com/miniprogram/dev/component/) 

### 模板
>  wxml通过template可以实现复用,通过is属性动态决定渲染哪个模版, 并且有自己的作用域，只能使用传入的data(这点跟组件很相似）
``` 
<!-- item.wxml -->
<template name="item">
  <text>{{text}}</text>
</template>

<!-- index.wxml -->
<import src="item.wxml"/>
<template is="item" data="{{text: 'forbar'}}"/>
``` 

### 自定义组件
### 微信小程序的开发结构
### 更好的调用接口
### 微信小程序开发问题
   1，性能优化
   2，前后端独立开发
   3，调试，iOS、Android 和 用于调试的开发者工具。
   4，上线




