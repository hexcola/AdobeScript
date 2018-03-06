/**
 * Options for exporting a document as an 8-bit PNG file, used with the exportFile method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification.
 * @constructor
 */
function ExportOptionsPNG8() {
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
	 * The number of colors in the exported image’s color table. Range: 2 to 256. Default: 128  (long) 
	 * @type {number}
	 */
	this.colorCount = 128;

	/**
	 * The method used to dither colors in the exported image. Default: ColorDitherMethod.Diffusion
	 * @type {ColorDitherMethod}
	 */
	this.colorDither = ColorDitherMethod.Diffusion;

	/**
	 * The method used to reduce the number of colors in the exported image. Default: ColorReductionMethod.SELECTIVE
	 * @type {ColorReductionMethod}
	 */
	this.colorReduction = ColorReductionMethod.SELECTIVE;

	/**
	 * The amount (as a percentage) that the colors of the exported image are dithered, where 100.0 is 100%. Range: 0 to 100. Default: 88 (long) 
	 * @type {number}
	 */
	this.ditherPercent = 88;

	/**
	 * The horizontal scaling factor to apply to the exported image, where 100.0 is 100%. Default: 100.0 (double) 
	 * @type {number}
	 */
	this.horizontalScale = 100.0;

	/**
	 * If true, the exported image should be interlaced. Default: false
	 * @type {boolean}
	 */
	this.interlaced = false;

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

	/**
	 * Specifies how much the color table should be changed to match the web palette, where 100 is maximum. Default: 0  (long)
	 * @type {number}
	 */
	this.webSnap = 0;
}


module.exports = ExportOptionsPNG8;