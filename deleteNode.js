class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
const deleteAtFirst = (head) => {
    if (head == null) {
        return console.error("Head is empty");
    }
    let temp = head;
    head = head.next;
    temp = null;
    return head;
}

const deleteAtIndex = (head, index) => {
    if (head == null) {
        return false;
    }
    let p = head;
    let q = head.next;
    for (let i = 0; i < index - 1; i++) {
        p = p.next;
        q = q.next;
    }
    p.next = q.next;
    return head;
}

const deleteAtLast = (head) => {

    let p = head;
    let q = head.next;

    while (q.next != null) {
        p = p.next;
        q = q.next;
    }
    p.next = null;
    q = null;
    return head;
}

const deleteANodeWithGivenValue = (head, value) => {

    let p = head;
    let q = head.next;

    while (q.next != null && q.data != value) {
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
let node6 = null;

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;

// head = deleteAtFirst(head);
// head = deleteAtIndex(head, 3);
// head = deleteAtLast(head);
head = deleteANodeWithGivenValue(head, 40);


let currentNode = head;
while (currentNode) {
    console.log(currentNode.data, '------>');
    currentNode = currentNode.next;
}
