class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.tail = this.head = null
        this.length= 0
    }
    push(value){
        let item = new Node(value)
        this.length = this.length +1
        if(!this.head){
            this.head = item
        }
        else{
            this.tail.next = item
        }
        this.tail = item
    }
    pop(){
        let helper = this.head
        while(helper.next.next){
            helper = helper.next
        }
        helper.next = null
        this.tail = helper
    }
    get(index){
        try {
            let current = this.head
        while(index--){
            current = current.next
        }
        return current?current:0
        } catch (error) {
            return 0
        }
    }
    delete(index){
        let helper = this.head
        index = index-1
        if(index<0){
            let helper = this.head.next
            let item = this.head
            this.head.next = null
            this.head = helper
            return item
        }
        while((helper.next.next)&&(index--)){
            helper = helper.next
        }
        helper.next = helper.next.next
        return helper.next
    }
    insert(index,value){
        let helper = this.head
        index = index-1
        if(index<0){
            let item = new Node(value)
            item.next = this.head
            this.head = item
            return item
        }
        while((helper.next.next)&&(index--)){
            helper = helper.next
        }
        let item = new Node(value)
        item.next = helper.next
        helper.next = item
        return item
    }
    print(){
        let current = this.head
        console.log('printing: ')
        while(current){
            console.log(current)
            current = current.next
        }
    }
}

let list = new LinkedList()
list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.print()
list.pop()
list.print()
console.log(list.get(3))
console.log(list.delete(2))
list.print()
console.log(list.insert(0,70))
list.print()
