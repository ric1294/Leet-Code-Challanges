var Node = require('./Node');
class LinkedList {
    element = 2;
    constructor() {
        this.head = null;
        this.size = 0;
    }

    deleteFromBegining() {
        if (this.head == 0 || this.head == empty) {
            return " List is Empty";
        } else {
            let temp = this.head;
            head = temp.next;
            this.size--;
        }
    }

    deleteFromEnding() {
        let temp = this.head;
        while (temp.next.next != 0) {
            temp = temp.next;
        }
        temp.next = 0;
        this.size--;
    }

    deleteFromPosition(position) {
        let temp = this.head;
        i = 1;
        while (i < pos - 1) {
            temp = temp.next;
        }
        temp.next = temp.next.next;
        this.size--;
    }

}