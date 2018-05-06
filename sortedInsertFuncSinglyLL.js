// Problem Statement
// Write a sortedInsert() function which given a sorted list inserts a new node into correct sorted position.

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
    insertLast(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        } else {
            let node = this.head;
            while(node.next !== null){
                node = node.next;
            }
            node.next = newNode;
        }
    }
    printList(){
        if(!this.head){
            return;
        }
        let curr = this.head;
        while(curr !== null){
            console.log(curr.data);
            curr = curr.next;
        }
    }
    sortedInsert(data){
        let newNode = new Node(data);
        if(this.head == null){
            this.head = newNode;
        }
        else if(newNode.data < this.head.data){
            newNode.next = this.head;
            this.head = newNode;
        }
        else{
            let prev = null; 
            let curr = this.head;
            while(curr !== null && newNode.data >= curr.data){
                prev = curr;
                curr = curr.next;
            }
            prev.next = newNode;
            newNode.next = curr;
        }
        return this.head;
    }
}