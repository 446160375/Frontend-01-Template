function convertNumberToString(number, x) {
    var integer = Math.floor(number);
    var fraction = number - integer;
    var string = '';
    while (integer > 0) {
        string = String(integer % x) + string;
        integer = Math.floor(integer / x);
    };
    return string;
};

convertNumberToString(100, 10);