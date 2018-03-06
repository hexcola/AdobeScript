/**
 * Options for exporting a document as a 24-bit PNG file, used with the exportFile method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification.
 * @constructor
 */
function ExportOptionsPNG24() {
	/**
	 * If true, the exported image should be anti-aliased. Default: true
	 * @type {boolean}
	 */
	this.antiAliasing = true;

	/**
	 * If true, the exported image should be clipped to the art board. Default: false
	 * @type {boolean}
	 */
	this.artBoardClipping = false;

	/**
	 * The horizontal scaling factor to apply to the exported image, where 100.0 is 100%. Default: 100.0 (double) 
	 * @type {number}
	 */
	this.horizontalScale = 100.0;

	/**
	 * If true, the art board should be matted with a color. Default: true
	 * @type {boolean}
	 */
	this.matte = true;

	/**
	 * The color to use when matting the art board. Default: white
	 * @type {RGBColor}
	 */
	this.matteColor = white;

	/**
	 * If true, the exported image be saved with an accompanying HTML file. Default: false
	 * @type {boolean}
	 */
	this.saveAsHTML = false;

	/**
	 * If true, the exported image use transparency. Default: true
	 * @type {boolean}
	 */
	this.transparency = true;

	/**
	 * Read-only. The class name of the referenced object.  
	 * @type {string}
	 */
	this.typename = "";

	/**
	 *  The vertical scaling factor to apply to the exported image, where 100.0 is 100. Default: 100.0 (double)
	 *  @type {number}
	 */
	this.verticalScale = 100.0;
}


module.exports = ExportOptionsPNG24;