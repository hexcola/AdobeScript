/**
 * Specifies the preferred options for AutoCAD, FreeHand, PDF, and Photoshop files.
 * @constructor
 */
function Preferences() {
	/**
	 *  Read-only. Options to use when opening or placing an AutoCAD file.
	 *  @type {OpenOptionsAutoCAD}
	 */
	this.AutoCADFileOptions = null;

	/**
	 *  Read-only. Options to use when opening or placing a FreeHand file.
	 *  @type {OpenOptionsFreeHand}
	 */
	this.FreeHandFileOptions = null;

	/**
	 * Read-only. The parent of this object.
	 * @type {object}
	 */
	this.parent = null;

	/**
	 * Read-only. Options to use when opening or placing a PDF file.
	 * @type {PDFFileOptions}
	 */
	this.PDFFileOptions = null;

	/**
	 * Read-only. Options to use when opening or placing a Photoshop file.
	 * @type {PhotoshopFileOptions}
	 */
	this.PhotoshopFileOptions = null;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";
}

Preferences.prototype = {

	/**
	 * Gets the boolean value of a given application preference.
	 * @param {string} key No Description
	 * @return {boolean} No Description
	 */
	getBooleanPreference: function(key) {},


	/**
	 * Gets the integer value of a given application preference.
	 * @param {string} key No Description
	 * @return {integer} No Description
	 */
	getIntegerPreference: function(key) {},


	/**
	 * Gets the real-number value of a given application preference.
	 * @param {string} key No Description
	 * @return {double} No Description
	 */
	getRealPreference: function(key) {},


	/**
	 * Gets the string value of a given application preference.
	 * @param {string} key No Description
	 * @return {string} No Description
	 */
	getStringPreference: function(key) {},


	/**
	 * Deletes a given application preference.
	 * @param {string} key No Description
	 */
	removePreference: function(key) {},


	/**
	 * Sets the boolean value of a given application preference.
	 * @param {string} key No Description
	 * @param {boolean} value No Description
	 */
	setBooleanPreference: function(key, value) {},


	/**
	 * Sets the integer value of a given application preference.
	 * @param {string} key No Description
	 * @param {integer} value No Description
	 */
	setIntegerPreference: function(key, value) {},

	/**
	 * Sets the real-number value of a given application preference.
	 * @param {string} key No Description
	 * @param {double} value No Description
	 */
	setRealPreference: function(key, value) {},

	/**
	 * Sets the string value of a given application preference.
	 * @param {string} key No Description
	 * @param {string} value No Description
	 */
	setStringPreference: function(key, value) {}

};

module.exports = Preferences;