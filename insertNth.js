import LinkedList from './linkedListStructure.js';

let newList = new LinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(2);
newList.push(4);

// Write a function InsertNth() which can insert a new node at
// any index within a list.

function insertNth(list, data, position){
    return list.insert(data, position);
}
insertNth(newList, 13, 5);
newList.print();