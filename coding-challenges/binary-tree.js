class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  add(val) {
    if (val < this.val) {
      if (this.left === null) {
        this.left = new Node(val);
        return;
      }
      this.left.add(val);
    } else if (val > this.val) {
      if (this.right === null) {
        this.right = new Node(val);
        return;
      } else {
        this.right.add(val);
      }
    }
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.sorted = [];
  }

  addValue(val) {
    if (this.root === null) {
      this.root = new Node(val);
    } else {
      this.root.add(val);
    }
  }

  walkTree(node = this.root, fn) {
    // console.log('fn: ', fn);
    // console.log('typeof fn: ', typeof fn);
    if (node.left) {
      this.walkTree(node.left, fn);
    }
    fn(node);
    if (node.right) {
      this.walkTree(node.right, fn);
    }
  }

  sort(node = this.root) {
    if (Object.is(node, this.root)) this.sorted = [];
    if (node.left) {
      this.sort(node.left);
    }
    this.sorted.push(node.val);
    if (node.right) {
      this.sort(node.right);
    }
  }
}


function isBalanced(root, count = 0, activeNodes = []) {
  const x = {
    leftDepth: 0,
    rightDepth: 0,
    activeSide: 'left',
  }

  if (!root.left && !root.right) {
    activeNodes.forEach(node => {
      if (node.activeSide === 'left') {
        node.leftDepth = node.leftDepth + 1;
      }

      if (node.activeSide === 'right') {
        node.rightDepth = node.rightDepth + 1;
      }
    })
    return true;
  }

  return (!root.left  || isBalanced(root.left, count + 1, activeNodes.concat([x]))) &&
         (!root.right || isBalanced(root.right, count + 1,
                         activeNodes.concat([Object.assign(x, {activeSide: 'right'})]))) &&
         Math.abs(x.leftDepth - x.rightDepth) <= 1;
}


const tree = new Tree();

// tree.addValue(10);
// tree.addValue(5);
// tree.addValue(15);
// tree.addValue(7);
// tree.addValue(2);
// tree.addValue(9);
// tree.addValue(31);
// tree.addValue(8);

// tree.addValue(3);
// tree.addValue(9);
// tree.addValue(20);
// tree.addValue(15);
// tree.addValue(7);

// tree.addValue(3);
// tree.addValue(2);
// tree.addValue(1);

tree.addValue(10);
tree.addValue(14);
tree.addValue(15);
tree.addValue(12);
tree.addValue(11);
tree.addValue(13);

tree.addValue(6);
tree.addValue(8);
tree.addValue(9);
tree.addValue(7);
tree.addValue(4);
tree.addValue(5);
tree.addValue(3);
tree.addValue(1);
tree.addValue(2);



// tree.walkTree(tree.root, function(node) {console.log('Found: ', node.val )})

// isBalanced(tree.root);