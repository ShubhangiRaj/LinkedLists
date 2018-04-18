class Node{
	constructor(data, next = null, prev = null){
		this.data = data,
		this.next = next,
		this.prev = prev
	}
}
class DoublyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
	}

	insertAtFirst(data){
		if(!this.head){
			this.head = this.tail = new Node(data);
			return this.head;
		}
		let newNode = new Node(data);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;

		return this.head;
	}

	insertAtLast(data){
		if(!this.head){
			this.head = this.tail = new Node(data);
			return this.head;
		}
		let current = this.head;
		while(current.next !== null){
			current = current.next;
		}
		current.next = new Node(data, null, current);
		this.tail = current.next;

		return this.head;
	}

	insertInBetween(data, index){
		let current = this.head;
		if(current == null){
			return;
		}
		let counter = 1;
		while(counter < index && current.next !== null){
			current = current.next;
			if(current == null){
				break;
			} else {
				counter++;
			}
		}
		let newNode = new Node(data);
		newNode.next = current.next;
		newNode.prev = current;
		current.next = newNode;
		newNode.next.prev = newNode;
		return this.head;
	}
}