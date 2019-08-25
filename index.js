const express = require('express');
const cors = require('cors');
const connect = require('./config/db');
const serveStatic = require('serve-static');
const path = require('path')

const app = express();
//connect database
connect();

//middleware
app.use(express.json({ extended: false }));
app.use(cors());

//routes
app.get('/', (req, res) => {
    res.json({ msg: 'home page' })
});
app.use('/users', require('./routes/users'));
app.use('/recipes', require('./routes/recipes'));


//handle when we are in the production environment
if (process.env.NODE_ENV === 'production') {

    //use static public folder for frontend
    app.use(express.static(__dirname + '/public/'));

    // handle spa
    app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'));
}


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server started on port ${port}`))