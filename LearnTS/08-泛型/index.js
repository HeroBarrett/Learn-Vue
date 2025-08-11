function logData(data1, data2) {
    return Date.now() % 2 ? data1 : data2;
}
logData(100, true);
logData('hello', 666);
