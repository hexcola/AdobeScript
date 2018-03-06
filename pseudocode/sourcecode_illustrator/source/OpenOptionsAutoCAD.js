/**
 * Options for opening an AutoCAD drawing, used with the open method.
 * 
 * @constructor
 */
function OpenOptionsAutoCAD() {
	/**
	 * If true, the artwork is centered on the artboard. Default: true
	 * @type {boolean}
	 */
	this.centerArtwork = true;

	/**
	 * How to scale the drawing on import. Default: AutoCADGlobalScaleOption.FitArtboard
	 * @type {AutoCADGlobalScaleOption}
	 */
	this.globalScaleOption = AutoCADGlobalScaleOption.FitArtboard;

	/**
	 * The value when globalScaleOption is AutoCADGlobalScaleOption.ScaleByValue, expressed as a percentage. Range: 0.0 to 100.0. Default is 100.0
	 * @type {double}
	 */
	this.globalScalePercent = 100.0;

	/**
	 * If true, the layers of the artwork are merged. Default: false
	 * @type {boolean}
	 */
	this.mergeLayers = false;

	/**
	 * Read-only. The object’s container.
	 * @type {object }
	 */
	this.parent = null;

	/**
	 * If true, line weights are scaled by the same factor as the rest of the drawing. Default: false
	 * @type {boolean}
	 */
	this.scaleLineweights = false;

	/**
	 *  The name of the layout in the drawing to import.
	 *  @type {string}
	 */
	this.selectedLayoutName = "";

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";

	/**
	 * The unit to map to. Default: AutoCADUnit.Millimeters
	 * @type {AutoCADUnit}
	 */
	this.unit = AutoCADUnit.Millimeters;

	/**
	 * The ratio by which to scale while mapping units. Default: 1.0 
	 * @type {number}
	 */
	this.unitScaleRatio = 1.0;
}

module.exports = OpenOptionsAutoCAD;