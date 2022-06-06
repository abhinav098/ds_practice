const checkPossibleSentences = (words, sentences) => {
  let map = {};
  let mapToUse = {};

  for (let word of words) {
    let charArr = word.split(""); // to char array
    charArr.sort();
    let key = charArr.join("");

    if (key in map) {
      map[key].push(word);
    } else {
      map[key] = [word];
    }
    mapToUse[word] = map[key];
  }

  let i = 0;
  let count = new Array(sentences.length);
  console.log(mapToUse);
  console.log(map);
  for (let sentence of sentences) {
    count[i] = 1;
    let strArr = sentence.trim().split(" ");
    for (let str of strArr) {
      if (str in mapToUse) {
        count[i] *= mapToUse[str].length;
      }
    }
    i++;
  }

  return count;
};

words = ["bats", "tabs", "in", "cat", "act"];
sentences = ["cat the bats", "in the act", "act tabs in"];
console.log(checkPossibleSentences(words, sentences));
