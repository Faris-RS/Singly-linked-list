function createLinkedList() {
  let head = null;
  let tail = null;

  function createNode(value) {
    return { value, next: null };
  }

  function append(value) {
    const newNode = createNode(value);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }

  function prepend(value) {
    const newNode = createNode(value);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }
  }

  function insert(value, index) {
    const newNode = createNode(value);
    if (index === 0) {
      newNode.next = head;
      head = newNode;
      if (!tail) {
        tail = newNode;
      }
    } else {
      let currentNode = head;
      let prevNode = null;
      let i = 0;
      while (currentNode && i < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      newNode.next = currentNode;
      prevNode.next = newNode;
      if (!newNode.next) {
        tail = newNode;
      }
    }
  }

  function log() {
    let currentNode = head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  return { append, prepend, insert, log };
}

const list = createLinkedList();
list.append(1);
list.append(2);
list.insert(3, 1); // insert 3 at index 1
list.log(); // outputs Values: [1, 3, 2], Tail: { value: 2, next: null }
