// Problem Statement
// Write a Pop() function that is the inverse of Push(). Pop() takes a non-empty list, deletes the head node, and returns the head node's data.

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    // same as insertFirst i.e. push node before head
    push(data){
        this.head = new Node(data, this.head);
    }

    // Stack follows LIFO. To implement pop() in linked list, remove last inserted node from the list.
    pop(){
        // no nodes in the list, i.e. no head
        if(!this.head){
            return;
        }
        // only one node in the list, i.e. the head node
        if(this.head.next == null){
            return this.head.data;
        }
        let node = this.head;
        this.head = this.head.next;
        node.next = null;
        
        return node.data;
    }
}

let list = new LinkedList();
list.push(4);
list.push(3);
list.push(2);
list.push(1);
list.pop(); // output: 1
