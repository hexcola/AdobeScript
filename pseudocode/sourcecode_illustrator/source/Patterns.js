/**
 * A collection of Pattern objects in a document. 
 *  
 * @constructor
 */
function Patterns() {
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

Patterns.prototype = {

	/**
	 * Creates a new object.
	 * @return {Pattern} No Description
	 */
	add: function() {},

	/**
	 * Gets the first element in the collection with the provided name.
	 * @param {string} name No Description
	 * @return {Pattern} No Description
	 */
	getByName: function(name){},

	/**
	 * Gets an element from the collection.
	 * @param {number|string} itemkey No description
	 * @return {Pattern} No Description
	 */
	index: function(itemKey) {},

	/**
	 * Deletes all elements in this collection.
	 */
	removeAll: function() {},
};


module.exports = Patterns;