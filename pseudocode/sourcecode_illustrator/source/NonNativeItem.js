/**
 * A non-native artwork item.
 * 
 * @constructor
 */
function NonNativeItem() {
	/**
	 * Is this object used to create a knockout, and if so, what kind of knockout.
	 * @type {KnockoutState}
	 */
	this.artworkKnockout = null;

	/**
	 * The blend mode used when compositing an object.
	 * @type {BlendModes}
	 */
	this.blendingMode = null;

	/**
	 * Read-only. The bounds of the object including stroke width and controls. array of 4 numbers 
	 * @type {array}
	 */
	this.controlBounds = [0, 0, 0, 0];

	/**
	 * Read-only. If true, this item is editable.
	 * @type {boolean}
	 */
	this.editable = false;

	/**
	 * Read-only. The bounds of the object excluding stroke width. array of 4 numbers 
	 * @type {array}
	 */
	this.geometricBounds = [0, 0, 0, 0];

	/**
	 * The height of the group item. number (double) 
	 * @type {number}
	 */
	this.height = 0.0;

	/**
	 * If true, this item is hidden.
	 * @type {boolean}
	 */
	this.hidden = false;

	/**
	 * If true, this object is isolated.
	 * @type {boolean}
	 */
	this.isIsolated = false;

	/**
	 * Read-only. The layer to which this item belongs. 
	 * @type {Layer}
	 */
	this.layer = null;

	/**
	 * The position of the left side of the item (in points, measured from the left side of the page). number (double) 
	 * @type {number}
	 */
	this.left = 0.0;

	/**
	 * If true, this item is locked.
	 * @type {boolean}
	 */
	this.locked = false;

	/**
	 * The name of this item.
	 * @type {string}
	 */
	this.name = "";

	/**
	 * The note assigned to this item.
	 * @type {string}
	 */
	this.note = "";

	/**
	 *  The opacity of the object. Range: 0.0 to 100.0  number (double) 
	 *  @type {number}
	 */
	this.opacity = 0.0;

	/**
	 * Read-only. The parent of this object.
	 * @type {Document | Layer | GroupItem }
	 */
	this.parent = null;

	/**
	 * The position (in points) of the top left corner of the NonNativeItem object in the format [x, y]. Does not include stroke weight. array of 2 numbers 
	 * @type {array}
	 */
	this.position = [0, 0];

	/**
	 * If true, this item is selected.
	 * @type {boolean}
	 */
	this.selected = false;

	/**
	 * If true, the item sliced. Default: false
	 * @type {boolean}
	 */
	this.sliced = false;

	/**
	 * Read-only. The tags contained in this item.
	 * @type {Tags}
	 */
	this.tags = null;

	/**
	 * The position of the top of the item (in points, measured from the bottom of the page).number (double) 
	 * @type {number}
	 */
	this.top = 0.0;

	/**
	 * Read-only. The class name of the referenced object. 
	 * @type {string}
	 */
	this.typename = "";

	/**
	 * The value of the Adobe URL tag assigned to this item.
	 * @type {string}
	 */
	this.uRL = "";

	/**
	 * The visibility variable bound to the item.
	 * @type {Variable}
	 */
	this.visibilityVariable = null;

	/**
	 * Read-only. The visible bounds of the item including stroke width.array of 4 numbers 
	 * @type {array}
	 */
	this.visibleBounds = [0, 0, 0, 0];

	/**
	 * The width of the item. number (double) 
	 * @type {number}
	 */
	this.width = 0.0;

	/**
	 *  If true, the non-native-item object should be wrapped inside this object.
	 *  @type {boolean}
	 */
	this.wrapInside = false;

	/**
	 *  The offset to use when wrapping text around this object. number (double)
	 *  @type {number}
	 */
	this.wrapOffset = 0.0;

	/**
	 * If true, wrap non-native-item objects around this object (non-native-item object must be above the object).
	 * @type {boolean}
	 */
	this.wrapped = false;

	/**
	 * Read-only. The position of this item within the stacking order of the group or layer (parent) that contains the item.
	 * @type {number}
	 */
	this.zOrderPosition = 0;
}

NonNativeItem.prototype = {

	/**
	 * Creates a duplicate of the selected object.
	 * @param {object} relativeObject No Description
	 * @param {ElementPlacement} insertionLocation No Description
	 * @return {NonNativeItem} No Description
	 */
	duplicate: function(relativeObject, insertionLocation) {},

	/**
	 * Moves the object.
	 * @param {object} relativeObject No Description
	 * @param {ElementPlacement} insertionLocation No Description
	 * @return {NonNativeItem} No Description
	 */
	move: function(relativeObject, insertionLocation) {},

	/**
	 * Deletes this object.
	 */
	remove: function() {},


	/**
	 * Deletes all elements in this collection.
	 */
	removeAll: function() {},

	/**
	 * Scales the art item where scaleX is the horizontal scaling factor and scaleY is the vertical scaling factor. 100.0 = 100%.
	 * @param {number } scaleX double
	 * @param {number } scaleY double
	 * @param {boolean} changePositions No Description
	 * @param {boolean} changeFillPatterns No Description
	 * @param {boolean} changeFillGradients No Description
	 * @param {boolean} changeStrokePattern No Description
	 * @param {number } changeLineWidths double
	 * @param {Transformation} scaleAbout No Description
	 */
	resize: function(scaleX, scaleY, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, scaleAbout) {},

	/**
	 * Rotates the art item relative to the current rotation. The object is rotated counter-clockwise if the angle value is positive, clockwise if the value is negative.
	 * @param {number } angle double
	 * @param {boolean} changePositions No Description
	 * @param {boolean} changeFillPatterns No Description
	 * @param {boolean} changeFillGradients No Description
	 * @param {boolean} changeStrokePattern No Description
	 * @param {Transformation} rotateAbout No Description
	 */
	rotate: function(angle, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, rotateAbout) {},

	/**
	 * Transforms the art item by applying a transformation matrix.
	 * @param {Matrix} transformationMatrix No Description
	 * @param {boolean} changePositions No Description
	 * @param {boolean} changeFillPatterns No Description
	 * @param {boolean} changeFillGradients No Description
	 * @param {boolean} changeStrokePattern No Description
	 * @param {number  } changeLineWidths double
	 * @param {Transformation} transformAbout No Description
	 */
	transform: function(transformationMatrix, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, transformAbout) {},

	/**
	 * Repositions the art item relative to the current position, where deltaX is the horizontal offset and deltaY is the vertical offset.
	 * @param {number } deltaX double
	 * @param {number } deltaY double
	 * @param {boolean} transformObjects No Description
	 * @param {boolean} transformFillPatterns No Description
	 * @param {boolean} transformFillGradients No Description
	 * @param {boolean} transformStrokePatterns No Description
	 */
	translate: function(deltaX, deltaY, transformObjects, transformFillPatterns, transformFillGradients, transformStrokePatterns) {},

	/**
	 * Arranges the art item’s position in the stacking order of the group or layer  : function(parent) of this object.{},
	 * @param {ZOrderMethod} zOrderCmd No Description
	 */
	zOrder: function(zOrderCmd) {}
};


module.exports = NonNativeItem;