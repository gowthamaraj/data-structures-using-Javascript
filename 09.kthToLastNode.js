// Given a linked list and a number k, write a function that returns the value at the k’th node from end of the linked list.

function kthToLastNode(k,head){
    let left = head
    let right = head

    for (let i = 0; i < k - 1; i++) {
        rightPointer = rightPointer.next;
      }

      while (rightPointer.next) {
        leftPointer  = leftPointer.next;
        rightPointer = rightPointer.next;
      }
      return leftPointer;
}