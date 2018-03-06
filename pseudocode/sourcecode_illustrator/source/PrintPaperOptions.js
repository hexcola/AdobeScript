/**
 * Information about the paper to be used in the print job.
 * 
 * @constructor
 */
function PrintPaperOptions() {
	/**
	 * The custom height (in points) for using the custom paper. Default: 0.0 number (double) 
	 * @type {number}
	 */
	this.height = 0.0;

	/**
	 * The paper’s name.
	 * @type {string}
	 */
	this.name = "";

	/**
	 * Custom offset (in points) for using the custom paper. Default: 0.0 number (double) 
	 * @type {number}
	 */
	this.offset = 0.0;

	/**
	 *  If true, transverse the artwork (rotate 90 degrees) on the custom paper. Default: false
	 *  @type {boolean}
	 */
	this.transverse = false;

	/**
	 *  Read-only. The class name of the object.
	 *  @type {string}
	 */
	this.typename = "";

	/**
	 *  The custom width (in points) for using the custom paper. Default: 0.0  number (double)
	 *  @type { number}
	 */
	this.width = 0.0;
}

module.exports = PrintPaperOptions;