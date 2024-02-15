const toDoList = []
toDoList.push('cook food')
toDoList.push('go to fellowship')
toDoList.push('wash clothes')


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

