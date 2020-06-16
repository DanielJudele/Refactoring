// Original code
/*
person = {firstName: "Dan", lastName:"Popescu", dateOfBirth: "6th October 2012"}
*/

// Refactored code
class Person{
    constructor(data){
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.dateOfBirth = data.dateOfBirth;
    }

    get firstName(){
        return this.firstName;
    }
    
    set firstName(value){
        this.firstName = value;
    }

    get lastName(){
        return this.lastName;
    }

    set lastName(value){
        this.lastName = value;
    }    

    get dateOfBirth(){
        return this.dateOfBirth;
    }

    set dateOfBirth(value){
        this.dateOfBirth = value;
    }    
}

module.exports = Person;