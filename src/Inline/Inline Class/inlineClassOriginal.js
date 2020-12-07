// Original code
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
    
    set officeNumber(value){
        this.#telephoneNumber.number = value;
    }
}

module.exports = Person;