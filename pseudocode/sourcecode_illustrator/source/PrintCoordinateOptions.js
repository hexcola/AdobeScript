/**
 * Information about the media and associated printing parameters.
 * @constructor
 */
function PrintCoordinateOptions() {

	/**
	 * If true, flip artwork horizontally. Default: false
	 * @type {boolean}
	 */
	this.emulsion = false;

	/**
	 * If true, proportionally scale the artwork to fit on media.Default: false
	 * @type {boolean}
	 */
	this.fitToPage = false;

	/**
	 * The horizontal scaling factor expressed as a percentage (100 = 100%). Range: 1.0 to 10000.0. Default: 100.0 number (double) 
	 * @type {number}
	 */
	this.horizontalScale = 100.0;

	/**
	 * The artwork orientation.Default: PrintOrientation.PORTRAIT
	 * @type {PrintOrientation}
	 */
	this.orientation = PrintOrientation.PORTRAIT;

	/**
	 * The artwork position on media.Default: PrintPosition.TRANSLATECENTER
	 * @type {PrintPosition}
	 */
	this.position = PrintPosition.TRANSLATECENTER;

	/**
	 * The page tiling mode.Default: PrintTiling.TILESINGLEFULLPAGE
	 * @type {PrintTiling}
	 */
	this.tiling = PrintTiling.TILESINGLEFULLPAGE;

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";

	/**
	 * The vertical scaling factor expressed as a percentage(100 = 100%) Range: 1.0 to 10000.0. Default: 100.0 number (double) 
	 * @type {number}
	 */
	this.verticalScale = 100.0;

}

module.exports = PrintCoordinateOptions;