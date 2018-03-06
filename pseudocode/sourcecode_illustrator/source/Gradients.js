/**
 * A collection of Gradient objects in a document
 * 
 * @constructor
 */
function Gradients() {

	/**
	 *  Read-only. The number of objects in the collection.
	 *  @type {number}
	 */
	this.length = 0;

	/**
	 * Read-only. The parent of this object.
	 * @type {object}
	 */
	this.parent = null;

	/**
	 * Read-only. The class name of the referenced object.
	 * 
	 * @type {string}
	 */
	this.typename = "";
}

Gradients.prototype = {
	/**
	 * Creates a new Gradient object.
	 *
	 * @return {Gradient}
	 */
	add: function() {},

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {string} name
	 * @return {Gradient}
	 */
	getByName: function(name) {},

	/**
	 *  Gets an element from the collection.
	 *  @param {string|number}
	 *  @return {Gradient}
	 */
	index: function(itemKey) {},

	/**
	 * Deletes all elements in this collection.
	 */
	removeAll: function() {}
};

module.exports = Gradients;