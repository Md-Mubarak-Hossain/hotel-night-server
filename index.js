const express = require('express');
const app = express();
const details = require('./hotel.json')
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('hotel server is running now')
})

app.get('/details', (req, res) => {
    res.send(details);
})
app.get('/detail/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const detail = details.find(d => d.id === id)
    res.send(detail);
})

app.listen(port, (req, res) => {
    console.log('The port number of hotel server is', port);
})