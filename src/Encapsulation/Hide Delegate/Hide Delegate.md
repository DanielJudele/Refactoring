# Hide Delegate
## Inverse of [Remove Middle Man](../../Remove/Remove%20Middle%20Man/Remove%20Middle%20Man.md)
## Why?
When the client code calls a method defined on an object in a field of the server object, the client needs to know about this delegate object.
If the delegate changes its interface the changes will affect the client code.
### Benefits:
- it's more easy to maintain the code, especially when there are changes in the delegate object.
## What?
Remove the dependency by placing a simple delegate method on the server that hides the delegate. 
## How?
### Delegate is the end object that contains the functionality needed by the client.
### Server is the object to which the client has direct access
- For each method on delegate, create a simple delegating method on on the server.
- Adjust the client code to call the server.
## Sample
**Before**
```js
class Department{
    #manager;
    #name;
    constructor(name){
        this.#name = name;
    }

    set manager(value){
     this.#manager = value;   
    }

    get manager(){
        return this.#manager;   
    }

    get name(){
        return this.#name;   
    }
}
/*
class Person{
    #firstName;
    #lastName;
    #dateOfBirth;
    #officeAreaCode;
    #officeNumber;
    #department;

    constructor(data){
        this.#firstName = data.firstName;
        this.#lastName = data.lastName;
        this.#dateOfBirth = data.dateOfBirth;
    }

    get firstName(){
        return this.#firstName;
    }
    
    set firstName(value){
        this.#firstName = value;
    }

    get lastName(){
        return this.#lastName;
    }

    set lastName(value){
        this.#lastName = value;
    }    

    get dateOfBirth(){
        return this.#dateOfBirth;
    }

    set dateOfBirth(value){
        this.#dateOfBirth = value;
    }

    get officeAreaCode(){
        return this.#officeAreaCode;
    }
*/
    get department(){
        return this.#department;
    }

    set department(value){
        this.#department = value;
    }
/*
    get fullName(){
        return this.#firstName + ' ' + this.#lastName;
    }
    
    set officeAreaCode(value){
        this.#officeAreaCode = value;
    }

    get officeNumber(){
        return this.#officeNumber;
    }
    
    set officeNumber(value){
        this.#officeNumber = value;
    }
}

module.exports = {Person, Department};
*/
```
![After refactoring](../../../images/arrow.png)
```js
class Department{
    #manager;
    #name;
    constructor(name){
        this.#name = name;
    }

    set manager(value){
     this.#manager = value;   
    }

    get manager(){
        return this.#manager;   
    }

    get name(){
        return this.#name;   
    }
}

class Person{
    #firstName;
    #lastName;
    #dateOfBirth;
    #officeAreaCode;
    #officeNumber;
    #department;

    constructor(data){
        this.#firstName = data.firstName;
        this.#lastName = data.lastName;
        this.#dateOfBirth = data.dateOfBirth;
    }
/*
    get firstName(){
        return this.#firstName;
    }
    
    set firstName(value){
        this.#firstName = value;
    }

    get lastName(){
        return this.#lastName;
    }

    set lastName(value){
        this.#lastName = value;
    }    

    get dateOfBirth(){
        return this.#dateOfBirth;
    }

    set dateOfBirth(value){
        this.#dateOfBirth = value;
    }

    get officeAreaCode(){
        return this.#officeAreaCode;
    }

    get fullName(){
        return this.#firstName + ' ' + this.#lastName;
    }
*/
    set department(value){
        this.#department = value;
    }

    get departmentName(){
        return this.#department.name;
    }

    get manager(){
        return this.#department.manager;
    }
/*  
    set officeAreaCode(value){
        this.#officeAreaCode = value;
    }

    get officeNumber(){
        return this.#officeNumber;
    }
    
    set officeNumber(value){
        this.#officeNumber = value;
    }
}

module.exports = {Person, Department};
*/
```