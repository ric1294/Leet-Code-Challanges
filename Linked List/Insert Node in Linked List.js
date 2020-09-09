var Node = require('./Node');
class LinkedList {
    element = 2;
    constructor() {
        this.head = null;
        this.size = 0;
    }


    insertAtBegining(element) {
        var node = new Node(element);
        if (this.head == null) {
            this.head = node;
        } else {
            node.data = element
            node.next = this.head;
            this.head = node;
            this.size++;
        }
        console.log(this.head);
        return this.head;
    }

    insertAtLast(element) {
        let temp;
        temp = this.head;
        var node = new Node(element);
        node.data = element;
        node.next = 0
        while (temp.next != 0) {
            temp = temp.next
        }
        temp.next = node;
        this.size++;

    }

    insertAtSpecificCondition(element, position) {
        let temp;
        let pos = position;
        let i = 1;
        //check if position is greated than length of linked list then we can not inster 
        if (pos > this.size) {
            return " You can not insert. Invalid position"
        } else {
            temp = head; // to travser the linked List
            while (i < pos) {
                temp = temp.next;
                i++;
            }
            var node = new Node(element);
            node.data = element;
            node.next = temp.next;
            temp.next = node;
            this.size++;
        }

    }
}