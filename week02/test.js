// 写一个正则表达式 匹配所有 Number 直接量
var reg1 = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/;

// 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
var reg2 = /[^\"]+/;
var reg3 = /[\s\S]*/;
var reg4 = /[\d\D]*/;
var reg5 = /[\w\W]*/;

// 将字符串格式化为UTF8编码的字节
var writeUTF = function (str, isGetBytes) {
    var back = [];
    var byteSize = 0;
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (0x00 <= code && code <= 0x7f) {
              byteSize += 1;
              back.push(code);
        } else if (0x80 <= code && code <= 0x7ff) {
              byteSize += 2;
              back.push((192 | (31 & (code >> 6))));
              back.push((128 | (63 & code)))
        } else if ((0x800 <= code && code <= 0xd7ff) 
                || (0xe000 <= code && code <= 0xffff)) {
              byteSize += 3;
              back.push((224 | (15 & (code >> 12))));
              back.push((128 | (63 & (code >> 6))));
              back.push((128 | (63 & code)))
        }
     }
     for (i = 0; i < back.length; i++) {
          back[i] &= 0xff;
     }
     if (isGetBytes) {
          return back
     }
     if (byteSize <= 0xff) {
          return [0, byteSize].concat(back);
     } else {
          return [byteSize >> 8, byteSize & 0xff].concat(back);
      }
}

// 作业太难了 上网参考了答案，也看到了自己的短板，努力补下这块内容