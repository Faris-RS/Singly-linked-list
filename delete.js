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

  function deleteNode(index) {
    if (index === 0) {
      head = head.next;
      if (!head) {
        tail = null;
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
      if (currentNode) {
        prevNode.next = currentNode.next;
        if (!prevNode.next) {
          tail = prevNode;
        }
      }
    }
  }

  function log() {
    // let currentNode = head;
    // let values = [];
    // while (currentNode) {
    //   values.push(currentNode.value);
    //   currentNode = currentNode.next;
    // }
    // console.log("Values:", values);
    console.log(JSON.stringify(head));
  }

  return { append, deleteNode, log };
}

const list = createLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.log(); // Outputs: Values: [1, 2, 3], Tail: { value: 3, next: null }
list.deleteNode(1);
list.log(); // Outputs: Values: [1, 3], Tail: { value: 3, next: null }
