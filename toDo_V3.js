let myTodo = {
    Day: 'Monday',
    meetings: 0,
    done: 0,

    updateTodo: function(num=0)
    {
        this.meetings = this.meetings + num;
    },

    resetTodo: function(){
        this.meetings = 0;
        this.done = 0;
    },

    summary: function(){
        return `you have ${this.meetings - this.done} meetings unattended to`
    },

    doneTodo: function(num=0){
        this.done = this.done += num
    }
}

myTodo.updateTodo(5)
myTodo.updateTodo(5)
myTodo.doneTodo(3)
myTodo.doneTodo(2)
console.log(myTodo.summary())

// using arrow functions
let newTodo = {
    Day: 'Monday',
    task: 0,
    Done: 0,

    updateTask: (num=0) => {this.task = this.task + num},
    taskDone: (num=0) => {this.Done = this.Done += num},
    reset: () => 
    {this.task = 0
    this.Done = 0},
    coment: () => `you have ${this.task - this.Done} tasks unattended to`

}

newTodo.updateTask(5)
newTodo.taskDone(3)
comment = newTodo.coment()
console.log(comment)