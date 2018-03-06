/**
 * Options for opening a Photoshop document, used with the open method.
 * 
 * @constructor
 */
function OpenOptionsPhotoshop() {

	/**
	 *  The name of the layer comp to use when the document is converted.
	 *  @type {string}
	 */
	this.layerComp = "";

	/**
	 *  If true, preserve hidden layers when the document is converted. Default: false.
	 * @type {boolean}
	 */
	this.preserveHiddenLayers = false;

	/**
	 *  If true, preserve image maps when the document is converted. Default: true.
	 * @type {boolean}
	 */
	this.preserveImageMaps = true;

	/**
	 * If true, preserve layers when the document is converted. Default: true.
	 * @type {boolean}
	 */
	this.preserveLayers = true;

	/**
	 * If true, preserve slices when the document is converted. Default: true.
	 * @type {boolean}
	 */
	this.preserveSlices = true;

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";

}

module.exports = OpenOptionsPhotoshop;