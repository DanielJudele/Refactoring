[Refactoring](../../../../)

# Change Function Declaration
## Why?
You have a function which name doesn't explain what the function does.
### Benefits:
Improve code readability.
## What?
Replace the name of the function.
## How?
Replace the name of the function everywhere is used.
## Sample
For simplicity I commented the code which it was not changed.
```js
/*class Person{
    constructor(firstName, lastName, dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }*/

    getFName(){
        return this.firstName + ' ' + this.lastName;
    }
//}
```
![After refactoring](../../images/arrow.png)
```js
/*class Person{
    constructor(firstName, lastName, dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }*/ 

    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
//}
```

[See code sample](changeFunctionDeclaration.js)
