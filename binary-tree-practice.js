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

const search = (root, value) => {
    if (root == null) {
        return null;
    }
    if (value == root.data) {
        return root;
    } else if (value < root.data) {
        return search(root.left, value);
    } else {
        return search(root.right, value);
    }
}

const iterativeSearch = (root, value) => {
    while (root != null) {
        if (value == root.data) {
            return root;
        } else if (value < root.data) {
            return root.left;
        } else {
            return root.right;
        }
    }
    return null;
}

const insertNodeInBST = (root, key) => {
    let prev = null;
    let newNode;
    while (root != null) {
        prev = root;
        if (key === root.data) {
            console.log("Duplicate value not allowed");
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
}

const deletionInBST = (root, value) => {
    if (root == null) {
        return null;
    }
    if (value < root.data) {
        root.left = deletionInBST(root.left, value);
    } else if (value > root.data) {
        root.data = deletionInBST(root.data, value);
    } else {
        if (root.left == null) {
            return root.right;
        } else if (root.right == null) {
            return root.left;
        }
        let iPre = inOrderPredecessor(root);
        root.data = iPre.data;
        root.left = deletionInBST(root.left, iPre.data);
    }
    return root;
};

const inOrderPredecessor = (root) => {
    let temp = root.left;
    while (root.right != null) {
        temp = root.right;
    }
    return temp;
};


let p = createNode(50);

let p1 = createNode(45);

let p2 = createNode(55);

let p3 = createNode(40);
let p4 = createNode(60);

let p5 = createNode(51);
let p6 = createNode(57);

p.left = p1;
p.right = p2;

p1.left = p3;
p1.right = p4;

p2.left = p5
p2.right = p6;


// insertNodeInBST(p, 52);
deletionInBST(p, 40);
// preOrderTraversal(p);
// postOrderTraversal(p);
inOrderTraversal(p);

// const n = search(p, 55);
// const n = iterativeSearch(p, 55);
// if (n) {
//     console.log("value found " + n.data);
// } else {
//     console.log("Element not found");
// }




