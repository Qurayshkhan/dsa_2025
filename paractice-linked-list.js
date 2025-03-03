class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const insertAtFirst = (head, data) => {
    let ptr = new Node(data);
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
    ptr.next = null;
    return head;
}

const insertAfterNode = (head, prev, data) => {
    let ptr = new Node(data);
    let p = head;

    ptr.next = prev.next;
    prev.next = ptr;
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

const deleteAtEnd = (head) => {
    let p = head;
    let q = head.next;
    while (q && q.next != null) {
        p = p.next;
        q = q.next;
    }
    p.next = q.next;
    return head;
}

const deleteAtValue = (head, value) => {
    let p = head;
    let q = head.next;
    while (q && q.data != value && q.next != null) {
        p = p.next;
        q = q.next;
    }
    if (q && q.data == value) {
        p.next = q.next;
    }
    return head;
}

const printLinkedList = (head) => {
    let current = head;
    while (current) {
        console.log(current.data + '->');
        current = current.next;
    }
    return current;
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
// head = insertAtIndex(head, 2, 5);
// head = insertAtEnd(head, 2);
// head = insertAfterNode(head, n1, 2);

// head = deleteAtFirst(head);
// head = deleteAtIndex(head, 3);
// head = deleteAtEnd(head);
// head = deleteAtValue(head, 30);



console.log(printLinkedList(head));