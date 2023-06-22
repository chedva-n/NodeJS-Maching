const express = require('express');
const logger = require('./middlewares/logger');
const groups = require('./routes/groups');
const donates = require('./routes/donates')
const maching = require('./routes/maching')
const donations =require('./routes/donations')
const app = express();
const port = process.env.PORT || 8080; 

app.use(logger('start'));
app.use(express.json());

app.use('/api/donations',donations);
app.use('/api/donates',donates);
app.use('/api/groups',groups);
app.use('/api/machings',maching);

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('opsssss, Apologizes for the mistake and promises to repent')
})

app.listen(port, () => {
    console.log(`I am up in http://127.0.0.1:${port}`);
})
