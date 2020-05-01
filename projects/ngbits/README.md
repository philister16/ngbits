# Ngbits

Small bits of Angular for everyday use. This project contains a number of small libraries with more to be added over time. It is not yet another feature complete components library but instead aims to add additional features rarely found in frontend libraries out of the box.

## Getting started

Visit the [Docs](https://philister16.github.io/ngbits) for more detailed usage instructions.

Install the package:

`npm install --save @ngbits/ngbits`

Each individual ngbit feature consists of a separate module. Import the respective feature's module and add it to the imports array of a module in your application. For example to use the Flash feature do the following:

```typescript
import { NgbitFlashModule } from 'ngbits';

@NgModule({
    // ... module declarations etc.
    imports: [
    NgbitFlashModule
    ],
    // ... rest of module
})
export class AppModule { }
```

### Optional

The library comes with a number of default stylings which make use of the popular [Bootstrap CSS](https://getbootstrap.com) framework. For these to work, you need to also install and import boostrap.

`npm install --save bootstrap`

```scss
// styles.scss
@import '~bootstrap/scss/bootstrap`;
```

## Docs

You can find the full documentation [here](https://philister16.github.io/ngbits).

## License

Copyright 2020 Philister16

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.