/**
 * A collection GraphItems objects, which gives you access to all the graph art items in an Illustrator document.
 * @constructor
 */
function GraphItems() {

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

GraphItems.prototype = {

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {string} name
	 * @return {GraphItems}
	 */
	getByName: function(name) {},

	/**
	 * Gets an element from the collection.
	 * @param {string | number} itemKey
	 * @return {GraphItems} 
	 */
	index: function(itemKey) {},

	/**
	 * Deletes all elements in the collection.
	 */
	removeAll: function() {}
};

module.exports = GraphItems;