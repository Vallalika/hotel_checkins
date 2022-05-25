const express = require('express');
const app = express();
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.listen(9000, function(){
console.log(`app listening on port ${this.address().port}`);
})
