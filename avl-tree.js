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
    } else {
        return node.height;
    }
}

const getBalanceFactor = (n) => {
    if (n == null) {
        return 0;
    }
    // height of left subtree - height of right subtree = 0
    return getHeight(n.left) - getHeight(n.right);
}

const rightRotate = (y) => {

    // we just make pointer for rotate or replace tree
    let x = y.left;
    let T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = max(getHeight(y.right), getHeight(y.left)) + 1;
    x.height = max(getHeight(x.right), getHeight(x.left)) + 1;

    // return x because now become x is root node
    return x;
}

const leftRotate = (x) => {

    let y = x.right;
    let T2 = y.left;

    y.left = x;
    x.right = T2;

    y.height = max(getHeight(y.right), getHeight(y.left)) + 1;
    x.height = max(getHeight(x.right), getHeight(x.left)) + 1;

    return y;
}

const preOrder = (root) => {
    if (root != null) {
        console.log(root.key);
        preOrder(root.left);
        preOrder(root.right);
    }
}

const insert = (node, key) => {
    if (node == null) {
        return createNode(key);
    }
    if (key < node.key) {
        node.left = insert(node.left, key);
    } else if (key > node.key) {
        node.right = insert(node.right, key);
    }

    node.height = max(getHeight(node.left), getHeight(node.right)) + 1;

    const balanceFactor = getBalanceFactor(node);


    //left left 
    if (balanceFactor > 1 && key < node.left.key) {
        return rightRotate(node);
    }
    // right right
    if (balanceFactor < -1 && key > node.right.key) {
        return leftRotate(node);
    }

    // left right
    if (balanceFactor > 1 && key > node.left.key) {
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }
    // right left
    if (balanceFactor < -1 && key < node.right.key) {
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }

    return node;
}


let root = null;
root = insert(root, 1);
root = insert(root, 2);
root = insert(root, 4);
root = insert(root, 5);
root = insert(root, 6);
root = insert(root, 3);

preOrder(root);





