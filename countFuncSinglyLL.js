// Problem Statement
// Write a Count() function that counts the number of times a given integer occurs in a list.

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
}

// Solution for the problem statement
LinkedList.prototype.count = function(num){
    if(!this.head){
        return;
    }
    let count = 0;
    let curr = this.head;
    while(curr !== null){
        if(curr.data == num){
            count++;
        }
        curr = curr.next;
    }
    return count
}

let list = new LinkedList();
list.insertFirst(1);
list.insertLast(2);
list.insertLast(2);
list.insertLast(2);
list.insertLast(3);  
list.insertLast(3);  
list.printList();
list.count(2);
list.count(3);
