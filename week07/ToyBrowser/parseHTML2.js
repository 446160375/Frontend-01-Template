// 初始化 FSM - Finite State Machine  有限状态机

// 标识文件已结束
const EOF = Symbol('EOF')

function data(char) {

}

module.exports.parseHTML = function parseHTML(html) {
    let state = data

    // for of 把String字符串 一个一个的循环出来
    for (let char of html) {
        state = state(c)
    }

    state = state(EOF)
}