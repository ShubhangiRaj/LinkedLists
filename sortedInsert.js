import LinkedList from './linkedListStructure.js';

let newList = new LinkedList();
newList.push(1);
newList.push(2);
newList.push(4);
newList.push(5);
newList.push(8);
newList.push(10);

// Write a SortedInsert() function which given a list that is sorted in increasing order, and a
// single node, inserts the node into the correct sorted position in the list.

function sortedInsert(list, data){
    // insert data in the sorted list
    if(!list.head){
        console.log(`List is empty`);
        return;
    }
    let currNode = list.head;
    let indexCount = 0;
    while(currNode !== null){
        if(currNode.data < data){
            indexCount++;
        } else if (currNode.data >= data){
            break;
        }
        currNode = currNode.next;
    } 
    // indexCount is the position where the data will fit
    return list.insert(data, indexCount);
}

sortedInsert(newList, 9);
sortedInsert(newList, 11);
newList.print();