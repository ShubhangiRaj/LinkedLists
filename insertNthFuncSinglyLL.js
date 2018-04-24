// Problem Statement
// Write a function InsertNth() which can insert a new node at any index within a list.

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
    
    // helper function getAt() to reach to a given position and return node present at that position.
    getAt(index){
        let currPosition = 0;
        let currNode = this.head;
        while(currNode !== null){
            if(currPosition == index){
                return currNode;
            }
            currPosition++;
            currNode = currNode.next;
        }
        return null;
    }

    // insertNth() can make use of the helper function above to insert a node at a given position
    insertNth(data, index){
        if(!this.head){
            this.head = new Node(data, this.head);
        }
        // if new node needs to be inserted at the front of the list i.e. before the head. 
        if(index == 0){
            this.head = new Node(data, this.head);
        }

        let previousNode = this.getAt(index - 1);
        let newNode = new Node(data);
        
        if(previousNode !== null){
            newNode.next = previous.next;
            previousNode.next = newNode;
        }
        return this.head;
    }
}