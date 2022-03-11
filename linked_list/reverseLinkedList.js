class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

head = new Node(11);
head.next = new Node(9);
head.next.next = new Node(7);
head.next.next.next = new Node(4);

const reverseLinkedList = (head) => {
  if (head == null) return [];
  let curr = head;
  let prev = null;

  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

console.log(reverseLinkedList(head));
