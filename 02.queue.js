class Queue{
    constructor(){
        this._storage ={}
        this._length = 0
        this._headIndex = 0
    }
    enqueue(value){
        this._storage[this._length+this._headIndex] = value
        this._length = this._length +1
    }
    dequeue(){
        if(this._length){
          let val =  this._storage[this._headIndex]
        delete this._storage[this._headIndex]
        this._headIndex = this._headIndex +1
        this._length = this._length - 1
        return val  
        }
        
    }
    peek(){
        return this._storage[this._headIndex]
    }
}

let q = new Queue()
q.enqueue('one')
q.enqueue('two')
q.enqueue('three')
console.log(q)
q.dequeue()
console.log(q)
q.enqueue('four')
console.log(q)
console.log(q.peek())