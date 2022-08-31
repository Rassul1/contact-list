const mongoose = require('mongoose');

const connectionString = process.env.CONNECTION_STRING ||
"mongodb+srv://Rassul:kotakpas1@cluster0.obg1ht7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(value => console.log('Connected to database'))
    .catch(error => console.log('Error connecting to database: ', error));