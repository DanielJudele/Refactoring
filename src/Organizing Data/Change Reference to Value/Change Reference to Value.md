# Rename field
## Why?
- You have a reference object that’s too small and will not be changed.
### Benefits:
- The name is clear and the code is more readable and understandable.
## What?
- Change reference to value
## How?
- Check that the candidate class is immutable or can become immutable
- For each setter apply "Remove Setting" Method
## Sample
**Before**
```js

```
![After refactoring](../../../images/arrow.png)
```js

```