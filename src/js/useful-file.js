/*
	Source:
	van Creij, Maurice (2012). "useful.file.js: File input element", version 20130510, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// public object
var useful = useful || {};

(function(){

	// invoke strict mode
	"use strict";

	// private functions
	useful.File = function (obj, cfg) {
		this.obj = obj;
		this.cfg = cfg;
		this.start = function () {
			var wrapper, removed, readout, context = this;
			// create the wrapper skin
			wrapper = document.createElement('div');
			wrapper.className = 'file button';
			context.obj.parentNode.insertBefore(wrapper, context.obj);
			// move the element into the wrapper
			removed = context.obj.parentNode.removeChild(context.obj);
			wrapper.appendChild(removed);
			// add the readout overlay
			readout = document.createElement('div');
			readout.className = 'file-readout';
			wrapper.appendChild(readout);
			// add update event handler
			context.obj.onchange = function () {
				context.update(context.obj, readout);
			};
			// update at least once
			context.update(context.obj, readout);
			// disable the start function so it can't be started twice
			this.start = function () {};
		};
		this.update = function (element, readout) {
			readout.innerHTML = element.value;
		};
		// go
		this.start();
	};

	// return as a require.js module
	if (typeof module !== 'undefined') {
		exports = module.exports = useful.File;
	}

})();
