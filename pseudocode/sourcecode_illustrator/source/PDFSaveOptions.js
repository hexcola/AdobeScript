/**
 * Options for saving a document as an Adobe PDF file, used with the saveAs method. All properties are optional.
 *  
 * @constructor
 */
function PDFFileOptions() {
	/**
	 * Optional. Create Acrobat®layers from top-level layers. Acrobat 6 only. Default:false
	 * @type {boolean}
	 */
	this.acrobatLayers = false;

	/**
	 * Optional. This is considered for multi-asset extraction, which specifies the artboard range. An empty string extracts all the artboards. Default: empty string
	 * @type {string}
	 */
	this.artboardRange = "";

	/**
	 *  Optional. Link 4 bleed values. Default: true
	 * @type {boolean}
	 */
	this.bleedLink = true;

	/**
	 * The bleed offset rectangle. array of 4 numbers 
	 * @type {array}
	 */
	this.bleedOffsetRect = [0, 0, 0, 0];

	/**
	 * Optional. Draw color bars. Default: false
	 * @type {boolean}
	 */
	this.colorBars = false;

	/**
	 * Optional. The type of color bitmap compression used. Default: CompressionQuality.None
	 * @type {CompressionQuality}
	 */
	this.colorCompression = CompressionQuality.None;

	/**
	 * Optional. The PDF color conversion policy. Default: ColorConversion.None
	 * @type {ColorConversion}
	 */
	this.colorConversionID = ColorConversion.None;

	/**
	 * Optional. The conversion target for color conversion. Default: ColorDestination.None
	 * @type {ColorDestination}
	 */
	this.colorDestinationID = ColorDestination.None;

	/**
	 *  Optional. The color downsampling resolution in dots per inch (dpi). If 0, no downsampling is performed. Default: 150.0  number (double)
	 * @type {number}
	 */
	this.colorDownsampling = 150.0;

	/**
	 * Optional. Downsample if the image’s resolution is above this value. Default: 225.0 number (double) 
	 * @type {number}
	 */
	this.colorDownsamplingImageThreshold = 225.0;

	/**
	 *  Optional. How color bitmap images should be resampled. Default: DownsampleMethod.NODOWNSAMPLE
	 * @type {DownsampleMethod}
	 */
	this.colorDownsamplingMethod = 225.0;

	/**
	 * Optional. The color profile to include. Default: 
	 * @type {ColorProfile}
	 */
	this.colorProfileID = ColorProfile.None;

	/**
	 * Optional. Tile size when compressing with JPEG2000. Default: 256 number (long) 
	 * @type {number}
	 */
	this.colorTileSize = 256;

	/**
	 * Optional. The version of the Acrobat file format to create. Default: PDFCompatibility.Acrobat5
	 * @type {PDFCompatibility}
	 */
	this.compatibility = PDFCompatibility.Acrobat5;

	/**
	 * Optional. If true, the line art and text should be compressed. Default: true
	 * @type {boolean}
	 */
	this.compressArt = true;

	/**
	 * Optional. A password string to open the document. Default: no string
	 * @type {string}
	 */
	this.documentPassword = "";

	/**
	 * Optional. If true, enable accessing 128-bit. Default: true
	 * @type {boolean}
	 */
	this.enableAccess = true;

	/**
	 * Optional. If true, enable copying of text 128-bit. Default: true
	 * @type {boolean}
	 */
	this.enableCopy = true;

	/**
	 * Optional. If true, enable copying and accessing 40-bit. Default: true
	 * @type {boolean}
	 */
	this.enableCopyAccess = true;

	/**
	 * Optional. If true, enable plaintext metadata 128-bit. Available only for Acrobat 6. Default: false
	 * @type {boolean}
	 */
	this.enablePlainText = false;

	/**
	 * Optional. The printing flattener options. 
	 * @type {PrintFlattenerOptions}
	 */
	this.flattenerOptions = null;

	/**
	 * Optional. The transparency flattener preset name.
	 * @type {string}
	 */
	this.flattenerPreset = "";

	/**
	 * Optional. Include a subset of fonts when less than this percentage of characters is used in the document. Valid for Illustrator 9 file format. Range: 0.0 to 100.0. Default: 100.0 number (double) 
	 * @type {number}
	 */
	this.fontSubsetThreshold = 100.0;

	/**
	 * Optional. If true, thumbnail images are generated with the saved file. Default: true
	 * @type {boolean}
	 */
	this.generateThumbnails = true;

	/**
	 * Optional. Quality of grayscale bitmap compression. Default: None
	 * @type {CompressionQuality}
	 */
	this.grayscaleCompression = None;

	/**
	 * Optional. Downsampling resolution in dots per inch (dpi). If 0, no downsampling is performed. Default: 150.0 number (double) 
	 * @type {number}
	 */
	this.grayscaleDownsampling = 150.0;

	/**
	 * Optional. Downsample if the image’s resolution is above this value. Default: 225.0 number (double) 
	 * @type {number}
	 */
	this.grayscaleDownsamplingImageThreshold = 225.0;

	/**
	 * Optional. How grayscale bitmap images should be resampled Default: DownSampleMethod.NODOWNSAMPLE
	 * @type {DownsampleMethod}
	 */
	this.grayscaleDownsamplingMethod = DownSampleMethod.NODOWNSAMPLE;

	/**
	 * Optional. Tile size when compressing with JPEG2000. Default: 256 monochromeCompression MonochromeCompression Optional. Type ofmonochrome bitmap compression used. Default:MonochromeCompression.None number (long) 
	 * @type {number}
	 */
	this.grayscaleTileSize = MonochromeCompression.None;

	/**
	 * Optional. Downsampling resolution in dots per inch (dpi). If 0, no downsampling is performed. Default: 300 number (double) 
	 * @type {number}
	 */
	this.monochromeDownsampling = 300;

	/**
	 * Optional. Downsample if the image’s resolution is above this value. Default: 450.0  number (double) 
	 * @type {number}
	 */
	this.monochromeDownsamplingImageThreshold = 450.0;

	/**
	 * Optional. How monochrome bitmap images should be resampled. Default: DownSampleMethod.NODOWNSAMPLE
	 * @type {DownsampleMethod}
	 */
	this.monochromeDownsamplingMethod = DownSampleMethod.NODOWNSAMPLE;

	/**
	 * Optional. Custom offset in points for using the custom paper. Default: 0.0 number (double) 
	 * @type {number}
	 */
	this.offset = 0.0;

	/**
	 * Optional. If true, the PDF document should be optimized for fast web viewing. Default: false
	 * @type {boolean}
	 */
	this.optimization = false;

	/**
	 * Optional. An optional comment to add to the PDF file, describing the intended printing condition. Default: not included
	 * @type {string}
	 */
	this.outputCondition = "not included";

	/**
	 * Optional. The name of a registered printing condition. Default: not included
	 * @type {string}
	 */
	this.outputConditionID = "not included";

	/**
	 * Optional. If true, raw page information. Default: false 
	 * @type {boolean}
	 */
	this.pageInformation = false;

	/**
	 * Optional. The page marks style. Default: PageMarksType.Roman
	 * @type {PageMarksTypes}
	 */
	this.pageMarksType = PageMarksType.Roman;

	/**
	 * Optional. PDF security printing permission. Default: PDFPrintAllowedEnum.PRINT128HIGHRESOLUTION
	 * @type {PDFPrintAllowedEnum}
	 */
	this.pDFAllowPrinting = PDFPrintAllowedEnum.PRINT128HIGHRESOLUTION;

	/**
	 * Optional. Security changes allowed. Default: PDFChangeAllowedEnum.CHANGE128ANYCHANGES
	 * @type {PDFChangesAllowedEnum}
	 */
	this.pDFChangesAllowed = PDFChangeAllowedEnum.CHANGE128ANYCHANGES;

	/**
	 * Optional. Name of PDF preset to use.
	 * @type {string}
	 */
	this.pDFPreset = null;

	/**
	 * Optional. The PDF standard with which this document complies. Default: PDFXStandard.PDFXNONE
	 * @type {PDFXStandard}
	 */
	this.pDFXStandard = PDFXStandard.PDFXNONE;

	/**
	 * Optional. A description of the PDF standard from the selected preset.
	 * @type {string}
	 */
	this.pDFXStandardDescription = "";

	/**
	 * Optional. A password string to restrict editing security settings. Default: no string
	 * @type {string}
	 */
	this.permissionPassword = "";

	/**
	 * Optional. If true, Illustrator editing capabilities should be preserved when saving the document. Default: true
	 * @type {boolean}
	 */
	this.preserveEditability = true;

	/**
	 * Optional. Flattening printer resolution. Default: 800.0 number (double) 
	 * @type {number}
	 */
	this.printerResolution = 800.0;

	/**
	 * Optional. If true, draw registration marks. Default: false
	 * @type {boolean}
	 */
	this.registrationMarks = false;

	/**
	 * Optional. Require a password to open the document. Default: false 
	 * @type {boolean}
	 */
	this.requireDocumentPassword = false;

	/**
	 * Optional. Use a password to restrict editing security settings. Default: false 
	 * @type {boolean}
	 */
	this.requirePermissionPassword = false;

	/**
	 * Optional. If true, manual trapping has been prepared for the document. Default: false 
	 * @type {boolean}
	 */
	this.trapped = false;

	/**
	 * Optional. Draw trim marks. Default: false 
	 * @type {boolean}
	 */
	this.trimMarks = false;

	/**
	 * Optional. The trim mark weight. Default: PDFTrimMarkWeight.TRIMMARKWEIGHT0125
	 * @type {PDFTrimMarkWeight}
	 */
	this.trimMarkWeight = PDFTrimMarkWeight.TRIMMARKWEIGHT0125;

	/**
	 * Optional. Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";

	/**
	 * Optional. View PDF after saving. Default: false 
	 * @type {boolean}
	 */
	this.viewAfterSaving = false;
}

module.exports = PDFFileOptions;