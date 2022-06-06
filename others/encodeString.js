const encodeString = (string) => {
  // check for invalid string
  if (!string || string.length === 0) return "";
  let prevChar = string[0];
  let count = 1;
  let output = "";

  for (let i = 1; i < string.length; i++) {
    // check for prev char increment counter in case same
    if (prevChar === string[i]) {
      count++;
    } else {
      // add to the output, set prevChar to newChar and reset counter
      output += `${count}${prevChar}`;
      prevChar = string[i];
      count = 1;
    }
  }

  output += `${count}${prevChar}`;
  return output;
};

console.log(encodeString("abbbbcdddd"));
