class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const createNode = (data) => {
    const node = new Node(data);
    return node;
}

const preOrderTraversal = (root) => {
    if (root != null) {
        console.log(root.data);
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
    }
}
const postOrderTraversal = (root) => {
    if (root != null) {
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
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

const search = (root, key) => {
    if (root == null) {
        return null;
    }
    if (key == root.data) {
        return root;
    } else if (key < root.data) {
        return search(root.left, key);
    } else {
        return search(root.right, key);
    }
}

const insertNodeInBST = (root, key) => {
    let prev = null;
    let newNode;
    while (root != null) {
        prev = root;
        if (key == root.data) {
            console.log("Duplicate node not allowed");
            return;
        } else if (key < root.data) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    newNode = createNode(key);
    if (key < prev.data) {
        prev.left = newNode;
    } else {
        prev.right = newNode;
    }
    return root;
}

const deletionNode = (root, key) => {
    let iPre;
    if (root == null) {
        return null;
    }
    if (key < root.data) {
        root.left = deletionNode(root.left, key);
    } else if (key > root.data) {
        root.right = deletionNode(root.right, key);
    } else {
        if (root.left == null) {
            return root.right;
        } else if (root.right == null) {
            return root.left;
        } else {
            iPre = inOrderPredecessor(root);
            root.data = iPre.data;
            root.left = deletionNode(root.left, iPre.data);
        }
    }
    return root;
}
const inOrderPredecessor = (root) => {
    let temp = root.left;
    while (root.right != null) {
        temp = root.right;
    }
    return temp;
}

const n1 = createNode(40);
const n2 = createNode(30);
const n3 = createNode(50);
const n4 = createNode(25);
const n5 = createNode(35);


n1.left = n2;
n1.right = n3;

n2.left = n4;
n2.right = n5;

// console.log(postOrderTraversal(n1));
// console.log(inOrderTraversal(n1));
// console.log(search(n1, 50));
// insertNodeInBST(n1, 33);
deletionNode(n1, 50);
console.log(preOrderTraversal(n1));




