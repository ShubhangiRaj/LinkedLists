import LinkedList from './linkedListStructure.js';

let newList = new LinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(2);
newList.push(4);

// Write a Pop() function that is the inverse of Push(). Pop() takes a non-empty list, deletes
// the head node, and returns the head node's data.

function pop(list){
    return list.shift();
}

pop(newList);
pop(newList);
console.log("====");
newList.print();