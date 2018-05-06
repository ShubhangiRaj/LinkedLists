// Problem Statement
// You’re given the pointer to the head nodes of two sorted linked lists. 
// The data in both lists will be sorted in ascending order. 
// Change the next pointers to obtain a single, merged linked list which also has data in ascending order.
// Either head pointer given may be null meaning that the corresponding list is empty.

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

function merge(headA, headB){
    if(!headA){
        return headB;
    }
    if(!headB){
        return headA;
    }
    let sorting; // sorting pointer
    if(headA !== null && headB !== null){
        if(headA.data <= headB.data){
            sorting = headA;
            headA = sorting.next;
        } else {
            sorting = headB;
            headB = sorting.next;
        }
    }
    let head = sorting; // The value of sorting from above is assigned to head. Which will the first node of merged LL.
    while(headA !== null && headB !== null){
        if(headA.data <= headB.data){
            sorting.next = headA;
            sorting = headA;
            headA = sorting.next;
        } else {
            sorting.next = headB;
            sorting = headB;
            headB = sorting.next;
        }
    }
    if(headA == null){
        sorting.next = headB;
    }
    if(headB == null){
        sorting.next = headA;
    }
    return head;
}

let list = new LinkedList();
list.insertFirst(14);
list.insertFirst(7);
list.insertFirst(4);
list.insertFirst(1);

let list2 = new LinkedList();
list2.insertFirst(8);
list2.insertFirst(5);
list2.insertFirst(2);
list2.insertFirst(1);