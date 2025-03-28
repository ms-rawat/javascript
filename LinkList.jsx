class LNode{
    constructor(data){
        this.data = data,
        this.next= null;
    }
}


class LinkList{
    constructor()
    {
        this.head=null,
        this.size = 0
    }


    append(data){
        const newNode = new LNode(data);
        if(!this.head)
        {
            this.head = newNode;
        }else{
            let currrent = this.head;
            while(currrent.next){
                currrent = currrent.next
            }
           this.size++;
           return this;
        }
    }

    insertAt(data,index)
    {
        if(index < 0 || index > this.size)
        {
            throw new Error('Invalid index')
        }
        const newNode = new LNode(data)
        if(index == 0)
        {
            newNode.next = this.head;
            this.head = newNode;
        }else{
            let current = this.head;
            let previous = null;
            let count = 0;

            while(count < index)
            {
                previous = current;
                current = current.next;
                count++;
            }
            newNode.next = current;
            previous.next = newNode
        }
        this.size++;
        return this;
    }
}