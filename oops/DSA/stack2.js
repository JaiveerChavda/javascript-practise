class Node {
    constructor(val) {
        this.val = val;
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
            this.last = newNode;
        }else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
    }

    pop(){
        if(this.size === 0) return null;

        if(this.first === this.last){
            this.last = null;
        }
        let temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}

const stack = new Stack();
stack.push('a');
stack.push('b');
stack.pop();
stack.pop();

console.log(stack);