// // alert('You sure say you be human')
// const text = document.querySelector('p')
// text.textContent = 'Slight Modification'

// const text = document.querySelectorAll('p') // returns iterrable
// text.forEach((p)=> p.textContent = 'Dey play omo')
// // console.log(text)

// document.querySelector('button').addEventListener('click', (event)=>{
//    let click = event.target.textContent = 'you clicked me'
//    console.log(click)
// })

// document.querySelector('#myform').addEventListener('input', (event)=>{
//     console.log(event.target.value)
// })

var getInput = document.getElementById('myform')
var input = getInput.value

var press = document.getElementById('myButton').onclick = function {
    console.log(input);
    localStorage('myform', input);
}
localStorage('myform', input);