# Encapsulate collection (replace record with data class)
## Why?
You have a class where a field contains a collection of objects.
### Benefits:
- prevent changing the collection of objects from outside the object.
- hide data
## What?
Make the getter to returned a value read-only and create methods for adding/deleting elements of the collection.
## How?
- Create a class to store the data
- Replace record with collection of objects
- Test
## Sample
**Before**
```js
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
/*
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
*/
    get courses(){
        return this.#courses;
    }

    set courses(listOfCourses){
        this.#courses = listOfCourses;
    }
}

```
![After refactoring](../../images/arrow.png)
```js
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
/*
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
*/
    get courses(){
        return this.#courses.slice();
    }

    set courses(listOfCourses){
        this.#courses = listOfCourses;
    }

    addCourse(course){
        this.#courses.push(course);
    }
/*
    findCourseIndex(course){
        const hasName = (name) => name == course;
        return this.#courses.findIndex(hasName);
    }

    removeCourse(course){
        if(this.#courses && this.#courses.length > 0){
            let courseIndex = this.findCourseIndex(course);
            if(courseIndex != -1){
                this.#courses.splice(courseIndex, 1);
            }
        }
    }
*/
}

module.exports = Person;
```
