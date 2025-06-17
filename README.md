# Grid Helper

NPM package for creating a grid overlay.

# Installation

## Install package:

```
npm i @thomascoppein/grid-helper
```

## Import package in Javascript file:

```javascript
import GridHelper from '@thomascoppein/grid-helper';
```

## How to use

```javascript
const GridHelper = new GridHelper();
```

## Options

| property          | default   |
| ----------------- | --------- |
| gutter            | '30px'    |
| columns           | 12        |
| columnsMobile     | 4         |
| columnsColor      | '#ffcfdf' |
| zIndex            | 9999999   |
| containerMaxWidth | '80vw'    |
| containerPadding  | '10vw'    |
| mobileBreakpoint  | '375px'   |

```javascript
const GridHelper = new GridHelper({
  gutter: '50px',
  columns: 12,
  columnsMobile: 4,
  columnsColor: '#000000',
  zIndex: 999999,
  containerMaxWidth: '1600px',
  containerPadding: '5vw',
  mobileBreakpoint: '600px',
});
```

## How to enable

Use the key-combination `CTRL + G` to toggle the helper.
