# Inline function (inverse of Extract Function)
## Why?
You have a function body which is more obvious than the function itself.
### Benefits:
- avoid too many indirection
- the code is more straightforward
- minimizing the number of unneeded methods
## What?
Replace the call to that function with the content of the function itself.
## How?
- Replace the call to that function with the content of the function itself
- Delete the function
## Sample
**Before**
```js
/*
class Person{
    constructor(firstName, lastName, dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
*/        
    hasMoreThan18(age){
        return age >= 18;
    }

    isAdult(){
        const age = this.getAge();
        return this.hasMoreThan18(age);
    }

    getAge(){
        const diffMiliseconds = Date.now() - Date.parse(this.dateOfBirth);
        return new Date(diffMiliseconds).getFullYear() - 1970;
    }
/*
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
*/
```
![After refactoring](../../../images/arrow.png)
```js
/*
class Person{
    constructor(firstName, lastName, dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
*/
    isAdult(){
        const age = this.getAge();
        return age >= 18;
    }

    getAge(){
        const diffMiliseconds = Date.now() - Date.parse(this.dateOfBirth);
        return new Date(diffMiliseconds).getFullYear() - 1970;
    }
/*
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

module.exports = Person;*/
