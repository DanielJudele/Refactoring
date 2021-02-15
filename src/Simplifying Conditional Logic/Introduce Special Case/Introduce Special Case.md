# Introduce Special Case
## Why?
- You have parts of code base having the same reaction to a particular value and you want to bring that reaction into a single place.
A good mechanism for this is the Special Case pattern, where I can create a special element that captures all the common behavior.
### Benefits:
- The code is more readable and understandable.
## What?
- Decompose conditional  by replacing each chunk of code with a function.
## How?
## Sample
**Before**
```js

```
![After refactoring](../../../images/arrow.png)
```js

```