/*
Add a Hook Selector to jQuery

Based on Will Boyd's article
http://www.sitepoint.com/effective-event-binding-jquery/

http://codersblock.com
https://twitter.com/lonekorean

HTML:
<button data-hook="nav-menu-toggle">Toggle Nav Menu</button>

jQuery:
$.hook('nav-menu-toggle').on('click', function() {
    $.hook('nav-menu').toggle();
});

*/

$.extend({
    hook: function(hookName) {
        var selector;
        if(!hookName || hookName === '*') {
            // select all data-hooks
            selector = '[data-hook]';
        } else {
            // select specific data-hook
            selector = '[data-hook~="' + hookName + '"]';
        }
        return $(selector);
    }
});
