// Problem Statement
// Given two lists sorted in increasing order, create and return a new list representing the intersection of the two lists. The new list should be made with its own memory — the original lists should not be changed.
// For example, let the first linked list be 1->2->3->4->6 and second linked list be 2->4->6->8, then your function should create and return a third list as 2->4->6.

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
}
function sortedIntersect(headA, headB){
    let resultList = new LinkedList();
    let tempA = headA;
    let tempB = headB;
    if(!tempA){
        return null;
    }
    if(!tempB){
        return null;
    }
    while(tempA !== null && tempB !== null){
        if(tempA.data == tempB.data){
            resultList.insertLast(tempA.data);
            tempA = tempA.next;
            tempB = tempB.next;
        }
        else if(tempA.data < tempB.data){
            tempA = tempA.next;
        } else {
            tempB = tempB.next;
        }
    }
    return resultList.head;
}

let list = new LinkedList();
list.insertLast(10);
list.insertLast(20);
list.insertLast(40);
list.insertLast(54);
let list2 = new LinkedList();
list2.insertLast(13);
list2.insertLast(20);
list2.insertLast(54);
list2.insertLast(66);

sortedIntersect(list.head, list2.head);