class StackNode {
    constructor(value) {
        this.value = value;
        this.previous = undefined;
    }
}
// LAST-IN-FIRST-OUT
class Stack {
    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }
    push(value) {
        const newNode = new StackNode(value);
        if (this.head === undefined) {
            return (this.head = newNode);
        }
        newNode.previous = this.head;
        this.head = newNode;
        this.length++;
    }
    pop() {
        if (this.head === undefined) {
            return null;
        }
        if (this.head.previous) {
            this.head = this.head.previous;
            this.head = null;
        }
        this.head = null;
        length--;
    }
    peek() {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    }
}
const myNewStack = new Stack();
myNewStack.push(1);
myNewStack.push(2);
myNewStack.push(3);
myNewStack.pop();
console.log(myNewStack.peek());
//# sourceMappingURL=stack.js.map