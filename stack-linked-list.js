class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null; // now the top is like a head;
    }

    isEmpty = () => {
        return this.top === null;
    }

    push = (data) => {
        let newNode = new Node(data);
        if (!newNode) {
            console.log("Stack underflow");
            return;
        }
        newNode.next = this.top;
        this.top = newNode;
    }

    pop = () => {
        let temp = this.top;
        this.top = this.top.next;
        temp = null;
    }

    peek = () => {
        if (!this.isEmpty())
            return this.top.data;
        else {
            console.log("\nStack is empty");
            return Number.MIN_VALUE;
        }
    }
}
const stack = new Stack();
stack.push(11);
stack.push(22);
stack.push(33);
stack.push(44);
console.log("Top element is " + stack.peek());
console.log("Removing two elements...");
stack.pop();
stack.pop();
console.log("Top element is " + stack.peek());


