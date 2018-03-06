/**
 * A preset document template to use when creating a new document. See Documents.addDocument().
 * @constructor
 */
function DocumentPreset() {
	/** 
	 * The layout of artboards in the new document. Default: GridByRow
	 * @type {DocumentArtboardLayout}
	 */
	var artboardLayout;

	/** 
	 * The number of rows (for rows layout) or columns (for column layout) of artboards. Range: 1 to (numArtboards - 1) or 1 for single row or column layouts. Default: 1
	 * @type {number}
	 */
	var artboardRowsOrCols;

	/** 
	 * The spacing between artboards in the new document. Default: 20.0
	 * @type {number}
	 */
	var artboardSpacing;

	/** 
	 * The color space for the new document.
	 * @type {DocumentColorSpace}
	 */
	var colorMode;

	/** 
	 * The height in document points. Default: 792.0
	 * @type {number}
	 */
	var height;

	/** 
	 * The number of artboards for the new document. Range: 1 to 100. Default: 1
	 * @type {number}
	 */
	var numArtboards;

	/** 
	 * The preview mode for the new document.
	 * @type {DocumentPreviewMode}
	 */
	var previewMode;

	/** 
	 * The raster resolution for the new document.
	 * @type {DocumentRasterResolution}
	 */
	var rasterResolution;

	/** 
	 * The document title.
	 * @type {string}
	 */
	var title;

	/** 
	 * The transparency grid color for the new document.
	 * @type {DocumentTransparencyGrid}
	 */
	var transparencyGrid;

	/** 
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	var typename;

	/** 
	 * The ruler units for the new document.
	 * @type {RulerUnits}
	 */
	var units;

	/** 
	 * The width in document points. Default: 612.0
	 * @type {number}
	 */
	var width;
}