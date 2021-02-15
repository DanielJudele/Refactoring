# Rename field
## Why?
- You have many identical instances of a single class that you need to replace with a single object. 
Changing a value to a reference results in only one object being present for an entity and all the changes will be visible for all the components.
### Benefits:
- The name is clear and the code is more readable and understandable.
## What?
- Change value to reference
## How?
## Sample
**Before**
```js

```
![After refactoring](../../../images/arrow.png)
```js

```