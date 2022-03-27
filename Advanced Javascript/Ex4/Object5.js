function multiplyNumeric (obj, times) {
    for (let key in obj) {
        if (typeof obj[key] !== 'number') continue;
            obj[key] = obj[key] * times
    }
}
