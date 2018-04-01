exports.setRequestUrl = function (app) {
    const proxyMiddleWare = require('http-proxy-middleware');
    const {devProxy} = require('./app.config');
    const options = {
        target: devProxy,
        changeOrigoin:true
    };
    //app.use('/pzcatering-web', proxyMiddleWare(options));
    //app.use(proxyMiddleWare('/pzcatering-web/weix/syncDishes.do', options));
    // app.post('/pzcatering-web/weix/syncDishes.do', function(req, res, next) {
    //     res.send(req.body);
    // })
    app.use('/', function (req, res, next) {
        res.send('hello');
    })
}