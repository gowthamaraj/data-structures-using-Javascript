// Given a linked list and a value x, partition it such that all nodes less than x come first, then all nodes with value equal to x and finally nodes with value greater than or equal to x. The original relative order of the nodes in each of the three partitions should be preserved. The partition must work in-place.

function partition(head,x){
    let node = head;
    let lessHead, lessTail,greaterHead,greaterTail
    lessHead= lessTail=greaterHead=greaterTail = null

    while(node){
        let next = node.next
        node.next = null
        if(node.x >= x){
            if(!greaterTail){
                greaterHead=greaterTail=node
            }
            else{
                greaterTail.next=node
                greaterTail = node
            }
            
        }

        else{
            if(!lessTail){
                lessHead=lessTail=node
            }
            else{
                lessTail.next=node
                lessTail = node
            }
        }
    }
    if(lessTail){
        lessTail.next = greaterHead
    }

    return  lessThanXTail || greaterThanXHead;
}