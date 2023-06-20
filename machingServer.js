const express = require('express');
// require('dotenv').config();

const logger = require('./middlewares/logger');
const groups = require('./routes/groups');
const donates = require('./routes/donates')
const maching = require('./routes/maching')
const donations =require('./routes/donations')
const app = express();
const port = process.env.PORT || 4000; 

app.use(logger('start'));
app.use(express.json());//the middleware will ensure that all body is loaded (mostly for POST request)


app.use('/api/donations',donations);
app.use('/api/donates',donates);
app.use('/api/groups',groups);
app.use('/api/maching',maching);
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})



//app.use(logger('end'));

app.listen(port, () => {
    console.log(`I am up in http://127.0.0.1:${port}`);
})
