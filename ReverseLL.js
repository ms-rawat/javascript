class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;

    }
}

function reverseList(head){
    let prev  = null;
    let current = head;
    let next = null;
    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next; 
    }
    return prev;
}

const head = new ListNode(1);
const next = new ListNode(2);
head.next = new ListNode(3);

const reversed = reverseList(head);

let temp = reversed;
while(temp)
{
    console.log(temp.value);
    temp = temp.next;
}