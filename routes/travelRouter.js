var dao = require('../daos/travelDao.js');

module.exports = function(app){

    // 游记列表
    app.post('/getTravelList', function(req, res){

        console.log('【游记列表getTravelList】===start');

        dao.prototype.getAll(function(err, data){

            console.log(err);
            console.log(data);

            if(err){
                return res.json({err : err});
            } else {
                res.json(data);
            }
        });
    });    
}