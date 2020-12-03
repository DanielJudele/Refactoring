# Extract class
## Why?
You have a subset of data and a subset of methods seem to go together.
Class should be a crisp abstraction, only handle few clear responsabilities. 
### Benefits:
- improve the maintenance of the code
## What?
Split the responsabilities of the class.
## How?
- Create a new class.
- Copy the subsets of methods that seem to go togheter to that class.
- Create a instance of the child class when constructing the parent.
- Decide whether to expose the new child.
## Sample
**Before**
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
![After refactoring](../../../images/arrow.png)
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
