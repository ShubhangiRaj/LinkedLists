// Problem Statement
// Reverse a linked list by rearranging all .next pointers and head pointer. (Rescursive)

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
    insertFirst(data){
        this.head = new Node(data, this.head);
    }
    print(){
        if(!this.head){
            return
        }
        let node = this.head;
        while(node !== null){
            console.log(node.data);
            node = node.next;
        }
        return
    }
    reverse(){
        if(!this.head){
            return
        }
        let prev = null;
        let curr = this.head;
        let next;

        while(curr !== null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        return this.head;
    }
    recursiveReverse(){
        
    }
}
