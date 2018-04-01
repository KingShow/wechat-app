const {request, _request} = require('./utils/request');

const getDishs = (callback) => request('POST', `/pzcatering-web/weix/syncDishes.do`, {
    type: 'dish_kind',
    shop_id: 4,
}, callback);
const getData = () => _request('get', '/', {});
module.exports = {
    getDishs,
    getData
}