class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const insertAtEnd = (head, data) => {
    let newNode = new Node(data);
    if (head === null) {
        return newNode;
    }

    let currentNode = head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return head;
};

let head = new Node(10);
let node2 = new Node(15);
let node3 = new Node(20);
let node4 = new Node(25);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;

head = insertAtEnd(head, 50);

let currentNode = head;
while (currentNode) {
    console.log(currentNode.data + ' ->');
    currentNode = currentNode.next;
}
