# Change Function Declaration
## Why?
You have a method which name doesn't explain what the method does.
### Benefits:
- improve code readability.
## What?
Replace the name of the method.
## How?
- Replace the name of the method everywhere is used.

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

    getFullName(){
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