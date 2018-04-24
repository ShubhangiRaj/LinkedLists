class Node{
	constructor(data, next = null){
		this.data = data,
		this.next = next
	}
}
class CircularLinkedList{
    constructor(){
        this.head = null;
    }

    insertAtFirst(data){
        let newNode = new Node(data);

        if(!this.head){
            newNode.next = newNode;
            this.head = newNode;
        }
        let curr = this.head;
        while(curr.next !== this.head){
            curr = curr.next;
        }
        curr.next = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtLast(data){
        let newNode = new Node(data);

        if(!this.head){
            newNode.next = newNode;
            this.head = newNode;
        }
        let curr = this.head;
        while(curr.next !== this.head){
            curr = curr.next;
        }
        curr.next = newNode;
        newNode.next = this.head;
    }

    print(){
        if(!this.head){
            return;
        }
        let curr = this.head;
        while(curr.next !== this.head){
            console.log(curr.data);
            curr = curr.next;
        }
        console.log(curr.data);
    }

    count(){
        if(!this.head){
            return;
        }
        let curr = this.head;
        let count = 0;
        while(curr.next !== this.head){
            curr = curr.next;
            count++;
        }
        return count;
    }

    removeFirst(){
        if(!this.head){
            return 
        }
        let curr = this.head;
        while(curr.next !== this.head){
            curr = curr.next;
        }
        curr.next = this.head.next;
        this.head = this.head.next;

        return this.head;
    }

    removeLast(){
        if(!this.head){
            return 
        }
        let curr = this.head.next;
        let prev = null;
        while(curr.next !== this.head){
            prev = curr;
            curr = curr.next;
        }
        prev.next = this.head;

        return this.head;
    }
}

(function(){
    let cList = new CircularLinkedList();

    cList.insertAtFirst(4);
    cList.insertAtFirst(3);
    cList.insertAtFirst(2);
    cList.insertAtFirst(1);
    cList.insertAtLast(5);
    cList.insertAtLast(6);
    cList.print();
    cList.removeFirst();
    cList.print();
    cList.removeLast();
    cList.print();
    cList.count();
})();