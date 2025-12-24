// 1. Extract first five letters
let str1 = " gfuh ieiuei ";
console.log(str1.trim().slice(0, 5));

// 2. Length of string and uppercase
let str2 = "hduej dij";
console.log(str2.length);
console.log(str2.toUpperCase());

// 3. Lowercase and trim
let str3 = " biji jdo ";
console.log(str3.toLowerCase().trim());

// 4. Replace specified word
let sentence = "I love JavaScript";
console.log(sentence.replace("JavaScript", "JS"));

// 5. Implicit coercion example
console.log(89 + "hello" + 90 / 9);
