const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class ListNode {
  constructor(val = null, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class Stack {
  constructor() {
    this.dummy = new ListNode();
    this.tail = this.dummy;
  }

  push(element) {
    const node = new ListNode(element, null, this.tail);

    this.tail.next = node;
    this.tail = node;
  }

  pop() {
    const val = this.peek();
    this.tail = this.tail.prev;
    this.tail.next = null;

    return val;
  }

  peek() {
    return this.tail.val;
  }
}

module.exports = {
  Stack,
};
