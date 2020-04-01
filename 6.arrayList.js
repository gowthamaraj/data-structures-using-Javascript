class ArrayList{
    constructor(){
        this.length = 0
        this.data={}
    }
    push(item){
        this.length = this.length+1
        this.data[this.length-1] = item
    }
    pop(){
        const item = this.data[this.length-1]
        delete this.data[this.lenght-1]
        this.length = this.length -1
        return item
    }
    get(index){
        const item = this.data[index]
        return item
    }
    delete(index){
        const item = this.data[index]
        this._collapseTO(index)
        return item
    }
    _collapseTO(index){
        for(let i=index;i<this.length;i++){
            this.data[i]=this.data[i+1]
        }
        delete this.data[this.length-1]
    }
    print(){
        return this.data
    }
}

let array = new ArrayList()
array.push(125)
array.push(100)
console.log(array.print())
array.pop(1)
console.log(array.print())
array.push(25)
array.push(10)
array.push(15)
array.push(30)
console.log(array.print())
array.delete(3)
console.log(array.print())