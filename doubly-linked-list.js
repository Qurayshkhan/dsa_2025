class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
const insertAtFirst = (head, data) => {
    let ptr = new Node(data);
    let p = head;

    ptr.prev = null;
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
    while (p && p.next != null) {
        p = p.next;
    }
    p.next = ptr;
    return head;
}

const insertAfterNode = (head, n4, data) => {

    let ptr = new Node(data);
    let p = head;

    ptr.next = n4.next;
    n4.next = ptr;
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
    return head;
}

let head = new Node(10);
let n1 = new Node(20);
let n2 = new Node(30);
let n3 = new Node(40);
let n4 = new Node(50);
let n5 = new Node(60);

head.prev = null;
head.next = n1;

n1.prev = head;
n1.next = n2;


n2.prev = n1;
n2.next = n3;


n3.prev = n2;
n3.next = n4;

n4.prev = n3;
n4.next = n5;

n5.prev = n4;
n5.next = null;

// head = insertAtFirst(head, 13);
// head = insertAtIndex(head, 13, 3);
// head = insertAtEnd(head, 13);
// head = insertAfterNode(head, n4, 13);

// head = deleteAtFirst(head);
head = deleteAtIndex(head, 3);

let currentNode = head;
// let currentNode = n5;
while (currentNode) {
    console.log(currentNode.data + '->');
    currentNode = currentNode.next;
}


