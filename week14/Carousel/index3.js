function createElement(Cls, attributes, ...children) {
    let o;

    if (typeof Cls === 'string') {
        o = new Wrapper(Cls);
    } else {
        o = new Cls({
            timer: {}
        });
    };

    for (let name in attributes) {
        o.setAttribute(name, attributes[name]);
    }

    for (let child of children) {
        if (typeof child === 'string') {
            child = new Text(child);
        }
        o.appendChild(child);
    }
    console.log('o', o)
    return o;
};

class Text {
    constructor(text) {
        this.children = [];
        this.root = document.createTextNode(text);
    }

    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

class Wrapper {
    constructor(type) {
        this.children = [];
        this.root = document.createElement(type);
    }

    setAttribute(name, value) { // attribute
        this.root.setAttribute(name, value);
    }

    appendChild(child) {
        this.children.push(child);
    }

    mountTo(parent) {
        parent.appendChild(this.root);

        for (let child of this.children) {
            child.mountTo(this.root);
        }
    }
}

class MyComponent {
    constructor(config) {
        this.children = [];
        this.attributes = new Map();
        this.properties = new Map();
    }

    setAttribute(name, value) { // attribute
        // this.root.setAttribute(name,value);
        this.attributes.set(name, value);
    }

    appendChild(child) {
        this.children.push(child);
    }

    set title(value) {
        this.properties.set('title', value);
    }

    render() {
        // debugger;
        return <article>
            <h1>{this.attributes.get('title')}</h1>
            <h1>{this.attributes.get('title')}</h1>
            <header>I'm a header</header>
            {this.slot}
            <footer>I'm a footer</footer>
        </article>

        // 对应转化后的
        // createElement(
        //     "article", 
        //     null, 
        //     createElement("h1", null, this.attributes.get('title')), 
        //     createElement("h1", null, this.attributes.get('title')), 
        //     createElement("header", null, "I'm a header"), 
        //     this.slot, 
        //     createElement("footer", null, "I'm a footer")
        // );
    }

    mountTo(parent) {
        // debugger;
        this.slot = <div></div>
        for (let child of this.children) {
            this.slot.appendChild(child)
        }
        this.render().mountTo(parent)
    }
}
// debugger;
let component = <MyComponent title="hhhh">
    <div>text text text</div>
</MyComponent>

component.title = 'hehehe';

component.mountTo(document.body);