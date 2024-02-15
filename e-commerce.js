// // Importing the 'readline' module for reading user input
// const readline = require('readline');

// // Creating an interface for reading and writing to the console
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Prompting the user for input
// rl.question('Enter something: ', (userInput) => {
//   // Displaying the user input
//   console.log('User entered:', userInput);

//   // Closing the readline interface
//   rl.close();
// });
const toDoList = []
toDoList.push('cook food')
toDoList.push('go to fellowship')
toDoList.push('wash clothes')

// toDoList.forEach(function(item, index)
// {
//     console.log(`task ${index + 1} is to: ${item}`)
// })
// console.log(toDoList)
toDoList.unshift('watch movie')
toDoList.unshift('eat')
toDoList.unshift('play game')
// console.log(toDoList)
let num = 0
for(i=0; i < toDoList.length; i++)
{
    console.log(`task ${num + 1} is: ${toDoList[i]}`)
    num += 1
}