function extractCurrencyValue(string, rate) {
    let value = Number(string.slice(1)) * rate;
    console.log(value);
}
