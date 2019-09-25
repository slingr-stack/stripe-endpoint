endpoint.testing = function (msg) {

    sys.logs.info("> first test in stripe endpoint: " + msg);

    return {'status': 'ok'};
};
