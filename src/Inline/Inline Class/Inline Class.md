# Inline class
## Inverse of Extract Class
## Why?
- If a class is no longer pulling its weight and shouldn't be around anymore.
- If you want to refactor into a pair of classes with a different allocation of the features. 
Sometimes it's easier to combine classes into a single class and then use Extract Class to make a new separation.
### Benefits:
- Eliminate needless classes
- Code is more easy to follow and read
- Important step when you want to refactor existing classes.
## What?
Combine source class into target class, one class.
## How?
- Copy all the functions and data from source to target class.
- Delete source class.
## Sample
**Before**
```js
class TelephoneNumber {
    #areaCode;
    #number; 
    
    get areaCode(){
        return this.#areaCode;
    }
    
    set areaCode(value){
        this.#areaCode = value;
    }

    get number(){
        return this.#number;
    }
    
    set number(value){
        this.#number = value;
    }
}

class Person{
    #firstName;
    #lastName;
    #dateOfBirth;
    #telephoneNumber;

    constructor(data){
        this.#firstName = data.firstName;
        this.#lastName = data.lastName;
        this.#dateOfBirth = data.dateOfBirth;
        this.#telephoneNumber = new TelephoneNumber();
    }
/*  get firstName(){
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
    }*/

    get officeAreaCode(){
        return this.#telephoneNumber.areaCode;
    }

    set officeAreaCode(value){
        this.#telephoneNumber.areaCode = value;
    }

    get officeNumber(){
        return this.#telephoneNumber.number;
    }
    
    set officeNumber(value){
        this.#telephoneNumber.number = value;
    }    
/*}

module.exports = Person;*/
```
![After refactoring](../../../images/arrow.png)
```js
/* class Person{
    #firstName;
    #lastName;
    #dateOfBirth; */   
    #officeAreaCode;
    #officeNumber;
/*  constructor(data){
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
    }*/

    get officeAreaCode(){
        return this.#officeAreaCode;
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
/*}

module.exports = Person;*/
```
