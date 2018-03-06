/**
 * A collection of InsertionPoint objects.
 * @constructor
 */
function InsertionPoints() {
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

InsertionPoints.prototype = {

	/**
	 * Gets an element from the collection.
	 * @param { string|number} itemKey
	 * @return {InsertionPoint}
	 */
	index: function(itemKey){}

};


module.exports = InsertionPoints;