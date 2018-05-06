// Problem Statement
// Write an InsertSort() function which given a list, rearranges its nodes so they are sorted in
// increasing order. It should use SortedInsert().

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
    
}
let list = new LinkedList();
list.insertLast(14);
list.insertLast(10);
list.insertLast(20);
list.insertLast(2);

function sortedInsert(head, data){
    let newNode = new Node(data);
    if(head == null){
        head = newNode;
    }
    else if(newNode.data < head.data){
        newNode.next = head;
        head = newNode;
    }
    else{
        let prev = null; 
        let curr = head;
        while(curr !== null && newNode.data >= curr.data){
            prev = curr;
            curr = curr.next;
        }
        prev.next = newNode;
        newNode.next = curr;
    }
    return head;
}
// input: 14->10->20->2->null
function insertionSort(head){
    let resultList = new LinkedList();
    let curr = head;
    let next;
    while(curr !== null){
        next = curr.next;
        this.sortedInsert(resultList.head, curr.data);
        curr = curr.next;
    }
    head = resultList.head
}