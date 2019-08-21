const express = require('express');
const cors = require('cors');
const connect = require('./config/db');

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



const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server started on port ${port}`))