var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    return ListNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    DoublyLinkedList.prototype.append = function (data) {
        var newNode = new ListNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            if (this.tail)
                this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    };
    DoublyLinkedList.prototype.prepend = function (data) {
        var newNode = new ListNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            if (this.head)
                this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    };
    DoublyLinkedList.prototype.remove = function (data) {
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                if (currentNode === this.head && currentNode === this.tail) {
                    this.head = null;
                    this.tail = null;
                }
                else if (currentNode === this.head) {
                    this.head = currentNode.next;
                    if (this.head)
                        this.head.prev = null;
                }
                else if (currentNode === this.tail) {
                    this.tail = currentNode.prev;
                    if (this.tail)
                        this.tail.next = null;
                }
                else {
                    if (currentNode.prev)
                        currentNode.prev.next = currentNode.next;
                    if (currentNode.next)
                        currentNode.next.prev = currentNode.prev;
                }
                this.length--;
                break; // Добавлено прерывание цикла после удаления узла
            }
            currentNode = currentNode.next;
        }
    };
    DoublyLinkedList.prototype.find = function (data) {
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    };
    DoublyLinkedList.prototype.update = function (index, newData) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        var currentNode = this.head;
        for (var i = 0; i < index; i++) {
            if (currentNode)
                currentNode = currentNode.next;
        }
        if (currentNode)
            currentNode.data = newData;
        return true;
    };
    DoublyLinkedList.prototype.size = function () {
        return this.length;
    };
    return DoublyLinkedList;
}());
// Пример использования:
var linkedList = new DoublyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
linkedList.remove(1);
console.log(linkedList.find(2));
console.log(linkedList.size());
