// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filterinventors = inventors.filter((inventor) => inventor.year > 1800);
//console.log(filterinventors);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorsFirstLastName = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
//console.log(inventorsFirstLastName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsSort = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(inventorsSort);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const total = inventors.reduce((total, inventor) => {
  return (total += inventor.passed - inventor.year);
}, 0);
console.log(total);

// 5. Sort the inventors by years lived
const sortyear = inventors.sort((a, b) => {
  const lastGuy = a.pass - a.year;
  const nextGuy = b.passed - b.year;
  lastGuy > nextGuy ? -1 : 1;
});
//console.log("sortyear:");
console.log(sortyear);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const links = document.querySelectorAll(".mw-category a");
// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes("de"));

// 7. sort Exercise
// Sort the people alphabetically by last name

const sortPepole = people.sort((a, b) => {
  console.log(a.split(", "));
  //console.log("last one: " + a);
});
// console.log("sortPepole" + sortPepole);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

//
const names = ["Ali", "Fatemeh", "Mohammad", "Sara", "Reza", "Abdullah"];
const nameLong = names
  .filter((name) => name.length > 5)
  .map((name) => name.toUpperCase());
console.log(nameLong);

//
const peopleTest = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 17 },
  { name: "Reza", age: 30 },
];
const pep = peopleTest.filter((a) => a.age > 20).map((p) => p.name);
console.log(pep);

//
const numbers = [5, -2, 8, -1, 10];

const sumNumbers = numbers
  .filter((n) => n > 0)
  .reduce((total, n) => (total += n), 0);
console.log(sumNumbers);

//
const original = [1, 2, 3];
console.log(original);
const newArray = [100, ...original];
console.log(newArray);

//
const text = "hello";
const frequency = [...text].reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});
console.log(frequency);

//شمارش تعداد تکرار هر عدد در آرایه
const numbersTest = [1, 2, 2, 3, 3, 3, 4];
const fre = numbersTest.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log(fre);

//فیلتر کردن فقط اعداد زوج و تبدیل به مربع
const nums = [1, 2, 3, 4, 5, 6];
const oddNumber = nums
  .filter((num) => {
    return num % 2 === 0;
  })
  .map((num) => num * num);

console.log(oddNumber);

//حذف حروف تکراری از رشته
const word = "banana";
const repetedremove = [...word].reduce((acc, char) => {
  return acc.includes(char) ? acc : acc + char;
}, "");
console.log(repetedremove);

//مجموع قیمت محصولات
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 80 },
];
const sumProduct = products.reduce((acc, product) => {
  return acc + product.price;
}, 0);

console.log(sumProduct);

//گروه‌بندی آیتم‌ها بر اساس نوع (fruit/vegetable)
const items = [
  { name: "Apple", type: "fruit" },
  { name: "Carrot", type: "vegetable" },
  { name: "Banana", type: "fruit" },
  { name: "Broccoli", type: "vegetable" },
];
const groupItems = items.reduce((acc, item) => {
  const key = item.type;
  if (!acc[key]) acc[key] = [];
  acc[key].push(item.name);
  return acc;
}, {});
console.log(groupItems);

//مرتب‌سازی اعداد به صورت صعودی
const nums1 = [5, 12, 3, 20, 8];
console.log(nums1.sort((a, b) => a - b));

//مرتب‌سازی اعداد به صورت نزولی
const nums2 = [5, 12, 3, 20, 8];
console.log(nums1.sort((a, b) => b - a));

//مرتب‌سازی رشته‌ها به ترتیب حروف الفبا
const names1 = ["Zahra", "Ali", "Mohsen", "Saba"];
console.log(names1.sort());

//مرتب‌سازی رشته‌ها بر اساس طولشان
const words = ["banana", "kiwi", "apple", "grape", "watermelon"];
console.log(words.sort((a, b) => a.length - b.length));

//مرتب‌سازی اسامی بر اساس حروف آخر
const names3 = ["Mina", "Sina", "Nima", "Rana"];
console.log(
  names3.sort((a, b) => {
    const lastA = a[a.length - 1];
    const lastB = b[b.length - 1];
    return lastA.localeCompare(lastB);
  })
);

//تبدیل دمایی
const celsiusTemps = [0, 20, 37, 100];
const f = celsiusTemps.map((c) => c * 1.8 + 32);
console.log(f);

//
const names2 = ["علی", "زهرا", "رضا"];
const n = names2.map((c) => (c.length % 2 !== 0 ? "آقای " + c : "خانم " + c));
console.log(n);

//
const numbers2 = [1, 2, 3, 4, 5, 6];
const even2 = numbers2.filter((number) => number % 2 === 0);
console.log(even2);

//
const users = [
  { name: "Ali", isActive: true },
  { name: "Sara", isActive: false },
  { name: "Reza", isActive: true },
];

const usersActive = users
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(usersActive);

//
const numbers3 = [10, 20, 30, 40];
const sumnumbers3 = numbers3.reduce((acc, el) => acc + el, 0);
console.log(sumnumbers3);

//
const names4 = ["Ali", "Asghar", "Sara", "Sina", "Maryam"];
const groupingnames4 = names4.reduce((acc, el) => {
  const firstL = el[0];
  if (!acc[firstL]) {
    acc[firstL] = [];
  }
  acc[firstL].push(el);
  return acc;
}, {});
console.log(groupingnames4);

//
const sumFunc = function (a, b) {
  return a + b;
};
console.log(sumFunc(10, 2));

//
const getLength = function (el) {
  return el.length;
};
console.log(getLength("AliReza"));

//
const getLengthArrow = (el) => el.length;
console.log(getLengthArrow("AliRezaAhmadi"));

//فاکتوریل یک عدد
const factorial = (el) => {
  if (el === 0) return 1;
  return el * factorial(el - 1);
};

console.log("فاکتوریل عدد: " + factorial(5));

//
const doSomething = (num, callBack) => {
  let result = num * 2;
  callBack(result);
};

doSomething(2, (res) => {
  console.log("نتیجه:", res);
});

//عدد 5 را به صورت فوری دو برابر کن و نمایش بده.
(function (n) {
  return console.log(n * 2);
})(5);

//
function triple(num) {
  return num * 3;
}

console.log(triple(3)); // باید بشه 9
//
const sayHello = function (name) {
  return "Hello " + name;
};

console.log(sayHello("Sara")); // باید بگه: "Hello Sara"
