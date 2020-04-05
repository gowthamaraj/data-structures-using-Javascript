class NodeItem {
    constructor(data) {
        this.value = data
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new NodeItem(value)

        if (!this.root) {
            this.root = newNode
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (!root.left) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (!root.right) {
                root.right = newNode
            }
            else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    remove(value) {
        if (!this.root) {
            return "Tree is empty!"
        }
        else {
            this.removeNode(this.root, value)
        }
    }
    removeNode(root, value) {
        if (!root) {
            return null
        }
        else if (value < root.value) {
            root.left = this.removeNode(root.left, value)
            return root
        }
        else if (value > root.value) {
            root.right = this.removeNode(root.right, value)
            return root
        }
        else {

            //no children
            if (root.left === null && root.right === null) {
                root = null;
                return root;
            }

            //one children
            if (root.left === null) {
                root = root.right;
                return root;
            }
            else if (root.right === null) {
                root = root.left;
                return root;
            }

            //two children
            var aux = this.findMinNode(root.right);
            root.data = aux.data;

            root.right = this.removeNode(root.right, aux.data);
            return root;
        }
    }
    findMinNode(node) {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }
}