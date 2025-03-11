class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Constructing the root node
const createNode = (data) => {
    // node pointer
    let node = new Node(data);
    return node;
}

let p = createNode(7);
let p1 = createNode(11);
let p2 = createNode(2);
let p3 = createNode(7);
let p4 = createNode(1);
let p5 = createNode(11);
let p6 = createNode(9);
let p7 = createNode(2);
let p8 = createNode(null);
let p9 = createNode(null);
let p10 = createNode(null);
let p11 = createNode(null);
let p12 = createNode(null);
let p13 = createNode(null);
let p14 = createNode(4);

p.left = p1;
p.right = p2;

p1.left = p3;
p1.right = p4;

p2.left = p5;
p2.right = p6;

p3.left = p7;
p3.right = p8;

p4.left = p9;
p4.right = p10;

p5.left = p11;
p5.right = p12;

p6.left = p13;
p6.right = p14;


const preOrder = (root) => {
    if (root != null) {
        console.log(root.data);
        preOrder(root.left);
        preOrder(root.right);
    }
}
preOrder(p);
