class Node{
	constructor(data, next = null){
		this.data = data,
		this.next = next
	}
}
class Queue{
	constructor(){
		this.front = null,
		this.rear = null
	}

    enqueue(data){
		let newNode = new Node(data);
		if(!this.front && !this.rear){
			this.front = this.rear = newNode;
		}
		this.rear.next = newNode;
		this.rear = newNode;	
    }

	dequeue(){
		if(this.front !== null){
			this.front = this.front.next;
			return this.front.data;
		}
		return null
	}
}

let list = new Queue();
list.enqueue(2);
list.enqueue(3);
list.enqueue(4);
list.dequeue();