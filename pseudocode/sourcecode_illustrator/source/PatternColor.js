/**
 * A pattern color specification. You can create a new pattern color by modifying an existing pattern in the document. Any modification you make to a pattern affects that pattern in the Palette.
 * PatternColor objects can be used in any property that takes a color object, such as fillColor or strokeColor.
 *  
 * @constructor
 */
function PatternColor() {
	/**
	 * Additional transformation arising from manipulating the path.
	 * @type {Matrix}
	 */
	this.matrix = null;

	/**
	 * A reference to the pattern object that defines the pattern to use in this color definition.
	 * @type {Pattern}
	 */
	this.pattern = null;

	/**
	 *  If true, the prototype should be reflected before filling. Default: false
	 *  @type {boolean}
	 */
	this.reflect = false;

	/**
	 * The axis around which to reflect, in points. Default: 0.0 number (double) 
	 * @type {number}
	 */
	this.reflectAngle = 0.0;

	/**
	 * The angle in radians to rotate the prototype pattern before filling. Default: 0.0 number (double) 
	 * @type {number}
	 */
	this.rotation = 0.0;

	/**
	 *  The fraction to which to scale the prototype pattern before filling, represented as a point containing horizontal and vertical scaling percentages. array of 2 numbers
	 *  @type {array}
	 */
	this.scaleFactor = [0, 0];

	/**
	 * The angle in radians by which to slant the shear. Default: 0.0 number (double) 
	 * @type {number}
	 */
	this.shearAngle = 0.0;

	/**
	 * The axis to shear with respect to, in points. Default: 0.0  number (double) 
	 */
	this.shearAxis = 0.0;

	/**
	 * The angle in radians to which to translate the unscaled prototype pattern before filling. Default: 0.0  number (double) 
	 * @type {number}
	 */
	this.shiftAngle = 0.0;

	/**
	 * The distance in points to which to translate the unscaled  prototype pattern before filling. Default: 0.0  number (double)
	 * @type {number} 
	 */
	this.shiftDistance = 0.0;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";
}


module.exports = PatternColor;