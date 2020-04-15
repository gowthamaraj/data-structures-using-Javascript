class Node{
    constructor(val){
        this.val = val;
        this.children = []
    }
}

class Tree{
    constructor(val){
        this.root = new Node(val)
    }

    insert(val){
        let node = new Node(val)
        this.root.children.push(node)
    }
    insertNode(node){
        this.root.children.push(node)
    }

    remove(val){
        function del(node){
            if(!node.children){
                return
            }
            else{
                node.children = node.children.filter((child)=>{
                del(child)
                return child.value !== val
            })
            }
        }
        let node = this.root
        del(node)  
    }
}

let t =new Tree(1)
console.log(t);
t.insert(2)
console.log(t);
t.insert(3)
console.log(t);
t.insertNode(new Node(4))
console.log(t);
t.remove(4)
console.log(t.root);
