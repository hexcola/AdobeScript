/**
 * A collection of GradientStop objects in a specific gradient. The elements are not named; you must access them by index.
 * 
 * @constructor
 */
function GradientStops() {

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

GradientStops.prototype = {
	/**
	 * Creates a new object.
	 * @return {GradientStop}
	 */
	add: function() {},

	/**
	 *  Gets the first element in the collection with the specified name.
	 *  @param {string} name
	 *  @return {GradientStop}
	 */
	getByName: function(name) {},

	/**
	 * Gets an element from the collection.
	 * @param {number}
	 * @return {GradientStop}
	 */
	index: function(itemKey) {},

	/**
	 * Deletes all objects in this collection.
	 */
	removeAll: function() {}
};

module.exports = GradientStops;