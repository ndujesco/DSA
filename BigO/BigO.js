function findNemo(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") return console.log("Found Nemo");
  }
}
findNemo(["Ugo", "Bayo", "nemo"]);
