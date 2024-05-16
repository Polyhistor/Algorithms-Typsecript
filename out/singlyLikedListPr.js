var SinglyLinkedListNode = /** @class */ (function () {
    function SinglyLinkedListNode(value) {
        this.value = value;
        this.next = null;
    }
    return SinglyLinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    LinkedList.prototype.push = function (value) {
        var newNode = new SinglyLinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            // as long as the next node exist, we can traverse until we reach the head
            while (current.next !== null) {
                current = current.next;
            }
            // we have reach the end already, so we just extend it
            current.next = newNode;
        }
        this.size++;
    };
    LinkedList.prototype.removeFirst = function () {
        if (this.isEmpty())
            return null;
        var deletedHeadValue = this.head.value;
        this.head = this.head.next;
        this.size--;
        return deletedHeadValue;
    };
    LinkedList.prototype.removeLast = function () {
        if (this.isEmpty())
            return null;
        if (this.size === 1) {
            var headNodeValue = this.head.value;
            this.head = null;
            this.size--;
            return headNodeValue;
        }
        var current = this.head;
        var previous;
        while (current.next !== null) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size--;
        return current.value;
    };
    LinkedList.prototype.getFirst = function () {
        if (this.isEmpty)
            return null;
        return this.head;
    };
    LinkedList.prototype.getLast = function () {
        if (this.isEmpty)
            return null;
        var current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.head === null;
    };
    LinkedList.prototype.insertAt = function (index, value) {
        if (index > this.size) {
            return "Index out of range";
        }
        if (this.isEmpty()) {
            return null;
        }
        var current = this.head;
        var nodeIdex = 0;
        var newNode = new SinglyLinkedListNode(value);
        if (index === 0) {
            current.next = current;
            current = newNode;
        }
        // we will traverse untill we reach before the
        while (nodeIdex < index) {
            current = current.next;
            nodeIdex++;
        }
        newNode.next = current.next;
        current.next = newNode;
    };
    LinkedList.prototype.print = function () {
        var allNodes = [];
        var current = this.head;
        while (current.next !== null) {
            allNodes.push(current.value);
            current = current.next;
        }
        // the tail value
        allNodes.push(current.value);
        return allNodes;
    };
    return LinkedList;
}());
var myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
// myLinkedList.removeLast();
myLinkedList.insertAt(3, 7);
var allNodes = myLinkedList.print();
console.log(allNodes);
//# sourceMappingURL=singlyLikedListPr.js.map