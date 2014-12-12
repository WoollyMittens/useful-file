/*
	Source:
	van Creij, Maurice (2014). "useful.file.js: File input element", version 20141127, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// create the constructor if needed
var useful = useful || {};
useful.File = useful.File || function () {};

// extend the constructor
useful.File.prototype.Main = function (config, context) {
	// properties
	"use strict";
	this.config = config;
	this.context = context;
	this.element = config.element;
	// methods
	this.init = function () {
		var wrapper, removed, readout;
		// create the wrapper skin
		wrapper = document.createElement('div');
		wrapper.className = 'file button';
		this.element.parentNode.insertBefore(wrapper, this.element);
		// move the element into the wrapper
		removed = this.element.parentNode.removeChild(this.element);
		wrapper.appendChild(removed);
		// add the readout overlay
		readout = document.createElement('div');
		readout.className = 'file-readout';
		wrapper.appendChild(readout);
		// add update event handler
		var _this = this;
		this.element.onchange = function () {
			_this.update(_this.element, readout);
		};
		// update at least once
		this.update(this.element, readout);
		// return the object
		return this;
	};
	this.update = function (element, readout) {
		readout.innerHTML = element.value;
	};
};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = useful.File.Main;
}
