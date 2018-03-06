/**
 * The collection of layers in the document.
 * @constructor
 */
function Layers() {
	/**
	 * Read-only. Number of elements in the collection.
	 * @type {number}
	 */
	this.length = 0;

	/**
	 * Read-only. The parent of this object.
	 * @type {object}
	 */
	this.parent = null;

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";
}

Layers.prototype = {

	/**
	 * Creates a new layer in the document.
	 * @return {Layer}
	 */
	add: function() {},

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {string} name no description
	 * @return {Layer}
	 */
	getByName: function(name) {},

	/**
	 * Gets an element from the collection.
	 * @param {string|number} itemKey no description
	 * @return {Layer}
	 */
	index: function(itemKey) {},

	/**
	 * Deletes all elements in this collection.
	 */
	removeAll: function() {}

};


module.exports = Layers;