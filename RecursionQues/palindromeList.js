import LinkedList from '../linkedListStructure.js';

let list1 = new LinkedList();
list1.push(1);
list1.push(2);
// list1.push(3);
// list1.push(3);
// list1.push(2);
// list1.push(1);

function isPalindrome(head){
    if(!head && !head.next){
        return;
    }
    let currHead = head;
    let flag = true;
    let result = recursivePalindromeCheck(head);
    return result ? console.log("Is a Palindrome") : console.log("Not a Palindrome");

    function recursivePalindromeCheck(node){
        if(node === null){
            return;
        }
        // node = node.next;
        recursivePalindromeCheck(node.next);
        if(node.data === currHead.data){
            if(!flag){
                return false;
            }
            currHead = currHead.next;
            return true;
        } else {
            flag = false;
            return false;
        }
    }
}

isPalindrome(list1.head);

// todo