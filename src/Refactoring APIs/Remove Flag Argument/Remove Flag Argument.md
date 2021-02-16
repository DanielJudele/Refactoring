# Remove Flag Argument
formely: Replace Parameter with Explicit Methods
## Why?
- You have a method is split into parts, each of which is run depending on the value of a parameter.
A method containing parameter-dependent variants has grown massive. Non-trivial code is run in each branch and new variants are added very rarely.
### Benefits:
- The name is clear readable, understandable and easy to maintain.
## What?
- 
## How? 
## Sample
**Before**
```js

```
![After refactoring](../../../images/arrow.png)
```js

```