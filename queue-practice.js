class Queue {
    constructor(size) {
        this.size = size;
        this.f = -1;
        this.r = -1;
        this.arr = new Array(size);
    }
    isFull() {
        if (this.r == this.size - 1) {
            return 1;
        }
        return 0;
    }
    isEmpty() {
        if (this.f === this.r) {
            return 1;
        }
        return 0;
    }
    enqueue(value) {
        if (this.isFull()) {
            console.log("Queue is full");
            return;
        } else {
            this.r++;
            this.arr[this.r] = value;
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        } else {
            this.f++;
            return this.arr[this.f];
        }
    }
}

const q = new Queue(100);
q.enqueue(10);
q.enqueue(15);
q.enqueue(20);
q.enqueue(25);
q.enqueue(30);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

console.log(q.arr);


