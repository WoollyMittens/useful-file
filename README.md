# file.js: File Selector

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

An alternative for the HTML file input element.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/file.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/file.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'./js/file.js'
], function(File) {
	...
});
```

Or use imported as a component in existing projects.

```js
@import {File} from "js/file.js";
```

## How to start the script

```javascript
var files = new File({
	'elements' : document.querySelectorAll('input.file')
});
```

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
