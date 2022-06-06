// n /5 or /7
// number can have 5 / 7

// /5 or has 5 = cats

// /7 or has 7 = boots

// number has 5 or /5 && has 7 or /7 = boots and cats

// %7 => boots
// %5 => cats
// has 5 => cats
// has 7 => boots
// %7 && %5 => boots and cats
// has 5 && %7 => boots and cats
// has 7 && %5 => boots and cats
// has 5 and 7 => boots and cats
// -ve number

// ! %7
// ! %5
// ! has 5
// ! has 7

// !%7 && %5
// !%5 && %7
// has 5 && %7
// has 7 && %5

// has5 has7 %7 %5  output
// 0   0    0  0    ""
// 0   0    0  1    "cat"
// 0   0    1  0    "boots"
// 0   0    1  1    "boots and cats"
// 0   1    0  0    "boots"
// 0   1    0  1    "boots and cats"
// 0   1    1  0    "boots"
// 0   1    1  1    "boots and cats"
// 1   0    0  0    "cats"
// 1   0    0  1    "cats"
// 1   0    1  0    "boots and cats"
// 1   0    1  1    "boots and cats"
// 1   1    0  0    "boots"
// 1   1    0  1    "boots and cats"
// 1   1    1  0    "boots and cats"
// 1   1    1  1    "boots and cats"
// 1   1    1  1    "boots and cats"

const bootCat = (n) => {
  if (n < 0) {
    return "";
  }

  if ((hasFive(n) || n % 5 === 0) && (hasSeven(n) || n % 7 === 0)) {
    return "boots and cats";
  } else if (n % 7 === 0 || hasSeven(n)) {
    return "boots";
  } else if (n % 5 === 0 || hasFive(n)) {
    return "cats";
  }
  return "";
};

const hasFive = (number) => {
  let n = number.toString();
  return n.includes("5");
};

const hasSeven = (number) => {
  let n = number.toString();
  return n.includes("7");
};

console.log(bootCat(35));
