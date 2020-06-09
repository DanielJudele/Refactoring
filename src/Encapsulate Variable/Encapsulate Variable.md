# Encapsulate Variable
## Why?
You have public field and you want to avoid other objects to update the value of that field.
### Benefits:
- ?
## What?
Make the field private.
## How?
Make the field private and create access function for it.

```js
class Person{
    constructor(firstName, lastName, dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    isAdult(){
        return this.getAge() >= 18;
    }

    getAge(){
        const diffMiliseconds = Date.now() - Date.parse(this.dateOfBirth);
        return new Date(diffMiliseconds).getFullYear() - 1970;
    }

    getFName(){
        return this.firstName + ' ' + this.lastName;
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

**========>>>**

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
