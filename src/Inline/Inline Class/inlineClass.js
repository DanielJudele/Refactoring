// Original code
class Person{
    #firstName;
    #lastName;
    #dateOfBirth;
    #officeAreaCode;
    #officeNumber;

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

module.exports = Person;