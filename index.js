// Regular array destructuring
const details = ['Jerry Hirsch', 43, 'https://twitch.tv/codehustle'];
const [name, age, twitch] = details;
console.log(name, age, twitch);

// Creating an array from a string separated by some commons seperator, in this case commas
const data = 'CodeHustle Academy, Array Madness, 918273, 2 days';
const [vendor, course, sku, duration] = data.split(',');
console.log(vendor, course, sku, duration);

// Using the REST operator to get the rest of the array
const team = ['Nicole', 'Jerry', 'Matthew', 'Cullen', 'Ethan'];
const [cpt, asst, ...players] = team;
console.log(cpt, asst);
