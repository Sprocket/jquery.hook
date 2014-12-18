# jQuery.hook
#### The Arguably Cleaner Way to Select

jQuery Hook allows you to separate interaction from presentation. By using HTML's data attribute you no long have to depend on CSS classes.

Based on Will Boyd's  [Sitepoint article](http://www.sitepoint.com/effective-event-binding-jquery)

- [codersblock.com](http://codersblock.com)
- [@lonekorean](https://twitter.com/lonekorean)

Repurposed with permission by Duncan Heal

- [Sprocket Web Design](http://sprocket.co.nz)
- [@duncn](https://twitter.com/lonekorean)

Usage
-----
Simply link to jQuery and jQuery.hook, add a data-hook attribute to your element and select away:

#### HTML:

	<button data-hook="nav-menu-toggle">Toggle Nav Menu</button>

#### jQuery:

	$.hook('nav-menu-toggle').on('click', function() {
	    $.hook('nav-menu').toggle();
	});

License
-------
	[MIT License]: http://mit-license.org/
