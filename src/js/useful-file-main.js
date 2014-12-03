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
useful.File.prototype.Main = function (cfg, parent) {
	// properties
	"use strict";
	this.parent = parent;
	this.cfg = cfg;
	this.obj = cfg.element;
	// methods
	this.start = function () {
		var wrapper, removed, readout, _this = this;
		// create the wrapper skin
		wrapper = document.createElement('div');
		wrapper.className = 'file button';
		_this.obj.parentNode.insertBefore(wrapper, _this.obj);
		// move the element into the wrapper
		removed = _this.obj.parentNode.removeChild(_this.obj);
		wrapper.appendChild(removed);
		// add the readout overlay
		readout = document.createElement('div');
		readout.className = 'file-readout';
		wrapper.appendChild(readout);
		// add update event handler
		_this.obj.onchange = function () {
			_this.update(_this.obj, readout);
		};
		// update at least once
		_this.update(_this.obj, readout);
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
