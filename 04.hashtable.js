class HashTable{
    constructor(val){
        this._storage = []
        this._tablesize = val
        this._inputsize = 0
    }

    insert(key,value){
        const index = this._hash(key,this._tablesize )

        if(!this._storage[index]){
            this._storage[index]=[]
        }
        this._storage[index].push([key,value])
    }

    remove(key){
        const index = this._hash(key,this._tablesize )
        if(this._storage[index]){
            this._storage[index] = this._storage[index].filter(item =>{
                item[0]!==key
            })
        }
        else{
            return  -1
        }
    }

    retrieve(key){
        const index = this._hash(key, this._tablesize)
        const data = this._storage[index]

        if(data){
            for (const item of data) {
                if(key === item[0]){
                    return item
                }
            }
        }else{
            return -1
        }
    }

    _hash(str,n){
        let sum = 0
        for(let i =0;i<str.length;i++){
            sum+=str.charCodeAt(i)*3
        }
        return sum%n
    }
}

let ht = new HashTable(5)
ht.insert('a',1)
ht.insert('b',1)
ht.insert('d',1)
ht.insert('f',1)
ht.insert('h',1)
console.log(ht._storage[0])
console.log(ht._storage[1])
console.log(ht._storage[2])
console.log(ht._storage[3])
console.log(ht._storage[4])
console.log(ht.retrieve('d'))
console.log(ht.remove('d'))
console.log(ht._storage[0])
console.log(ht._storage[1])
console.log(ht._storage[2])
console.log(ht._storage[3])
console.log(ht._storage[4])