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
        }
        let node = this.head;
        while(node.next !== null){
            node = node.next;
        }
        node.next = newNode;
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
        if(!this.head){
            newNode.next = this.head;
            this.head = newNode;
        }
        if(this.head.data >= data){
            newNode.next = this.head;
            this.head = newNode;
        }
        let currNode = this.head;
        while(currNode.next !== null && currNode.next.data < data){
            currNode = currNode.next;
        }
        newNode.next = currNode.next;
        currNode.next = newNode;

        return this.head;
    }
}