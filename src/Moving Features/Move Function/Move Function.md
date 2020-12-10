# Move Function
## formely: Move Method
## Why?
- You want to move a method to a class that contains most of the data used by the method.
Often, this operation improves encapsulations.
- You want to move a method in order to reduce or eliminate the dependency of the class calling the method on the class in which it’s located.
This reduces the dependency between classes.
### Benefits:
- it's more easy to maintain the code, especially when there are changes in the delegate object.
## What?
Remove the dependency by placing a simple delegate method on the server that hides the delegate. 
## How?
- Verify all features used by the old method in its class.
- Declare the new method in the recipient class.
- Decide how you will refer to the recipient class.
- Take a look: can you delete the old method entirely? If so, place a reference to the new method in all places that use the old one.
## Sample
**Before**
```js
/*class TelephoneNumber {
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
        return this.#telephoneNumber.areaCode;
    }

    set officeAreaCode(value){
        this.#telephoneNumber.areaCode = value;
    }

    get officeNumber(){
        return this.#telephoneNumber.number;
    }
*/    
    set officeNumber(value){
        if(!this.isPhoneNumberValid(value)){
            throw "Invalid Phone number."
        }

        this.#telephoneNumber.number = value;        
    }       

    isPhoneNumberValid(phoneNumber) {
        var pattern = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/;
        if(phoneNumber.match(pattern)) {
          return true;
        }
        
        return false;
    }
/*}

module.exports.Person = Person;*/
```
![After refactoring](../../../images/arrow.png)
```js
/*class TelephoneNumber {
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
*/
    isPhoneNumberValid(phoneNumber) {
        var pattern = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/;
        if(phoneNumber.match(pattern)) {
          return true;
        }
        
        return false;
    }
/*}

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
        return this.#telephoneNumber.areaCode;
    }

    set officeAreaCode(value){
        this.#telephoneNumber.areaCode = value;
    }

    get officeNumber(){
        return this.#telephoneNumber.number;
    }
*/    
    set officeNumber(value){
        if(!this.#telephoneNumber.isPhoneNumberValid(value)){
            throw "Invalid Phone number."
        }

        this.#telephoneNumber.number = value;        
    }
/*}

module.exports.Person = Person;*/
```