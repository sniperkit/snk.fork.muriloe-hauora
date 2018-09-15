/*
Sniperkit-Bot
- Status: analyzed
*/

var mongoose =          require('mongoose');
var bodyParser =        require('body-parser');
let Cliente =           require("../../models/clienteModel");
var loginBusiness =     require("../../business/login/loginBusiness");
var jwt =               require('jwt-simple');
let jwtInfo =           require("../../config/jwt.json");

module.exports = function(app) {
    app.post('/api/cliente/login', function(req, res){
        console.log(req.body);
        loginBusiness.logar(req.body).then(function(response){
            res.header('jwt', [jwt.encode(response, jwtInfo.secret)]);
            res.end(JSON.stringify(response));
        }).catch(function(err){
            res.status(404).end(JSON.stringify(err));
        });
    });

    app.post('/api/nutricionista/login', function(req, res){
        console.log(req.body);
        loginBusiness.logarNutricionista(req.body).then(function(response){
            res.end(JSON.stringify(response));
        }).catch(function(err){
            res.status(404).end(JSON.stringify(err));
        });
    });

    app.delete('/api/auth/logout', function(req, res){
        console.log('logout');
        res.end('true');
    });


}