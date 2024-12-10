# JavaScript Objects Cheatsheet

## Object Basics
- Objects store key-value pairs of data
- Created using two syntaxes:
  ```javascript
  let user = new Object(); // Constructor syntax
  let user = {};  // Object literal syntax
  ```

## Creating Objects with Properties
```javascript
let user = {
  name: "John",  // Key-value pair
  age: 30,       // Can store different data types
  "likes birds": true  // Multiword keys must be quoted
};
```

## Accessing Properties
### Dot Notation
```javascript
user.name;  // Access property (for simple key names)
```

### Square Bracket Notation
```javascript
user["likes birds"];  // Access multiword or variable keys
let key = "name";
user[key];  // Dynamic property access
```

## Modifying Objects
```javascript
// Add new property
user.isAdmin = true;

// Delete property
delete user.age;

// Shorthand property creation
function makeUser(name, age) {
  return { name, age };  // Shorthand for name: name, age: age
}
```

## Property Checks
```javascript
// Check property existence
"name" in user;  // Returns true/false

// Checking for empty object
function isEmpty(obj) {
  for (let key in obj) {
    return false;  // If any property exists
  }
  return true;
}
```

## Iterating Over Objects
```javascript
// for...in loop
for (let key in user) {
  console.log(key);       // Property names
  console.log(user[key]); // Property values
}
```

## Key Ordering
- Integer properties are sorted numerically
- Non-integer properties maintain creation order
- To force creation order for numeric keys, prefix with "+"

## Important Notes
- Property keys are converted to strings
- No restrictions on property names (except __proto__)
- Can use any type as a property value
- Accessing non-existent property returns `undefined`

## Common Object Operations
```javascript
// Sum object values
let sum = Object.values(salaries).reduce((a, b) => a + b, 0);

// Multiply numeric properties
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}
```

## Pro Tips
- Use dot notation for simple, known property names
- Use square brackets for:
  - Multiword properties
  - Dynamic property access
  - Computed property names