class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
const insertAtFirst = (head, data) => {
    const ptr = new Node(data);
    let p = head;

    ptr.next = p;
    return ptr;

}

const insertAtIndex = (head, index, data) => {
    let ptr = new Node(data);
    let p = head;
    let i = 0;
    while (p && i < index - 1) {
        p = p.next;
        i++
    }
    ptr.next = p.next;
    p.next = ptr;

    return head;
}

const insertAfterNode = (head, prev, data) => {
    let ptr = new Node(data);

    ptr.next = prev.next;
    prev.next = ptr;

    return head;

}

const insertAtEnd = (head, data) => {
    let ptr = new Node(data);
    let p = head;
    while (p && p.next != null) {
        p = p.next;
    }
    p.next = ptr;
    ptr.next = null;
    return head;
}

const deleteAtFirst = (head) => {
    head = head.next;
    return head;
}

const deleteAtIndex = (head, index) => {
    let p = head;
    let q = head.next;
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
    let q = head.next;
    while (q.next != null) {
        p = p.next;
        q = q.next;
    }
    p.next = q.next;
    return head;
}
const deleteBasedValue = (head, value) => {
    let p = head;
    let q = head.next;
    while (q && q.next != null && q.data != value) {
        p = p.next;
        q = q.next;
    }
    if (q.data == value && q.next != null) {
        p.next = q.next;
    }
    return head;
}
const printLinkedList = (currentNode) => {
    while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}

let head = new Node(10);
let n1 = new Node(20);
let n2 = new Node(30);
let n3 = new Node(40);
let n4 = new Node(50);

head.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = null;


// head = insertAtFirst(head, 5);
// head = insertAtIndex(head, 3, 25);
// head = insertAfterNode(head, n2, 25);
// head = insertAtEnd(head, 25);

// head = deleteAtFirst(head);
// head = deleteAtIndex(head, 3);
// head = deleteAtEnd(head);
// head = deleteBasedValue(head, 30);


let currentNode = head;
printLinkedList(currentNode);









