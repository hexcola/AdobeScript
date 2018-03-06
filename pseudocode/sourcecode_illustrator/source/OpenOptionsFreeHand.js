/**
 * Options for opening a FreeHand file.
 * 
 * @constructor
 */
function OpenOptionsFreeHand() {

	/**
	 * If true, all text is converted to vector paths; preserves the visual appearance of type. Default: false
	 * @type {boolean}
	 */
	this.convertTextToOutlines = false;

	/**
	 *  If true, imports only the page specified in the pageToOpen property. Default: true
	 *  @type {boolean}
	 */
	this.importSinglePage = true;

	/**
	 * The number of the page to import when opening a multipage document. Valid only when importSinglePage is true.
	 * @type {long}
	 */
	this.pageToOpen = true;

	/**
	 * Read-only. The parent of this object.
	 * @type {object}
	 */
	this.parent = null;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";

}

module.exports = OpenOptionsFreeHand;