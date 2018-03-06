/**
 * Contains information about how the job is to be printed.
 * @constructor
 */
function PrintJobOptions() {
	/**
	 * The artboard range to be printed if printAllArtboards is false. Default: 1-
	 * @type {string}
	 */
	this.artboardRange = "1-";

	/**
	 * The bitmap resolution. Minimum: 0.0. Default: 0.0 number (double) 
	 * @type {number}
	 */
	this.bitmapResolution = 0.0;

	/**
	 *  If true, collate print pages. Default: false
	 * @type {boolean}
	 */
	this.collate = false;

	/**
	 * The number of copies to print. Minimum: 1. Default: 1 number (long) 
	 * @type {number}
	 */
	this.copies = 1;

	/**
	 * The layers/objects to be printed. Default: 
	 * @type {PrintArtworkDesignation}
	 */
	this.designation = PrintArtworkDesignation.VISIBLEPRINTABLELAYERS;

	/**
	 * The file to which to print.
	 * @type {File}
	 */
	this.file = null;

	/**
	 *  The print job name.
	 *  @type {string}
	 */
	this.name = "";

	/**
	 *  Indicates whether to print all artboards. Default: true
	 * @type {boolean}
	 */
	this.printAllArtboards = true;

	/**
	 * The printing bounds. Default: PrintingBounds.ARTBOARDBOUNDS
	 * @type {PrintingBounds}
	 */
	this.printArea = PrintingBounds.ARTBOARDBOUNDS;

	/**
	 * If true, print as bitmap. Default: false
	 * @type {boolean}
	 */
	this.printAsBitmap = false;

	/**
	 * If true, print pages in reverse order. Default: false
	 * @type {boolean}
	 */
	this.reversePages = false;

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";
}

module.exports = PrintJobOptions;