// 1
let myLaptop = {
    screen: "16 by 5",
    keyboard: 'AmericanKey',
    Charger: 'Hp',
    brand: 'Hp',
    Battery: '3500mah',
    Storage: '256gb'
}
// looping through the object 
for (let key in myLaptop) {
  if (myLaptop.hasOwnProperty(key)) {
    console.log(`${key}: ${myLaptop[key]}`);
  }
}
// 2
let myCourse = {
    name: "JavaScript",
    Author: 'Oselu fortunatus',
    price: "$150",
    description: 'This course starts from the basics upto the pro level'
}
console.log(`Hey, theres a new course ${myCourse.name} by ${myCourse.Author} with price ${myCourse.price} and has a description ${myCourse.description}`)
