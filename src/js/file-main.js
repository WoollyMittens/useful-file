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
