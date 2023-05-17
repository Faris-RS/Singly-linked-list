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

  function log() {
    console.log("Values:", JSON.stringify(head));
  }
  return { head, tail, insert, log };
}

const list = createLinkedList();
list.insert(2);
list.insert(2);
list.insert(2);
list.log()
