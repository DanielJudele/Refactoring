# Substitute Algorithm
## Why?
You want to replace an algorithm with one that is clearer.
The algorithm may be incorporated into a well-known library or framework.
### Benefits:
- the algorithm is simpler and more efficient, more easy to understand
- improve the maintenance of the code
## What?
Replace an algorithm with one that is clearer.
## How?
- Replace the body of the method that implements the algorithm with a new algorithm.
- Test
## Sample
**Before**
```js
/*class Person{
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
*/
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
/*
    removeCourse(course){
        if(this.#courses && this.#courses.length > 0){
            let courseIndex = this.findCourseIndex(course);
            if(courseIndex != -1){
                this.#courses.splice(courseIndex, 1);
            }
        }
    }
}

module.exports.Original = Person;*/
```
![After refactoring](../../../images/arrow.png)
```js
/*class Person{
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
*/
    findCourseIndex(course){
        const filter = (element) => element === course;
        return this.#courses.findIndex(filter);
    }
/*
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
*/
```
