import LinkedList from '../linkedListStructure.js';

let list1 = new LinkedList();
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);

function swapNodesInPair(head){
    // no head, no list
    if(!head){
        return;
    }
    // only one node in list
    if(!head.next){
        return head;
    }
    // only two nodes in the list
    if(!head.next.next){
        let p1 = head;
        let p2 = head.next;
        p1.next = null;
        p2.next = p1;
        head = p2;
        return head;
    }
    // more than 2 nodes
    let p1 = head;
    let p2 = head.next;
    let prevNode = head;
    let newHead = p2;
    head = newHead;
    recursiveSwap(p1, p2, prevNode);
    return head;
}

function recursiveSwap(node1, node2, prevNode){
    if(node2 === null){
        return;
    }
    if(node2.next === null){
        prevNode.next = node2;
        node2.next = node1;
        node1.next = null;
        return;
    }
    node1.next = node2.next;
    node2.next = node1;
    prevNode = prevNode.next;
    node1 = node1.next;
    node2 = node1.next;
    return recursiveSwap(node1, node2, prevNode);
}
swapNodesInPair(list1.head);