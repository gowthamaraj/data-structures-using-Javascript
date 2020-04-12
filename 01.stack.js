class Stack{
    constructor(){
        this._storage = {}
        this._length =0
    }
    push(value){
        this._storage[this._length] = value
        this._length = this._length + 1
    }
    pop(){
        if(this._length){
         let pop_value =  this._storage[this._length-1]
        delete this._storage[this._length-1]
        this._length = this._length - 1
        return pop_value   
        }
    }
    peek(){
        return this._storage[this._length-1]
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack)
stack.pop()
console.log(stack)
console.log(stack.peek())