// Creating LinkedList Class
export default class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Gets the node at a specific index in the linked list
    getIndex(index) {
        let originalNode = this.head;
        if(index < 0 || index >= this.length) return null;
        for(let i = 0; i < index; i++) originalNode = originalNode.nextNode;
        return originalNode;
    }

    // Inserts a new node at the beginning of the linked list
    insertAtHead(newNodeValue) {
        const newNode = new Node(newNodeValue, this.head);
        this.head = newNode;
        this.length++;
    }

    // Inserts a new node at a specific index in the linked list
    insertAtIndex(index, newNodeValue) {
        // If index is 0, insert at the head (beginning of the linked list)
        if(index == 0) return this.insertAtHead(newNodeValue);
        let prevNode = this.getIndex(index - 1);

        // Inserts the new node at the specified index
        if(prevNode == null) return null;
        prevNode.nextNode = new Node(newNodeValue, prevNode.newNode);
        this.length++;
    }

     // Prints the values of all nodes in the linked list
    print() {
        let output = '';
        let originalNode = this.head;
        while(originalNode) {
            output = `${output} ${originalNode.value} ->`;
            originalNode = originalNode.nextNode;
        }
        console.log(`${output} ${originalNode}`);
    }

    // Removes the first node in the linked list
    removeHead() {
        this.head = this.head.nextNode;
        this.length--;
    }

    // Removes the node at a specific index in the linked list
    removeIndex(index) {
        // If index is 0, insert at the head (beginning of the linked list)
        if(index == 0) return this.removeHead();
        let prevNode = this.getIndex(index - 1);
        if(prevNode == null) return null;

        // Removes the node at the specified index
        prevNode.nextNode = prevNode.nextNode.nextNode;
        this.length--;
    }
}


// Node class represents a single node in the linked list
export class Node {
    // Constructor initializes a node with a value and a reference to the next node
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}