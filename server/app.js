const express = require('express')
const app = express();
const cors = require('cors');

const api_routes = require('./routes/api_routes');

const PORT = 3001;

app.use(cors());

app.use(express.json({limit: '100mb'}));

app.use(api_routes);


app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
});