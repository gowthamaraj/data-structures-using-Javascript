// Given pointer to the head node of a linked list, reverse the linked list.

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

function reverse(head){
    let currentNode = head
    let previosNode = null
    let nextNode = null
    while(currentNode){
        nextNode = currentNode.next
        currentNode.next = previosNode
        previosNode = currentNode
        currentNode = nextNode
    }
    return previosNode
}