# Remove Middle Man
## Inverse of Hide Delegate
## Why?
A class has too many methods that simply delegate to other objects.
Sometimes the server is the middle man and it's time for the client to call the delegate directly.
### Benefits:
- it's more easy to add new features.
## What?
Call the delegate directly , force the client to call the end methods directly and remove not necessary methods. 
## How?
- Create a getter for the delegate.
- Delete source class.
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
