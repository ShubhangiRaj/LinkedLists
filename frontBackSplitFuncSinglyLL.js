// Problem Statement
// Given a list, split it into two. If the list is odd, the extra number should go in the first half. 

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
}

// helper function to find midpoint in a list
LinkedList.prototype.midPoint = function(){
    let slowPtr = this.head;
    let fastPtr = this.head;

    while(fastPtr.next !== null && fastPtr.next.next !== null){
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }
    return slowPtr;
}

LinkedList.prototype.frontBackSplit = function(){
    // assign midpoint of the list to node
    let node = this.midPoint();
    // backList is formed from node.next node
    let backList = node.next;
    // in the frontList, node.next can now point to null
    node.next = null;

    return backList; 
}
