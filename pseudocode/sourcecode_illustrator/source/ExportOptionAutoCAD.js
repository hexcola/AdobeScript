/**
 * Options for exporting a document as an AutoCAD file, used with the exportFile method. All properties are optional.
 * When you export a document, a file extension is appended automatically. You should not include any file extension in the file specification. To override the default AutoCAD export format (DWG), use the exportFileFormat property.
 * @constructor
 */
function ExportOptionsAutoCAD() {

	/**
	 * If true, paths are altered if needed to maintain appearance. Default: false
	 * @type {boolean}
	 */
	this.alterPathsForAppearance = false;

	/**
	 * The colors exported into the AutoCAD file.
	 * @type {AutoCADColors}
	 */
	this.colors = null;

	/**
	 * If true, text is converted to vector paths; preserves the visual appearance of type. Default: false
	 * @type {boolean}
	 */
	this.convertTextToOutlines = false;

	/**
	 * The format to which the file is exported. Default: AutoCADExportFileFormat.DWG
	 * @type {AutoCADExportFileFormat}
	 */
	this.exportFileFormat = AutoCADExportFileFormat.DWG;

	/**
	 * Specifies whether to preserve appearance or editability during export. Default: AutoCADExportOption.MaximizeEditability
	 * @type {AutoCADExportOption}
	 */
	this.exportOption = AutoCADExportOption.MaximizeEditability;

	/**
	 * If true, only selected artwork is exported. Default: false
	 * @type {boolean}
	 */
	this.exportSelectedArtOnly = false;

	/**
	 * The format in which raster art is exported.
	 * @type {AutoCADRasterFormat}
	 */
	this.rasterFormat = null;

	/**
	 * If true, line weights are scaled by the same scaling factor as the rest of the drawing. Default: false
	 * @type {boolean}
	 */
	this.scaleLineweights = false;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";

	/**
	 * The measurement units from which to map.
	 * @type {AutoCADUnit}
	 */
	this.unit = AutoCADUnit.Points;

	/**
	 * The ratio (as a percentage) by which output is scaled. Range: 0 to 1000  (double) 
	 * @type {number}
	 */
	this.unitScaleRatio = 1;

	/**
	 * The release of AutoCAD to which the file is exported. Default: AutoCADCompatibility.AutoCADRelease24
	 * @type {AutoCADCompatibility}
	 */
	this.version = AutoCADCompatibility.AutoCADRelease24;
}


module.exports = ExportOptionsAutoCAD;