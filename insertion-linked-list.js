class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
const insertArFirst = (head, data) => {
    const newNode = new Node(data);
    newNode.next = head;

    return newNode;
}
let node1 = new Node(2);
let node2 = new Node(3);
let node3 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = null;
node1 = insertArFirst(node1, 1);
let currentNode = node1;
const printList = () => {
    while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}

console.log(printList(currentNode));



