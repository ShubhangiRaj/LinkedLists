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
}
class Stack{
	constructor(){
		this.list = new LinkedList();
	}
	push(data){
		this.list.insertFirst(data);
	}
	pop(){
		this.list.removeFirst();
	}
}
let stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(5);
stack1.pop();

// or another way of implementation using only Node class.
// class Stack{
// 	constructor(){
// 		this.top = null;
// 	}
// 	push(data){
// 		this.top = new Node(data, this.top);
// 	}
// 	pop(){
// 		if(!this.top){
// 			return;
// 		} 
// 		this.top = this.top.next;
// 	}
// }