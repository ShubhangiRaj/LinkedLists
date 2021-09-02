import LinkedList from './linkedListStructure.js';

let newList = new LinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(2);
newList.push(4);

// Write a GetNth() function that takes a linked list and an integer index and returns the data
// value stored in the node at that index position. GetNth() uses the C numbering convention
// that the first node is index 0, the second is index 1, ... and so on.

function getNth(list, position){
    return list.get(position);
}

getNth(newList, 3);