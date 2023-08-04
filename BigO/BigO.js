// function findNemo(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === "nemo") return console.log("Found Nemo");
//   }
// }
// findNemo(["Ugo", "Bayo", "nemo"]);
// const entries = new Map([
//   ['foo', 'bar'],
//   ['baz', 42]
// ]);

// console.log(entries);
// const obj = Object.fromEntries(entries);

// console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }

/*
 * The function takes an array and a 'sum' as input. It then checks if there is a pair that matches the sum.
 * 1. The first approach will be to use the obvious brute force approach of nesting loops and comparing.
 * 2. A better solution will be using set.
 */

function hasPairWithSum1(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
}

// console.log(hasPairWithSum1([1, 2, 3, 4, 5, 6, 7, 8, 9], 17));

function hasPairWithSum2(arr, sum) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return true;
    set.add(sum - arr[i]);
  }
  return false;
}
console.log(hasPairWithSum2([1, 2, 3, 4, 5, 6, 7, 8, 9], 17));
