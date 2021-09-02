import LinkedList from '../linkedListStructure.js';

let list1 = new LinkedList();
list1.push(1);
list1.push(2);
list1.push(6);
list1.push(3);
list1.push(4);
list1.push(5);
list1.push(6);

function removeElements(head, val){
    if(!head){
        return;
    }
    let currNode = head;
    let prevNode = null;
    let result = recursiveRemove(prevNode, currNode, val);
    return result;

    function recursiveRemove(prevNode, currNode, val){
        if(currNode.next === null){
            return;
        }
        prevNode = currNode;
        currNode = currNode.next;
        recursiveRemove(prevNode, currNode, val);
        if(currNode.data === val){
            prevNode.next = currNode.next;
            currNode.next = null;
            return prevNode;
        } else {
            return prevNode;
        }
    }
}

removeElements(list1.head, 6);
list1.print();