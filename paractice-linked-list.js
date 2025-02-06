class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
const printLinkedList = (currentNode) => {
    while (currentNode) {
        console.log(currentNode.data + '->');
        currentNode = currentNode.next;
    }
    return currentNode;
}
const insertAtFirst = (head, data) => {
    let ptr = new Node(data);
    let p = head;
    ptr.next = p;
    return ptr;
}
const insertAtIndex = (head, data, index) => {
    let ptr = new Node(data);
    let p = head;
    let i = 0;
    while (p && i < index - 1) {
        p = p.next;
        i++;
    }
    ptr.next = p.next;
    p.next = ptr;
    return head;
}
const insertAtEnd = (head, data) => {
    let ptr = new Node(data);
    let p = head;
    while (p.next != null) {
        p = p.next;
    }
    p.next = ptr;
    return head;
}
const insertAfterNode = (head, prevNode, data) => {
    let ptr = new Node(data);
    let p = prevNode.next;
    prevNode.next = ptr;
    ptr.next = p;
    return head;
}

const deleteAtFirst = (head) => {
    let ptr = head;
    head = head.next;
    ptr = null;
    return head;
}

const deleteAtIndex = (head, index) => {
    let p = head;
    let q = p.next;
    let i = 0;
    while (q && i < index - 1) {
        p = p.next;
        q = q.next;
        i++;
    }

    p.next = q.next;
    q = null;
    return head;
}

const deleteAtEnd = (head) => {
    let p = head;
    let q = p.next;

    while (q.next != null) {
        p = p.next;
        q = q.next;
    }

    p.next = q.next;
    q = null;
    return head;
}

const deleteAtValue = (head, value) => {
    let p = head;
    let q = p.next;

    while (q.data != value && q.data != null) {
        p = p.next;
        q = q.next;
    }
    if (q.data == value) {
        p.next = q.next;
        q = null;
    }
    return head;
}


let head = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
let node4 = new Node(40);
let node5 = new Node(50);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;

// head = insertAtFirst(head, 5);
// head = insertAtIndex(head, 5, 3);
// head = insertAtEnd(head, 5, 3);
// head = insertAfterNode(head, node4, 3);
// head = deleteAtFirst(head);
// head = deleteAtIndex(head, 3);
// head = deleteAtEnd(head);
head = deleteAtValue(head, 30);
let currentNode = head;
console.log(printLinkedList(currentNode));

