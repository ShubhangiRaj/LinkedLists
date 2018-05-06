// Problem Statement
// 5->7->17->13->11->null and 12->10->2->4->6->null, output: 5->12->7->10->17->2->13->4->11->6 ->null

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
    print(){
        if(!this.head){
            return
        }
        let node = this.head;
        while(node !== null){
            console.log(node.data);
            node = node.next;
        }
        return
    }
}
let list1 = new LinkedList();
list1.insertFirst(11);
list1.insertFirst(13);
list1.insertFirst(17);
list1.insertFirst(7);
list1.insertFirst(5);
let list2 = new LinkedList();
list2.insertFirst(6);
list2.insertFirst(4);
list2.insertFirst(2);
list2.insertFirst(10);
list2.insertFirst(12);

function mergeShuffle(headA, headB){
    p_curr = headA;
    q_curr = headB;
    let p_next, q_next;
    console.log(p_curr);
    console.log(q_curr);
    while(p_curr !== null && q_curr !== null){
        // save next pointers;
        p_next = p_curr.next;
        q_next = q_curr.next;

        // make q_curr as next of p_curr
        q_curr.next = p_next;
        p_curr.next = q_curr;

        // update current pointers for next iteration
        p_curr = p_next;
        q_curr = q_next;
    }
    return headA;
}
mergeShuffle(list1.head, list2.head);