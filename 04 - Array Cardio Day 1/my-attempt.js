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
console.log(
  "1. Filter the list of inventors for those who were born in the 1500's"
);

const fifteens = inventors.filter((person) => {
  if (person.year >= 1500 && person.year <= 1599) {
    return person;
  }
});
console.table(fifteens);

// Array.prototype.map()
console.log("\n2. Give us an array of the inventors first and last names");

const inventorsNames = inventors.map((person) => {
  return `${person.first} ${person.last}`;
});

console.table(inventorsNames);

// Array.prototype.sort()
console.log("\n3. Sort the inventors by birthdate, oldest to youngest");

const inventorsSortYear = inventors.sort((a, b) => {
  // return a.year < b.year ? 1 : -1;
  return a.year < b.year;
});

console.table(inventorsSortYear);

// Array.prototype.reduce()
console.log("\n4. How many years did all the inventors live all together?");

const inventorsTotalYearsLived = inventors.reduce((acc, cur) => {
  return acc + (cur.passed - cur.year);
}, 0);

console.log(inventorsTotalYearsLived);

// 5. Sort the inventors by years lived
console.log("\n5. Sort the inventors by years lived");

const inventorsSortYearsLived = inventors.sort((a, b) => {
  a.lived = a.passed - a.year;
  b.lived = b.passed - b.year;

  return a.lived < b.lived;
});

console.table(inventorsSortYearsLived);

console.log(
  "\n6. create a list of Boulevards in Paris that contain 'de' anywhere in the name\n(done in console already)"
);
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// copy into console:

// const de = [...document.querySelectorAll(".mw-category a")]
// const de = Array.from(document.querySelectorAll(".mw-category a"))
//   .map((a) => a.textContent)
//   .filter((text) => text.includes("de"));

// console.table(de);

// 7. Sort Exercise
console.log("\n7. Sort the people alphabetically by last name");

const peopleSorted = people.sort((a, b) => {
  return a > b;
});

console.table(peopleSorted);

// 7.1 Sort (Oscar)
console.log(
  "\n7.1. Sort the people alphabetically by first name, displayed as FirstName LastName "
);

// const peopleSplit = people.split(", ");
const peopleFirstLast = [];

for (let i = 0; i < people.length; ++i) {
  let personSplit = people[i].split(", ");

  peopleFirstLast[i] = `${personSplit[1]} ${personSplit[0]}`;
}

const peopleSortedByFirst = peopleFirstLast.sort((a, b) => a > b);

console.table(peopleSortedByFirst);

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

// Without using .reduce:
const transportation = {};

for (let i = 0; i < data.length; ++i) {
  // let iContent = data[i];
  if (transportation[data[i]]) {
    ++transportation[data[i]];
  } else {
    transportation[data[i]] = 1;
  }
}

console.table(transportation);

// Using .reduce:
// currently can't do it like WesBos. todo later.
const transSums = data.reduce((acc, cur) => {});
