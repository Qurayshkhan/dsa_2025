class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const insertAtIndex = (head, data, index) => {
    if (index < 0) {
        throw new Error("Index must be a non-negative integer.");
    }

    const newNode = new Node(data);

    // Handle insertion at the head (index 0)
    if (index === 0) {
        newNode.next = head;
        return newNode;
    }

    let currentNode = head;
    let i = 0;

    // Traverse to the node before the target index
    while (currentNode && i < index - 1) {
        currentNode = currentNode.next;
        i++;
    }

    if (!currentNode) {
        throw new Error("Index is out of bounds.");
    }

    // Insert the new node
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return head;
};

const printList = (head) => {
    let currentNode = head;
    while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
};

// Example usage
let node1 = new Node(2);
let node2 = new Node(3);
let node3 = new Node(4);

node1.next = node2;
node2.next = node3;

// Insert at index 1
node1 = insertAtIndex(node1, 5, 1);

// Print the updated list
printList(node1);
