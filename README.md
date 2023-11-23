# math-array-transform

A lightweight package that applies mathematical transformations to arrays using functional programming concepts.
<br></br>

## Installation

You can install the package using npm:

```bash
npm i math-array-transform
```

<br></br>

## Initialization

To use `math-array-transform` with ESM (ECMAScript Modules), you need to add the following configuration to your `package.json` file:

```json
// package.json
{
    "type": "module"
}
```

<br></br>

## Function

Applies a series of mathematical transformations to each element of the input array.

```typescript
mapWithFunctions(arr, functionsArray);
```

-   arr: The input array.
-   functionsArray: An array of mathematical functions to apply to each element of the input array.

<br></br>

## Usage

```typescript
import { mapWithFunctions } from "math-array-transform";
```

<br></br>

## Example

```typescript
const arr = [1, 2, 3, 4, 5];
const FunctionsArray = [(n) => Math.pow(n, 2), (n) => Math.sqrt(n), (n) => Math.pow(n, 3)];

const resultArray = mapWithFunctions(arr, FunctionsArray);
console.log(resultArray); // [ 1, 8, 27, 64, 125 ]
```
