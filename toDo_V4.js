const myTodo = [{
    title: "morning prayers",
    done: false,
},{
    tite: "attend classes",
    done: true,
},{
    title: "washing",
    done: false,

    isDone: () => this.done == true
}]
const find = myTodo.findIndex((todo, index) => todo.done == false)
console.log(find)