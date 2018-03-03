webpack-loader-helper
===
Helper function to define use rules for webpack configuration

INSTALL
---
```sh
npm install --save-dev webpack-loader-helper
```

USAGE
---
```ts
import { loader } from 'webpack-loader-helper';
loader('css', { sourceMap: true }); // => { loader: 'css-loader', options: { sourceMap: true } }
```

API
---
```ts
loader(name: string, options?: any) => { loader: string, options: any}
```

CHANGELOG
---
See [CHANGELOG](CHANGELOG.md)
