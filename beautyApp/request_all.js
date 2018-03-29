const {request} = require('./utils/request');

const getDishs = (callback) => request('GET', ``, {}, callback);

module.exports = {
    getDishs,
}