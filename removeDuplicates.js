import LinkedList from './linkedListStructure.js';

let newList = new LinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(2);
newList.push(4);
newList.push(3);
newList.push(3);
newList.push(5);
newList.push(1);
newList.push(6);
newList.push(10);

// Write a RemoveDuplicates() function which takes a list sorted in increasing order and
// deletes any duplicate nodes from the list. Ideally, the list should only be traversed once.

function removeDuplicates(list){
    if(!list.head){ return }
    if(!list.head.next){ return }
    let currNode = list.head;
    let prevNode = null;
    let uniqueArr = [];
    while(currNode !== null ){
        if(uniqueArr.indexOf(currNode.data) == -1){
            uniqueArr.push(currNode.data);
            prevNode = currNode;
            currNode = currNode.next;
        } else if(uniqueArr.indexOf(currNode.data) >= 0){
            // remove node
            prevNode.next = currNode.next;
            currNode = prevNode.next;
        }
    }
    return list.head;
}

newList.print();
console.log("====");
removeDuplicates(newList);
newList.print();