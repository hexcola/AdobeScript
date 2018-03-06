/**
 * Options for saving a document as an Illustrator file, used with the saveAs method. All properties are optional.
 * @constructor
 */
function IllustratorSaveOptions() {

	/**
	 * If saveMultipleArtboards is true (which is valid only for Illustrator 13 or earlier), the document is considered for multi-asset extraction, which specifies an artboard range. An empty string extracts all artboards. Default: empty string
	 * @type {string}
	 */
	this.artboardRange = "";
	/**
	 * Specifies the version of Illustrator file format to create. Default: Compatibility.ILLUSTRATOR19
	 * @type {Compatibility}
	 */
	this.compatibility = Compatibility.ILLUSTRATOR19;

	/**
	 * (Illustrator version 10 or later.) If true, the saved file is compressed. Default: true
	 * @type {boolean}
	 */
	this.compressed = true;

	/**
	 * (Illustrator version 9 or later.) If true, the document’s ICC profile is embedded in the saved file. Default: false
	 * @type {boolean}
	 */
	this.embedICCProfile = false;

	/**
	 * (Illustrator version 7 or later.) If true, the linked image files is embedded in the saved file. Default: false
	 * @type {boolean}
	 */
	this.embedLinkedFiles = false;

	/**
	 * (Versions before Illustrator 9.) How transparency should be flattened for older file format versions. Default: OutputFlattening.PRESERVEAPPEARANCE
	 * @type {OutputFlattening}
	 */
	this.flattenOutput = OutputFlattening.PRESERVEAPPEARANCE;

	/**
	 * (Illustrator version 9 or later.) Include a subset of fonts when less than this percentage of characters is used in the document. Range: 0.0 to 100.0. Default: 100.0 (double) 
	 * @type {number}
	 */
	this.fontSubsetThreshold = 100.0;

	/**
	 * (Illustrator version 10 or later.) If true, the file is saved as a PDF compatible file. Default: true
	 * @type {boolean}
	 */
	this.pdfCompatible = true;

	/**
	 * If true, all artboards or range of the artboards are  saved. Valid for Illustrator 13 or earlier.
	 * @type {boolean}
	 */
	this.saveMultipleArtboards = false;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";
}

module.exports = IllustratorSaveOptions;