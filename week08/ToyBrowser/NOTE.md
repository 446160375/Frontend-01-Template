# 修改的内容 在computeCSS8.js 中

### 代码 match函数
   ``` javascript
    function match(element, selector) {
    if (!selector || !element.attributes)
        return false

    let regClass = /(\.\w+)+/g
    let resClass = selector.match(regClass)

    let regId = /(#\w+)+/g
    let resId = selector.match(regId)

    if (resClass) {
        let resClassArr = []
        for (let i = 0; i < resClass.length; i++) {
            let tempArr = resClass[i].split('.')
            for (let j = 1; j < tempArr.length; j++) {
                resClassArr.push(tempArr[j])
            }
        }
        let classAttr = element.attributes.filter(attr => attr.name === "class")
        let classAttrRes = []
        // classAttr:  [ { name: 'class', value: 'c2 c3' } ]
        if (classAttr && classAttr[0]) {
            classAttrRes = classAttr[0]["value"].split(" ")
        }
        let tempFlag = null
        for (let i = 0; i < resClassArr.length; i++) {
            tempFlag = false
            let k = 0
            for (; k < classAttrRes.length; k++) {
                if (classAttrRes[k] === resClassArr[i]) {
                    tempFlag = true
                    break
                }
            }
            if (!tempFlag && k === classAttrRes.length) {
                return false;
            }
        }
    }

    if (resId && resId[0].charAt(0) == "#") { // id选择器有标识符#，因此可以出现在任意位置，需要用正则去匹配
        const attr = element.attributes.filter(attr => attr.name === "id")[0]
        if (attr && attr.value === resId[0].replace("#", '')) {
            return true
        } else {
            return false
        }
    } else if (selector.charAt(0) !== "#" && selector.charAt(0) !== ".") { // 只需要判断选择器开头是不是 非 id 选择器标识符 # 或者 class 选择器标识符 .
        if (element.tagName === selector) {
            return true
        } else {
            return false
        }
    } else if (resClass && resClass.length) {
        return true
    }
    return false
};

   ```

   ### 代码 specificity函数
   ``` javascript
    function specificity(selector) {
        const p = [0, 0, 0, 0]
        const selectorParts = selector.split(" ")
        let regClass = /(\.\w+)+/g
        let resClass = selector.match(regClass)
        if (resClass && resClass.length) {
            for (let i = 0; i < resClass.length; i++) {
                let tempArr = resClass[i].split('.')
                for (let j = 1; j < tempArr.length; j++) {
                    p[2]++
                }
            }
        }
        for (let part of selectorParts) {
        
            let regId = /(#\w+)+/g
            let resId = part.match(regId)
            if (resId && resId[0].charAt(0) == "#") {
                p[1] += 1
            } else if (part.charAt(0) !== "#" && part.charAt(0) !== ".") {
                p[3] += 1
            }
        }
        console.log('selector', selector)
        console.log('p', p)
        return p
}

测试用例：

`<html maaa=a >
        <head>
          <style>
            #container{
              width:500px;
              height:300px;
              display:flex;
              background-color:rgb(255,255,255);
            }
            #container #myid{
                width:200px;
                height:100px;
                background-color:rgb(255,0,0)
            }
            #container .c1{
                flex:1;
                background-color:rgb(0,255,0)
            }
            #container.wrapper .c3.c2{
                width:200px;
                height:100px;
                background-color:rgb(0,0,255)
            }
        </style>
        </head>
        <body>
          <div id="container" class="wrapper">
            <div id="myid" class="c2 c3"></div>
            <div class="c1"></div>
          </div>
        </body>
    </html>`

输出结果：
selector #container
p [ 0, 1, 0, 0 ]
selector #container #myid
p [ 0, 2, 0, 0 ]
selector #container.wrapper .c3.c2
p [ 0, 1, 3, 0 ]
selector #container .c1
p [ 0, 1, 1, 0 ]
   ```