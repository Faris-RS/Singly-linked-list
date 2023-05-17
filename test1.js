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
  
  var head = new Node(1);
  const second = new Node(2);
  const third = new Node(3);
  const fourth = new Node(4);
  
  head.next = second;
  second.next = third;
  third.next = fourth;
  
  console.log("Lists");
  linkedList();