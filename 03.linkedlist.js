class LinkedList{
    constructor(value){
        this.head = {value,next:null}
        this.tail = this.head
    }

    insert(value){
        const node = {value,next:null}
        this.tail.next= node
        this.tail = node
    }

    remove(value){
        let currentNode = this.head
        while(currentNode.next.value !== value){
            currentNode = currentNode.next
        }
        let next = currentNode.next.next
        currentNode.next.next = null
        currentNode.next = next
    }

    removeTail(){
        let currentNode = this.head
        while(currentNode.next !== this.tail){
            currentNode = currentNode.next
        }
        currentNode.next = null
        this.tail = currentNode
    }

    contains(value){
        let currentNode = this.head
        try {
            while(currentNode.value!==value){
                currentNode = currentNode.next;
            }
            return currentNode.value === value;
        } catch (error) {
            return false
        }
    }

    isHead(node){
        return node === this.head
    }

    isTail(node){
        return node === this.tail
    }
}

let L = new LinkedList(1)
L.insert(3)
L.insert(2)
console.log(L)  
console.log(L.contains(0))
L.remove(3)
console.log(L)  
