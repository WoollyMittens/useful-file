
/*
	Source:
	van Creij, Maurice (2018). "file.js: File input element", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var File = function (config) {

	this.only = function (config) {
		// start an instance of the script
		return new this.Main(config, this);
	};

	this.each = function (config) {
		var _config, _context = this, instances = [];
		// for all element
		for (var a = 0, b = config.elements.length; a < b; a += 1) {
			// clone the configuration
			_config = Object.create(config);
			// insert the current element
			_config.element = config.elements[a];
			// start a new instance of the object
			instances[a] = new this.Main(_config, _context);
		}
		// return the instances
		return instances;
	};

	return (config.elements) ? this.each(config) : this.only(config);

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = File;
}

// extend the class
File.prototype.Main = function (config, context) {

	// PROPERTIES

	this.config = config;
	this.context = context;
	this.element = config.element;

	// METHODS

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
		this.element.addEventListener('change', this.update.bind(this, this.element, readout));
		// update at least once
		this.update(this.element, readout);
		// return the object
		return this;
	};

	this.update = function (element, readout, evt) {
		readout.innerHTML = element.value;
	};

	this.init();

};
