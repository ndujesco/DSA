// export function excludeFields() {
//   if (typeof obj_s === "object") {
//     return Object.fromEntries(
//       Object.entries(obj_s).filter(([key]) => !exclude.includes(key))
//     );
//   }
//   if (Array.isArray(obj_s)) {
//     return obj_s.map((obj) => {
//       return Object.fromEntries(
//         Object.entries(obj).filter(([key]) => !exclude.includes(key))
//       );
//     });
//   }
// }

// console.log(Object.entries({ first: "penny", second: "dime" }));
// console.log(
//   Object.fromEntries([
//     ["first", "penny", "error", "dime"],
//     // ["second", "dime"],
//   ])
// );

// console.log(0.1 + 0.2 === 0.30000000000000004);
// console.log(("3" + 7));
// console.log("3" - 7);
let unique = [...new Set(["penny", "and", "dime"])].sort((a, b) =>
  a < b ? -1 : 1
); // ['username1', 'username2']

// console.log(...new Set([["penny", "and", "dime"]]));
let updatedRoomName = `${unique[0]}--with--${unique[1]}`; //
// console.log(updatedRoomName);
// console.log(Array.from('penny s  s'));

// console.log("penny-with-".match(/-with-/));

console.log([1, 2, 3, 4, 5, 6, 7, 8].slice(0, 5));
