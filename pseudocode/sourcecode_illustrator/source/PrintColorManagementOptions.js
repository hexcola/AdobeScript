/**
 * Information used for color management of the document.
 * @constructor
 */
function PrintColorManagementOptions() {

	/**
	 * The color management profile mode. Default: PrintColorProfile.SOURCEPROFILE
	 * @type {PrintColorProfile}
	 */
	this.colorProfileMode = PrintColorProfile.SOURCEPROFILE;

	/**
	 * The color management intent type.Default: PrintColorIntent.RELATIVECOLORIMETRIC
	 * @type {PrintColorIntent}
	 */
	this.intent = PrintColorIntent.RELATIVECOLORIMETRIC;

	/**
	 * The color management profile name.
	 * @type {string}
	 */
	this.name = "";

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";

}

module.exports = PrintColorManagementOptions;