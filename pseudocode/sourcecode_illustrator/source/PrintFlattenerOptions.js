/**
 * Contains flattening options for use when Illustrator outputs artwork that contains transparency into a non-native format.
 * @constructor
 */
function PrintFlattenerOptions() {

	/**
	 *  If true, complex regions should be clipped. Default: false
	 * @type {boolean}
	 */
	this.clipComplexRegions = false;

	/**
	 * If true, convert all strokes to outlines.Default: false
	 * @type {boolean}
	 */
	this.convertStrokesToOutlines = false;

	/**
	 * If true, all text is converted to vector paths; 
	 * preserves the visual appearance of type.Default: false
	 * @type {boolean}
	 */
	this.convertTextToOutlines = false;


	/**
	 * The flattening balance. Range: 0.0 to 100.0.Default: 100.0 number (long) 
	 * @type {number}
	 */
	this.flatteningBalance = 100.0;

	/**
	 * The gradient resolution in dots per inch (dpi).Range: 1.0 to 9600.0. Default: 300.0 number (double) 
	 * @type {number}
	 */
	this.gradientResolution = 300.0;

	/**
	 * Whether to preserve, discard, or simulate overprinting.Default: PDFOverprint.PRESERVEPDFOVERPRINT
	 * @type {PDFOverprint}
	 */
	this.overprint = PDFOverprint.PRESERVEPDFOVERPRINT;

	/**
	 *  The rasterization resolution in dots per inch (dpi). Range: 1.0 to 9600.0. Default: 300.0 number (double)
	 * @type {number}
	 */
	this.rasterizationResolution = 300.0;

	/**
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	this.typename = "";
}

module.exports = PrintFlattenerOptions;