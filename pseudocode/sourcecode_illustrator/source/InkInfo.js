/**
 * Ink information for printing a document.
 * @constructor
 */
function InkInfo() {
	/**
	 * The ink’s screen angle in degrees. Range: -360 to 360  number (double) 
	 * @type {number}
	 */
	this.angle = 0;

	/**
	 * The color of the custom ink.
	 * @type {Color}
	 */
	this.customColor = white;

	/**
	 * The neutral density. Minimum: 0.0  number (double) 
	 * @type {number}
	 */
	this.density = 0.0;

	/**
	 * The dot shape name.
	 * @type {string}
	 */
	this.dotShape = "";

	/**
	 * The ink’s frequency. Range: 0.0 to 1000.0 number (double) 
	 * @type {number}
	 */
	this.frequency = 0.0;

	/**
	 * The ink type.
	 * @type {InkType}
	 */
	this.kind = null;

	/**
	 * The ink printing status.
	 * @type {InkPrintStatus}
	 */
	this.printingStatus = null;

	/**
	 * The trapping type.
	 * @type {TrappingType}
	 */
	this.trapping = null;

	/**
	 * The order of trapping for the ink. Range: 1 to 4 for CMYK number (long) 
	 * @type {number}
	 */
	this.trappingOrder = 1;

	/**
	 * Read-only. The class name of the object.  
	 * @type {string}
	 */
	this.typename = "";
}

module.exports = InkInfo;