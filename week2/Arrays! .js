let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(favoriteAnimals.length);
favoriteAnimals.push("turtle");
console.log(favoriteAnimals.length);

// 2.3
favoriteAnimals.splice(1, 0, "meerkat");

// 2.4 & 2.5 & 2.6
console.log("splice method add or removing element at the index that we want");
console.log("favoriteAnimals.length");
console.log("\n The array has length of:\n + lengthOfArray ");

// 2.7 & 2.8 // removes 1 element from index 3
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);

// 2.9 & 2.10 indexOf() Method'
let index = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: " 1 + index);
























