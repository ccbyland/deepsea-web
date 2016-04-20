var travelRouter = require('./travelRouter.js');

module.exports = function(app){

	app.get('/', function(req, res){
        res.render('main');
    });

    app.get('/index', function(req, res){
        res.render('main');
    });

    app.get('/talk', function(req, res){
        res.render('main');
    });

    app.get('/raiders', function(req, res){
        res.render('main');
    });

    app.get('/travel', function(req, res){
        res.render('main');
    });

    app.get('/information', function(req, res){
        res.render('main');
    });

    travelRouter(app);
}