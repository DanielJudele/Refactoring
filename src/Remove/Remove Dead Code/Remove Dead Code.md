# Move Field
## Why?
- There is a piece of code which is not used anymore, a variable, parameter, field, method or class is no longer used.
### Benefits:
- reduced the size of the code
- it's more easy to maintain the code, it's not necessary for a developer to understand why there is that piece of code.
## What?
- Delete unused code. Since there is a version control system, anytime we can check the code we deleted.
When the version control was not available, a common practice was to comment the code before to delete it. 
## How?
- Nowadays we can use IDE to find such piece of code.
- Delete the code which is not used. 
- Run unit tests
## Sample
[https://refactoring.com/catalog/removeDeadCode.html]
**Before**
```js

```
![After refactoring](../../../images/arrow.png)

```