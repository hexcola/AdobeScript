/**
 * A gradient definition contained in a document. Scripts can create new gradients.
 * 
 * @constructor
 */
function Gradient() {
	/**
	 *  Read-only. The gradient stops contained in this gradient.
	 *  @type {GradientStops}
	 */
	this.gradientStops = null;

	/**
	 * The gradient’s name.
	 * @type {string}
	 */
	this.name = "";

	/**
	 * Read-only. The document that contains this gradient.
	 * @type {Document}
	 */
	this.parent = null;

	/**
	 * The kind of the gradient, either radial or linear.
	 * @type {GradientType}
	 */
	this.type = null;

	/**
	 *  Read-only. The class name of the referenced object.
	 *  @type {string}
	 */
	this.typename = "";
}

Gradient.prototype = {
	/**
	 * Removes the referenced object from the document.
	 */
	remove: function() {

	}
};

module.exports = Gradient;