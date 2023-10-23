class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;

    return this;
  }

  insert(index, value) {
    if (index >= this.length) return this.append(value);
    if (index === 0) return this.prepend(value);

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;

    newNode.prev = leader;
    follower.prev = newNode;

    leader.next = newNode;
    newNode.next = follower;

    this.length++;

    return this;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    if (index === this.length - 1) {
      leader.next = null;

      this.tail = leader;
    } else {
      const holdingPointer = leader.next.next;

      leader.next = holdingPointer;
    }

    this.length--;

    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(array);
  }

  printLinkedList() {
    console.log(this);
  }

  printIndex(index) {
    const found = this.traverseToIndex(index);
    console.log(found.value);
  }

  printNode(index) {
    const node = this.traverseToIndex(index);
    console.log(node);
  }

  reverse() {
    if (!this.head.next) return this.head;

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
  }
}

const linkedList = new DoublyLinkedList(2);

linkedList.append(4);
linkedList.append(0);
linkedList.append(8);
linkedList.append(9);


// linkedList.printNode(1);
linkedList.printList();
linkedList.reverse()
linkedList.printList();
