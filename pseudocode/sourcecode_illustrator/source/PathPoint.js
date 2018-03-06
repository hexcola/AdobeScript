/**
 * A point on a specific path. Each path point is made up of an anchor point (anchor) and a pair of handles (leftDirection and rightDirection).
 * 
 * @constructor
 */
function PathPoint() {
	/**
	 * The position of this point’s anchor point. array of 2 numbers 
	 * @type {array}
	 */
	this.anchor = [0, 0];

	/**
	 * The position of this path point’s in control point. array of 2 numbers 
	 * @type {array}
	 */
	this.leftDirection = [0, 0];

	/**
	 * Read-only. The path item that contains this path point.
	 * @type {PathItem}
	 */
	this.parent = null;

	/**
	 * The type of path point, either a curve or a corner. Any point can considered a corner point. Setting the type to a corner forces the left and right direction points to be on a straight line when the user attempts to modify them in the user interface.
	 * @type {PointType}
	 */
	this.pointType = null;

	/**
	 * The position of this path point’s out control point. array of 2 numbers 
	 * @type {array}
	 */
	this.rightDirection = [0, 0];

	/**
	 *  Are points of this path point selected, and if so, which ones.
	 *  @type {PathPointSelection}
	 */
	this.selected = false;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";
}

PathPoint.prototype = {
	/**
	 * Removes the referenced point from the path.
	 */
	remove: function() {}
};


module.exports = PathPoint;