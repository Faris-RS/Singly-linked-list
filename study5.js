function createNode(value, next = null) {
  return { value, next };
}

function createLinkedList() {
  let head = null;
  let tail = null;

  function insert(value) {
    const node = createNode(value);
    if (!head) {
      head = node;
      tail = node;
      return node;
    }
    tail.next = node;
    tail = node;
    return node;
  }

  function convertToArray() {
    let current = head;
    const arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }

  function convertFromArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      const node = createNode(arr[i]);
      if (!head) {
        head = node;
        tail = node;
      }
      tail.next = node;
      tail = node;
    }
  }

  function newNode(value, index) {
    const node = createNode(value);
    if (index === 0) {
      node.next = head;
      head = node;
      if (!tail) {
        tail = node;
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
      node.next = currentNode;
      prevNode.next = node;
      if (!node.next) {
        tail = node;
      }
    }
  }

  function log() {
    console.log(JSON.stringify(head));
  }

  return { head, tail, insert, log, convertToArray, convertFromArray, newNode };
}

const x = createLinkedList();
// x.insert(5);
// x.insert(8);
// x.insert(19);
// x.convertToArray();
x.convertFromArray([1, 2, 5, 4, 7]);
x.newNode(6,1)
x.log();
