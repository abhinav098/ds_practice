var isAnagram = function (s1, s2) {
  if (s1.length !== s2.length) return false;
  let mapS1 = new Map();
  let mapS2 = new Map();

  for (let char of s1) {
    if (mapS1.has(char)) {
      mapS1.set(char, mapS1.get(char) + 1);
    } else {
      mapS1.set(char, 1);
    }
  }

  for (let char of s2) {
    if (mapS2.has(char)) {
      mapS2.set(char, mapS2.get(char) + 1);
    } else {
      mapS2.set(char, 1);
    }
  }

  for (let [k, v] of mapS1) {
    if (mapS2.get(k) !== v) return false;
  }
  return true;
};

console.log("O(n)");
console.log(isAnagram("nameless", "salesman"));

var isAnagram2 = function (s1, s2) {
  if (s1.length !== s2.length) return false;
  return s1.split("").sort().join("") === s2.split("").sort().join("");
};

console.log("O(nlogn)");
console.log(isAnagram2("desi", "ides"));
