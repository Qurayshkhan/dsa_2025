class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const insertAfterNode = (head, prevNode, data) => {
    if (!prevNode) {
        console.log("Previous node not null");
    }

    let newNode = new Node(data);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    return head;

};

let head = new Node(5);
let node2 = new Node(10);
let node3 = new Node(20);
let node4 = new Node(30);
let node5 = new Node(40);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

head = insertAfterNode(head, node2, 33);

let currentNode = head;

while (currentNode) {
    console.log(currentNode.data + ' -> ');
    currentNode = currentNode.next;
}
