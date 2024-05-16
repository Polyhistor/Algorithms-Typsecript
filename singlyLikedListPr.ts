class SinglyLinkedListNode<T> {
  value: T;
  next: SinglyLinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: SinglyLinkedListNode<T>;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value: T): void {
    const newNode = new SinglyLinkedListNode(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      // as long as the next node exist, we can traverse until we reach the head
      while (current.next !== null) {
        current = current.next;
      }

      // we have reach the end already, so we just extend it
      current.next = newNode;
    }

    this.size++;
  }

  removeFirst(): T | null {
    if (this.isEmpty()) return null;

    const deletedHeadValue = this.head.value;
    this.head = this.head.next;
    this.size--;

    return deletedHeadValue;
  }

  removeLast() {
    if (this.isEmpty()) return null;

    if (this.size === 1) {
      const headNodeValue = this.head.value;
      this.head = null;
      this.size--;
      return headNodeValue;
    }

    let current = this.head;
    let previous;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.size--;
    return current.value;
  }

  getFirst() {
    if (this.isEmpty) return null;

    return this.head;
  }

  getLast() {
    if (this.isEmpty) return null;
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    return current;
  }

  isEmpty() {
    return this.head === null;
  }

  insertAt(index: number, value: T): string {
    if (index > this.size) {
      return "Index out of range";
    }

    if (this.isEmpty()) {
      return null;
    }

    let current = this.head;
    let nodeIdex = 0;

    const newNode = new SinglyLinkedListNode(value);

    if (index === 0) {
      current.next = current;
      current = newNode;
    }

    let previous;

    // we will traverse untill we reach before the
    while (nodeIdex < index) {
      previous = current;
      current = current.next;
      nodeIdex++;
    }

    previous.next = newNode;
    newNode.next = current;
  }

  print() {
    const allNodes = [];
    let current = this.head;

    while (current.next !== null) {
      allNodes.push(current.value);
      current = current.next;
    }

    // the tail value
    allNodes.push(current.value);

    return allNodes;
  }
}

const myLinkedList = new LinkedList<number>();

myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

// myLinkedList.removeLast();

myLinkedList.insertAt(3, 7);

const allNodes = myLinkedList.print();

console.log(allNodes);
