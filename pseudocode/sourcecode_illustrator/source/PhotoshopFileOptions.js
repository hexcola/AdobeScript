/**
 * Options for opening a Photoshop file, used with the open method. All properties are optional.
 *  
 * @constructor
 */
function PhotoshopFileOptions() {
	/**
	 * Read-only. The parent of this object.
	 * @type {object}
	 */
	this.parent = null;

	/**
	 * If true, imported images that have a non-square pixel aspect ratio should be adjusted.
	 * @type {boolean}
	 */
	this.pixelAspectRatioCorrection = false;

	/**
	 * If true, image maps should be preserved when document is converted. Default: true
	 * @type {boolean}
	 */
	this.preserveImageMaps = true;

	/**
	 * If true, layers should be preserved when document is converted. Default: true
	 * @type {boolean}
	 */
	this.preserveLayers = true;

	/**
	 *  If true, slices should be preserved when document is converted. Default: true
	 *  @type {boolean}
	 */
	this.preserveSlices = true;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";
}

module.exports = PhotoshopFileOptions;