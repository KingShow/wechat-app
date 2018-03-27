Page({
    data: {
        hook: 'all',
        type: [{
            id: 'all',
            name: '全部',
        }, {
            id: 'complete',
            name: '待评',
        }, {
            id: 'wait',
            name: '售后',
        }]
    },
    onLoad: function() {
        
    },
    onShow: function() {

    },
    changeHook: function(event) {
        this.setData({
            hook: event.currentTarget.id
        });
    },
});