class Student {
    // to make a class an abstract, we first in the constructor make unistanciatable for example
    // constructor(){
    //     if(this.constructor === Student){
    //         throw new Error("Be careful... you cannot instanciate me")
    //     }
    // }
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static score = 9
    height = 26
    position = 54

    getFullName(){
        return `${this.firstName} ${this.lastName} is my full name`
    }

    editName(newName){
        const name = newName.split(' ')
        this.firstName = name[0];
        this.lastName = name[1]
    }

    addSubject(){
        return `${this.firstName} ${this.lastName} is my full name and I teach ${this.subject}`
    }
}

class Teacher extends Student{
    constructor(firstName, lastName, age, subject){
        super(firstName, lastName, age);
        this.subject = subject;
    }

    // addSubject(){
    //     return `${this.firstName} ${this.lastName} is my full name and I teach ${this.subject}`
    // }
}


const Cj = new Student("Oselu", 'Fortunatus', 29)
console.log(Cj)
// Cj.editName('Isaac j')
// console.log(Cj.addSubject())

