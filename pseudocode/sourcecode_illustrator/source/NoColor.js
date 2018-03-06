/**
 * Represents the “none” color. Assigning a NoColor object to the fill or stroke color of an art item is equivalent to setting the filled or stroked property to false.
 * 
 * @constructor
 */
function NoColor() {

	/**
	 * Read-only. The class name of the object
	 * @type {string}
	 */
	this.typename = "";
}

module.exports = NoColor;