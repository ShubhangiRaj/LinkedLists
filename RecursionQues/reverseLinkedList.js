import LinkedList from '../linkedListStructure.js';

let newList = new LinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);

function reverseList(list){
    if(!list.head){
        return;
    } else {
        let currHead = list.head;
        let p1 = null;
        let p2 = currHead;
        if(!p2.next){
            console.log(p2.data);
            return;
        }
        // else if head exsists and length is more than 1
        recursiveReverse(p1, p2);
        list.head = currHead;
        function recursiveReverse(node1, node2){
            if(node2.next === null){
                // make the head point to the last node
                currHead = node2;
                return;
            }
            node1 = node2;
            node2 = node2.next;
            recursiveReverse(node1, node2);
            node2.next = node1;
            node1.next = null;
            return;
        
        }
    }
}

newList.print();
reverseList(newList);
console.log("After reverse")
newList.print();