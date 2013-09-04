# useful.file.js: File Selector

An alternative for the HTML file input element.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=file">demo</a>.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="./css/file.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/file.min.js"></script>
```

To enable the use of HTML5 tags in Internet Explorer 8 and lower, include *html5.js*. To provide an alternative for *document.querySelectorAll* and CSS3 animations in Internet Explorer 8 and lower, include *jQuery*.

```html
<!--[if lte IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<![endif]-->
```

## How to start the script

This is the safest way of starting the script, but allows for only one target element at a time.

```javascript
var file = new useful.File( document.getElementById('id'), {});
file.start();
```

### Using document.querySelectorAll

This method allows CSS Rules to be used to apply the script to one or more nodes at the same time.

```javascript
var files = new useful.Instances(
	document.querySelectorAll('input.file'),
	useful.File,
	{}
);
files.wait();
```

The "Instances" function clones the settings for each element in the CSS rule.

### Using jQuery

This method is similar to the previous one, but uses jQuery for processing the CSS rule and cloning the settings.

```javascript
var files = [];
$('input.file').each(function (index, element) {
	files[index] = new useful.File( element, {});
	files[index].start();
});
```

## Prerequisites

To concatenate and minify the script yourself, the following prerequisites are required:
+ https://github.com/WoollyMittens/useful-interactions
+ https://github.com/WoollyMittens/useful-polyfills

## License
This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
