# Encapsulate record (replace record with data class)
## Why?
You have data stored in a record 
### Benefits:
- improve maintainability
- hide data
## What?
Create a class to store the value
## How?
- Create a class to store the data
- Replace record with collection of objects
- Test
## Sample
**Before**
```js
person = {firstName: "Dan", lastName:"Popescu", dateOfBirth: "6th October 2012"}
```
![After refactoring](../../images/arrow.png)
```js
class Person{
    constructor(data){
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.dateOfBirth = data.dateOfBirth;
    }

    get firstName(){
        return this.firstName;
    }
    
    set firstName(value){
        this.firstName = value;
    }

    get lastName(){
        return this.lastName;
    }

    set lastName(value){
        this.lastName = value;
    }    

    get dateOfBirth(){
        return this.dateOfBirth;
    }

    set dateOfBirth(value){
        this.dateOfBirth = value;
    }    
}

module.exports = Person;
```
