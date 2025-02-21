class Stack {
    constructor() {
        this.top = -1;
        this.size = null;
        this.arr = [];
    }
}

const isEmpty = (stack) => {
    if (stack.top == -1) {
        return 1;
    } else {
        return 0;
    }
}

const isFull = (stack) => {
    if (stack.top == stack.size - 1) {
        return 1
    } else {
        return 0;
    }
}

const push = (stack, data) => {
    if (isFull(stack)) {
        console.log("Stack is Full");
    } else {
        stack.top++;
        stack.arr[stack.top] = data;
    }
    return data;
}
const pop = (stack) => {
    if (isEmpty(stack)) {
        console.log("Stack is Empty");
    } else {
        let val = stack.arr[stack.top];
        stack.top--;
        return val;
    }
}
const peek = (stack) => {
    let idx = stack.top - i + 1;
    if (idx < 0) {
        return -1;
    } else {
        return stack.arr[idx];
    }
}
const stack = new Stack();
stack.size = 5;
stack.arr = new Array(stack.size - 1);

push(stack, 6);
push(stack, 10);
push(stack, 7);
push(stack, 3);
push(stack, 2);


pop(stack);
pop(stack);
pop(stack);


for (i = 1; i <= stack.top + 1; i++) {
    console.log("Value at index " + i + " ", peek(stack, i));
}

