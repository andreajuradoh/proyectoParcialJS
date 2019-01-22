var express = require ('express');
var exphbs = require ('express-handlebars');
var app = express();

const knex= require('./db/knex');

app.set('port', process.env.PORT || 3000);

app.engine('handlebars', exphbs({defaultLayout:
                                 'main'}));
app.set('view engine','handlebars');

var front = require('./routes/front.js');
//ENRUTAMIENTO

app.use('/', front);

        app.listen(app.get('port'), function(){
            console.log('Express on localhost:' + 
                        app.get('port'));
        });





//ARCHIVOS ESTÁTICOS
app.use(express.static(__dirname + '/public'));
