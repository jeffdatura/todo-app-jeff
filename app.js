const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jeff:password666@todoapp.oglzunl.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connecté à la base de données.');
});

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.set('view engine', 'pug');

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur port ${port}`));
