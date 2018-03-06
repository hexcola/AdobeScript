/**
 * Configuration information about a printer.
 * @constructor
 */
function PrinterInfo() {

	/**
	 * If true, the printer supports binary printing.
	 * @type {boolean}
	 */
	this.binaryPrintingSupport = false;

	/**
	 * The printer color capability.
	 * @type {PrinterColorMode}
	 */
	this.colorSupport = null;

	/**
	 * If true, the printer supports custom paper size.
	 * @type {boolean}
	 */
	this.customPaperSupport = false;

	/**
	 * If true, the printer supports custom paper transverse.
	 * @type {boolean}
	 */
	this.customPaperTransverseSupport = false;

	/**
	 * The printer default resolution. number (double) 
	 * @type {number}
	 */
	this.deviceResolution = 0.0;

	/**
	 * If true, the printer supports InRIP color separation.
	 * @type {boolean}
	 */
	this.inRIPSeparationSupport = false;

	/**
	 * The printer maximum device resolution. number (double) 
	 * @type {number}
	 */
	this.maxDeviceResolution = 0.0;

	/**
	 * Custom paper’s maximum height. number (double) 
	 * @type {number}
	 */
	this.maxPaperHeight = 0.0;

	/**
	 * Custom paper’s maximum height offset. number (double) 
	 * @type {number}
	 */
	this.maxPaperHeightOffset = 0.0;

	/**
	 *  Custom paper’s maximum width. number (double)
	 * @type {number}
	 */
	this.maxPaperWidth = 0.0;

	/**
	 * Custom paper’s maximum width offset. number (double) 
	 * @type {number}
	 */
	this.maxPaperWidthOffset = 0.0;

	/**
	 * Custom paper’s minimum height.  number (double) 
	 * @type {number}
	 */
	this.minPaperHeight = 0.0;

	/**
	 * Custom paper’s minimum height offset. number (double) 
	 * @type {number}
	 */
	this.minPaperHeightOffset = 0.0;

	/**
	 * Custom paper’s minimum width. number (double) 
	 * @type {number}
	 */
	this.minPaperWidth = 0.0;

	/**
	 *  Custom paper’s minimum width offset. number (double)
	 * @type {number}
	 */
	this.minPaperWidthOffset = 0.0;

	/**
	 * The list of supported paper sizes. array of Paper 
	 * @type {array}
	 */
	this.paperSizes = null;

	/**
	 * The PostScript Language level.
	 * @type {PrinterPostScriptLevelEnum}
	 */
	this.postScriptLevel = null;

	/**
	 * The printer type.
	 * @type {PrinterTypeEnum}
	 */
	this.printerType = null;

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";

}

module.exports = PrinterInfo;