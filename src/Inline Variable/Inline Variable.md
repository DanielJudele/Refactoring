# Inline variable (inverse of Extract variable)
## Why?
You have a variable which store the result of a simple expression.
### Benefits:
- improve code readability by removing not necessary variables.
## What?
Replace the reference of the variable with the expression itself.
## How?
- Replace the reference of the variable with the expression itself.
- Delete the declaration of the variable

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
