/**
 * Specifies options which may be supplied when saving a document as an FXG file. All properties are optional.
 * @constructor
 */
function FXGSaveOptions() {
	/**
	 * If saveMultipleArtboards is true, this is considered for multi-asset extraction, which specifies the artboard range. An empty string extracts all the artboards. Default: empty string
	 * @type {string}
	 */
	this.artboardRange = "";
	/**
	 * The policy used by FXG to expand blends. Default: BlendsExpandPolicy.AUTOMATICALLYCONVERTBLENDS
	 * @type {BlendsExpandPolicy}
	 */
	this.blendsPolicy = BlendsExpandPolicy.AUTOMATICALLYCONVERTBLENDS;

	/**
	 * If true, linked images are downsampled (at 72 dpi). Default: false
	 * @type {boolean}
	 */
	this.downsampleLinkedImages = false;

	/**
	 * The policy used by FXG to preserve filters. Default: FiltersPreservePolicy.KEEPFILTERSEDITABLE
	 * @type {FiltersPreservePolicy}
	 */
	this.filtersPolicy = FiltersPreservePolicy.KEEPFILTERSEDITABLE;

	/**
	 * The policy used by FXG to preserve gradients. Default:GradientsPreservePolicy.AUTOMATICALLYCONVERTGRADIENTS
	 * @type {GradientsPreservePolicy}
	 */
	this.gradientsPolicy = GradientsPreservePolicy.AUTOMATICALLYCONVERTGRADIENTS;

	/**
	 * If true, unused symbols are included. Default: false
	 * @type {boolean}
	 */
	this.includeUnusedSymbols = false;

	/**
	 * If true, the editing capabilities of FXG are preserved. Default: true
	 * @type {boolean}
	 */
	this.preserveEditingCapabilities = true;

	/**
	 * If true, all artboards or range of artboards are saved. Default: false
	 * @type {boolean}
	 */
	this.saveMultipleArtboards = false;

	/**
	 * The policy used by FXG to preserve text. Default: TextPreservePolicy.AUTOMATICALLYCONVERTTEXT
	 * @type {TextPreservePolicy}
	 */
	this.textPolicy = TextPreservePolicy.AUTOMATICALLYCONVERTTEXT;

	/**
	 * The version of the FXG file format to create. Default FXGVersion.VERSION2PT0
	 * @type {FXGVersion}
	 */
	this.version = FXGVersion.VERSION2PT0;

}


module.exports = FXGSaveOptions;