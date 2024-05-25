class NodeQueue {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(value) {
        // first create a new node
        const newNode = new NodeQueue(value);
        if (this.tail === null) {
            this.tail = this.head = newNode;
        }
        // this.tail here is the old one
        this.tail.next = newNode;
        // update the pointer
        this.tail = newNode;
        // increase the size of the queue
        this.length++;
    }
    dequeue() {
        if (this.head === null) {
            return null;
        }
        // empty queue at this point
        if (this.head.next === null) {
            this.head = null;
            this.head = null;
        }
        // store the value
        const currentHeadValue = this.head.value;
        // move the pointer
        this.head = this.head.next;
        // reduce the length
        this.length++;
        return currentHeadValue;
    }
    print() {
        if (this.length === 0) {
            return null;
        }
        const nodesValues = [];
        let current = this.head;
        while (current.next !== null) {
            nodesValues.push(current.value);
            current = current.next;
        }
        return nodesValues;
    }
}
//# sourceMappingURL=queue.js.map