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

console.log(Object.entries({ first: "penny", second: "dime" }));
console.log(
  Object.fromEntries([
    ["first", "penny", "error", "dime"],
    // ["second", "dime"],
  ])
);
