/**
 * A collection of PathPoint objects in a specific path. The elements are not named; you must access them by index. 
 *  
 * @constructor
 */
function PathPoints() {
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

PathPoints.prototype = {

	/**
	 * Creates a new PathPoint object.
	 * @return {PathPoint} No Description
	 */
	add: function() {},

	/**
	 * Gets an element from the collection.
	 * @param {number} itemkey no description
	 * @return {PathPoint} No Description
	 */
	index: function(itemKey) {},

	/**
	 * Deletes all elements in this collection.
	 */
	removeAll: function() {},
};


module.exports = PathPoints;