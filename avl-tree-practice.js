class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

const createNode = (key) => {
    const node = new Node(key);
    return node;
}

const max = (a, b) => {
    return a > b ? a : b;
}

const getHeight = (node) => {
    if (node == null) {
        return 0;
    }
    return node.height;
}

const getBalanceFactor = (node) => {
    if (node == null) {
        return 0;
    }
    return getHeight(node.left) - getHeight(node.right);
}

const rightRotate = (y) => {

    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = max(getHeight(y.right), getHeight(y.left)) + 1;
    x.height = max(getHeight(x.right), getHeight(x.left)) + 1;

    return x;
}


const leftRotate = (x) => {

    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = max(getHeight(x.right), getHeight(x.left)) + 1;
    y.height = max(getHeight(y.right), getHeight(y.left)) + 1;

    return y;
}

const insert = (node, key) => {
    if (node === null) {
        return createNode(key);
    }
    if (key < node.key) {
        node.left = insert(node.left, key);
    } else if (key > node.key) {
        node.right = insert(node.right, key);
    }
    node.height = max(getHeight(node.right), getHeight(node.left)) + 1;
    const balanceFactor = getBalanceFactor(node);
    if (balanceFactor > 1 && key < node.left.key) {
        return rightRotate(node);
    }
    if (balanceFactor < -1 && key > node.right.key) {
        return leftRotate(node);
    }
    if (balanceFactor > 1 && key > node.left.key) {
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }
    if (balanceFactor < -1 && key < node.right.key) {
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }
    return node;
}
const preOrder = (node) => {
    if (node != null) {
        console.log(node.key);
        preOrder(node.left);
        preOrder(node.right);
    }
}

let root = null;
root = insert(root, 1);
root = insert(root, 2);
root = insert(root, 4);
root = insert(root, 5);
root = insert(root, 6);
root = insert(root, 3);
preOrder(root);