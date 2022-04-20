const convertToString = (n) => {
  let binary = "0.";
  if (n <= 0 && n >= 1) {
    return "ERRORRRRR";
  }

  while (n > 0) {
    n = n * 2;
    if (n >= 1) {
      binary += "1";
      n = n - 1;
    } else {
      binary += "0";
    }

    if (binary.length > 34) {
      return "ERRORRRRR";
    }
  }
  return binary;
};

console.log(convertToString(0.25));
