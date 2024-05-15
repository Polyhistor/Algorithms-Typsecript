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
        // let tailNodeValue;
        var theNodeBeforeTheLast;
        // we have reached the end
        while (this.head.next === null) {
            theNodeBeforeTheLast = this.head;
            this.head = this.head.next;
        }
        theNodeBeforeTheLast.next = null;
        return theNodeBeforeTheLast.value;
    };
    LinkedList.prototype.getFirst = function () { };
    LinkedList.prototype.getLast = function () { };
    LinkedList.prototype.isEmpty = function () {
        return this.head === null;
    };
    LinkedList.prototype.insertAt = function () { };
    LinkedList.prototype.print = function () { };
    return LinkedList;
}());
var myLinkedList = new LinkedList();
// console.log(myLinkedList);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.removeLast();
console.log(myLinkedList);
//# sourceMappingURL=singlyLikedListPr.js.map