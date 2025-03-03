class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }
    isEmpty() {
        return this.head === null;
    }
    push(value) {
        let newNode = new Node(value);
        if (!newNode) {
            console.log("Stack is full");
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    pop() {
        this.head = this.head.next;
    }
    peek() {
        if (!this.isEmpty()) {
            return this.head.data;
        } else {
            return Number.MIN_VALUE;
        }
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
