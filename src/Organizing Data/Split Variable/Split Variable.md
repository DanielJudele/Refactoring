# Split Variable
## formerly: Remove Assignments to Parameters
## formerly: Split Temp
## Why?
- You see a variable with more than one responsability.
This variable should be replaced with replaced with multiple variables, one for each responsability.
### Benefits:
- The code is more easy to read and it's not confusing for the reader.
## What?
- Replace the variable with multiple variables. 
## How?
- Change the name of the variable at its declaration 
- If it's possible, declare a new variable as immutable.
- Test
## Sample
**Before**
```js

```
![After refactoring](../../../images/arrow.png)
```js

```