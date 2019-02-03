var express = require ('express');
var exphbs = require ('express-handlebars');
var app = express();
var methodOverride = require('method-override');


var path = require('path');
//add bodyParser for use of GET & POST
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use(methodOverride('_method'));


const knex= require('./db/knex');

app.set('port', process.env.PORT || 3000);

app.engine('handlebars', exphbs({defaultLayout:
                                 'main'}));
app.set('view engine','handlebars');
//** REQUERIMIENTOS DE ARCHIVOS ROUTES **
var front = require('./routes/front');
var admin = require('./routes/backend');
var users= require('./routes/tablausuario.js');
var imagenes= require('./routes/tablaimagenes.js');
var partida= require('./routes/tablapartida.js');
var credenciales= require('./routes/tablacredenciales.js');

//**ENRUTAMIENTO**

app.use('/',front);

app.use('/admin/usuarios', users);
app.use('/admin/imagenes', imagenes);
app.use('/admin/credenciales', credenciales);
app.use('/admin/partidas', partida);

app.use('/admin',admin);




        app.listen(app.get('port'), function(){
            console.log('Express on localhost:' +
                        app.get('port'));
        });





//ARCHIVOS ESTÁTICOS
app.use(express.static(__dirname + '/public'));
