// Original code
class Person{
    constructor(firstName, lastName, dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    isAdult(){
        const age = this.getAge();
        return age >= 18;
    }

    getAge(){
        return new Date(Date.now() - Date.parse(this.dateOfBirth)).getFullYear() - 1970;
    }

    printPerson(){
        let age = this.getAge();
        this.showDetails(age);
    }

    showDetails(age){
        console.log(`name: ${this.firname}`);
        console.log(`name: ${this.lastName}`);
        console.log(`name: ${age}`);
    }
}

module.exports = Person;