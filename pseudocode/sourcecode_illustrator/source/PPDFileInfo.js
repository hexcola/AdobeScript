/**
 * Information about a PostScript Printer Description (PPD) file.
 * 
 * @constructor
 */
function PPDFileInfo() {
	/**
	 * The PostScript language level.
	 * @type {string}
	 */
	this.languageLevel = "";

	/**
	 * Path specification for the PPD file.
	 * @type {File}
	 */
	this.PPDFilePath = "";

	/**
	 * List of color separation screens.  array of Screen 
	 * @type { array }
	 */
	this.screenList = null;

	/**
	 * List of color separation screen spot functions. array of ScreenSpotFunction
	 * @type {array}
	 */
	this.screenSpotFunctionList = null;

}

module.exports = PPDFileInfo;