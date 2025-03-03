class Queue {
    constructor(size) {
        this.size = size;
        this.f = -1;
        this.r = -1;
        this.arr = new Array(this.size);
    }
    isFull() {
        if (this.r === this.size - 1) {
            return 1;
        }
        return 0;
    }
    isEmpty() {
        if (this.r == this.f) {
            return 1;
        }
        return 0;
    }
    enqueue(val) {
        if (this.isFull()) {
            console.log("Queue is Full");
            return 0;
        } else {
            this.r++;
            this.arr[this.r] = val;
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            return "queue is empty";
        }
        this.f++;
        return this.arr[this.f];
    }
}
const q = new Queue(100);

q.enqueue(10);
q.enqueue(15);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.arr);

