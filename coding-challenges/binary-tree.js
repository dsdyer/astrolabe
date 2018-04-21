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


function isBalanced(root, count = 0, leafDepths = new Set()) {
// You need to track Left Depth and Right Depth separately


  if (root === null) {
    return true;
  }

  if (!root.left || !root.right) {
    leafDepths.add(count);

  }
  if (!root.left && !root.right) {
      // leafDepths.push(count);

      console.log('Found leaf!');
      console.log('val: ', root.val);
      console.log('count: ', count);
      console.log('leafDepths: ', leafDepths);

    if ([...leafDepths].some(ld => Math.abs(ld - count) > 1 )) {
      console.log('too deep!');
      leafDepths.add(count);
      return false;
    } else {
      leafDepths.add(count);
      return true;
    }
  }
  return isBalanced(root.left, count + 1, leafDepths) &&
         isBalanced(root.right, count + 1, leafDepths);
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