class ListNode<T> {
    data: T;
    prev: ListNode<T> | null;
    next: ListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList<T> {
    head: ListNode<T> | null;
    tail: ListNode<T> | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(data: T): void {
        const newNode = new ListNode<T>(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            if (this.tail) this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(data: T): void {
        const newNode = new ListNode<T>(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            if (this.head) this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    remove(data: T): void {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                if (currentNode === this.head && currentNode === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (currentNode === this.head) {
                    this.head = currentNode.next;
                    if (this.head) this.head.prev = null;
                } else if (currentNode === this.tail) {
                    this.tail = currentNode.prev;
                    if (this.tail) this.tail.next = null;
                } else {
                    if (currentNode.prev) currentNode.prev.next = currentNode.next;
                    if (currentNode.next) currentNode.next.prev = currentNode.prev;
                }
                this.length--;
                break;
            }
            currentNode = currentNode.next;
        }
    }

    find(data: T): ListNode<T> | null {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    update(index: number, newData: T): boolean {
        if (index < 0 || index >= this.length) {
            return false;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            if (currentNode) currentNode = currentNode.next;
        }
        if (currentNode) currentNode.data = newData;
        return true;
    }

    size(): number {
        return this.length;
    }
}

// Пример использования:
const linkedList = new DoublyLinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
linkedList.remove(1);
console.log(linkedList.find(2));
console.log(linkedList.size());
