// function convertNumberToString(number, x) {
//     var integer = Math.floor(number);
//     var fraction = number - integer;
//     var string = '';
//     while (integer > 0) {
//         string = String(integer % x) + string;
//         integer = Math.floor(integer / x);
//     };
//     return string;
// };


function convertNumberToString(number, radix) {
    let integer = Math.floor(number);
    let fraction = String(number).match(/\.\d+$/);
    if (fraction) {
        fraction = fraction[0].replace('.', '');
    }
    let string = '';
    while (integer > 0) {
        string = String(integer % radix) + string;
        integer = Math.floor(integer / radix);
    }
    return fraction ? `${string}.${fraction}` : string;
}

convertNumberToString(100, 10);

// 作业参考了同学的代码，对转码不理解