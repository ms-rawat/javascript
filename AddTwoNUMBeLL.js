function addTwoNumber(l1,l2){
    let dummyHead = new NodeList(0);
    let current = dummyHead;
    let carry =0;

    while(l1!==null || l2 !==null || carry!==0)
    {
        const val1 = l1 ?l1.val :0;
        const val2 = l2 ? l2.val: 0;

     sum = val1 + val2 + carry;
        carry = Math.florr(sum/0);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    return dummyHead.next;
}

function createList(arr){
    let dummy = new ListNode(0);
    let current = dummyHead;
    for(const num of arr){
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}