/**
 * A collection of PluginItem objects in a document. See Copying a plug-in item.
 * 
 * @constructor
 */
function PluginItems() {
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

PluginItems.prototype = {

	/**
	 *  Gets the first element in the collection with the specified name.
	 *  @param {string} name No Description
	 *  @return {PluginItem} No Description
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


module.exports = PluginItems;