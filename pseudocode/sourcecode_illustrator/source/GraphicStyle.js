/**
 * A graphic style. Each graphic style defines a set of appearance attributes that you can apply non-destructively to page items. Graphic styles are contained in documents. Scripts cannot create new graphic styles. 
 * @constructor
 */
function GraphicStyle() {

	/**
	 * The graphic style name.
	 * @type {string}
	 */
	this.name = "";

	/**
	 * Read-only. The document that contains this graphic style.
	 * @type {Document}
	 */
	this.parent = null;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";
}

GraphicStyle.prototype = {
	/**
	 * Applies this art style to a specified art item.
	 * @param {PageItem} artItem
	 */
	applyTo: function(artItem) {},

	/**
	 *  Merges this art style into the current styles of a specified art item.
	 *  @param {string} artItem
	 *  @return {GradientStop}
	 */
	mergeTo: function(artItem) {},

	/**
	 * Deletes this object.
	 */
	remove: function(itemKey) {}
};

module.exports = GraphicStyle;