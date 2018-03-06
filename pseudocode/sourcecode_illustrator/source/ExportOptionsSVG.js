/**
 * Options for exporting a document as a SVG file, used with the exportFile method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification.
 * @constructor
 */
function ExportOptionsSVG() {
	/**
	 * A range of artboards to save, if saveMultipleArtboards is true. A comma-delimited list of artboard names., or the empty string to save all artboards. Default: empty string
	 * @type {string}
	 */
	this.artboardRange = "";
	/**
	 * If true, the exported file should be compressed. Default: false
	 * @type {boolean}
	 */
	this.compressed = false;

	/**
	 * The decimal precision for element coordinate values. Range: 1 to 7. Default: 3 (long) 
	 * @type {number}
	 */
	this.coordinatePrecision = 3;

	/**
	 * How the CSS properties of the document should be included in the exported file. Default: SVGCSSPropertyLocation.STYLEATTRIBUTES
	 * @type {SVGCSSPropertyLocation}
	 */
	this.cssProperties = SVGCSSPropertyLocation.STYLEATTRIBUTES;

	/**
	 * How the text in the document should be encoded. Default: SVGDocumentEncoding.ASCII
	 * @type {SVGDocumentEncoding}
	 */
	this.documentEncoding = SVGDocumentEncoding.ASCII;

	/**
	 * The SVG version to which the file should conform. Default: SVGDTDVersion.SVG1_1
	 * @type {SVGDTDVersion}
	 */
	this.DTD = SVGDTDVersion.SVG1_1;

	/**
	 * If true, the raster images contained in the document should be embedded in the exported file. Default: false
	 * @type {boolean}
	 */
	this.embedRasterImages = false;

	/**
	 * Which font glyphs should be included in the exported file. Default: SVGFontSubsetting.ALLGLYPHS
	 * @type {SVGFontSubsetting}
	 */
	this.fontSubsetting = SVGFontSubsetting.ALLGLYPHS;

	/**
	 * The type of font to included in the exported file. Default: SVGFontType.CEFFONT
	 * @type {SVGFontType}
	 */
	this.fontType = SVGFontType.CEFFONT;

	/**
	 * If true, file information should be saved in the exported file. Default: false
	 * @type {boolean}
	 */
	this.includeFileInfo = false;

	/**
	 * If true, save unused styles in the exported file. Default: false
	 * @type {boolean}
	 */
	this.includeUnusedStyles = false;

	/**
	 * If true, variables and datasets should be saved in the exported file. Default: false
	 * @type {boolean}
	 */
	this.includeVariablesAndDatasets = false;

	/**
	 * If true, the exported file should be optimized for the SVG Viewer. Default: false
	 * @type {boolean}
	 */
	this.optimizeForSVGViewer = false;

	/**
	 * If true, Illustrator editing capabilities should be preserved when exporting the document. Default: false
	 * @type {boolean}
	 */
	this.preserveEditability = false;

	/**
	 * If true, save the artboards specified by artboardRange in the exported file. Default: false
	 * @type {boolean}
	 */
	this.saveMultipleArtboards = false;

	/**
	 * If true, slice data should be exported with the file. Default: false
	 * @type {boolean}
	 */
	this.slices = false;

	/**
	 * If true, SVG automatic kerning is allowed in the file. Default: false
	 * @type {boolean}
	 */
	this.sVGAutoKerning = false;

	/**
	 * If true, the SVG text-on-path construct is allowed in the file. Default: false
	 * @type {boolean}
	 */
	this.sVGTextOnPath = false;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";
}


module.exports = ExportOptionsSVG;