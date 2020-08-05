# 每周总结可以写在这里

## 组件化最后总结
* 通过对组件和jsx的学习 经过调试 理解了jsx的运行机制 
* render函数的作用是生成所描述节点的对象，里面包含子节点的对象、属性、样式等
  * 例如 div节点生成后 divObj{child:[childObj1,childObj2]...}
* mount函数的作用是把最后的父对象全转化成dom元素并且遍历子对象生成对应的dom元素
* 需要注意的是 当render函数中 修改或者添加子节点时 要把添加的子节点变成数组形式
  
```
 render() {
    this.childViews = this.children.map(child => <div style="min-height: 300px;">{child}<div>)
    this.titleViews = this.children.map((child, i) => {
        return (
            <span onClick={() => this.select(i)} style="padding: 5px 5px 0px 5px; font-size:24px; cursor: pointer;">
                {child.getAttribute('title') || ''}
            </span>
        )
    })
    setTimeout(() => {
        this.select(1)
    }, 16)
    return <div class="panel" style="border: 1px solid lightgreen; width: 300px;">
        <h1 style="background: lightgreen; margin: 0;">
            {this.titleViews}
        </h1>
        <div>
            {this.childViews}
        </div>
    </div>
}
```
* {this.titleViews} 是数组才能添加到 h1 元素对象的child属性里

## 命令行选择器 原理
 通过node 自带的 process.stdout 和 process.stdin 实现控制台的命令选择

 通过输出特定的字符，可以控制命令行中光标的位置或做一些特殊操作，比如
* '\033[1A' = 上移光标 
* '\033[1B' = 下移光标
* '\033[1C' = 右移光标
* '\033[1D' = 左移光标
* '\033[nK' = 清空n行
* '\033[n;mH' = 移动到n行m列

有了这些就可以像画图一样渲染命令行界面，当用户在选择时（按键），触发修改，然后重新渲染界面。 直到按下回车键或强行退出。