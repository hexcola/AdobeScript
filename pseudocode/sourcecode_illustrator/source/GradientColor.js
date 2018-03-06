/**
 * A gradient color specification in a Gradient object. A script can create a new gradient color using a reference to an existing gradient in the document. If no existing gradient object is referenced, a default gradient is supplied.
 * 
 * @constructor
 */
function GradientColor() {
	/**
	 * The gradient vector angle in degrees. Default: 0.0 (double) 
	 * @type {number}
	 */
	this.angle = 0.0;

	/**
	 * Reference to the object defining the gradient.
	 * @type {Gradient}
	 */
	this.gradient = "";


	/**
	 *  The gradient highlight vector angle in degrees. (double)
	 *  @type {number}
	 */
	this.hiliteAngle = 0;


	/**
	 * The gradient highlight vector length. (double) 
	 * @type {number}
	 */
	this.hiliteLength = 0;


	/**
	 * The gradient vector length.  (double) 
	 * @type {number}
	 */
	this.length = 0;

	/**
	 * An additional transformation matrix to manipulate the gradient path. 
	 * @type {Matrix}
	 */
	this.matrix = null;


	/**
	 *  The gradient vector origin, the center point of the gradient in this color. array of 2 numbers
	 *  @type {array}
	 */
	this.origin = null;


	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";
}

module.exports = GradientColor;