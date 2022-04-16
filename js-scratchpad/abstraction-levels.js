function raiseToPower(x,n) {
  let result = 1;
  while (n > 0) {
    result = multiply(result, x)
    n--
  }
  return result
}

function square(a) {
  return multiply(a, a)
}

function multiply(a,b) {
  let product = 0;

  while (b > 0) {
    product = add(product, a);
    b--;
  }
  return product
}


function add(a,b) {
  let sum = 0;
  while (a > 0) {
    sum=increment(sum);
    a--;
  }
  while (b > 0) {
    sum=increment(sum);
    b--;
  }
  return sum;
}

function increment(n) {
  return n+1;
}


// console.log(`raiseToPower(2,0): ${raiseToPower(2,0)}`)
// console.log(`raiseToPower(2,1): ${raiseToPower(2,1)}`)
// console.log(`raiseToPower(2,2): ${raiseToPower(2,2)}`)
// console.log(`raiseToPower(2,3): ${raiseToPower(2,3)}`)
// console.log(`raiseToPower(2,4): ${raiseToPower(2,4)}`)
// console.log(`raiseToPower(2,5): ${raiseToPower(2,5)}`)
// console.log(`raiseToPower(2,6): ${raiseToPower(2,6)}`)
// console.log(`raiseToPower(2,7): ${raiseToPower(2,7)}`)
// console.log(`raiseToPower(2,8): ${raiseToPower(2,8)}`)

// console.log(`raiseToPower(3,0): ${raiseToPower(3,0)}`)
// console.log(`raiseToPower(3,1): ${raiseToPower(3,1)}`)
// console.log(`raiseToPower(3,2): ${raiseToPower(3,2)}`)
// console.log(`raiseToPower(3,3): ${raiseToPower(3,3)}`)
// console.log(`raiseToPower(3,4): ${raiseToPower(3,4)}`)
// console.log(`raiseToPower(3,5): ${raiseToPower(3,5)}`)
// console.log(`raiseToPower(3,6): ${raiseToPower(3,6)}`)
// console.log(`raiseToPower(3,7): ${raiseToPower(3,7)}`)
// console.log(`raiseToPower(3,8): ${raiseToPower(3,8)}`)


// console.log(`square(2): ${square(0)}`)
// console.log(`square(2): ${square(1)}`)
// console.log(`square(2): ${square(2)}`)
// console.log(`square(3): ${square(3)}`)
// console.log(`square(4): ${square(4)}`)
// console.log(`square(5): ${square(5)}`)
// console.log(`square(6): ${square(6)}`)
// console.log(`square(7): ${square(7)}`)
// console.log(`square(8): ${square(8)}`)
// console.log(`square(9): ${square(9)}`)
// console.log(`square(10): ${square(10)}`)


// console.log(`multiply(0): ${multiply(5, 200)}`)


// console.log(`add(0): ${add(5, 200)}`)
// console.log(`add(0): ${add(5, 200)}`)

// console.log(`increment(0): ${increment(0)}`)