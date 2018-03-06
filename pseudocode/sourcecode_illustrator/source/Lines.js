/**
 * A collection of TextRange objects representing lines of text in a text frame. 
 * The elements are not named you must access them by index.
 * 
 * @constructor
 */
function Lines() {
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

Lines.prototype = {

	/**
	 * Gets an element from the collection.
	 * @param {number} itemkey no description
	 * @return {TextRange}
	 */
	index: function(itemKey) {},

	/**
	 * Deletes all elements in this collection.
	 */
	removeAll: function() {}

};


module.exports = Lines;