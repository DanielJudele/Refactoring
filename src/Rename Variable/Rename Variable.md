# Rename Variable
## Why?
You have a variable doesn't have a well name. "Naming is the heart of clear programming".
### Benefits:
- ?
## What?
Rename variable.
## How?
- Find all references to that variable and change every one
- Test
## Sample
**Before**
```js
class Person{
    #firstName;
    #lastName;
    #dateOfBirth;

    constructor(firstName, lastName, dateOfBirth){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#dateOfBirth = dateOfBirth;
    }

    isAdult(){
        return this.getAge() >= 18;
    }

    getAge(){
        const diffMiliseconds = Date.now() - Date.parse(this.#dateOfBirth);
        return new Date(diffMiliseconds).getFullYear() - 1970;
    }

    get FirstName(){
        return this.#firstName;
    }

    get LastName(){
        return this.#lastName;
    }

    get FullName(){
        return this.#firstName + ' ' + this.#lastName;
    }

    printPerson(){
        let a = this.getAge();
        this.showDetails(a);
    }

    showDetails(age){
        console.log(`name: ${this.firname}`);
        console.log(`name: ${this.lastName}`);
        console.log(`name: ${age}`);
    }
}
```
**After refactoring**
```js
class Person{
    #firstName;
    #lastName;
    #dateOfBirth;

    constructor(firstName, lastName, dateOfBirth){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#dateOfBirth = dateOfBirth;
    }

    isAdult(){
        return this.getAge() >= 18;
    }

    getAge(){
        const diffMiliseconds = Date.now() - Date.parse(this.#dateOfBirth);
        return new Date(diffMiliseconds).getFullYear() - 1970;
    }

    get FirstName(){
        return this.#firstName;
    }

    get LastName(){
        return this.#lastName;
    }

    get FullName(){
        return this.#firstName + ' ' + this.#lastName;
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
```
