import LinkedList from './linkedListStructure.js';

let newList = new LinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(2);
newList.push(4);
// newList.print();

// Write a Count() function that counts the number of times a given int occurs in a list.
function countOfAnInteger(list, num){
    if(!list.head){
        return
    }
    let currHead = list.head;
    let count = 0;
    while(currHead !== null){
        if(currHead.data === num){
            count += 1;
        }
        currHead = currHead.next;
    }
    console.log(count);
    return count > 0 ? count : 0;
}

countOfAnInteger(newList, 5);