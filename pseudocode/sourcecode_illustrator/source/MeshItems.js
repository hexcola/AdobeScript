/**
 * A collection of MeshItem objects.
 * 
 * @constructor
 */
function MeshItems() {
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

MeshItems.prototype = {

	/**
	 *  Gets the first element in the collection with the specified name.
	 *  @param {string} name No Description
	 *  @return {MeshItem} No Description
	 */
	getByName: function(name) {},


	/**
	 * Gets an element from the collection.
	 * @param {string|number} itemkey no description
	 * @return {MeshItem} No Description
	 */
	index: function(itemKey) {},

	/**
	 * Deletes all elements in this collection.
	 */
	removeAll: function() {}

};


module.exports = MeshItems;