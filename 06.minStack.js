class minStack{
    constructor(){
        this._storage = []
        this._min
    }

    push(value){
        this._storage.push({
            value,
            min:Math.min(this._min!==undefined?this._min:Number.POSITIVE_INFINITY,value)
        })
        this._min = Math.min(this._min!==undefined?this._min:Number.POSITIVE_INFINITY,value)
    }

    pop(){
        if(this._storage.length !== 0){
            return this._storage.pop().value
        }
    }

    peek(){
        if(this._storage.length !== 0){
            return this._storage[this._storage.length-1]
        }
    }

    min(){
        if(this._storage.length !== 0){
            return this._storage[this._storage.length-1].min
        }

    }
}

let ms = new minStack()
ms.push(1)
ms.push(2)
ms.push(3)
ms.push(4)
console.log(ms)
console.log(ms.min())
ms.pop()
console.log(ms)