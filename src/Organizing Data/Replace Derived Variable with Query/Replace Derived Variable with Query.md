# Replace Derived Variable with Query+
## Why?
- You see a variable which stores a calculation.
### Benefits:
- Avoid a possible issue related to mutable data.
## What?
- Remove variable with calculation, where is possible. 
## How?
- Identify all points where the variable is used.
- Test
## Sample
**Before**
```js

```
![After refactoring](../../../images/arrow.png)
```js

```