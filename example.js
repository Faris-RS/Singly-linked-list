function createNode(value, next = null) {
  return { value, next };
}

function createLinkedList() {
  let head = null;
  let tail = null;

  function append(value) {
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

  function log() {
    console.log("Values:", JSON.stringify(head));
  }
  
  return { head, tail, append, log };
}

const list = createLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.log(); // outputs [1, 2, 3]
