class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const linkedList = () => {
  let current = head;
  while (current != null) {
    console.log(current.data + " ");
    current = current.next;
  }
};

//INSERTION AT BEGINING

const push = (newData) => {
  let newNode = new Node(newData);
  newNode.next = head;
  head = newNode;
};

//INSERTION AT SELECTED NODE

const insertAfterNode = (prevData, newData) => {
  if (prevData == null) {
    console.log("Please give previous node data");
    return;
  }
  const newNode = new Node(newData);
  newNode.next = prevData.next;
  prevData.next = newNode;
};

//INSERTION AT END

const append = (newData) => {
  if (head == null) {
    const head = new Node(newData);
    return;
  }
  const newNode = new Node(newData);
  newNode.next = null;

  let last = head;
  while (last.next != null) {
    last = last.next;
  }
  last.next = newNode;
};

var head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);

head.next = second;
second.next = third;
third.next = fourth;

console.log("Lists");
linkedList();

// console.log('Inserted at begining')
// push(9)
// linkedList()

// console.log('Inserted after specific node');
// insertAfterNode(second,5)
// linkedList()

// console.log('Inserted to end')
// append(70)
// linkedList()
