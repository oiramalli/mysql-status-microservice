const express = require('express');
const app = express();
const port = 80;


var DataBaseHandler = require("./DataBaseHandler");
var handler = new DataBaseHandler();

var connection = handler.createConnection();

app.get('/', (req, res) => {

    connection.query('SHOW TABLES', function (err, rows, fields) {
        if (err) {
            return res.json({ status: 'Error 01', detalles: { e, connectionData } })
        }
        console.log('Tablas: ', rows)
        return res.send({ status: 'Ok', detalles: rows })
    })
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})