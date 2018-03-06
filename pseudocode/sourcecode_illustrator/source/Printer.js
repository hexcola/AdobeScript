/**
 * Associates an available printer with printer information. To request a list of printers, you must first have a document open or an error is returned.
 * @constructor
 */
function Printer() {
	/**
	 * The printer name.
	 * @type {string}
	 */
	this.name = "";

	/**
	 * The printer information.
	 * @type {PrinterInfo}
	 */
	this.printerInfo = null;

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";

}

module.exports = Printer;