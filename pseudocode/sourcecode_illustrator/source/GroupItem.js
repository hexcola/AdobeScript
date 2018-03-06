/**
 * A grouped set of art items. Group items can contain all of the same page items that a layer can contain, including other nested groups.
 *
 * Paths contained in a group or compound path in a document are returned as individual paths when a script asks for the paths contained in the document. However, paths contained in a group or compound path are not returned when a script asks for the paths in a layer which contains the group or compound path.
 *   
 * @constructor
 */
function GroupItem() {
	/**
	 * Is this object used to create a knockout, and if so, what kind of knockout.
	 * @type {KnockoutState}
	 */
	this.artworkKnockout = null;

	/**
	 * The blend mode used when compositing an object.  
	 * @type {blendingMode}
	 */
	this.blendingMode = null;

	/**
	 * If true, the group is clipped to the clipping mask.
	 * @type {boolean}
	 */
	this.clipped = false;

	/**
	 * Read-only. The compound path items contained in this group.
	 * @type {CompoundPathItems}
	 */
	this.compoundPathItems = null;

	/**
	 * Read-only. The bounds of the object including stroke width and controls. array of 4 numbers 
	 * @type {array} 
	 */
	this.controlBounds = null;

	/**
	 * Read-only. If true, this item is editable.
	 * @type {boolean}
	 */
	this.editable = false;

	/**
	 * Read-only. The bounds of the object excluding stroke width.  array of 4 numbers 
	 * @type {array}
	 */
	this.geometricBounds = null;

	/**
	 * Read-only. The graph items contained in this group.
	 * @type {GraphItems}
	 */
	this.graphItems = null;

	/**
	 * Read-only. The group items contained in this group.
	 * @type {GroupItems}
	 */
	this.groupItems = null;

	/**
	 * The height of the group item.  double
	 * @type {number} 
	 */
	this.height = 0.0;

	/**
	 * If true, this group item is hidden.
	 * @type {boolean}
	 */
	this.hidden = false;

	/**
	 * If true, this object is isolated.
	 * @type {boolean}
	 */
	this.isIsolated = false;

	/**
	 * Read-only. The layer to which this group item belongs.
	 * @type {Layer}
	 */
	this.layer = null;

	/**
	 * The position of the left side of the item (in points, measured from the left side of the page).  double
	 * @type {number}
	 */
	this.left = 0.0;

	/**
	 * Read-only. The legacy text items in the group.
	 * @type {LegacyTextItems}
	 */
	this.legacyTextItems = null;

	/**
	 * If true, this group item is locked.
	 * @type {boolean}
	 */
	this.locked = false;

	/**
	 *  Read-only. The mesh items contained in this group.
	 *  @type {MeshItems}
	 */
	this.meshItems = null;

	/**
	 * The name of this group item.
	 * @type {string}
	 */
	this.name = "";

	/**
	 * Read-only. The non-native art items in this group.
	 * @type {NonNativeItems}
	 */
	this.nonNativeItems = null;

	/**
	 * The note assigned to this item.
	 * @type {string}
	 */
	this.note = "";

	/**
	 * The opacity of the object. Range: 0.0 to 100.0  double
	 * @type {number}
	 */
	this.opacity = 0.0;

	/**
	 * Read-only. The page items (all art item classes) contained in this group.
	 * @type {PageItems}
	 */
	this.pageItems = null;

	/**
	 * Read-only. The parent of this object.
	 * @type {Layer|GroupItem }
	 */
	this.parent = null;

	/**
	 * Read-only. The path items contained in this group.
	 * @type {PathItems}
	 */
	this.pathItems = null;

	/**
	 * Read-only. The placed items contained in this group.
	 * @type {PlacedItems}
	 */
	this.placedItems = null;

	/**
	 * Read-only. The plug-in items contained in this group.
	 * @type {PluginItems}
	 */
	this.pluginItems = null;

	/**
	 * The position (in points) of the top left corner of the groupItem object in the format [x, y]. Does not include stroke weight.  array of 2 numbers 
	 * @type {array}
	 */
	this.position = null;

	/**
	 * Read-only. The raster items contained in this group.
	 * @type {RasterItems}
	 */
	this.rasterItems = null;

	/**
	 * If true, this group item is selected.
	 * @type {boolean}
	 */
	this.selected = false;

	/**
	 * If true, the item sliced. Default: false 
	 * @type {boolean}
	 */
	this.sliced = false;

	/**
	 * Read-only. The symbol item objects in this group.
	 * @type {SymbolItems}
	 */
	this.symbolItems = null;

	/**
	 * Read-only. The tags contained in this group.
	 * @type {Tags}
	 */
	this.tags = null;

	/**
	 * Read-only. The text art items contained in this group.
	 * @type {TextFrameItems}
	 */
	this.textFrames = null;

	/**
	 * The position of the top of the item (in points, measured from the bottom of the page).  double
	 * @type {number}
	 */
	this.top = 0.0;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";

	/**
	 * The value of the Adobe URL tag assigned to this group item.
	 * @type {string}
	 */
	this.uRL = "";

	/**
	 * The visibility variable bound to the item.
	 * @type {Variable}
	 */
	this.visibilityVariable = null;

	/**
	 * Read-only. The visible bounds of the group item including stroke width.  array of 4 numbers
	 * @type {array}
	 */
	this.visibleBounds = null;

	/**
	 * The width of the group item. double
	 * @type {number} 
	 */
	this.width = 0.0;

	/**
	 * If true, the text frame object should be wrapped inside this object. 
	 * @type {boolean}
	 */
	this.wrapInside = false;

	/**
	 * The offset to use when wrapping text around this object.  double
	 * @type {number}
	 */
	this.wrapOffset = 0.0;

	/**
	 * If true, wrap text frame objects around this object (text frame must be above the object).
	 * @type {boolean}
	 */
	this.wrapped = false;

	/**
	 * Read-only. The position of this group object within the stacking order of the group or layer (parent) that contains the group object.  long 
	 * @type {number}
	 */
	this.zOrderPosition = 0;
}

