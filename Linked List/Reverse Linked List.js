class Node {
    // constructor 
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class ReverseLinkedList {

    constructor() {
        this.head = null;
    }

    push(element) {
        var node = new Node(element);
        if (!this.head) {
            this.head = node;
        } else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    reversedList() {
        let prevNode = 0;
        let currentNode = this.head;
        let nextNode = this.head;
        while (nextNode.next != null) {
            nextNode = nextNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode
        }
        this.head = prevNode;

        return this.head;
    }
}



var list = new ReverseLinkedList();
list.push('a');
list.push('b');
list.push('c');
//console.log(list);
console.log(list.reversedList());