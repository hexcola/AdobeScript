/**
 * Options for opening a document, used with the open method.
 * 
 * @constructor
 */
function OpenOptions() {
	/**
	 * Optional. Convert crop areas to artboards when opening a legacy document in Illustrator CS4 or later. When false, crop areas are discarded. Default: true.
	 * @type {boolean}
	 */
	this.convertCropAreaToArboard = true;

	/**
	 * Optional. Convert print tiles to artboards when opening a legacy document in Illustrator CS4 or later. Default: false. 
	 * @type {boolean}
	 */
	this.convertTilesToArboard = false;

	/**
	 * Optional. Create an artboard with the dimensions of the bounding box of the artwork when opening a legacy document in Illustrator CS4 or later. Default: false.
	 * @type {boolean}
	 */
	this.createArtboardWithArtworkBoundingBox = false;

	/**
	 * Optional. Open the file as an Illustrator library of this type. Default: LibraryType.IllustratorArtwork.
	 * @type {LibraryType}
	 */
	this.openAs = LibraryType.IllustratorArtwork;

	/**
	 * Optional. Preserve legacy artboards when opening a legacy document in Illustrator CS4 or later. Default: true.
	 * @type {boolean}
	 */
	this.preserveLegacyArtboard = true;

	/**
	 * If true, preserves the spot colors in the gradient mesh objects for legacy documents (pre-Illustrator CS4). Default: true
	 * @type {boolean}
	 */
	this.updateLegacyGradientMesh = true;

	/**
	 * Optional. If true, update all legacy text items (from previous versions of Illustrator). Default: false
	 * @type {boolean}
	 */
	this.updateLegacyText = false;
}

module.exports = OpenOptions;