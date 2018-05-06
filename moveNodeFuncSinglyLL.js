// Problem Statement
// This is a variant on Push(). Instead of creating a new node and pushing it onto the given
// list, MoveNode() takes two lists, removes the front node from the second list and pushes
// it onto the front of the first.

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
            return null;
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
}

let listA = new LinkedList();
let listB = new LinkedList();

listA.push(3);
listA.push(2);
listA.push(1);
listB.push(6);
listB.push(5);
listB.push(4);

function moveNode(listA, listB){
    let nodeA = listA.head;
    let nodeB = listB.head;
    let currNode;
    let size = listB.size();
    while(size > 0){
        currNode = listB.pop();
        listA.push(currNode);
        size--;
    }
    return listA.head;
}

moveNode(listA, listB);
