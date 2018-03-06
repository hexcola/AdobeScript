/**
 * Contains information about font downloading and substitution for the fonts used for printing the document.
 * @constructor
 */
function PrintFontOptions() {

	/**
	 * The font download mode. Default: PrintFontDownloadMode.DOWNLOADSUBSET
	 * @type {PrintFontDownloadMode}
	 */
	this.downloadFonts = PrintFontDownloadMode.DOWNLOADSUBSET;

	/**
	 * The font substitution policy. Default:FontSubstitutionPolicy.SUBSTITUTEOBLIQUE
	 * @type {FontSubstitutionPolicy }
	 */
	this.fontSubstitution = FontSubstitutionPolicy.SUBSTITUTEOBLIQUE;

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";
}

module.exports = PrintFontOptions;