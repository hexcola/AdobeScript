/**
 * A collection of PathItem objects. The methods ellipse, polygon, rectangle, roundedRectangle, and star allow you to create complex path items using straightforward parameters. If you do not provide any parameters when calling these methods, default values are used.
 * 
 * @constructor
 */
function PathItems() {
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

PathItems.prototype = {

	/**
	 * Creates a new object.
	 * @return {PathItem} No Description
	 */
	add: function() {},

	/**
	 * Creates a new pathItem in the shape of an ellipse using the supplied parameters. Defaults: top: 100 pt.; left: 100 pt.; width: 50 pt.; height: 100 pt.; reversed: false
	 * @param {number} top  double Default 100 pt
	 * @param {number} left double Default 100 pt
	 * @param {number} width double Default 50 pt
	 * @param {number} height double Default 100 pt
	 * @param {boolean} reversed Default false
	 * @param {boolean} inscribed No Description
	 * @return {PathItem} No Description
	 */
	ellipse: function(top, left, width, height, reversed, inscribed) {},

	/**
	 *  Gets the first element in the collection with the specified name.
	 *  @param {string} name No Description
	 *  @return {PathItem} No Description
	 */
	getByName: function(name) {},


	/**
	 * Gets an element from the collection.
	 * @param {string|number} itemkey no description
	 * @return {PathItem} No Description
	 */
	index: function(itemKey) {},

	/**
	 * Creates a new pathItem in the shape of an polygon using the supplied parameters. Defaults: centerX: 200 pt.; centerY: 300 pt.; radius: 50 pt.; sides: 8; reversed: false
	 * @param {number} centerX  double Default: 200 pt
	 * @param {number} centerY  double Default: 300 pt
	 * @param {number } radius double Default: 50 pt
	 * @param {number} sides  long Default: 8 pt
	 * @param {boolean} reversed Default: false
	 * @return {PathItem} No Description
	 */
	polygon: function(centerX, centerY, radius, sides, reversed) {},

	/**
	 * Creates a new pathItem in the shape of an polygon using the supplied
	 * @param {number} top double
	 * @param {number} left double
	 * @param {number} width double
	 * @param {number} height double
	 * @param {boolean} reversed No Description
	 * @return {PathItem} No Description
	 */
	rectangle: function(top, left, width, height, reversed) {},

	/**
	 * Deletes all elements in this collection.
	 */
	removeAll: function() {},

	/**
	 * Creates a new pathItem in the shape of a rectangle with rounded corners using the supplied parameters. Defaults: horizontalRadius: 15 pt.; verticalRadius: 20 pt.; reversed: false
	 * @param {number} top double 
	 * @param {number} left double 
	 * @param {number} width double
	 * @param {number} height double
	 * @param {number} horizontalRadius double Default: 15 pt
	 * @param {number} verticalRadius double Default: 20 pt
	 * @param {boolean} reversed Default:false
	 * @return {PathItem} No Description
	 */
	roundedRectangle: function(top, left, width, height, horizontalRadius, verticalRadius, reversed) {},

	/**
	 * Creates a new path item in the shape of a star using the supplied parameters. Defaults: centerX: 200 pt.; centerY: 300 pt.; radius: 50 pt.; innerRadius: 20 pt.; points: 5; reversed: false 
	 * @param {number} centerX double Default: 200 pt
	 * @param {number} centerY double  Default: 300 pt
	 * @param {number} radius double  Default: 50 pt
	 * @param {number} innerRadius double  Default: 20 pt
	 * @param {number} points long  Default: 5
	 * @param {boolean} reversed  Default: false
	 * @return {PathItem} [description]
	 */
	star: function(centerX, centerY, radius, innerRadius, points, reversed) {}
};


module.exports = PathItems;