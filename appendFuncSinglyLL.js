// Problem Statement
// Write a function Append() that takes two lists 'a' and 'b', appends 'b' to the end of 'a' and sets 'b' list to null

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
    // insert before the head node;
    push(data){
        this.head = new Node(data, this.head);
    }
    // remove first element
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
    size(){
        if(!this.head){
            return;
        }
        let count = 0;
        let node = this.head;
        while(node !== null){
            count++;
            node = node.next;
        }
        return count;
    }
    print() {
        if(!this.head){
            return
        }
        let node = this.head;
        while(node !== null){
            console.log(node.data);
            node = node.next;
        }
    }
}

let listA = new LinkedList();
let listB = new LinkedList();

listA.push(3);
listA.push(2);
listA.push(1);
listB.push(6);
listB.push(5);
listB.push(4);

function append(listA, listB){
    if(!listA.head && !listB.head){
        return;
    }
    if(!listA.head || !listB.head) {
        if(!listA.head){
            return listB.head;
        }
        if(!listB.head){
            return listA.head;
        }
    } 

    let node = listB.head;
    // traverse the listA to find the last node
    let curr = listA.head;
    while(curr.next !== null){
        curr = curr.next;
    } 
    // append listB to listA
    curr.next = node;
    //empty listB
    listB.head = null;
    return listA.head;
}