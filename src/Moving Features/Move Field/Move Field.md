# Move Field
## Why?
- You have a field which is used more in another class than in its own class. Put a field in the same place as the methods that use it.
### Benefits:
- improve encapsulation and security of the code
- it's more easy to maintain the code
## What?
- Create the same field in another class and use it. 
## How?
- Create the same field in another class.
- Change all the references to the old field with appropiate calls to use the new field.
- Delete the old field.
= Test it.
## Sample
**Before**
```js
/*class Address{
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
*/  #isLivingAbroad; /*

    constructor(firstName, lastName, dateOfBirth){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#dateOfBirth = dateOfBirth;
    }

    get Address(){
        return this.#address;
    }
*/    
    set Address(address){
        this.#address = address;
        if(this.#address && this.#address.Country){
            this.#isLivingAbroad = this.#address.Country !== "Romania";
        } 
    }
/*
    get FirstName(){
        return this.#firstName;
    }
*/
    get IsLivingAbroad(){
        return this.#isLivingAbroad;
    }
/*
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

    showDetails(age){
        console.log(`name: ${this.firname}`);
        console.log(`name: ${this.lastName}`);
        console.log(`name: ${age}`);
    }
}*/
```
![After refactoring](../../../images/arrow.png)
```js
/*class Address{
    #streetName;
    #streetNumber;
    #town;
    #country;    
*/    #isLivingAbroad;/*

    constructor(streetName, streetNumber, town, country){
        this.#streetName = streetName;
        this.#streetNumber = streetNumber;
        this.#town = town;
        this.#country = country;
    */  this.#isLivingAbroad = country !== "Romania"; /*
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
*/  
    get IsLivingAbroad(){
        return this.#isLivingAbroad;
    }
/*
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
    
    set Address(address){
        this.#address = address;    
    }

    get FirstName(){
        return this.#firstName;
    }
*/
    get IsLivingAbroad(){
        return this.#address.IsLivingAbroad;
    }   
/* 

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

    showDetails(age){
        console.log(`name: ${this.firname}`);
        console.log(`name: ${this.lastName}`);
        console.log(`name: ${age}`);
    }
}

module.exports = { Person, Address}; */
```