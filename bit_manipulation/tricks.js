// Ref: https://www.topcoder.com/thrive/articles/A%20bit%20of%20fun:%20fun%20with%20bits

// 1. Bit Masking

// 2. Find ith bit
(a & (1 << bit)) != 0;

// OR

a = 27;
i = 5;
m = 1 << i; // mask, i is 0-index from right
a & m; // if this is greater than 0 then bit is 1 else it is 0

// 3. Set ith bit
a |= 1 << bit;

// OR

a = 27;
i = 5;
m = 1 << i;
m = ~m;
a & m;

a = 1010;
i = 2;

// 4. clear ith bit
a &= ~(1 << bit);

// 5. Find number of bits to flip to convert a to b
a = 10; // 1101
b = 15; // 1100
res = a ^ b; // Calculate number of 1 bits in res

// 6. Calculate number of 1 bit in a
n = Math.floor(log2(a)) + 1; // Math.floor(Math.log(a, 2)) + 1

// OR

while (a > 0) {
  a = a & (a - 1);
  count++;
}

// Update bits
// EXAMPLE
// Input: N 10000000000, M = 10011, i = 2, j = 6 Output: N = 10001001100
const setMinN = (m, n, i, j) => {
  let allOnes = ~0;
  let left = allOnes << (j + 1);
  let right = (1 << i) - 1;

  let mask = left | right;
  console.log(mask);
  let n_cleared = n & mask;
  let m_shifted = m << i;
  return n_cleared | m_shifted;
};

n = 1024;
m = 20; //19;

console.log(setMinN(m, n, 2, 6));
