const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(value, targetNode = this._root) {
    const node = new Node(value);

    //FIX this._root somehow?
    if (!this._root) {
      this._root = node;
      return;
    }

    if (value < targetNode.data) {
      if (!targetNode.left) {
        targetNode.left = node;
      } else {
        this.add(value, targetNode.left);
      }
    }

    else if (value > targetNode.data) {
      if (!targetNode.right) {
        targetNode.right = node;
      } else {
        this.add(value, targetNode.right);
      }
    }
  }

  has(value) {
    return !!this.find(value);
  }

  find(value, targetNode = this._root) {
    if (value === targetNode?.data) {
      return targetNode;
    }

    if (value < targetNode?.data) {
      return this.find(value, targetNode.left);
    }

    else if (value > targetNode?.data) {
      return this.find(value, targetNode.right)
    }

    return null;
  }

  min(targetNode = this._root) {
    if (!targetNode) {
      return null;
    }

    let currentNode = targetNode;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data
  }

  max(targetNode = this._root) {
    if (!targetNode) {
      return null;
    }

    let currentNode = targetNode;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data
  }

  remove(value, targetNode = this._root) {
    if (!targetNode) {
      return;
    }

    if (value === this._root.data) {
      this._root = null;
    }

    let parentNode = targetNode;
    let currentNode = targetNode;
    let childPos = '';

    while (currentNode) {
      if (value === currentNode.data) {
        break;
      } else if (value < currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.left;
        childPos = 'left';
      } else if (value > currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.right;
        childPos = 'right';
      } else {
        currentNode = null;
      }
    }

    if (!currentNode) {
      return
    }

    if (!currentNode.left && !currentNode.right) {
      if (childPos === 'left') {
        parentNode.left = null;
      }
      else if (childPos === 'right') {
        parentNode.right = null;
      }
    }

    if (!currentNode.left && currentNode.right) {
      parentNode.right = currentNode.right;
    }
    if (currentNode.left && !currentNode.right) {
      parentNode.left = currentNode.left;
    }
  }
}


module.exports = {
  BinarySearchTree,
};
