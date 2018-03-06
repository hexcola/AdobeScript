/**
 * A collection of GraphicStyle objects in a document.
 * @constructor
 */
function GraphicStyles() {

	/**
	 * Read-only. The number of graphic styles in the document.
	 * @type {number}
	 */
	this.length = 0;

	/**
	 * Read-only. The document that contains this graphic styles collection.
	 * @type {object}
	 */
	this.parent = null;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";
}

GraphicStyles.prototype = {

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
	 * Removes all elements in the referenced collection.
	 */
	removeAll: function() {}
};

module.exports = GraphicStyles;