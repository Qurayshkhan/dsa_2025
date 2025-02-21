// time complexity of stack is O(1) constant time;
class stack {
    constructor() {
        this.size = null;
        this.top = null;
        this.arr = [];
    }
}

const isEmpty = (s) => {
    if (s.top == -1) {
        return 1;
    } else {
        return 0;
    }
}
const isFull = (s) => {
    if (s.top == s.size - 1) {
        return 1;
    } else {
        return 0;
    }
}

const push = (stack, value) => {
    if (isFull(stack)) {
        console.log("Stack is Full");
        return;
    } else {
        stack.top++;
        stack.arr[stack.top] = value;
    }
    return stack;
}

const pop = (stack) => {
    if (isEmpty(stack)) {
        console.log("Stack is Empty");
        return -1;
    } else {
        const val = stack.arr[stack.top];
        stack.top--;
        return val;
    }
}

const peak = (stack, i) => {
    let idx = stack.top - i + 1;
    if (idx < 0) {
        // console.log("Not a valid Position");
        return -1;
    } else {
        return stack.arr[idx];
    }
}

const stackTop = (stack) => {
    return stack.arr[stack.top];
}

const stackBottom = (stack) => {
    return stack.arr[0];
}

const parenthesisMatch = (stack, exp) => {
    stack.top = -1;
    stack.size = exp.length;
    stack.arr = new Array(stack.size - 1);
    for (let i = 0; exp[i] < stack.size; i++) {
        if (exp[i] == '(') {
            push(stack, '(');
        } else if (exp[i] == ')') {
            if (isEmpty(stack)) {
                return 0;
            }
            pop(stack);
        }
    }

    if (isEmpty(stack)) {
        return 0;
    } else {
        return 1;
    }
}

let s = new stack();
// s.size = 5;
// s.top = -1;
// s.arr = new Array(s.size - 1);

// push(s, 10);
// push(s, 20);
// push(s, 30);
// push(s, 40);
// push(s, 50);
// push(s, 60);

// pop(s);
// pop(s);
// pop(s);
// pop(s);

// for (let i = 1; i <= s.top + 1; i++) {
//     console.log(`value at index ${i}`, peak(s, i));
// }


// console.log(stackTop(s));
// console.log(stackBottom(s));

const exp = "((8) (*--$$9))";

if (parenthesisMatch(s, exp)) {
    return console.log("The Parenthesis is matching");
} else {
    return console.log("The Parenthesis is not matching");
}


