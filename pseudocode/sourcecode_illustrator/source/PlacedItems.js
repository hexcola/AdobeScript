/**
 * A collection of PlacedItem objects in the document.
 * 
 * @constructor
 */
function PlacedItems() {
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

PlacedItems.prototype = {

	/**
	 * Creates a new object. Use to place new art in a document. Use the file property of the resulting placedItem object to link the file containing the artwork. See “PlacedItem” on page 151.
	 * 
	 * @return {PlacedItem} No Description
	 */
	add: function() {},

	/**
	 *  Gets the first element in the collection with the specified name.
	 *  @param {string} name No Description
	 *  @return {PlacedItem} No Description
	 */
	getByName: function(name) {},


	/**
	 * Gets an element from the collection.
	 * @param {string|number} itemkey no description
	 * @return {PlacedItem} No Description
	 */
	index: function(itemKey) {},


	/**
	 * Deletes all elements in this collection.
	 */
	removeAll: function() {}
};


module.exports = PlacedItems;