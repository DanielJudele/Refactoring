// Original code
class Person{
    #firstName;
    #lastName;
    #dateOfBirth;
    #courses;

    constructor(data){
        this.#firstName = data.firstName;
        this.#lastName = data.lastName;
        this.#dateOfBirth = data.dateOfBirth;
        this.#courses = [];
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

    get courses(){
        return this.#courses;
    }

    set courses(listOfCourses){
        this.#courses = listOfCourses;
    }
}

module.exports.Original = Person;