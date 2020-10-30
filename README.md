<h1 align="center">rutcl</h1>
<h4 align="center">A set of chilean RUT utility functions for Deno</h4>
<p align="center">
  <img src="https://github.com/wachunei/rutcl/workflows/ci/badge.svg" / alt="ci">
</p>

```ts
import {
  clean,
  format
  getDigit,
  isValid,
  validate,
} from "https://deno.land/x/rutcl/mod.ts";


try {
  validate("123456789");
} catch (error) {
  console.error(error.message); // "RUT is not valid"
}

isValid("123456785"); // => true
getDigit(12345678); // => "5"
clean("12.345.678-5"); // => "123456785"
format("123456785"); // => "12.345.678-5"
```

<hr />

## Usage

Import functions from `https://deno.land/x/rutcl/mod.ts`

```ts
import { format, validate } from "https://deno.land/x/rutcl/mod.ts";
```

Or import a single function from `/lib/`

```ts
import clean from "https://deno.land/x/rutcl/lib/clean.ts";
```

## Functions

- [isValid](#functions-isvalid)
- [validate](#functions-validate)
- [getDigit](#functions-getdigit)
- [format](#functions-format)
- [clean](#functions-clean)

<a name="functions-isvalid"></a>

### `isValid(dirtyRut: string | number): boolean`

Returns a boolean, `true` if RUT is valid, `false` otherwise.

```ts
import isValid from "https://deno.land/x/rutcl/lib/isValid.ts";

isValid(123456789); // => false
```

<a name="functions-validate"></a>

### `validate(dirtyRut: string | number): void`

Throws an `InvalidRUTException` if RUT is not valid.

```ts
import validate from "https://deno.land/x/rutcl/lib/validate.ts";

validate(123456789); // => Throws InvalidRUTException
```

<a name="functions-getdigit"></a>

### `getDigit(partialDirtyRut: string | number): string`

Returns a valid verification digit for given partial RUT

```ts
import getDigit from "https://deno.land/x/rutcl/lib/getDigit.ts";

getDigit("12345678"); // => "5"
```

<a name="functions-format"></a>

### `format(dirtyRut: string | number): string`

Returns a formatted RUT

```ts
import format from "https://deno.land/x/rutcl/lib/format.ts";

format("123456785"); // => "17.702.835-5"
```

<a name="functions-clean"></a>

### `clean(dirtyRut: string | number): string`

Returns a clean RUT, only digits.

```ts
import clean from "https://deno.land/x/rutcl/lib/clean.ts";

clean("12.345.678-5"); // => "177028355"
```

## CLI

`TODO`

### Install CLI

`TODO`
