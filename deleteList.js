import LinkedList from './linkedListStructure.js';

let newList = new LinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(2);
newList.push(4);

// Write a function DeleteList() that takes a list, deallocates all of its memory and sets its
// head pointer to NULL (the empty list).

function deleteList(list){
    list.head = null;
    return;
}

deleteList(newList);
newList.print();