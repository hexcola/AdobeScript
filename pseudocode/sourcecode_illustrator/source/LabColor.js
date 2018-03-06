/**
 * A collection of InsertionPoint objects.
 * @constructor
 */
function LabColor() {
	/**
	 * The a (red-green) color value. Range -128.0–128.0. Default: 0.0 number (double) 
	 * @type {number}
	 */
	this.a = 0.0;

	/**
	 * The b (yellow-blue) color value. Range -128.0–128.0. Default: 0.0 number (double) 
	 * @type {number}
	 */
	this.b = 0.0;

	/**
	 * The l (lightness) color value. Range -128.0–128.0. Default: 0.0 number (double) 
	 * @type {number}
	 */
	this.l = 0.0;
}

module.exports = LabColor;