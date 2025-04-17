const a = [
    [0, 1, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
];
const visited = [0, 0, 0, 0, 0, 0, 0];
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
const BFS = (q, visited, a, i) => {
    let node;
    visited[i] = 1;
    enqueue(q, i);
    console.log(i);
    while (!isEmpty(q)) {
        node = dequeue(q, i);
        for (let j = 0; j <= a.length - 1; j++) {
            if (a[node][j] == 1 && visited[j] == 0) {
                console.log(j);
                visited[j] = 1;
                enqueue(q, j);
            }
        }
    }
}
const DFS = (visited, a, i) => {
    let j;
    visited[i] = 1;
    console.log(i);
    for (let j = 0; j <= a.length - 1; j++) {
        if (a[i][j] == 1 && !visited[j]) {
            DFS(visited, a, j);
        }
    }
}

const q = new Queue(400);
BFS(q, visited, a, 0);
DFS(visited, a, 0);
