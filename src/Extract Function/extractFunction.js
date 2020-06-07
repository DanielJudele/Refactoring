// Original code
/*
class Person{
    constructor(firstName, lastName, dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    getAge(){
        return 24;
    }

    printPerson(){
        let age = this.getAge();

        console.log(`name: ${this.firname}`);
        console.log(`name: ${this.lastName}`);
        console.log(`name: ${age}`);
    }
}
*/

// Refactored code

class Person{
    constructor(firstName, lastName, dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    getAge(){
        return 24;
    }

    printPerson(){
        let age = this.getAge();

        this.showDetails(age);
    }

    showDetails(){
        console.log(`name: ${this.firname}`);
        console.log(`name: ${this.lastName}`);
        console.log(`name: ${age}`);
    }
}

module.exports = Person;