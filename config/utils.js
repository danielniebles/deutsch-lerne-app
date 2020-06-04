const buildResponse = (res, httpCode, data, message) => {
    return res.status(httpCode).json({
        status: httpCode,
        data,
        message
    });
};

const getRandom = (arr, n) => {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

const mergeRandomPropFromArray = (arrprop, arr ) => {
    const result = []
    arr.forEach((elm) => {
        const prop = arrprop [Math.floor(Math.random() * arrprop.length)];
        const dummyVar = Object.assign(elm, {id:prop})
        result.push(dummyVar)
    })
    return result
}

const shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    return array
}

const MyError = function myError(parameters) {
    this.message = parameters.message;
    this.status = parameters.status;
};

MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

module.exports = {
    buildResponse,
    getRandom,
    mergeRandomPropFromArray,
    shuffle,
    MyError
}