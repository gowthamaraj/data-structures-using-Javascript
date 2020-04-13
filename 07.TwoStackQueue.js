class TwoStackQueue{
    constructor(){
        this._in = []
        this._out = []
    }

    enqueue(value){
        this._in.push(value)
    }

    dequeue(){
        if(!this._out.length){
            if(this._in.length){
                while(this._in.length){
                    this._out.push(this._in.pop())
                }
            }
        }
        return this._out.pop()
    }
}

let sq = new TwoStackQueue()
sq.enqueue(1)
sq.enqueue(2)
sq.enqueue(3)
console.log(sq)
sq.dequeue()
console.log(sq)