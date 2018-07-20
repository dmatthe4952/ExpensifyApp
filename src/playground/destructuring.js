//
// Object destructuring
//

// const person = {
//     name: 'Dave',
//     age: 66,
//     location: {
//         city: 'Gadsden',
//         temp: 72
//     }
// };

// const {name = 'Anonymous',age} = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${name} is ${age}.`);


// const {temp: temperature, city} = person.location;
// if (city && temperature){
//     console.log(`It is ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const {name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
//  Array destructuring
//

// const address = ['71 Montclair Dr.', 'Gadsden', 'Alabama','35901']; 
// const [,city,state] = address;
// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.75', '$3.50'];
const [itemName,,price] = item;

console.log(`A medium ${itemName} costs ${price}.`)








