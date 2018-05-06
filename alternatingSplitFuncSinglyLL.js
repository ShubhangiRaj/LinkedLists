// Problem Statement
// Input: 1->2->3->4->5->null, Output: 1->3->5->null, 2->4->null

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
    pop(){
        // no nodes in the list, i.e. no head
        if(!this.head){
            return null;
        }
        // only one node in the list, i.e. the head node
        if(this.head.next == null){
            let temp = this.head;
            this.head = null;
            temp.next = null;
            return temp;
        }
        let node = this.head;
        this.head = this.head.next;
        node.next = null;
        
        return node;
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
    print(){
        if(!this.head){
            return;
        }
        let node = this.head;
        while(node !== null){
            console.log(node.data);
            node = node.next;
        }
        return
    }
    size(){
        if(!this.head){
            return 0;
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

let list = new LinkedList();
let subList_1 = new LinkedList();
let subList_2 = new LinkedList();
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertFirst(4);
list.insertFirst(5);

function alternatingSplit(list, subList_1, subList_2){ 
    if(list.head == null || list.head.next == null){
        return;
    }
    else {
        while(list.size() > 0){
            let elem = list.pop();
            subList_1.insertLast(elem.data);
            if(list.size() !== 0){
                elem = list.pop();
                subList_2.insertLast(elem.data);
            }
        }
    }
}

alternatingSplit(list, subList_1, subList_2);

subList_1.print();
console.log('##########');
subList_2.print();