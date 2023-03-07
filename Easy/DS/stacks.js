const setStack = function() {
    this.count = 0;
    this.storage = {}

    //Add a value to the end of the stack
    this.push = function(value) {
        //at the index of this.count we will add the value at the end
        this.storage[this.count] = value;
        //count up one
        this.count++;
    }

    //Remove and return the value at the end of the stack
    this.pop = function(){
        if (this.count === 0) {
            return undefined
        }
        // decrement the count
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    // returns the size of the stack
    this.size = function() {
        return this.count;
    }

    this.peek = function() {
        return this.storage[this.count-1];
    }
}
var myStack = new setStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size());