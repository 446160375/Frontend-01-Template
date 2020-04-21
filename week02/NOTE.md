# 每周总结可以写在这里

***
## 编程语言通识
***
* 非正式语言
  * 中文
  * 英文
* 形式语言（乔姆斯基谱系）（产生式 BNF）
  * 0型
    * 无限制文法 （?::=?）
  * 1型
    * 上下文相关文法（?\<A>?::=?\<B>）
  * 2型
    * 上下文无关文法 （\<A>::=?）
  * 3型
    * 正则文法
      * (\<A>::=\<A>?)
      * (\<A>::=?\<A>x)

***
js类型
***
- Number
    - 存储 Uint8Array、Float64Array
    - 各种进制的写法
    - 二进制0b
    - 八进制0o
    - 十进制0x
- String
    - Character
    - Code Point
    - Encoding
    - unicode编码 - utf
        - utf-8 可变长度 （控制位的用处）
- Boolean
- Null
- Undefind
- Symbol

***
## Atom Identifier & Literal
***
* WhiteSpace
  * \<TAB>：\t
  * \<VT>： \v
  * \<FF>：\f
  * \<SP>：\s
  * \<NBSP>：NO-BREAK SPACE
  * \<ZWNBSP>：ZERO WIDTH NO-BREAK SPACE
  * <USP>
* LineTerminator
  * \<LF>：\n
  * \<CR>：\r
  * \<LS>
  * <PS>
* Comment
  * // comment
  * /* comment */
* CommonToken
  * IdentifierName
  * Punctuator
  * Template
  * NumericLiteral
  * StringLiteral

***
### 图灵完备性
***
- 命令式——图灵机

- goto

- if和while

- 声明式——lambda

- 递归

***
### 动态与静态
*** 
- 动态

  - 在用户的设备/在线服务器上

  - 产品实际运行时

  - Runtime

- 静态

  - 在程序员的设备上

  - 产品开发时

  - Compiletime

***
## 一般命令式编程语言构成
***
* Atom
  * Identifier
  * Literal
* Expression
  * Atom
  * Operator
  * Punctuator
* Statement
  * Expression
  * Keyword
  * Punctuator
* Structure
  * Function
  * Class
  * Process
  * Namespace
* Program
  * Mould
  * Package
  * Library