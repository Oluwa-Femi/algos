function Queue() {
    collection = [];
    this.print = function() {
        console.log(collection)
    };
    this.enqueue = function(value) {
        collection.push(value);
    }
    this.dequeue = function() {
        return collection.shift();
    }
    this.front = function() {
        return collection[0];
    }
    this.size = function() {
        return collection.length;
    }
    this.isEmpty = function() {
        return (collection.length === 0);
    }
}

var myQueue = new Queue;
myQueue.enqueue("Brother");
myQueue.enqueue("Sister");
myQueue.enqueue("Father");
myQueue.enqueue("Mother");
myQueue.dequeue();
console.log(myQueue.print());