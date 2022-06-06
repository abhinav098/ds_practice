function gameWinner(colors) {
  // Write your code here
  let wendysMoves = 0;
  let bobsMoves = 0;

  let n = colors.length;
  let i = 0;

  while (i < n) {
    let j = i;
    let count = 0;

    // see if the adjacent colors are same
    // if same, increment the count & j
    while (j < n && colors[j] === colors[i]) {
      j++;
      count++;
    }

    // if adjacent colors are same and count goes greater than 2
    // calculate the moves count and increment respective player's
    // moves count
    if (count > 2) {
      if (colors[i] === "w") wendysMoves += count - 2;
      else bobsMoves += count - 2;
    }
    i = j;
  }

  // see which player has more moves,
  // the one who has more wins
  return bobsMoves >= wendysMoves ? "bob" : "wendy";
}
