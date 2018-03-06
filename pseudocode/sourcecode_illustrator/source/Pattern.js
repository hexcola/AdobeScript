/**
 * An Illustrator pattern definition contained in a document. Patterns are shown in the Swatches palette. Each pattern is referenced by a PatternColor object, which defines the pattern’s appearance.
 *  
 * @constructor
 */
function Pattern() {
	/**
	 * The pattern name.
	 * @type {string}
	 */
	this.name = "";

	/**
	 * Read-only. The document that contains this pattern.
	 * @type {Document}
	 */
	this.parent = null;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";
}

Pattern.prototype = {

	/**
	 * Removes the referenced pattern from the document.
	 */
	remove: function() {},

	/**
	 * Returns the object type of a referenced object. If the object has a name, also returns the name.
	 * @return {string} No Description
	 */
	toString: function(itemKey) {}
};


module.exports = Pattern;