GroupItem.prototype = {
	/**
	 * Creates a duplicate of the selected object.
	 * @param {object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 * @return {GroupItem} 
	 */
	duplicate: function(relativeObject, insertionLocation) {},

	/**
	 * Moves the object.
	 * @param {object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 * @return {GroupItem} 
	 */
	move: function(relativeObject, insertionLocation) {},

	/**
	 * Deletes this object.
	 */
	remove: function() {},

	/**
	 * Scales the art item where scaleX is the horizontal scaling factor and scaleY is the vertical scaling factor.100.0 = 100 % .
	 * @param {number}  scaleX double
	 * @param {number} scaleY double
	 * @param {boolean} changePositions 
	 * @param {boolean} changeFillPatterns
	 * @param {boolean} changeFillGradients
	 * @param {boolean} changeStrokePattern
	 * @param {number} changeLineWidths double
	 * @param {Transformation} scaleAbout
	 */
	resize: function(scaleX, scaleY, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, scaleAbout) {},

	/**
	 * Rotates the art item relative to the current rotation.The object is rotated counter - clockwise if the angle value is positive, clockwise if the value is negative.
	 * @param {number} angle double
	 * @param {boolean} changePositions
	 * @param {boolean} changeFillPatterns
	 * @param {boolean} changeFillGradients
	 * @param {boolean} changeStrokePattern
	 * @param {Transformation} rotateAbout
	 */
	rotate: function(angle, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, rotateAbout) {},

	/**
	 * Transforms the art item by applying a transformation matrix.
	 * @param {Matrix} transformationMatrix
	 * @param {boolean} changePositions
	 * @param {boolean} changeFillPatterns
	 * @param {boolean} changeFillGradients
	 * @param {boolean} changeStrokePattern
	 * @param {number} changeLineWidths double
	 * @param {Transformation} transformAbout
	 */
	transform: function(transformationMatrix, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, transformAbout) {},

	/**
	 * Repositions the art item relative to the current position, where deltaX is the horizontal offset and deltaY is the vertical offset.
	 * @param {number} deltaX double
	 * @param {number} deltaY double
	 * @param {boolean} transformObjects
	 * @param {boolean} transformFillPatterns
	 * @param {boolean} transformFillGradients
	 * @param {boolean} transformStrokePatterns
	 */
	translate: function(deltaX, deltaY, transformObjects, transformFillPatterns, transformFillGradients, transformStrokePatterns) {},

	/**
	 * Arranges the art item’ s position in the stacking order of the group or layer (parent) of this object.
	 * @param {ZOrderMethod} zOrderCmd
	 */
	zOrder: function(zOrderCmd) {}
};

module.exports = GroupItem;