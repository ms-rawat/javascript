class LNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new LNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
        return this;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            throw new Error("Invalid index");
        }
        const newNode = new LNode(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let previous = null;
            let count = 0;
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
        return this;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Invalid index");
        }
        let current = this.head;
        if (index === 0) { // ✅ Fixed: === instead of =
            this.head = current.next;
        } else {
            let previous = null;
            let count = 0;
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = current.next;
        }
        this.size--;
        return current.data;
    }

    getAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Invalid index");
        }
        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.next; // ✅ Fixed typo
            count++;
        }
        return current.data;
    }

    clear() {
        this.head = null;
        this.size = 0;
    }

    print() {
        let current = this.head;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next; // ✅ Fixed infinite loop
        }
        console.log(elements.join(" -> "));
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

// ✅ Testing
const list = new LinkList();
list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 -> 20 -> 30

console.log("Get at index 1:", list.getAt(1)); // Output: 20
console.log("Remove at index 1:", list.removeAt(1)); // Output: 20
list.print(); // Output: 10 -> 30
console.log("List size:", list.getSize()); // Output: 2
