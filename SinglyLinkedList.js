class Node{
	constructor(data, next = null){
		this.data = data,
		this.next = next
	}
}
class LinkedList{
    
    constructor(){
		this.head = null;
    }
    
	insertFirst(data){
		this.head = new Node(data, this.head);
    }
    
	removeFirst(){
		if(!this.head){
			return;
		} 
		this.head = this.head.next;
    }

    size() {
        let count = 0;
        if(!this.head){
            return count;
        }
        let node = this.head;
        while(node !== null){
            count++;
            node = node.next;
        }
        return count;
    }
    
    print() {
        if(!this.head){
            return
        }
        let node = this.head;
        while(node !== null){
            console.log(node.data);
            node = node.next;
        }
    }

    // reverse
    reverse() {

        if(!this.head){
            return;
        }
        
        let prev = null;
        let curr = this.head;
        let next;
        
        while(curr !== null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        
        return this.head;
    }

    // reverse by group
    reverseByChunks(k) {
        return this.reverseByGroup(this.head,k);
    }
    
    reverseByGroup(head,k) {
        if(!this.head || !head){
            return
        }
        let prev = null;
        let curr = head;
        let next;
        let chunkSize = k;
    
        while(curr !== null && chunkSize > 0){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            chunkSize--;
        }
        
        if(next !== null){
            head.next = this.reverseByGroup(next, k);
        }
        this.head = prev;
        return prev;
        
    }
}

(function(){
    // Main Function

    // Create Linked List

    let list = new LinkedList();

    for (let i = 10 ; i > 0 ; i--){
        list.insertFirst(i);
    }

    // Reverse by group of 3
    list.reverseByChunks(3);

    // Print list 
    list.print();

})();



// // reverse linked list
// LinkedList.prototype.reverse = function() {

// 	if(!this.head){
//         return;
//     }
    
//     let prev = null;
//     let curr = this.head;
//     let next;
    
//     while(curr !== null){
//         next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//     }
//     this.head = prev;
    
//     return this.head;
// }

// // reverse by group
// LinkedList.prototype.reverseByGroup = function(head,k){
// 	if(!this.head || !head){
// 		return
// 	}
// 	let prev = null;
// 	let curr = head;
// 	let next;
// 	let chunkSize = k;

// 	while(curr !== null && chunkSize > 0){
// 			next = curr.next;
//         	curr.next = prev;
//         	prev = curr;
//         	curr = next;
// 			chunkSize--;
// 	}
	
// 	if(next !== null){
// 		 head.next = this.reverseByGroup(next, k);
// 	}
// 	this.head = prev;
// 	return prev;
	
// }