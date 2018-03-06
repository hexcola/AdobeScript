/**
 * Information about the color separations to be used in printing the document.
 * @constructor
 */
function PrintColorSeparationOptions() {

	/**
	 * The color separation type. Default: PrintColorSeparationMode.COMPOSITE
	 * @type {PrintColorSeparationMode}
	 */
	this.colorSeparationMode = PrintColorSeparationMode.COMPOSITE;

	/**
	 * If true, all spot colors should be convertedto process colors. Default: false
	 * @type {boolean}
	 */
	this.convertSpotColors = false;

	/**
	 * The list of inks for color separation. array of Ink 
	 * @type {array}
	 */
	this.inkList = null;

	/**
	 * If true, overprint in black. Default: false
	 * @type {boolean}
	 */
	this.overPrintBlack = false;

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";

}

module.exports = PrintColorSeparationOptions;