/**
 * Options for image capture, used with the imageCapture method. All properties are optional.
 * @constructor
 */
function ImageCaptureOptions() {

	/**
	 * If true, the image result is anti-aliased. Default: false
	 * @type {boolean}
	 */
	this.antiAliasing = false;

	/**
	 * If true, the artboard is matted with a color. Default: false
	 * @type {boolean}
	 */
	this.matte = false;

	/**
	 * The color to use for the artboard matte. Default: white 
	 * @type {RGBColor}
	 */
	this.matteColor = white;

	/**
	 * The resolution of the captured image file in points-per-inch (PPI), in the range [72.0 ... 2400.0]. Default: 150 (double) 
	 * @type {number}
	 */
	this.resolution = 150;


	/**
	 * If true, the image result is transparent. Default: false
	 * @type {boolean}
	 */
	this.transparency = false;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";
}

module.exports = ImageCaptureOptions;