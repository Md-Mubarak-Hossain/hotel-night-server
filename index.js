const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 5000;


app.get('/', (req, res) => {
    res.send('hotel server is running now')
})

app.listen(port, (req, res) => {
    console.log('The port number of hotel server is', port);
})