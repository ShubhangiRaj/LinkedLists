import LinkedList from '../linkedListStructure.js';

let newList = new LinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);
newList.push(5);
newList.push(6);
newList.push(7);

function printReverse(list){
    if(!list.head){
        console.log("List is empty. Nothing to print");
        return;
    }
    else {
        return reverse(list.head);
    }
}
function reverse(node){
    if(node.next === null){
        console.log(node.data);
        return;
    }
    reverse(node.next);
    console.log(node.data);
    return;
}
printReverse(newList);