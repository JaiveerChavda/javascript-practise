class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = this.first;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        this.size++;
    }

    pop() {
        if (this.size === 0) return null
        
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;
        return temp;
    }
}

const stack = new Stack();

stack.push('jaiveer');
stack.push('umang');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);


