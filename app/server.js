'use strict';

var restify = require('restify')
var Logger = require('bunyan'),
    log = new Logger.createLogger({
        name: 'hello-node',
        serializers: {
            req: Logger.stdSerializers.req
        }
    })

var server = restify.createServer({
        name: 'app-name',
        log: log
    });

server.pre(function (request, response, next) {
    request.log.info({ req: request }, 'REQUEST');
    next();
});

server.get('/', function (request, response, next) {
    response.send('Hello World!');
    next();
});

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});
