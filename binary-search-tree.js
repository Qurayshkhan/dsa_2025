// Best case time complexity O(log(n)) and worst case O(n)

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

const searchIter = (root, key) => {
    while (root != null) {
        if (key == root.data) {
            return root;
        } else if (key < root.data) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return null;
}

const insertNodeInBST = (root, key) => {
    let prev = null;
    let newNode;
    while (root != null) {
        prev = root;
        if (key == root.data) {
            console.log("Duplicate value not allowed in BST.");
            return;
        } else if (key < root.data) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    newNode = createNode(key);
    if (key < prev.value) {
        prev.left = newNode;
    } else {
        prev.right = newNode;
    }
}
// use for deletion
const inOrderTraversal = (root) => {
    if (root != null) {
        inOrderTraversal(root.left);
        console.log(root.data);
        inOrderTraversal(root.right);
    }
}
const deletionNode = (root, value) => {
    let iPre;
    if (root == null) {
        return null;
    }
    if (root.left == null && root.right == null) {
        root = null;
        return null;
    }
    if (value < root.data) {
        root.left = deletionNode(root.left, value);
    } else if (value > root.data) {
        root.right = deletionNode(root.right, value);
    }
    // Deletion strategy when the node is found.
    else {
        iPre = inOrderPredecessor(root);
        root.data = iPre.data;
        root.left = deletionNode(root.left, iPre.data);
    }
    return root;
}

const inOrderPredecessor = (root) => {
    root = root.left;
    while (root.right != null) {
        root = root.right;
    }
    return root;
}
const p = createNode(50);
const p1 = createNode(40);
const p2 = createNode(60);
const p3 = createNode(20);
const p4 = createNode(45);
const p5 = createNode(55);
const p6 = createNode(70);



p.left = p1;
p.right = p2;
p1.left = p3;
p1.right = p4;
p2.left = p5;
p2.right = p6;

// const n = search(p, 45);
// const n = searchIter(p, 45);
// if (n != null) {
//     console.log("Found " + n.data);
// } else {
//     console.log("Element not found.");
// }

// insertNodeInBST(p, 40);

// console.log(p);

inOrderTraversal(p);
console.log("\n");
deletionNode(p, 50);
console.log("\n");
inOrderTraversal(p);

