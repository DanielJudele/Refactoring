# Extract Method function

                class Person{
                    constructor(firstName, lastName, dateOfBirth){
                        this.firstName = firstName;
                        this.lastName = lastName;
                        this.dateOfBirth = dateOfBirth;
                    }

                    getAge(){
                        return 24;
                    }

                    printPerson(){
                        let age = this.getAge();

                        <font color="red">
                            console.log(`name: ${this.firname}`);
                            console.log(`name: ${this.lastName}`);
                            console.log(`name: ${age}`);
                        </font>
                    }
                }