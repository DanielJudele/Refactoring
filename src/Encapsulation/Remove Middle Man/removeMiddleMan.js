// Refactored code
class Department{
    #manager;
    #name;
    constructor(name){
        this.#name = name;
    }

    set manager(value){
     this.#manager = value;   
    }

    get manager(){
        return this.#manager;   
    }

    get name(){
        return this.#name;   
    }
}

class Person{
    #firstName;
    #lastName;
    #dateOfBirth;
    #officeAreaCode;
    #officeNumber;
    #department;

    constructor(data){
        this.#firstName = data.firstName;
        this.#lastName = data.lastName;
        this.#dateOfBirth = data.dateOfBirth;
    }

    get firstName(){
        return this.#firstName;
    }
    
    set firstName(value){
        this.#firstName = value;
    }

    get lastName(){
        return this.#lastName;
    }

    set lastName(value){
        this.#lastName = value;
    }    

    get dateOfBirth(){
        return this.#dateOfBirth;
    }

    set dateOfBirth(value){
        this.#dateOfBirth = value;
    }

    get officeAreaCode(){
        return this.#officeAreaCode;
    }

    get department(){
        return this.#department;
    }

    set department(value){
        this.#department = value;
    }

    get fullName(){
        return this.#firstName + ' ' + this.#lastName;
    }
    
    set officeAreaCode(value){
        this.#officeAreaCode = value;
    }

    get officeNumber(){
        return this.#officeNumber;
    }
    
    set officeNumber(value){
        this.#officeNumber = value;
    }
}

module.exports = {Person, Department};