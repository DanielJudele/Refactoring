# Separate Query from Modifier
## Why?
- You have a method that returns a value but also changes something inside an object.
This method implements Command and Query Responsibility Segregation. This principle tells us to separate code responsible for getting data from code that changes something inside an object.
### Benefits:
- The name is clear readable, understandable and easy to maintain.
## What?
- Change reference to value
## How? 
## Sample
**Before**
```js

```
![After refactoring](../../../images/arrow.png)
```js

```