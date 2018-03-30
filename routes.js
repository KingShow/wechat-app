exports.setRequestUrl = function (app) {
    const proxyMiddleWare = require('http-proxy-middleware');
    const {devProxy} = require('./app.config');
    const options = {
        target: devProxy,
        changeOrigoin:true
    };
    app.use('/pzcatering-web', proxyMiddleWare(options));
}