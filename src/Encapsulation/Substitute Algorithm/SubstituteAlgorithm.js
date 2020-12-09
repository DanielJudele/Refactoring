// Refactored code
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
        return this.#courses.slice();
    }

    set courses(listOfCourses){
        this.#courses = listOfCourses;
    }

    addCourse(course){
        this.#courses.push(course);
    }

    findCourseIndex(course){
        const filter = (element) => element === course;
        return this.#courses.findIndex(filter);
    }

    removeCourse(course){
        if(this.#courses && this.#courses.length > 0){
            let courseIndex = this.findCourseIndex(course);
            if(courseIndex != -1){
                this.#courses.splice(courseIndex, 1);
            }
        }
    }
}

module.exports = Person;