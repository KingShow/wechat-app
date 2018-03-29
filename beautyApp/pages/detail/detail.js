var app = getApp();
Page({
    data: {
        foodItem: '',
    },
    getDishData: function (key) {
        const data = app.globalData.dishsList;
        let dishItem = data.filter((item) => {
            return item.id === key;
        });
        return dishItem[0];
    },
    onLoad: function(option) {
        var index = option.id;
        let data = this.getDishData(index);
        this.setData({
            foodItem: data
        });
    },
});