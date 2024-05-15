// class SinglyLinkedListNode<T> {
//   value: T;
//   next: SinglyLinkedListNode<T> | null;
//   constructor(value: T) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList<T> {
//   head: SinglyLinkedListNode<T> | null;
//   size: number;
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   // Add a new node to the end of the list
//   push(value: T): void {
//     const newNode = new SinglyLinkedListNode(value);
//     if (this.head === null) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       // go untill the end, when current.next is null that means we reached the end
//       while (current.next !== null) {
//         current = current.next;
//       }
//       // once we reached the end, we pretty much set it to the new node
//       current.next = newNode;
//     }
//     this.size++;
//   }
//   // Check if the list is empty
//   isEmpty(): boolean {
//     return this.head === null;
//   }
//   // Get the first element's value
//   getFirst(): T | null {
//     return this.head?.value || null;
//   }
//   // Get the last element's value
//   getLast(): T | null {
//     if (this.isEmpty()) return null;
//     let current = this.head;
//     while (current.next !== null) {
//       current = current.next;
//     }
//     return current.value;
//   }
//   // Insert a new node at a specific index
//   insertAt(index: number, value: T): void {
//     if (index < 0 || index > this.size) {
//       throw new Error("Index out of bounds");
//     }
//     const newNode = new SinglyLinkedListNode(value);
//     if (index === 0) {
//       newNode.next = this.head;
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       let count = 0;
//       while (current !== null && count < index - 1) {
//         current = current.next;
//         count++;
//       }
//       if (current === null) {
//         throw new Error("Index out of bounds");
//       }
//       newNode.next = current.next;
//       current.next = newNode;
//     }
//     this.size++;
//   }
//   // Remove the first element from the list
//   removeFirst(): T | null {
//     if (this.isEmpty()) return null;
//     const value = this.head.value;
//     this.head = this.head.next;
//     this.size--;
//     return value;
//   }
//   // Remove the last element from the list
//   removeLast(): T | null {
//     if (this.isEmpty()) return null;
//     if (this.size === 1) {
//       return this.removeFirst();
//     }
//     let current = this.head;
//     while (current.next?.next !== null) {
//       current = current.next;
//     }
//     const value = current.next.value;
//     current.next = null;
//     this.size--;
//     return value;
//   }
//   // Print the contents of the list
//   print(): void {
//     let current = this.head;
//     while (current !== null) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }
// }
// // Example usage
// const list = new LinkedList<number>();
// list.push(10);
// list.push(20);
// list.push(30);
// console.log(list.getFirst()); // Output: 10
// console.log(list.getLast()); // Output: 30
// console.log(list.isEmpty()); // Output: false
// list.insertAt(1, 15);
// list.print(); // Output: 10, 15, 20, 30
// list.removeFirst();
// list.removeLast();
// list.print(); // Output: 15, 20
//# sourceMappingURL=singlyLinkedList.js.map