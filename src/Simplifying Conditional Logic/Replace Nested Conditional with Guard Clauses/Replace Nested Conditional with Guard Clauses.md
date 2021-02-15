# Replace Nested Conditional with Guard Clauses
## Why?
- You have a group of nested conditionals and it’s hard to determine the normal flow of code execution.
A guard clause is simply a check that immediately exits the function, either with a return statement or an exception
### Benefits:
- The code is more readable and understandable.
## What?
- Use guard clauses.
## How?
- Select outermost condition that needs to be replaced nad change it into guard clause.
- Test
## Sample
**Before**
```js

```
![After refactoring](../../../images/arrow.png)
```js

```