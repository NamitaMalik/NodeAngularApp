/**
 * Created by namita on 1/8/16.
 */

(function(require){
    var express = require('express');
    var app = express();
    app.use(express.static('public'));
    app.use(function(req,res,next){
        console.log(req.method,req.url,req.originalUrl);
        next();
    });
    app.get('/test/west',function(req,res){
        res.status(200).send("Good Morning");
    });
    app.delete('/',function(req,res){
        res.status(200).send("Delete Successfully");
    });

    var server = app.listen(3000,function(){
        console.log('Listening at port number ' + server.address().port)
    });

})(require);