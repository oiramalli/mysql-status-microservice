/**
 * Created by Carlos Leonardo Camilo Vargas HUuamán on 11/20/16.
 */

var mysql = require("mysql");

function DataBaseHandler() {
    this.connection = null;
}

DataBaseHandler.prototype.createConnection = function () {
    var connectionData = {
        host: process.env.MYSQL_HOST ? process.env.MYSQL_HOST : 'database',
        port: process.env.MYSQL_PORT ? process.env.MYSQL_PORT : '3306',
        user: process.env.MYSQL_USER ? process.env.MYSQL_USER : 'usuario',
        password: process.env.MYSQL_PASSWORD ? process.env.MYSQL_PASSWORD : 'pass_usuario',
        database: process.env.MYSQL_DATABASE ? process.env.MYSQL_DATABASE : 'test'
    };
    this.connection = mysql.createConnection(connectionData);

    this.connection.connect(function (err) {
        if (err) {
            console.error("error connecting " + err.stack);
            return null;
        }
        console.log("connected as id " + this.threadId);
    });
    return this.connection;
};

module.exports = DataBaseHandler;