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
        return this.#courses.slice();
    }

    set courses(listOfCourses){
        this.#courses = listOfCourses;
    }

    addCourse(course){
        this.#courses.push(course);
    }

    findCourseIndex(course){
        var index = -1;
        if(this.#courses && this.#courses.length > 0){
            for (var i = 0; i < this.#courses.length; i++) {
                if(this.#courses[i] === course){
                    index = i;
                }
            }
        }

        return index;
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

module.exports.Original = Person;