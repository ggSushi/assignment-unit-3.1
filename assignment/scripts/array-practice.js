console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let faveFoods = ['spaghetti', 'lasagna', 'strawberries', 'cookies'];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log('My favorite foods are', faveFoods);


// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Amount of my favorite foods:', faveFoods.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
console.log('First fave food is', faveFoods[0]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log('Last animal is', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log('Last animal is', animalArray[animalArray.length - 1]);


// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
faveFoods.push('pizza')
console.log('Added new fave food:', faveFoods[faveFoods.length - 1]);


// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
let removedFoods = faveFoods.pop();
console.log('Nevermind. Did not like it, so I removed', removedFoods);
console.log('My fave foods are now', faveFoods);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
faveFoods.unshift('meatballs');
console.log(`Added new food to the beginning: ${faveFoods}`);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
removedFoods = faveFoods.shift();
console.log('Removed first food', removedFoods);
console.log('My fav foods are now', faveFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
console.log(`I don't really like`, faveFoods[1], `anymore.`);
faveFoods[1] = 'baked ziti';
console.log(`I prefer`, faveFoods[1], `now`);
console.log('Now, my fave foods are', faveFoods);


// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.

faveFoods.sort();
faveFoods.reverse();
console.log(`Reorganized my list:`, faveFoods);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

/*I'm going to try to do it through the arrayName.join function and the for loop */

//arrayName.join();
console.log(faveFoods.join(' and '));

//For loop
let combineFoods ='';
for (let i = 0; i < faveFoods.length; i += 1) {
    console.log(faveFoods[i]);
    if (i === faveFoods.length - 1) {
        combineFoods += faveFoods[i];
    } else {
        combineFoods += `${faveFoods[i]} and `; //<-- this is what changes the value
    }
}
console.log(combineFoods); /* <-- This refers to the new variable made that has the
new value given from the code in the loop.*/


// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

let everything = faveFoods.concat(animalArray);
console.log(everything);


// Practicing While loops in class 1.18.23

let ingred = ['salt', 'pepper', 'chicken'];
let max = ingred.length;
let start = 0;

while (start < max) {
    console.log(ingred[start]);
    start += 1;
}