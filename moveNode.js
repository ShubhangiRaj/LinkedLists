import LinkedList from './linkedListStructure.js';

let newList = new LinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);
newList.push(5);
newList.push(6);
newList.push(7);

let newList_2 = new LinkedList();
newList_2.push(4);
newList_2.push(5);
newList_2.push(6);
newList_2.push(7);

// This is a variant on Push(). Instead of creating a new node and pushing it onto the given
// list, MoveNode() takes two lists, removes the front node from the second list and pushes
// it onto the front of the first.

function moveNode(list1, list2){
    if(!list1.head && !list2.head){
        return
    }
    let list1_head = list1.head;
    let list2_head = list2.head;
    let list2_new_head = list2_head.next;
    list2.head = list2_new_head;
    list2_head.next = list1_head;
    list1.head = list2_head;
    
    list1.print();
    console.log("-----");
    list2.print();
    return list1.head;
}
moveNode(newList, newList_2);