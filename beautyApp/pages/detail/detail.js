var app = getApp();
Page({
    data: {
        foodItem: '',
    },
    onLoad: function(option) {
        var index = option.id.substr(4);
        this.setData({
            foodItem: app.globalData.imgUrls[index]
        });
    },
});