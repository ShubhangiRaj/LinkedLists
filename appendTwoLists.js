import LinkedList from './linkedListStructure.js';

let newList1 = new LinkedList();
newList1.push(1);
newList1.push(2);
newList1.push(3);
newList1.push(4);

let newList2 = new LinkedList();
newList2.push(5);
newList2.push(6);
newList2.push(7);
newList2.push(8);

// Write an Append() function that takes two lists, 'a' and 'b', appends 'b' onto the end of 'a',
// and then sets 'b' to NULL (since it is now trailing off the end of 'a').

function appendTwoLists(list1, list2){
    if(!list1.head || !list2.head){
        return;
    }
    let currHeadOfList1 = list1.head;
    let currHeadOfList2 = list2.head;

    while(currHeadOfList1.next !== null){
        currHeadOfList1 = currHeadOfList1.next;
    }
    // currHeadOfList1 now points to the last node of the list1
    // we need to point last node of list1 to head of list2
    currHeadOfList1.next = currHeadOfList2;
    list2.head = null;
    return list1.head;
}

console.log(`Printing newList1`);
newList1.print();
console.log("====");
console.log(`Printing newList2`);
newList2.print();
console.log("====");
// call appendTwoLists
appendTwoLists(newList1, newList2);
// print newList1
console.log(`Printing newList1`);
newList1.print();
console.log("====");
// print newList2, and you should get empty list error msg in console.
console.log(`Printing newList2`);
newList2.print();