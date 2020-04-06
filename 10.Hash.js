class HashTable{
    constructor(){
        this.table = new Array(255)
    }
    insert(value){
        this.table[this.hash(value,255)] = value
    }
    hash(value,max){
        let num = 0
        for(let i=0;i<value.length;i++){
            num += value.charCodeAt(i) * i
        }
        return num % max;  
    }
    show(){
        return this.table
    }
}

const table = new HashTable();
table.insert('hi');
table.insert('this is fun');
table.insert('another thing');
console.log(table.show())