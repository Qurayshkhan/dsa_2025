class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const createNode = (data) => {
    let node = new Node(data);
    return node;
}

const preOrderTraversal = (root) => {
    if (root != null) {
        console.log(" " + root.data);
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
    }
}

const postOrderTraversal = (root) => {
    if (root != null) {
        postOrderTraversal(root.left);
        postOrderTraversal(root.right);
        console.log(root.data);
    }
}

const inOrderTraversal = (root) => {
    if (root != null) {
        inOrderTraversal(root.left);
        console.log(root.data);
        inOrderTraversal(root.right);
    }
}

let p = createNode(5);
let p1 = createNode(3);
let p2 = createNode(6);
let p3 = createNode(1);
let p4 = createNode(4);

p.left = p1;
p.right = p2;
p1.left = p3;
p1.right = p4;

// preOrderTraversal(p);
// postOrderTraversal(p);
// inOrderTraversal(p);