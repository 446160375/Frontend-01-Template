# 每周总结可以写在这里

CSS选择器
* \*
* div svg|a



### 选择器优先级
* div#a.b .c[id=x]
* [0,1,3,1]
* #a:not(#b)
* [0,2,0,0]
* *.a
* [0,0,1,0]
* div.a
* [0,0,1,1]
* 总结：[ inline-element, id, class | pseudo | attr, type ] :not 伪类不参与计算