class StackNode<T> {
  // Types
  public value: T;
  public previous: StackNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.previous = undefined;
  }
}

// LAST-IN-FIRST-OUT
class Stack<T> {
  private head: StackNode<T>;
  private tail: StackNode<T>;
  private length: number;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  push(value: T) {
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
    return this.head?.value;
  }
}

const myNewStack = new Stack();
myNewStack.push(1);
myNewStack.push(2);
myNewStack.push(3);
myNewStack.pop();

console.log(myNewStack.peek());
