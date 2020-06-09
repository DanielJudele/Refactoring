# Extract function
## Why?
You have more lines in the code which can be grouped together.
### Benefits:
- the code is more readable: less code to read in that function
- avoid code duplication
- isolate independent code, more easy to write unit tests
## What?
Move the code which can be grouped to a new function/method and replace the old code with a call to that method.
## How?
- Create a new function
- Copy the code to that function
- Replace the old code with a call to that function

```js
                class Person{
                    constructor(firstName, lastName, dateOfBirth){
                        this.firstName = firstName;
                        this.lastName = lastName;
                        this.dateOfBirth = dateOfBirth;
                    }

                    getAge(){
                        const diffMiliseconds = Date.now() - Date.parse(this.dateOfBirth);
                        return new Date(diffMiliseconds).getFullYear() - 1970;
                    }

                    printPerson(){
                        let age = this.getAge();
                        
                        console.log(`name: ${this.firname}`);
                        console.log(`name: ${this.lastName}`);
                        console.log(`name: ${age}`);

                    }
                }
```
**========>>>**

```js
class Person{
    constructor(firstName, lastName, dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    getAge(){
        const diffMiliseconds = Date.now() - Date.parse(this.dateOfBirth);
        return new Date(diffMiliseconds).getFullYear() - 1970;
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
```
