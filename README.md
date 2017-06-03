# ztotest
[![Build Status](https://travis-ci.org/mnassih@gmail.com/test.svg?branch=master)](https://travis-ci.org/mnassih@gmail.com/test)
[![codecov](https://codecov.io/gh/mnassih@gmail.com/test/branch/master/graph/badge.svg)](https://codecov.io/gh/mnassih@gmail.com/test)
[![npm version](https://badge.fury.io/js/ztotest.svg)](http://badge.fury.io/js/ztotest)
[![devDependency Status](https://david-dm.org/mnassih@gmail.com/test/dev-status.svg)](https://david-dm.org/mnassih@gmail.com/test?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/mnassih@gmail.com/test.svg)](https://github.com/mnassih@gmail.com/test/issues)
[![GitHub stars](https://img.shields.io/github/stars/mnassih@gmail.com/test.svg)](https://github.com/mnassih@gmail.com/test/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/mnassih@gmail.com/test/master/LICENSE)

## Demo
https://mnassih@gmail.com.github.io/test/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save ztotest
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { ZtotestModule } from 'ztotest';

@NgModule({
  imports: [
    ZtotestModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/mnassih@gmail.com/test/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ztotest/bundles/ztotest.umd.js"></script>
<script>
    // everything is exported ztotest namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://mnassih@gmail.com.github.io/test/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
