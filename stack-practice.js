class Stack {
    constructor(size) {
        this.top = -1;
        this.size = size;
        this.arr = new Array(size - 1);
    }
}
const isFull = (stack) => {
    if (stack.top == stack.size - 1) {
        return 1;
    }
    return 0;
}
const isEmpty = (stack) => {
    if (stack.top == -1) {
        return 1;
    } else {
        return 0;
    }
}
const push = (stack, value) => {
    if (isFull(stack)) {
        console.log("Stack is Full");
    } else {
        stack.top++;
        stack.arr[stack.top] = value;
    }
}

const pop = (stack) => {
    if (isEmpty(stack)) {
        console.log("Stack is empty");
    } else {
        let val = stack.arr[stack.top];
        stack.top--;
        return stack.arr;
    }
}

const peek = (stack) => {
    let idx = stack.top;
    return stack.arr[idx];
}

const stack = new Stack(5);
push(stack, 10);
push(stack, 20);
push(stack, 30);
push(stack, 40);
push(stack, 60);
push(stack, 70);

// pop(stack);
// pop(stack);
// pop(stack);
// pop(stack);
// pop(stack);
// pop(stack);
// pop(stack);
console.log(peek(stack));

console.log(stack);
