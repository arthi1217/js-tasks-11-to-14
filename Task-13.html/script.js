// 1. Create objects
let animal = {
  name: "Dog",
  sound: "Bark"
};

let car = {
  brand: "Tesla",
  model: "Model S"
};

console.log(animal);
console.log(car);

// 2. Find duplicate characters in a string (optional)
let word = "programming";
let chars = word.split("");
let duplicates = chars.filter((item, index) => chars.indexOf(item) !== index);
console.log([...new Set(duplicates)]);

// 3. Reverse a string using array methods
let text = "hello";
let reversed = text.split("").reverse().join("");
console.log(reversed);

// 4. Highest and lowest value in array
let numbers = [10, 45, 2, 99, 23];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// 5. Sorting an array (optional)
numbers.sort((a, b) => a - b);
console.log(numbers);

// 6. Display first 3 elements in UI
document.body.innerHTML += "<p>First 3 elements: " + numbers.slice(0, 3).join(", ") + "</p>";

// 7. Remove 4th index element and add 2 elements
numbers.splice(3, 1, 55, 66);
console.log(numbers);

// Date Object
let today = new Date();
console.log(today);

// Math Object
console.log(Math.sqrt(16));
console.log(Math.random());
