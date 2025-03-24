class Queue {
    constructor(size) {
        this.size = size;
        this.r = -1;
        this.f = -1;
        this.arr = new Array(size - 1);
    }
    isFull() {
        if (this.r == this.size) {
            return 1;
        } else {
            return 0;
        }
    }
    isEmpty() {
        if (this.f == this.r) {
            return 1;
        } else {
            return 0;
        }
    }
    enqueue(value) {
        if (this.isFull()) {
            console.log("Queue is Full");
            return;
        } else {
            this.r++;
            return this.arr[this.r] = value;
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        } else {
            this.f++;
            return this.arr[this.f];

        }
    }

}

const q = new Queue(5);
q.enqueue(10);
q.enqueue(5);
q.enqueue(8);
q.enqueue(9.3);
q.enqueue(11);
q.enqueue(12);

q.dequeue();
q.dequeue();

console.log(q);



