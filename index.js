var express = require ('express');
var exphbs = require ('express-handlebars');
var app = express();
var path = require('path');
//add bodyParser for use of GET & POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

//var routes= require('./routes/usuario');
var users= require('./routes/usuario.js');


const knex= require('./db/knex');

app.set('port', process.env.PORT || 3000);

app.engine('handlebars', exphbs({defaultLayout:
                                 'main'}));
app.set('view engine','handlebars');

var front = require('./routes/front');
var admin = require('./routes/backend');
var user = require('./routes/usuario');

//var instrucciones= require('./routes/instrucciones.js');
//var instrucciones = require('./front/instrucciones.js');
//ENRUTAMIENTO

app.use('/',front);
app.use('/admin',admin);
app.use('/admin/usuario',user);



        app.listen(app.get('port'), function(){
            console.log('Express on localhost:' +
                        app.get('port'));
        });





//ARCHIVOS ESTÁTICOS
app.use(express.static(__dirname + '/public'));
