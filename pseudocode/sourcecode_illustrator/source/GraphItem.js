/**
 * Any graph artwork object. See example Rotating graph items below.
 *   
 * @constructor
 */
function GraphItem() {

	/**
	 * Is this object used to create a knockout, and if so, what kind of knockout. You cannot set this value to KnockoutState.Unknown
	 * @type {KnockoutState}
	 */
	this.artworkKnockout = null;

	/**
	 * The mode used when compositing an object.
	 * @type {BlendModes}
	 */
	this.blendingMode = null;

	/**
	 * The content variable bound to the graph item. 
	 * It is not necessary to set the type of the contentVariable before binding. Illustrator automatically set the type to GRAPH.
	 * @type {Variable}
	 */
	this.contentVariable = null;

	/**
	 * Read-only. The bounds of the object including stroke width and controls.  array of 4 numbers 
	 * @type {array}
	 */
	this.controlBounds = null;

	/**
	 * Read-only. If true, this graph item is editable.
	 * @type {boolean}
	 */
	this.editable = false;

	/**
	 * Read-only. The bounds of the object excluding stroke width. array of 4 numbers 
	 * @type {array}
	 */
	this.geometricBounds = null;

	/**
	 * The height of the graph item.  (double)
	 * @type {number}
	 */
	this.height = 0.0;

	/**
	 * If true, this graph item is hidden.
	 * @type {boolean}
	 */
	this.hidden = false;

	/**
	 * If true, this object is isolated.
	 * @type {boolean}
	 */
	this.isIsolated = false;

	/**
	 *  Read-only. The layer to which this graph item belongs.
	 *  @type {Layer}
	 */
	this.layer = null;

	/**
	 * The offset (in points) of the left side of the graph item from the left side of the page.
	 * @type {number}
	 */
	this.left = 0;

	/**
	 * If true, this graph item is locked.
	 * @type {boolean}
	 */
	this.locked = false;

	/**
	 * The name of this graph item.
	 * @type {string}
	 */
	this.name = "";

	/**
	 * The note assigned to this item. 
	 * @type {string}
	 */
	this.note = "";

	/**
	 *  The opacity of the object; the value is between 0.0 and 100.0. (double)
	 *  @type {number}
	 */
	this.opacity = 0.0;

	/**
	 *  Read-only. The parent of this object.
	 *  @type {Layer | GroupItem}
	 */
	this.parent = null;

	/**
	 *  The position (in points) of the top left corner of the graphItem object in the format [x, y]. Does not include stroke weight. array of 2 numbers
	 *  @type {array}
	 */
	this.position = null;

	/**
	 * If true, this object is selected.
	 * @type {boolean}
	 */
	this.selected = false;

	/**
	 * If true, the graph item is sliced. Default: false
	 * @type {boolean}
	 */
	this.sliced = false;

	/**
	 *  Read-only. The tags contained in this graph item.
	 *  @type {Tags}
	 */
	this.tags = null;

	/**
	 * The offset (in points) of the top of the graph item from the bottom of the page.  (double) 
	 * @type {number}
	 */
	this.top = 0.0;

	/**
	 *  Read-only. The type of the graph item.
	 *  @type {string}
	 */
	this.typename = "";

	/**
	 *  The value of the Adobe URL tag assigned to this graph item.
	 *  @type {string}
	 */
	this.uRL = "";

	/**
	 *  The visibility variable bound to the graph item. 
	 *  It is not necessary to set the type of the visibilityVariable before binding. Illustrator automatically set the type to VISIBILITY.
	 *  @type {Variable}
	 */
	this.visibilityVariable = null;

	/**
	 *  Read-only. The visible bounds of the graph item including stroke width. array of 4 numbers
	 *  @type {array}
	 */
	this.visibleBounds = null;

	/**
	 * The width of the graph item. Range: 0.0 to 16348.0  (double) 
	 * @type {number}
	 */
	this.width = 0.0;

	/**
	 * If true, the text frame object should be wrapped inside this object.
	 * @type {boolean}
	 */
	this.wrapInside = false;

	/**
	 *  The offset to use when wrapping text around this object.  (double)
	 *  @type {number}
	 */
	this.wrapOffset = 0.0;

	/**
	 * If true, wrap text frame objects around this object. 
	 * (Text frame must be above the object.)
	 *
	 * @type {boolean}
	 */
	this.wrapped = false;

	/**
	 * Read-only. The position of this art item within the stacking order of the group or layer (parent) that contains the art item. (long) 
	 * @type {number }
	 */
	this.zOrderPosition = 0;
}

GraphItem.prototype = {
	/**
	 * Creates a duplicate of the selected object.
	 * 
	 * @param {object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 * @return {GraphItem} 
	 */
	duplicate: function(relativeObject, insertionLocation) {},

	/**
	 * Moves the object.
	 *
	 * @param {object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 * @return {GraphItem}
	 */
	move: function(relativeObject, insertionLocation) {},

	/**
	 * Deletes this object.
	 */
	remove: function() {},

	/**
	 * Scales the art item where scaleX is the horizontal scaling factor and scaleY is the vertical scaling factor.100.0 = 100%.
	 *
	 * @param {number} scaleX  (long) 
	 * @param {number} scaleY  (double)
	 * @param {boolean} changePositions
	 * @param {boolean} changeFillPatterns
	 * @param {boolean} changeFillGradients
	 * @param {boolean} changeStrokePattern
	 * @param {number} changeLineWidths  (double)
	 * @param {Transformation} scaleAbout
	 * 
	 */
	resize: function(scaleX, scaleY, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, scaleAbout) {},

	/**
	 * Rotates the art item relative to the current rotation. The object is rotated counter-clockwise if the angle value is positive, clockwise if the value is negative.
	 *
	 * @param {number} angle  (double)
	 * @param {boolean} changePositions
	 * @param {boolean} changeFillPatterns
	 * @param {boolean} changeFillGradients
	 * @param {boolean} changeStrokePattern
	 * @param {Transformation} rotateAbout
	 */
	rotate: function(angle, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, rotateAbout) {},

	/**
	 * Transforms the art item by applying a transformation matrix.
	 *
	 * @param {Matrix} transformationMatrix
	 * @param {boolean} changePositions
	 * @param {boolean} changeFillPatterns
	 * @param {boolean} changeFillGradients
	 * @param {boolean} changeStrokePattern
	 * @param {number} changeLineWidths  (double)
	 * @param {Transformation} transformAbout
	 */
	transform: function(transformationMatrix, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, transformAbout) {},

	/**
	 * Repositions the art item relative to the current position, where deltaX is the horizontal offset and deltaY is the vertical offset.
	 *
	 * @param {number} deltaX  (double)
	 * @param {number} deltaY  (double)
	 * @param {boolean} transformObjects
	 * @param {boolean} transformFillPatterns
	 * @param {boolean} transformFillGradients
	 * @param {boolean} transformStrokePatterns
	 */
	translate: function(deltaX, deltaY, transformObjects, transformFillPatterns, transformFillGradients, transformStrokePatterns) {},

	/**
	 * Arranges the art item’s position in the stacking order of the group or layer (parent) of this object.
	 * @param {ZOrderMethod} zOrderCmd
	 */
	zOrder: function(zOrderCmd) {}
};

module.exports = GraphItem;