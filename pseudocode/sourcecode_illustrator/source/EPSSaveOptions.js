/**
 * Options for saving a document as an Illustrator EPS file, used with the saveAs method. All properties are optional.
 * @constructor
 */
function EPSSaveOptions() {
	/**
	 * If saveMultipleArtboards is true, this is considered for multi-asset extraction, which specifies the artboard range. An empty string extracts all the artboards. Default: empty string
	 * @type {string}
	 */
	var artboardRange;

	/**
	 * If true, use CMYK PostScript.
	 * @type {boolean}
	 */
	var cmykPostScript;

	/**
	 * Specifies the version of the EPS file format to save. Default: Compatibility.ILLUSTRATOR1719
	 * @type {Compatibility}
	 */
	var compatibility;

	/**
	 * If true, create a raster item of the gradient or gradient mesh so that PostScript Level 2 printers can print the object. Default: false
	 * @type {boolean}
	 */
	var compatibleGradientPrinting;

	/**
	 * If true, all fonts used by the document should be embedded in the saved file (version 7 or later). Default: false
	 * @type {boolean}
	 */
	var embedAllFonts;

	/**
	 * If true, linked image files are to be included in the saved document.
	 * @type {boolean}
	 */
	var embedLinkedFiles;

	/**
	 * How should transparency be flattened for file formats older than Illustrator 9.
	 * @type {OutputFlattening}
	 */
	var flattenOuput;

	/**
	 * If true, thumbnail image of the EPS artwork should be included.
	 * @type {boolean}
	 */
	var includeDocumentThumbnails;

	/**
	 * Whether to preserve, discard, or simulate the overprint. Default: PDFOverprint.PRESERVEPDFOVERPRINT
	 * @type {PDFOverprint}
	 */
	var overprint;


	/**
	 * PostScript Language Level to use (Level 1 valid for file format version 8 or older). Default: EPSPostScriptLevelEnum.LEVEL2 
	 * @type {EPSPostScriptLevelEnum}
	 */
	var postScript;

	/**
	 *  The format for the EPS preview image.
	 *  @type {EPSPreview}
	 */
	var preview;

	/**
	 * If true, all artboards or range of artboards are saved. Default: false
	 * @type {boolean}
	 */
	var saveMultipleArtboards;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	var typename;
}