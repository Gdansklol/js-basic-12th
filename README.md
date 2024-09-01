# JS - basic practice

## 12 - Comparison Operator
- Comparison operation with boolean values.

- Since the comparison operation returns a boolean value, it can be used directly in expressions. For example, it can be passed directly into console.log().

```js
let num1 = 3;
let num2 = 5;

console.log(num1 >= num2); // false
console.log(num1 < num2);  // true
```

- Equality Comparison (Abstract Equality)
- Equality Comparison (Strict Equality)

```js
let a = 5;
let b = '5';

console.log(a == b);  // true (Abstract Equality Comparison)
console.log(a === b); // false (Strict Equality Comparison)

```

1. Abstract Comparison (Loose Equality): Uses == and allows type coercion.
Strict Comparison (Strict Equality): Uses === and does not allow type coercion.
A better phrasing would be:

2. Loose Equality Comparison (Abstract Equality) — for ==
Strict Equality Comparison — for ===
If you want to refer to strict comparison, simply say "Strict Equality Comparison."

> For example:

> Strict Equality Comparison: Ensures both value and type are the same (===).
Loose Equality Comparison: Compares values after performing type conversion (==).

## 13 - if(){}else{}


### 14 - while() { }