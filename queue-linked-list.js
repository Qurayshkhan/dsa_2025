class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.rear = null;
        this.front = null;
        this.size = 0;
    }
    enqueue(value) {
        let newNode = new Node(value);
        if (!this.front) {
            this.front = newNode;
        } else {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        this.size++;
    }
    dequeue() {
        if (!this.front) {
            return null;
        }
        const remove = this.front;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        this.size--;
        return remove.data;
    }
    peek() {
        return this.front ? this.front.data : null;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
