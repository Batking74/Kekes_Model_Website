export default class Stack {
    constructor() {
        this.items = [];
    }

    // Adds Items to Stack
    push(value) {
        return this.items.push(value);
    }
    
    // Removes Items to Stack
    pop() {
        if(this.items.length == 0) return -1;
        return this.items.pop();
    }
    
    // Returns the Item thats on top of the Stack
    peek() {
        return this.items[this.items.length - 1];
    }

    // Returns if the Stack is Empty or not
    isEmpty() {
        return this.items.length == 0;
    }
    
    // Returns the Stack size
    size() {
        return this.items.length;
    }
}