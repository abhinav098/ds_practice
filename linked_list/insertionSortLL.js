class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var insertionSortList = function (head) {
  let dummy = new ListNode();
  let curr = head;
  while (curr != null) {
    let prev = dummy;

    while (prev.next != null && prev.next.val < curr.val) {
      prev = prev.next;
    }

    let next = curr.next;
    curr.next = prev.next;
    prev.next = curr;
    curr = next;
  }
  return dummy.next;
};

console.log(insertionSortList(head));
