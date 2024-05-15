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
    if (this.isEmpty) return null;
    if (this.size === 1) {
      return this.getFirst;
    }

    let current = this.head;

    if (current.next?.next !== null) {
      current = current.next;
    }

    current.next = null;
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

  insertAt(index: number): T {
    let current = this.head;
    let nodeIndex = 0;

    while (current.next !== null) {
      current = current.next;
      if (nodeIndex === index) {
        return current.value;
      }
      nodeIndex + 1;
    }
  }

  print() {
    const allNodes = [];
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
      allNodes.push(current.value);
    }

    return allNodes;
  }
}

const myLinkedList = new LinkedList<number>();

// console.log(myLinkedList);

myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.removeLast();

console.log(myLinkedList);
