class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
export default class LinkedList{
    constructor(){
        this.head = null;
    }
    push(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        } else {
            let currNode = this.head;
            while(currNode.next !== null){
                currNode = currNode.next;
            }
            currNode.next = newNode;
        }
        return this.head;
    }
    // remove last inserted node from the list
    pop(){
        if(!this.head){
            return
        } else {
            let currNode = this.head;
            let p1 = null;
            while(currNode.next){
                p1 = currNode;
                currNode = currNode.next;
            }
            console.log(`${currNode.data} is popped from the list`);
            p1.next = null;
            return this.head;
        }
    }
    // remove node from the start of the list
    shift(){
        if(!this.head){
            console.log(`List is empty. Nothing to pop`);
            return
        } else {
            let currNode = this.head;
            this.head = currNode.next;
            currNode.next = null;
            console.log(currNode.data);
            return currNode;
        }
    }
    // adding new node to start of the list
    unshift(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return this.head;
        } else {
            let currNode = this.head;
            this.head = newNode;
            newNode.next = currNode;
            return this.head;
        }
    }
    // retrieve a node by its position in the list 0 -> 1 -> 2 -> ....
    get(position){
        if(!this.head){
            return
        } 
        if(position >= this.length()){
            console.log(-1);
            return -1;
        }
        if(position === 0 && this.head){
            console.log(this.head.data);
            return this.head;
        }
        let currNode = this.head;
        let count = 0;
        while(count < position){
            currNode = currNode.next;
            count++;
        }
        console.log(`${currNode.data} is at ${position}`);
        return currNode;
    }
    // changing value of a node based on it's position in the list 0 -> 1 -> ...
    set(data, position){
        let node = this.get(position);
        if(!node){
            return
        } else {
            node.data = data;
            console.log(`New data value ${data} set on node at position ${position}`);
            return this.head;
        }
    }
    // number of nodes in the list
    length(){
        if(!this.head){
            return 0
        } else {
            let currNode = this.head;
            let count = 0;
            while(currNode !== null){
                currNode = currNode.next;
                count += 1;
            }
            // console.log(`Length of linked list is ${count}`)
            return count;
        }
    }
    // insert a node at a specific position in the list
    insert(data, position){
        if(!this.head || position < 0 || position > this.length()){
            console.log(`Invalid position. The position is out of bounds.`);
            return
        }
        // insert at the start of the list
        if(position === 0){
            this.unshift(data);
            return this.head;
        }
        // insert at the end of the list
        if(position === this.length()){
            this.push(data);
            return this.head;
        }
        // current node at the given position 
        let currNode = this.get(position);
        let p1 = this.head;
        while(p1.next !== currNode){
            p1 = p1.next;
        }
        // once prev node is found
        let newNode = new Node(data);
        p1.next = newNode;
        newNode.next = currNode;
        console.log(`New node with value ${data} inserted at position ${position}`)
        return this.head;
    }
    // remove the node from a specific position
    remove(position){
        let currNode = this.get(position);
        if(!currNode){
            return 
        } else {
            let p1 = this.head;
            while(p1.next !== currNode){
                p1 = p1.next;
            }
            // once prev node is fetched, set prevNode.next => currNode.next;
            console.log(`Removing node at position ${position} which had value ${currNode.data}`);
            p1.next = currNode.next;
            return this.head;
        }
    }
    // recursively reverse a list
    printReverse(){
        let currNode = this.head;
        return recursiveReverse(currNode);

        function recursiveReverse(node){
            if(node.next === null){
                console.log(node.data);
                return;
            }
            recursiveReverse(node.next);
            console.log(node.data);
            return;
        }        
    }
    reverse(){
        if(!this.head){ return };
        let currHead = this.head;
        let p1 = null;
        let p2 = this.head;
        if(!p2.next){
            console.log(p2.data);
            return this.head;
        }
        // else if head exsists and list length is more than 1
        recursiveReverse(p1, p2);
        this.head = currHead;
        return this;
        function recursiveReverse(node1, node2){
            if(node2.next === null){
                currHead = node2;
                return;
            }
            node1 = node2;
            node2 = node2.next;
            recursiveReverse(node1, node2);
            node2.next = node1;
            node1.next = null;
            return;

        }
    }
    // swapDataInNodesInPair(){
    //     if(!this.head){
    //         return
    //     }
    //     if(!this.head.next){
    //         return this.head;
    //     }
    //     let p1 = this.head;
    //     let p2 = this.head.next;
    //     let temp = recursiveSwap(p1, p2);
    //     this.head = temp;
    //     return this.head;

    //     function recursiveSwap(node1, node2){
    //         // let node3 = node2.next;
    //         // node1.next = node2.next;
    //         // node2.next = node1;

    //         if(node2.next === null){
    //             let temp = node
    //             node1.data = node2.data;
    //             node2.
    //             return node2;
    //         }
    //         node1 = node2.next;
    //         node2 = node1.next;
    //         let temp = recursiveSwap(node1, node2);
    //         node1.next = temp.next;
    //         node2.next = node1;
    //         return temp;
    //     }
    // }
    print(){
        if(!this.head){
            console.log(`List is empty. Nothing to print`);
            return;
        }
        let currNode = this.head;
        while(currNode !== null){
            console.log(currNode.data);
            currNode = currNode.next;
        }
    }
}

// let list1 = new LinkedList();
// list1.push(1);
// list1.push(2);
// list1.push(3);
// list1.push(4);
// list1.print();
// console.log("=====");
// list1.printReverse();
// console.log("=====");
// list1.print();
// console.log("=====");
// list1.reverse();
// list1.print();
// list1.swapNodesInPair();
// console.log("=====");
// list1.print();
// list1.print();
// console.log("=====")
// list1.pop();
// console.log("=====")
// list1.print();
// console.log("=====");
// list1.shift();
// list1.print();
// console.log("=====");
// list1.unshift(1);
// list1.print();
// console.log("=====");
// list1.push(6);
// list1.push(7);
// list1.print();
// console.log("=====");
// list1.get(1);
// list1.get(2);
// list1.get(4);
// console.log("=====");
// list1.set(25, 3);
// console.log("=====");
// list1.print();
// console.log("=====");
// list1.length();
// console.log("=====");
// list1.insert(13, 4);
// console.log("=====");
// list1.print();
// console.log("=====");
// list1.length();
// console.log("=====");
// list1.remove(2);
// list1.length();
// console.log("=====");
// list1.print();
