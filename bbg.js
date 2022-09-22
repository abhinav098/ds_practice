const abbrString = (str) => {
  let isArray = Array.isArray(str);
  if (isArray) {
    let output = [];
    for (let i = 0; i < str.length; i++) {
      let next = abbrString(str[i]);
      output.push(next);
    }
    return output;
  }

  if (str === null || typeof str !== "string") return undefined;
  if (str.length <= 3) return str;

  let strLen = str.length;
  return `${str[0]}${strLen - 2}${str[strLen - 1]}`;
};

// Array in Array
console.log(abbrString(["array", 1, ["an", "variable", [[[["test"]]]]]]));

// Array
console.log(abbrString(["abbreviate", "strings", 1, undefined, "hi"])); // ['a8e', 's5s', undefined, undefined, 'hi'])

console.log(abbrString("string")); // s4g
console.log(abbrString("dog")); // dog
console.log(abbrString("")); //
console.log(abbrString(1)); // undefined
console.log(abbrString()); // undefined
