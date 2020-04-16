const buildResponse = (res, httpCode, data, message) => {
    return res.status(httpCode).json({
        status: httpCode,
        data,
        message
    });
};

const MyError = function myError(parameters) {
    this.message = parameters.message;
    this.status = parameters.status;
};

MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

module.exports = {
    buildResponse,
    MyError
}