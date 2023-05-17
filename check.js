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

  function indexOf(value) {
    let currentNode = head;
    let i = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.next;
      i++;
    }
    return 'element not in linked list';
  }

  function log() {
    console.log("Values:", JSON.stringify(head));
  }

  return { append, indexOf, log };
}

const list = createLinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.indexOf(2)); // Outputs: 1
// console.log(list.indexOf(8)); 
