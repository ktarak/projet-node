"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
class Server {
    constructor(port) {
        this.port = port;
    }
    star() {
        const app = express();
        app.get('/', function (req, res) {
            res.send('hello word');
        });
        app.listen(this.port, function () {
            console.log('serveur démarrer');
        });
    }
}
exports.default = Server;
