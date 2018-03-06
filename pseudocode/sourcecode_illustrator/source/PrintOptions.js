/**
 * Contains information about all printing options including flattening, color management, coordinates, fonts, and paper.
 * @constructor
 */
function PrintOptions() {
	/**
	 * The printing color management options.
	 * @type {PrintColorManagementOptions}
	 */
	this.colorManagementOptions = null;

	/**
	 * The printing color separation options.
	 * @type {PrintColorSeparationOptions}
	 */
	this.colorSeparationOptions = null;

	/**
	 *  The printing coordinate options.
	 *  @type {PrintCoordinateOptions}
	 */
	this.coordinateOptions = null;

	/**
	 *  The printing flattener options.
	 *  @type {PrintFlattenerOptions}
	 */
	this.flattenerOptions = null;


	/**
	 *  The transparency flattener preset name.
	 *  @type {string}
	 */
	this.flattenerPreset = "";

	/**
	 * The printing font options.
	 * @type {PrintFontOptions}
	 */
	this.fontOptions = null;

	/**
	 * The printing job options.
	 * @type {PrintJobOptions}
	 */
	this.jobOptions = null;

	/**
	 * The printing page marks options.
	 * @type {PrintPageMarksOptions}
	 */
	this.pageMarksOptions = null;

	/**
	 *  The paper options.
	 *  @type {PrintPaperOptions}
	 */
	this.paperOptions = null;

	/**
	 * The printing PostScript options.
	 * @type {PrintPostScriptOptions}
	 */
	this.postScriptOptions = null;

	/**
	 * The PPD name.
	 * @type {string}
	 */
	this.PPDName = "";

	/**
	 * The printer name.
	 * @type {string}
	 */
	this.printerName = "";

	/**
	 * The print style.
	 * @type {string}
	 */
	this.printPreset = "";

}

module.exports = PrintOptions;