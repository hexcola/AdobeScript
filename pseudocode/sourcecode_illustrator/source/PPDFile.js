/**
 * Associates file information with a PostScript Printer Description (PPD) file.
 * 
 * @constructor
 */
function PPDFile() {
	/**
	 * The PPD model name.
	 * @type {string}
	 */
	this.name = "";

	/**
	 * The PPD file information.
	 * @type {PPDFileInfo}
	 */
	this.PPDInfo = null;

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";
}

module.exports = PPDFile;