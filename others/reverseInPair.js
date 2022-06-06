const reversePair = (s) => {
  let a = "";
  for (let i = 0; i < s.length; i += 2) {
    if (s[i + 1]) a += s[i + 1];
    if (s[i]) a += s[i];
  }

  return a;
};

let s = "a";
console.log(reversePair(s));
