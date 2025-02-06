class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

node1 = new Node(5);
node2 = new Node(6);
node3 = new Node(10);
node4 = new Node(15);


node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;

let currentNode = node1;

while (currentNode) {
    currentNode = currentNode.next;
    console.log(currentNode.data + '->');
}
console.log(null);
