/**
 * A gradient stop definition that represents a point on a specific gradient defined in the document. Each gradient stop specifies a color change in the containing gradient. See Changing a gradient stop color for an example.
 * 
 * @constructor
 */
function GradientStop() {
	/**
	 * The color linked to this gradient stop.
	 *  @type {Color}
	 */
	this.color = null;

	/**
	 *  The midpoint key value, specified as a percentage from 13.0 to 87.0.  (double)
	 *  @type {number}
	 */
	this.midPoint = 13.0;

	/**
	 * The opacity value for the gradient stop. Range: 0.0 to 100.0 
	 * @type {number}
	 */
	this.opacity = 0.0;

	/**
	 * Read-only. The gradient that contains this gradient stop.  (double)
	 * @type {Gradient}
	 */
	this.parent = null;

	/**
	 *  The location of the color in the blend in a range from 0.0 to 100.0, where 100.0 is 100%. (double) 
	 *  @type {number}
	 */
	this.rampPoint = 100.0;

	/**
	 *  Read-only. The class name of the referenced object.
	 *  @type {string}
	 */
	this.typename = "";
}

GradientStop.prototype = {
	/**
	 * Deletes this object.
	 */
	remove: function() {}
};


module.exports = GradientStop;