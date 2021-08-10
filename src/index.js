function minimaze(array) {
    if (typeof array !== "object" || array.length === 0) {
        return 0;
    } else {
        return Math.min(...array);
    }
}

minimaze();
exports.min = minimaze;

exports.max = function maximaze(array) {
    if (typeof array !== "object" || array.length === 0) {
        return 0;
    } else {
        return Math.max(...array);
    }
};

exports.avg = function avgergaze(array) {
    if (typeof array !== "object" || array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        let avg = sum / array.length;
        return avg;
    }
};
