class Stack{
    constructor()
    {
        this.items=[];
    }
    push(elements){
        this.items.push(elements)
    }
    pop(){
        if(this.Empty())
        {
            return "underflow - Stack is empty";
        }
        return this.items.pop();
    }
    isEmpty(){
        return this.items.length===0;
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
    clear()
    {
        this.items=[]
    }
}

const stack = new Stack();

stack.push(10)
stack.push(20);
stack.push(30)

console.log(stack.print())