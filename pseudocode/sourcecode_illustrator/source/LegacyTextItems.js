/**
 * A collection of LegacyTextItem objects.
 * @constructor
 */
function LegacyTextItems() {
	/**
	 * Read-only. Number of elements in the collection.
	 * @type {number}
	 */
	this.length = 0;

	/**
	 * Read-only. The object’s container.
	 * @type {object}
	 */
	this.parent = null;

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";
}

LegacyTextItems.prototype = {

	/**
	 * Creates text frames from all legacy text items; the original legacy text items are deleted. Returns true on success.
	 * @return {boolean} 
	 */
	convertToNative: function() {},

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {string} name no description
	 * @return {LegacyTextItem}
	 */
	getByName: function(name) {},

	/**
	 * Gets an element from the collection.
	 * @param {string|number} itemkey no description
	 * @return {LegacyTextItem}
	 */
	index: function(itemKey) {},

	/**
	 * Deletes all elements in this collection.
	 */
	removeAll: function() {}

};


module.exports = LegacyTextItems;