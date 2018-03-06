/**
 * Options for opening a PDF file, used with the open method. All properties are optional.
 *  
 * @constructor
 */
function PDFFileOptions() {
	/**
	 * What page should be used when opening a multipage document. Default: 1  number (long) 
	 * @type {number}
	 */
	this.pageToOpen = 1;

	/**
	 * Read-only. The object’s container.
	 * @type {object}
	 */
	this.parent = null;

	/**
	 * Which box should be used when placing a multipage document. Default: PDFBoxType.PDFMediaBox
	 * @type {PDFBoxType}
	 */
	this.pDFCropToBox = PDFBoxType.PDFMediaBox;

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";
}

module.exports = PDFFileOptions;