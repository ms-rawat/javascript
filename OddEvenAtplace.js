function oddEvenList(head){
    if(!head || !head.next) return head;


let odd = head;
let even = head.next;

let evenHead = even;

while (even && even.next)
{
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
}
odd.next = evenHead;

return head;
}


class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  // 1 -> 2 -> 3 -> 4 -> 5 becomes 1 -> 3 -> 5 -> 2 -> 4
  const node5 = new ListNode(5);
  const node4 = new ListNode(4, node5);
  const node3 = new ListNode(3, node4);
  const node2 = new ListNode(2, node3);
  const head = new ListNode(1, node2);
  
  function printList(node) {
    let result = [];
    while (node) {
      result.push(node.val);
      node = node.next;
    }
    console.log(result.join(' -> '));
  }
  
  const updatedHead = oddEvenList(head);
  printList(updatedHead); // Output: 1 -> 3 -> 5 -> 2 -> 4
  