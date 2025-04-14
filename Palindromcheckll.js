function isPalindrom(head){
    let values=[];
    let current = head;
    while (current !==null)
    {
        values.push(current.val);
        current = current.next;
    }


let left =0;
let right = values.length-1;

while(left < right){
    if(values[left]!==values[right])
        return false;
    left ++;
    right --; 
}
return true;
}

class ListNode{
    constructor(val,next = null)
    {
        this.val = val;
        this.next = next;
    }
}

const node4 = new ListNode(1);
const node3 = new ListNode(2, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(3, node2);

console.log(isPalindrom(head)); // Output: true