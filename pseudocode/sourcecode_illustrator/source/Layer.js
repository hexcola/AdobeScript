/**
 * A layer in an Illustrator document. Layers may contain nested layers, which are called sublayers in the user interface.
 * 
 * The layer object contains all of the page items in the specific layer as elements. Your script can access page items as elements of either the Layer object or as elements of the Document object. When accessing page items as elements of a layer, only objects in that layer can be accessed. To access page items throughout the entire document, be sure to refer to them as contained by the document.
 * @constructor
 */
function Layer() {
	/**
	 * Is this object used to create a knockout, and if so, what kind of knockout. You cannot set this value to KnockoutState.Unknown.
	 * @type {KnockoutState}
	 */
	this.artworkKnockout = null;


	/**
	 * The mode used when compositing an object.
	 * @type {BlendModes}
	 */
	this.blendingMode = null;

	/**
	 * The layer’s selection mark color.
	 * @type {RGBColor}
	 */
	this.color = null;

	/**
	 *  Read-only. The compound path items contained in this layer.
	 *  @type {CompoundPathItems}
	 */
	this.compoundPathItems = null;

	/**
	 * If true, placed images should be rendered as dimmed in this layer.
	 * @type {boolean}
	 */
	this.dimPlacedImages = false;

	/**
	 * Read-only. The graph items contained in this layer.
	 * @type {GraphItems}
	 */
	this.graphItems = null;

	/**
	 * Read-only. The group items contained in this layer.
	 * @type {GroupItems}
	 */
	this.groupItems = null;

	/**
	 * If true, an object in this layer has been selected; set to false to deselect all objects in the layer.
	 * @type {boolean}
	 */
	this.hasSelectedArtwork = false;

	/**
	 * If true, this object is isolated.
	 * @type {boolean}
	 */
	this.isIsolated = false;

	/**
	 * Read-only. The layers contained in this layer.
	 * @type {Layers}
	 */
	this.layers = null;

	/**
	 * Read-only. The legacy text items in this layer.
	 * @type {LegacyTextItems}
	 */
	this.legacyTextItems = null;

	/**
	 * If true, this layer is editable; set to false to lock the layer.
	 * @type {boolean}
	 */
	this.locked = false;

	/**
	 * Read-only. The mesh items contained in this layer.
	 * @type {MeshItems}
	 */
	this.meshItems = null;

	/**
	 * The name of this layer.
	 * @type {string}
	 */
	this.name = "";

	/**
	 * The non-native art items in this layer.
	 * @type {NonNativeItems}
	 */
	this.nonNativeItems = null;

	/**
	 * The opacity of the layer. Range: 0.0 to 100.0 pageItems PageItems Read-only. The page items (all art item classes) contained in this layer.  (double) 
	 * @type {number}
	 */
	this.opacity = 0.0;

	/**
	 * Read-only. The document or layer that contains this layer.
	 * @type {Document|Layer}
	 */
	this.parent = null;

	/**
	 * Read-only. The path items contained in this layer.
	 * @type {PathItems}
	 */
	this.pathItems = null;

	/**
	 * Read-only. The placed items contained in this layer.
	 * @type {PlacedItems}
	 */
	this.placedItems = null;

	/**
	 * Read-only. The plug-in items contained in this layer.
	 * @type {PluginItems}
	 */
	this.pluginItems = null;

	/**
	 * If true, this layer should be displayed using preview mode.
	 * @type {boolean}
	 */
	this.preview = false;

	/**
	 * If true, this layer should be printed when printing the document.
	 * @type {boolean}
	 */
	this.printable = true;


	/**
	 * Read-only. The raster items contained in this layer.
	 * @type {RasterItems}
	 */
	this.rasterItems = null;

	/**
	 * If true, the layer item is sliced. Default: false
	 * @type {boolean}
	 */
	this.sliced = false;

	/**
	 * Read-only. The symbol items contained in the layer.
	 * @type {SymbolItems}
	 */
	this.symbolItems = null;

	/**
	 * Read-only. The text art items contained in this layer.
	 * @type {TextFrameItems}
	 */
	this.textFrames = null;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";

	/**
	 * If true, this layer is visible.
	 * @type {boolean}
	 */
	this.visible = true;

	/**
	 * Read-only. The position of this layer within the stacking order of layers in the document.  (long) 
	 * @type {number}
	 */
	this.zOrderPosition = 0;
}

Layer.prototype = {
	/**
	 * Moves the object.
	 * @param {object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 * @return {Layer}
	 */
	move: function(relativeObject, insertionLocation) {},

	/**
	 * Deletes this object.
	 */
	remove: function() {},

	/**
	 * Arranges the layer’s position in the stacking order of the containing layer or document (parent) of this object
	 * @param {ZOrderMethod} ZOrderCmd
	 */
	zOrder: function(ZOrderCmd) {}
};

module.exports = Layer;