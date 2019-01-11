## Import meta

Zero dependency, tiny utility for determining the `dirname` and `filename` for a source file from `import.meta`. Designed to be used with `--experimental-modules`.

### Install

```
yarn add otsu-app/import-meta
```

### Usage

```javascript
import meta from 'import-meta'
const {dirname, filename} = meta(import.meta)
```
