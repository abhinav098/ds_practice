const objA = {
  firstName: "abhinav",
  lastName: "garg",
  demographics: {
    address: "1218",
    address2: "sector 10",
    city: {
      name: "Panckula",
      pincode: "134109",
    },
    state: "haryana",
  },
  age: 21,
};

const objB = {
  lastName: "garg",
  firstName: "abhinav",
  demographics: {
    address2: "sector 10",
    address: "1218",
    city: {
      name: "Panckula",
      pincode: "134109",
    },
    state: "haryana",
  },
  age: 21,
};

const deepEqual = (a, b) => {
  if (a === b) return true;
  if (a === null || typeof a !== "object") return false;
  if (b === null || typeof b !== "object") return false;

  let aKeyCount = Object.keys(a).length;
  let bKeyCount = 0;

  for (let key in b) {
    bKeyCount += 1;
    if (!(key in a) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return aKeyCount === bKeyCount;
};

console.log(deepEqual(objA, objB));
