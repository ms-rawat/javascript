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


function reverseList(head){
    let prev - null;
    let curr = head;
    while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// using recursive apporoach

function reverseList(head)
{
    if(!head || !head.next) return head;

    let newHead = reverseList(head.next)
    head.next.next = head;
    head.next = null
    return newHead;k
}

function findMiddle(head){
    let slow = head;
    let fast  = head;
    while (fast && fast next){
        slow = slow.next;
        fast = fast.next.next;
    }
}