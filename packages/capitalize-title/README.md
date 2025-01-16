# Capitalize Title

This package provides a utility function to capitalize titles according to (The Chicago Manual of Style.)[http://www.chicagomanualofstyle.org/]

## Installation

```bash
// with npm
npm install @kickass-coderz/capitalize-title

// with yarn
yarn add @kickass-coderz/capitalize-title

// with pnpm
pnpm add @kickass-coderz/capitalize-title
```

## Usage

Import the function and use it to capitalize a title.

```ts
import { capitalizeTitle } from "@kickass-coderz/capitalize-title";

const title = capitalizeTitle("i'M a MaD sCiEnTiSt");

// This will result with "I'm a Mad Scientist"
```

Pass an array of special words which shouldn't be capitalized.

```ts
import { capitalizeTitle } from "@kickass-coderz/capitalize-title";

const title = capitalizeTitle("acme is the best company", ["acme"]);

// This will result with "acme Is the Best Company"
```
