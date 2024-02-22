class ListNode {
    data: any;
    prev: ListNode | null;
    next: ListNode | null;

    constructor(data: any) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(data: any): void {
        const newNode = new ListNode(data);
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

    prepend(data: any): void {
        const newNode = new ListNode(data);
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

    remove(data: any): void {
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
                break; // Добавлено прерывание цикла после удаления узла
            }
            currentNode = currentNode.next;
        }
    }

    find(data: any): ListNode | null {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    update(index: number, newData: any): boolean {
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
const linkedList = new DoublyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
linkedList.remove(1);
console.log(linkedList.find(2));
console.log(linkedList.size());
