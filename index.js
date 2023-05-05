const express = require('express');
const cors = require ('cors');
const phones = require('./phones.json')
const app = express()
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send("Welcome to Phone Server");
})

app.get('/phone', (req, res) => {
    res.send(phones)
})

app.get('/phone/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);

    const phone = phones.find(phone => phone.id == id) || {} ;
    res.send(phone);

})

app.listen(port, () => {
    console.log(`${port}`)
})