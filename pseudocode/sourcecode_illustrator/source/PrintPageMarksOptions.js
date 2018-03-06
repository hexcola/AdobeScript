/**
 * The options for printing page marks.
 * 
 * @constructor
 */
function PrintPageMarksOptions() {
	/**
	 * The bleed offset rectangle. array of 4 numbers 
	 * @type {array}
	 */
	this.bleedOffsetRect = [0, 0, 0, 0];

	/**
	 * If true, enable printing of color bars. Default: false
	 * @type {boolean}
	 */
	this.colorBars = false;

	/**
	 * The page marks offset rectangle. array of 4 numbers 
	 * @type {array}
	 */
	this.marksOffsetRect = [0, 0, 0, 0];

	/**
	 *  If true, page info marks printing is enabled. Default: false
	 *  @type {boolean}
	 */
	this.pageInfoMarks = false;

	/**
	 * The page marks style. Default: PageMarksType.Roman
	 * @type {PageMarksTypes}
	 */
	this.pageMarksType = PageMarksType.Roman;

	/**
	 * If true, registration marks should be printed. Default: false
	 * @type {boolean}
	 */
	this.registrationMarks = false;

	/**
	 * If true, trim marks should be printed. Default: false
	 * @type {boolean}
	 */
	this.trimMarks = false;

	/**
	 * Stroke weight of trim marks. Minimum: 0.0. Default: 0.125 number (double) 
	 * @type {number}
	 */
	this.trimMarksWeight = 0.125;

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";
}

module.exports = PrintPageMarksOptions;