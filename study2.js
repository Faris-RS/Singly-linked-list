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
    console.log(JSON.stringify(head));
  }

  return { insert, log, head, tail };
}

const x = createLinkedList();
x.insert(5);
x.insert(7);
x.log();
