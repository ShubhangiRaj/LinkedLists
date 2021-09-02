import LinkedList from '../linkedListStructure.js';

let list1 = new LinkedList();
list1.push(1);
list1.push(3);
list1.push(5);
list1.push(7);

let list2 = new LinkedList();
list2.push(1);
list2.push(2);
list2.push(5);

// // ITERATIVE APPROACH
// function mergeTwoSortedLists(head1, head2, list_1_length, list_2_length){
//     if(!head1 || !head2){ return }
//     // determine source and destination lists by comparing lengths;
//     let sourceListNode = list_1_length < list_2_length ? head1 : head2;
//     let destListNode = list_1_length >= list_2_length ? head1 : head2;

//     let prevNode = null;

//     while(sourceListNode !== null){
//         if(sourceListNode.data <= destListNode.data){
//             if(prevNode === null){
//                 prevNode = sourceListNode;
//                 sourceListNode = sourceListNode.next;
//                 prevNode.next = destListNode;
//             } else {
//                 prevNode.next = sourceListNode;
//                 sourceListNode = sourceListNode.next;
//                 prevNode.next.next = destListNode;
//             }
//         } else if(sourceListNode.data > destListNode.data){
//             prevNode = destListNode;
//             destListNode = destListNode.next;
//         }
//     }
//     if(sourceListNode === null){
//         return head1;
//     }
// }

// mergeTwoSortedLists(list1.head, list2.head, list1.length(), list2.length);
// list1.print();
// list2.print();

function mergeTwoSortedLists(list1, list2){
    // if no head present
    if(!list1.head || !list2.head){
        return
    }
    // determine source and destination lists by comparing lengths;
    // let sourceListNode = list_1_length < list_2_length ? head1 : head2;
    // let destListNode = list_1_length >= list_2_length ? head1 : head2;
    let prevNode = null;
    let list1Node = list1.head;
    let list2Node = list2.head;
    recursiveMerge(list1Node, list2Node, prevNode);
    return;

    function recursiveMerge(node1, node2, prevNode){
        if(node1.next === null || node2.next === null){
            return;
        }
        prevNode = node1;
        node1 = node1.next;
        node2 = node2.next;
        recursiveMerge(node1, node2, prevNode);
        console.log(node1.data, node2.data, prevNode.data);
        // if node2.data equal to node1.data, then point prevNode to node2 and node2.next to node1
        // if node2.data <
    }

}

mergeTwoSortedLists(list1, list2);

// todo