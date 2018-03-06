/**
 * Options for exporting a document as a JPEG file, used with the exportFile method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification.
 * @constructor
 */
function ExportOptionsJPEG() {

	/**
	 * If true, the exported image should be anti-aliased. Default: true
	 * @type {boolean}
	 */
	this.antiAliasing = true;

	/**
	 * If true, the exported image should be clipped to the art board.
	 * @type {boolean}
	 */
	this.artBoardClipping = false;

	/**
	 * The amount of blur to apply to the exported image. Range: 0.0 to 2.0. Default: 0.0 (double) 
	 * @type {number}
	 */
	this.blurAmount = 0.0;

	/**
	 * The horizontal scaling factor to apply to the exported image, where 100.0 is 100%. Default: 100.0 (double) 
	 * @type {number}
	 */
	this.horizontalScale = 100.0;
	/**
	 *  If true, the art board should be matted with a color. Default: true
	 * @type {boolean}
	 */
	this.matte = true;

	/**
	 * The color to use when matting the art board. Default: white
	 * @type {RGBColor}
	 */
	this.matteColor = white;
	/**
	 * If true, the exported image should be optimized for web viewing. Default: true
	 * @type {boolean}
	 */
	this.optimization = true;

	/**
	 * The quality of the exported image. Range: 0 to 100. Default: 30  (long) 
	 * @type {number}
	 */
	this.qualitySetting = 30;

	/**
	 * If true, the exported image should be saved with an accompanying HTML file. Default: false
	 * @type {boolean}
	 */
	this.saveAsHTML = false;

	/**
	 *  Read-only. The class name of the referenced object.
	 *  @type {string}
	 */
	this.typename = "";

	/**
	 * The vertical scaling factor to apply to the exported image. Range: 0.0 to 776.19. Default: 100.0 (double) 
	 * @type {number}
	 */
	this.verticalScale = 100.0;
}


module.exports = ExportOptionsJPEG;