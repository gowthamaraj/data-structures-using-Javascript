class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class tree{
    constructor(){
        this.root = null 
    }

    // add
   add(val){
       if(this.root == null){
           this.root = new Node(val)
       }
       else{
            let node = this.root
            this.addHelper(node,val)
       }
   }
   addHelper(node,val){
    if(val>node.val){
         if(node.right == null){
             node.right = new Node(val)
         }else{
            this.addHelper(node.right,val)
         }
    }else{
        if(node.left == null){
            node.left = new Node(val)
        }else{
           this.addHelper(node.left,val)
        }
    }
   }


//    traverse
   traverse(){
       let node = this.root
       
   }
}

let t = new tree()
t.add(1)
console.log(t);
t.add(2)
console.log(t);
t.add(3)
console.log(t);
