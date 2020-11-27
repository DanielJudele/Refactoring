# Rename Variable
## Why?
You have a function which contains a group of related data items. These items can be added in a single structure.
### Benefits:
- code is more readable
- more easy to maintain the code
- avoid code duplication
## What?
Rename variable.
## How?
- Find all references to that variable and change every one
- Test
## Sample
**Before**
```js
/*
class Address{
    #streetName;
    #streetNumber;
    #town;
    #country;

    constructor(streetName, streetNumber, town, country){
        this.#streetName = streetName;
        this.#streetNumber = streetNumber;
        this.#town = town;
        this.#country = country;
    }
    
    get Country(){
        return this.#country;
    }

    get StreetName(){
        return this.#streetName;
    }
    
    get StreetNumber(){
        return this.#streetNumber;
    }

    get Town(){
        return this.#town;
    }

    getFormattedAddress(){
        return 'StreetName: ' + this.#streetName + '; StreetNumber: ' + this.#streetNumber + '; Town:' + this.#town + '; Country: ' + this.#country;
    }
}

class Person{
    #firstName;
    #lastName;
    #dateOfBirth;
    #address;

    constructor(firstName, lastName, dateOfBirth){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#dateOfBirth = dateOfBirth;
    }

    get Address(){
        return this.#address;
    }

    get FirstName(){
        return this.#firstName;
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

    getFormattedAddress(){
        return this.#address.getFormattedAddress();
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
*/
    setAddress(streetName, streetNumber, town, country){
        this.#address = new Address(streetName, streetNumber, town, country);
    }
/*
    showDetails(age){
        console.log(`name: ${this.firname}`);
        console.log(`name: ${this.lastName}`);
        console.log(`name: ${age}`);
    }
}
*/

module.exports = { Person, Address};
```
![After refactoring](../../../../images/arrow.png)
```js
/*
class Address{
    #streetName;
    #streetNumber;
    #town;
    #country;

    constructor(streetName, streetNumber, town, country){
        this.#streetName = streetName;
        this.#streetNumber = streetNumber;
        this.#town = town;
        this.#country = country;
    }
    
    get Country(){
        return this.#country;
    }

    get StreetName(){
        return this.#streetName;
    }
    
    get StreetNumber(){
        return this.#streetNumber;
    }

    get Town(){
        return this.#town;
    }

    getFormattedAddress(){
        return 'StreetName: ' + this.#streetName + '; StreetNumber: ' + this.#streetNumber + '; Town:' + this.#town + '; Country: ' + this.#country;
    }
}

class Person{
    #firstName;
    #lastName;
    #dateOfBirth;
    #address;

    constructor(firstName, lastName, dateOfBirth){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#dateOfBirth = dateOfBirth;
    }

    get Address(){
        return this.#address;
    }

    get FirstName(){
        return this.#firstName;
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

    getFormattedAddress(){
        return this.#address.getFormattedAddress();
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
*/
    set Address(address){
        this.#address = address;
    }
/*
    showDetails(age){
        console.log(`name: ${this.firname}`);
        console.log(`name: ${this.lastName}`);
        console.log(`name: ${age}`);
    }
}
*/
```