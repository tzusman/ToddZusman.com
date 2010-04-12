/* Copyright (c) 2009 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 *
 * Version: 3.0.2
 * 
 * Requires: 1.2.2+
 */
(function(a){function e(b){var c=[].slice.call(arguments,1),d=0;b=a.event.fix(b||window.event);b.type="mousewheel";if(b.wheelDelta){d=b.wheelDelta/120}if(b.detail){d=-b.detail/3}c.unshift(b,d);return a.event.handle.apply(this,c)}var f=["DOMMouseScroll","mousewheel"];a.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var b=f.length;b;){this.addEventListener(f[--b],e,false)}}else{this.onmousewheel=e}},teardown:function(){if(this.removeEventListener){for(var b=f.length;b;){this.removeEventListener(f[--b],e,false)}}else{this.onmousewheel=null}}};a.fn.extend({mousewheel:function(b){return b?this.bind("mousewheel",b):this.trigger("mousewheel")},unmousewheel:function(b){return this.unbind("mousewheel",b)}})})(jQuery);