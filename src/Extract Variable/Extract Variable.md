# Extract variable (inverse of Inline variable)
## Why?
You have an expression which become very complex and hard to read and understand.
### Benefits:
- the code it's more readable
- it's more easy to understand the algorithm
## What?
Set the result of the expression to a immutable variable.
## How?
- Declare a immutable variable
- Set the result of the expression to the new variable
- Replace the expression with the new variable

```js
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
        const age = this.getAge();
        return age >= 18;
    }

    getAge(){
        const diffMiliseconds = Date.now() - Date.parse(this.dateOfBirth);
        return new Date(diffMiliseconds).getFullYear() - 1970;
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
