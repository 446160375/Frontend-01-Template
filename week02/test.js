// 写一个正则表达式 匹配所有 Number 直接量
var reg1 = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/;

// 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
var reg2 = /[^\"]+/;
var reg3 = /[\s\S]*/;
var reg4 = /[\d\D]*/;
var reg5 = /[\w\W]*/;

// 将字符串格式化为UTF8编码的字节
function utf8Encoding(str) {
     let result = ''
     for (let s of str) {
          result += `\\u${s.charCodeAt().toString(16)}`
     }
     return result
}

// 作业太难了 上网参考了答案，也看到了自己的短板，努力补下这块内容