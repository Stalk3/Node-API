const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());
// conectando db
mongoose.connect('mongodb://localhost:27017/nodeapi',
 { useNewUrlParser: true },
 );

require('./models/Product');


app.use('/api', require("./routes"))


app.listen(3001);