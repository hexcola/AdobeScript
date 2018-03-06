/**
 * The collection of grouped art items in a document.
 * @constructor
 */
function GroupItems() {

	/**
	 * Read-only. The number of objects in the collection.
	 * @type {number}
	 */
	this.length = 0;

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

GroupItems.prototype = {

	/**
	 * Creates a new object.
	 * @return {GroupItem}
	 */
	add: function() {},

	/**
	 *  Places an external vector art file as a group item in the document.
	 * @param {File} imageFile
	 * @return {GroupItem}
	 */
	createFromFile: function(imageFile) {},

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {string} name
	 * @return {GroupItem}
	 */
	getByName: function(name) {},

	/**
	 * Gets an element from the collection.
	 * @param {string | number} itemKey
	 * @return {GroupItem} 
	 */
	index: function(itemKey) {},

	/**
	 * Deletes all elements in the collection.
	 */
	removeAll: function() {}
};

module.exports = GroupItems;