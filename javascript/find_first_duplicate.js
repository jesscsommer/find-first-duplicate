function findFirstDuplicate(arr) {
  // type your code here
  const seen_nums = new Set()

  for (let elem of arr) {
    if (seen_nums.has(elem)) {
      return elem
    }
    seen_nums.add(elem)
  }
  return -1 
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 4");
  console.log("=>", findFirstDuplicate([2, 1, 4, 4, 4, 3, 3, 2]));

  console.log("");

  console.log("Expecting: 8");
  console.log("=>", findFirstDuplicate([2, 1, 3, 8, 8, 2]));

  console.log("");

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

// go through each element in the list ==> get the count; first elem with count > 1 gets returned 
// set of seen nums; if the current num is already in the set ==> return it 