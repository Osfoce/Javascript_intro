let myTodo = {
    Day: 'Monday',
    meetings: 0,
    done: 0
}

let addTodo = function(todo, num = 0){
    todo.meetings = todo.meetings + num;
}

let doneTodo = function(todo, num = 0){
    // if (num > todo.done){
    //     todo.done = todo.done - num        
    // }
    // else{

    // }
    todo.done = todo.done - num;
}

let resetTodo = function(todo){
    todo.meetings = 0;
    todo.done = 0;
}

let summary = function(todo){
    // + is used because of logical issue
    return `you have ${todo.meetings + todo.done} meetings remaining`;
}

addTodo(myTodo, 4);
doneTodo(myTodo, 2);
// console.log(myTodo)
res = summary(myTodo)
console.log(res)