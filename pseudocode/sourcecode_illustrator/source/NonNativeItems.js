/**
 * A collection of NonNativeItem objects.
 * 
 * @constructor
 */
function NonNativeItems() {
	/**
	 * Read-only. The number of objects in the collection
	 * @type {number}
	 */
	this.length = 0;

	/**
	 * Read-only. The parent of this object
	 * @type {object}
	 */
	this.parent = null;

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";
}

NonNativeItems.prototype = {

	/**
	 *  Gets the first element in the collection with the specified name.
	 *  @param {string} name No Description
	 *  @return {NonNativeItem | SymbolItem} No Description
	 */
	getByName: function(name) {}

};


module.exports = NonNativeItems;