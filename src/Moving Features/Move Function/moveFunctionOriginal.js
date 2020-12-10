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
}

module.exports.Person = Person;