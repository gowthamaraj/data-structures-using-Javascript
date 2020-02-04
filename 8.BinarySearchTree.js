class Node{
    constructor(data){
        this.value = data
        this.left= null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        let newNode = new Node(value)

        if(!this.root){
            this.root = newNode
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(root.value>newNode.value){
            if(!root.left){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(!root.right){
                root.right = newNode
            }
            else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    remove(value){
        if(!this.root){
            return "Tree is empty!"
        }
        else{
            this.removeNode(this.root,value)
        }
    }
    removeNode(root,value){
        if(!root){
            return null
        }
    }
}