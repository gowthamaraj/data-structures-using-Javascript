class KStacks{
    constructor(k){
        this._storage = []
        this._length = new Array(k).fill(0)
    }

    _getLength(stackId){
        return this._length[stackId-1]
    }

    push(stackId,value){
        let idx = this._getLength(stackId)*3 + stackId -1
        this._storage[idx] = value
        this._length[stackId-1] =  this._length[stackId-1] +1
    }

    pop(stackId){
        let length = this._length[stackId-1],value
        if(length){
            let idx = (length-1) + stackId-1
            value  = this._storage[idx]
            this._storage[idx] = undefined
            this._length[stackId-1] =  this._length[stackId-1] - 1
        }
        return value
    }

    peek(stackId){
        let length = this._length[stackId-1],value
        if(length){
            let idx = (length-1) + stackId-1
            value  = this._storage[idx]
        }
        return value
    }

    isEmpty(stackId){
        return this._length[stackId-1]===0
    }
}

let ks = new KStacks(10)
console.log(ks.isEmpty(1))
ks.push(1,'one')
console.log(ks)
ks.push(2,'two')
ks.push(2,'three')
console.log(ks)
console.log(ks.pop(1))
console.log(ks)