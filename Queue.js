class Node {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return  this.size == 0;
    }

    // Adds new data at the end of the queue. O(1).
    enqueue(data) {
        let node = new Node(data);
        if  (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
        return this.size
    }

    // Removes data from the front of the queue and returns it.
    dequeue() {
        if  (this.isEmpty()) return null
        else {
            const res = this.head;
            this.head = this.head.next;
            res.next = null;
            this.size--;
            if (this.isEmpty()) this.tail = null;
            return res.val;
        }
    }

    // Returns the first data from the front of the queue.
    // Does not remove the data. O(1).
    peek() {
        if  (this.isEmpty()) return null
        else return this.head.val;
    }

    // Returns the first data from the end of the queue. 
    // Does not remove the data. 0(1)
    rear() {
        if  (this.isEmpty()) return null
        else return this.tail.val
    }

    // Returns the length of the queue.
    length() {
        return this.size;
    }

    // Returns the queue as the array.
    toArray() {
        let arr = [];
        for (let node=this.head ; node != null ; node=node.next ) {
            arr.push(node.val);
        }
        return arr;
    }

    // Print the elements present in the queue.
    print() {
        return this.head
    }
}  