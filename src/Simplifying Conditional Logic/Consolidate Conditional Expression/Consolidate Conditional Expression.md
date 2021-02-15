# Consolidate Conditional Expression
## Why?
- You have a series of conditional checks where each check is different but the resulting action is the same.
### Benefits:
- The code is more readable and understandable.
## What?
- Use "And" and "Or" operators to consolidate them into a single conditional check with a single result.
## How?
- Take two of the conditional statements and combine their conditions using a logical operator.
- Test
- Repeat combining conditionals until they are all in a single conditions.
## Sample
**Before**
```js

```
![After refactoring](../../../images/arrow.png)
```js

```