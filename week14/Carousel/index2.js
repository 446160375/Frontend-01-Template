function createElement(Cls, attributes, ...children) {
    let o = new Cls({ timer: {} });

    for (let name in attributes) {
        o.setAttribute(name, attributes[name]);
    }

    for (let child of children) {
        o.appendChild(child);
    }

    return o;
}

class MyComponent {
    constructor(config) {
        this.children = [];
        this.root = document.createElement('div');
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }

    appendChild(child) {
        this.children.push(child);
    }

    render() { }

    mount(parent) {
        parent.appendChild(this.root);

        for (let child of this.children) {
            child.mount(this.root);
        }
    }
}


let component = <MyComponent id="a" style="width: 100px; height: 100px; background-color: pink;">

</MyComponent>

component.mount(document.body);