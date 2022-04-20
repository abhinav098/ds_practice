const allMovies = (movieDurations, d) => {
  // d = d - 30;
  // let sortedMovies = movieDurations.sort((a, b) => a - b);
  let l = 0,
    r = movieDurations.length - 1,
    maxSum = -1;
  // let result = [-1, -1];

  while (l <= r) {
    let sum = movieDurations[l] + movieDurations[r];
    if (sum <= d) {
      if (maxSum < sum) {
        maxSum = sum;
        // result = [l, r];
      }
      l++;
    } else {
      r--;
    }
  }
  return maxSum;
};

const movieDurations = [90, 125, 90, 125, 120, 124],
  d = 250;
console.log(allMovies(movieDurations, d));
