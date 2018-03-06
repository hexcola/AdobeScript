/**
 * A compound path. These objects are composed of multiple intersecting paths, resulting in transparent interior spaces where the component paths overlap. The pathItems property provides access to the paths that make up the compound path.
 *
 * Paths contained within a compound path or group in a document are returned as individual paths when a script asks for the paths contained in the document. However, paths contained in a compound path or group are not returned when a script asks for the paths in a layer that contains the compound path or group.
 *
 * All paths within a compound path share property values. Therefore, if you set the value of a property of any one of the paths in the compound path, the properties of all other component paths are updated with the new value.
 * @constructor
 */
function CompoundPathItem() {


	/**
	 * Is this object used to create a knockout, and if so, what kind of knockout.
	 * @type {KnockoutState}
	 */
	var artworkKnockout;

	/**
	 * The mode used when compositing an object.
	 * @type {BlendModes}
	 */
	var blendingMode;

	/**
	 * Read-only. The bounds of the object including stroke width and controls. array of 4 numbers
	 * @type {Array}
	 */
	var controlBounds;

	/**
	 * Read-only. If true, this item is editable.
	 * @type {boolean}
	 */
	var editable;

	/**
	 * Read-only. The bounds of the object excluding stroke width. array of 4 numbers
	 * @type {Array}
	 */
	var geometricBounds;

	/**
	 * The height of the compound path item excluding stroke width.
	 * @type {number}
	 */
	var height;

	/**
	 * If true, this compound path item is hidden.
	 * @type {boolean}
	 */
	var hidden;

	/**
	 * If true, this object is isolated.
	 * @type {boolean}
	 */
	var isIsolated;

	/**
	 * Read-only. The layer to which this compound path item belongs.
	 * @type {Layer}
	 */
	var layer;

	/**
	 * The position of the left side of the item (in points, measured from the left side of the page).
	 * @type {number}
	 */
	var left;

	/**
	 * If true, this compound path item is locked.
	 * @type {boolean}
	 */
	var locked;

	/**
	 * The name of this compound path item.
	 * @type {string}
	 */
	var name;

	/**
	 * The note assigned to this item.
	 * @type {string}
	 */
	var note;

	/**
	 * The opacity of the object. Range: 0.0 to 100.0
	 * @type {number}
	 */
	var opacity;

	/**
	 * Read-only. The parent of this object.
	 * @type {Layer | GroupItem}
	 */
	var parent;

	/**
	 * Read-only. The path art items in this compound path.
	 * @type {PathItems}
	 */
	var pathItems;

	/**
	 * array of 2 numbers The position (in points) of the top left corner of the compoundPathItem object in the format [x, y]. Does not include stroke weight.
	 * @type {Array}
	 */
	var position;

	/**
	 * If true, this compound path item is selected.
	 * @type {boolean}
	 */
	var selected;

	/**
	 * If true, the item is sliced. Default: false
	 * @type {boolean}
	 */
	var sliced;

	/**
	 * Read-only. The tags contained in this object.
	 * @type {Tags}
	 */
	var tags;

	/**
	 * The position of the top of the item (in points, measured from the bottom of the page).
	 * @type {number}
	 */
	var top;

	/**
	 * Read-only. Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	var typename;

	/**
	 * The value of the Adobe URL tag assigned to this compound path item.
	 * @type {string}
	 */
	var uRL;

	/**
	 * The visibility variable bound to the item.
	 * @type {Variant}
	 */
	var visibilityVariable;

	/**
	 * Read-only. The visible bounds of the compound path item including stroke width. array of 4 numbers
	 * @type {Array}
	 */
	var visibleBounds;

	/**
	 * The width of the compound path item excluding stroke width.
	 * @type {number}
	 */
	var width;

	/**
	 * If true, the text frame object should be wrapped inside this object.
	 * @type {boolean}
	 */
	var wrapInside;

	/**
	 *  The offset to use when wrapping text around this object.
	 * @type {number}
	 */
	var wrapOffset;

	/**
	 * If true, wrap text frame objects around this object (text frame must be above the object).
	 * @type {boolean}
	 */
	var wrapped;

	/**
	 * Read-only. The position of this art item within the stacking order of the group or layer (Parent) that contains the art item. (long)
	 * @type {number}
	 */
	var zOrderPosition;


	/**
	 * Creates a duplicate of the selected object.
	 * @params {object}
	 * @params {ElementPlacement}
	 * @returns {CompoundPathItem}
	 */
	function duplicate(relativeObject, insertionLocation) {}

	/**
	 * Moves the object.
	 * @params {object}
	 * @params {ElementPlacement}
	 * @returns {CompoundPathItem}
	 */
	function move(relativeObject, insertionLocation) {}

	/**
	 * Deletes this object.
	 */
	function remove() {}

	/**
	 * Scales the art item where scaleX is the horizontal scaling factor and scaleY is the vertical scaling factor. 100.0 = 100%.
	 * @params {number}
	 * @params {number}
	 * @params {boolean}
	 * @params {boolean}
	 * @params {boolean}
	 * @params {boolean}
	 * @params {number}
	 * @params {Transformation}
	 */
	function resize(scaleX, scaleY, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, scaleAbout) {}

	/**
	 * Rotates the art item relative to the current rotation. The object is rotated counter-clockwise if the angle value is positive, clockwise if the value is negative.
	 * @params {number}
	 * @params {boolean}
	 * @params {boolean}
	 * @params {boolean}
	 * @params {boolean}
	 * @params {Transformation}
	 */
	function rotate(angle, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, rotateAbout) {}

	/**
	 * Transforms the art item by applying a transformation matrix.
	 * @params {Matrix}
	 * @params {boolean}
	 * @params {boolean}
	 * @params {boolean}
	 * @params {boolean}
	 * @params {number}
	 * @params {Transformation}
	 */
	function transform(transformationMatrix, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, transformAbout) {}

	/**
	 * Repositions the art item relative to the current position, where deltaX is the horizontal offset and deltaY is the vertical offset.
	 * @params {number}
	 * @params {number}
	 * @params {boolean}
	 * @params {boolean}
	 * @params {boolean}
	 * @params {boolean}
	 */
	function translate(deltaX, deltaY, transformObjects, transformFillPatterns, transformFillGradients, transformStrokePatterns) {}

	/**
	 * Arranges the art item’s position in the stacking order of the group or layer (parent) of this object.
	 * @params {ZOrderMethod}
	 */
	function zOrder(zOrderCmd) {}
}