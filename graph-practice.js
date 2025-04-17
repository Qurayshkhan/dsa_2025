class Queue {
    constructor(size) {
        this.size = size;
        this.f = -1;
        this.r = -1;
        this.arr = new Array(this.size);
    }
}

const isEmpty = (q) => {
    return q.f === q.r;
};

const isFull = (q) => {
    return q.r === q.size - 1;
};

const enqueue = (q, value) => {
    if (isFull(q)) {
        console.log("Queue is full");
        return;
    }
    q.r++;
    q.arr[q.r] = value;
};

const dequeue = (q) => {
    if (isEmpty(q)) {
        console.log("Queue is empty");
        return null;
    }
    q.f++;
    return q.arr[q.f];
};

const q = new Queue(400);
let node;
let i = 0;
let visited = [0, 0, 0, 0, 0, 0, 0];
const a = [
    [0, 1, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
];


visited[i] = 1;
enqueue(q, i);
console.log(i);

while (!isEmpty(q)) {
    node = dequeue(q);
    for (let j = 0; j < a.length; j++) {
        if (a[node][j] === 1 && visited[j] === 0) {
            console.log(j);
            visited[j] = 1;
            enqueue(q, j);
        }
    }
}
