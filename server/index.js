const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/search', (req, res) => {
    res.send(JSON.stringify(require('../search.json')));
});



app.listen(port, console.log(`Server started at port ${port}`));