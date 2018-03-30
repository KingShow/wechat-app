const {request} = require('./utils/request');

const getDishs = (callback) => request('POST', `/pzcatering-web/weix/syncDishes.do`, {
    type: 'dish_kind',
    shop_id: 4,
}, callback);
module.exports = {
    getDishs,
}