const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://eliasgcf:mongo5713@omnistack9-alqtd.mongodb.net/omnistack9?retryWrites=true&w=majority',{
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

app.listen(3333,() => console.log("PORT SERVER: 3333"));