// Problem Statement
// Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes any duplicate nodes from the list. Ideally, the list should only be traversed once.

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
}
LinkedList.prototype.removeDuplicates = function(){
    if(!this.head || !this.head.next){
        return this.head;
    }
    let node = this.head;
    while(node.next !== null){
        if(node.data == node.next.data){
            node.next = node.next.next;
        }
        else{
            node = node.next;
        }
    }
    return this.head;
}

