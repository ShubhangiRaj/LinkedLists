import LinkedList from './linkedListStructure.js';

let newList = new LinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);
newList.push(5);
newList.push(6);
newList.push(7);

// Given a list, split it into two sublists — one for the front half, and one for the back half. If
// the number of elements is odd, the extra element should go in the front list. So
// FrontBackSplit() on the list {2, 3, 5, 7, 11} should yield the two lists {2, 3, 5} and {7, 11}.

// function frontBackSplit(list){
//     // if no head, list doesnt exsist
//     if(!list.head){
//         return
//     }
//     // if only one node in the list
//     if(list.length() === 1){
//         return list.head;
//     }
//     // find length of list
//     let listLength = list.length();
//     console.log(listLength);
//     let currHead = list.head;
//     let count = 0;
//     if(listLength % 2 !== 0){
//         count = Math.floor(listLength / 2) + 1;
//     } else {
//         count = Math.floor(listLength / 2);
//     }
//     console.log(count);
//     while(count > 1){
//         currHead = currHead.next;
//         count--;
//     }
//     console.log(currHead.data);
//     let backListHead = currHead.next;
//     currHead.next = null;
//     return {frontList : list.head, backList : backListHead};
// }

// frontBackSplit(newList);
// 1 -> 2 -> 3 -> 4 -> 5 -> null

// slow and fast pointer approach
function FrontBackSplit_2(list){
    if(!list.head){
        return
    }
    // if no head, list doesnt exsist
    if(!list.head){
        return
    }
    // if only one node in the list
    if(list.length() === 1){
        return list.head;
    }
    let slowPointer = list.head;
    let fastPointer = list.head.next;
    while(fastPointer !== null && fastPointer.next !== null){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    let backListHead = slowPointer.next;
    slowPointer.next = null;
    return {frontList : list.head, backList : backListHead};
}

FrontBackSplit_2(newList);