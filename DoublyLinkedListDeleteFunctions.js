DoublyLinkedList.prototype.deleteFirstNode = function(){
	if(!this.head){
		return null;
	}
	this.head = this.head.next;
	this.head.prev = null;
}

DoublyLinkedList.prototype.deleteLastNode = function(){
	if(!this.head){
		return null;
	}
	// only one node in the list
	if(!this.head.next){
		this.head = null;
		return;
	}
	let previous = this.head;
	let node = this.head.next;
	while(node.next !== null){
		previous = node;
		node = node.next;
	}
	previous.next = null;
	return this.head;
}

DoublyLinkedList.prototype.getAt = function(index){
	let counter = 0;
	let node = this.head;
	while(node){
		if(counter === index){
			return node;
		}
		counter++;
		node = node.next
	}
	return null
}

DoublyLinkedList.prototype.removeAt = function(index){
	if(!this.head){
		return;
	}
	if(index === 0){
		this.head = this.head.next;
		return this.head;
	}
	let previous = this.getAt(index - 1);
	let node = this.getAt(index);
	if(!previous || !previous.next){
		return;
	}
	previous.next = node.next;
	node.next.prev = previous;
	return this.head;
	
}