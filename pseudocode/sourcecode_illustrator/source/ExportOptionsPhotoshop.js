/**
 * Options for exporting a document as a Photoshop file, used with the exportFile method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification.
 * @constructor
 */
function ExportOptionsPhotoshop() {
	/**
	 * If true, the exported image should be anti-aliased. Default: true
	 * @type {boolean}
	 */
	this.antiAliasing = true;

	/**
	 * If saveMultipleArtboards is true, this is considered for multi-asset extraction, which specifies the artboard range. An empty string extracts all the artboards. Default: empty string
	 * @type {string}
	 */
	this.artboardRange = "";
	/**
	 * If true, text objects should be exported as editable text layers. Default: true
	 * @type {boolean}
	 */
	this.editableText = true;

	/**
	 * If true, an ICC profile should be embedded in the exported file. Default: false
	 * @type {boolean}
	 */
	this.embedICCProfile = false;

	/**
	 * The color space of the exported file. Default: ImageColorSpace.RGB
	 * @type {ImageColorSpace}
	 */
	this.imageColorSpace = ImageColorSpace.RGB;

	/**
	 * Preserve as much of the original document’s structure as possible when exporting. Default: true
	 * @type {boolean}
	 */
	this.maximumEditability = true;

	/**
	 * Resolution of the exported file in dots per inch (dpi). Range: 72.0 to 2400.0. Default: 150.0  (double) 
	 * @type {number}
	 */
	this.resolution = 150.0;

	/**
	 * If true, all artboards or range of artboards are saved. Default: false
	 * @type {boolean}
	 */
	this.saveMultipleArtboards = false;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";

	/**
	 * If true, a warning dialog should be displayed in case of conflicts in the export settings. Default: true
	 * @type {boolean}
	 */
	this.warnings = true;

	/**
	 * If true, the document layers should be presented in the exported document. Default: true
	 * @type {boolean}
	 */
	this.writeLayers = true;

}


module.exports = ExportOptionsPhotoshop;