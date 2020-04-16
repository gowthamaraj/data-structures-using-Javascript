const LEFT = 0
const RIGHT = 1

class TreeNode{
    constructor(value){
        this.value = value
        this.descendents =[]
        this.parent = null
    }

    get left(){
        return this.descendents[LEFT]
    }

    set left(node){
        this.descendents[LEFT] = node
        if(node){
            node.parent = this
        }
    }
    get right(){
        return this.descendents[RIGHT]
    }

    set right(node){
        this.descendents[RIGHT] = node
        if(node){
            node.parent = this
        }
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
        this.size= 0
    }

    add(value){
        const newNode = new TreeNode(value)
        if(this.root){
            const { found, parent } = this.findNodeAndParent(value);
            if(value < parent.value){
                parent.LEFT = newNode
            }else{
                parent.RIGHT = newNode
            }
        }
        else{
            this.root = newNode
        }
        this.size += 1;
        return newNode;
    }
    findNodeAndParent(value){
        let node = this.root
        let parent
        while(node){
            if(node.value === value){
                break
            }
            parent = node
            node=(value>=node.value)?node.right:node.left
        }
        return {found: node, parent}
    }
    find(value)
    remove(value)
    getMax()
    getMin()
}