//JS TASKS

// Task 1 — Check if a number is Even or Odd
function isEvenOrOdd(num) {
  if (num % 2 === 0) return num + " is Even";
  return num + " is Odd";
}

console.log(isEvenOrOdd(4));  // "4 is Even"
console.log(isEvenOrOdd(7));  // "7 is Odd"


// Task 2 — Reverse a String
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) reversed += str[i];
  return reversed;
}

console.log(reverseString("hello"));   // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"


// Task 3 — Find the Largest Number in an Array
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}

console.log(findLargest([3, 1, 9, 4, 7])); // 9
console.log(findLargest([-5, -1, -3]));     // -1


// Task 4 — Check if a String is a Palindrome
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = "";
  for (let i = cleaned.length - 1; i >= 0; i--) reversed += cleaned[i];
  return cleaned === reversed
    ? '"' + str + '" is a Palindrome ✓'
    : '"' + str + '" is NOT a Palindrome ✗';
}

console.log(isPalindrome("racecar")); // Palindrome ✓
console.log(isPalindrome("hello"));   // NOT a Palindrome ✗


// Task 5 — Remove Duplicates from an Array
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < unique.length; j++) {
      if (unique[j] === arr[i]) { found = true; break; }
    }
    if (!found) unique.push(arr[i]);
  }
  return unique;
}

console.log(removeDuplicates([1,2,2,3,3,4])); // [1, 2, 3, 4]


// Task 6 — Count Frequency of Characters in a String
function charFrequency(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    freq[ch] = freq[ch] ? freq[ch] + 1 : 1;
  }
  return freq;
}

console.log(charFrequency("hello"));


// Task 7 — Calculator Function Using Operators
function calculator(a, operator, b) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") { if (b === 0) return "Error: Division by zero"; return a / b; }
  if (operator === "%") return a % b;
  return "Error: Unknown operator";
}

console.log(calculator(10, "+", 5));  // 15
console.log(calculator(10, "/", 0));  // Error


// Task 8 — Sort an Array Without Using .sort()
function bubbleSort(arr) {
  let copy = arr.slice();
  let n = copy.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (copy[j] > copy[j + 1]) {
        let temp = copy[j]; copy[j] = copy[j+1]; copy[j+1] = temp;
      }
    }
  }
  return copy;
}

console.log(bubbleSort([5,2,8,1,9])); // [1,2,5,8,9]


// Task 9 — Basic Cart System Using Objects & Functions
let cart = {
  items: [],
  addItem(name, price, qty) { this.items.push({ name, price, qty }); },
  removeItem(name) { this.items = this.items.filter(i => i.name !== name); },
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) total += this.items[i].price * this.items[i].qty;
    return total;
  },
  showCart() {
    if (this.items.length === 0) return "Cart is empty";
    let summary = "";
    for (let item of this.items) summary += item.name + " x" + item.qty + " = ₹" + (item.price * item.qty) + "\n";
    summary += "─────────────\nTotal: ₹" + this.getTotal();
    return summary;
  }
};

cart.addItem("Apple", 30, 3);
cart.addItem("Milk", 50, 2);
console.log(cart.showCart());


// Task 10 — Quiz Scoring System
let quiz = {
  questions: [
    { q: "What is 2 + 2?",   options:["3","4","5"], answer: "4" },
    { q: "Who is Rahul Gandhi?",    options:["Congress Leader","Pappu","Opposition"], answer: "Pappu" },
    { q: "typeof null?",      options:["null","object","undefined"], answer: "object" },
  ],
  score: 0,
  submitAnswer(qIndex, userAnswer) {
    if (this.questions[qIndex].answer === userAnswer) {
      this.score++;
      return " Correct!";
    }
    return ` Wrong. Answer: ${this.questions[qIndex].answer}`;
  },
  getResult() {
    let total = this.questions.length;
    return `Score: ${this.score}/${total}`;
  }
};
