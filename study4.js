function createNode(values, next = null) {
  return { values, next };
}

function createLinkedList() {
  let head = null;
  let tail = null;

  function insert(values) {
    const node = createNode(values);
    if (!head) {
      head = node;
      tail = node;
    }
    tail.next = node;
    tail = node;
  }

  function convertToArray() {
    let currentNode = head;
    let values = [];
    while (currentNode) {
      values.push(currentNode.values);
      currentNode = currentNode.next;
    }
    console.log("Converted Array:", values);
  }

  function log() {
    console.log(JSON.stringify(head));
  }

  return { head, tail, insert, log, convertToArray };
}

const x = createLinkedList();
x.insert(5);
x.insert(10);
// x.log();
x.convertToArray()