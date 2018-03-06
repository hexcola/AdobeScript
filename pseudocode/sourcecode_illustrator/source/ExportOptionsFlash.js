/**
 * Options for exporting a document as a Macromedia® Flash® (SWF) file, used with the exportFile method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification.
 * @constructor
 */
function ExportOptionsFlash() {

	/**
	 * How the art should be clipped during output. Default: ArtClippingOption.OUTPUTARTBOUNDS
	 * @type {ArtClippingOption}
	 */
	this.artClipping = ArtClippingOption.OUTPUTARTBOUNDS;

	/**
	 * If saveMultipleArtboards is true, this is considered for multi-asset extraction, which specifies the artboard range. An empty string extracts all the artboards. Default: empty string
	 * @type {string}
	 */
	this.artboardRange = "";

	/**
	 * The background color of the exported Flash frames.
	 * @type {RGBColor}
	 */
	this.backgroundColor =

	/**
	 *  A list of layers to be included as the static background of the exported Flash frames. Array of Layer
	 *  @type {array}
	 */
	this.backgroundLayers = null;

	/**
	 * The animation type for blended objects. Default: BlendAnimationType.NOBLENDANIMATION
	 * @type {BlendAnimationType}
	 */
	this.blendAnimation = BlendAnimationType.NOBLENDANIMATION;

	/**
	 * If true, the exported file should be exported compressed. Default: false
	 * @type {boolean}
	 */
	this.compressed = false;

	/**
	 * If true, all text is converted to vector paths; preserves the visual appearance of type in all Flash players. Default: false
	 * @type {boolean}
	 */
	this.convertTextToOutlines = false;


	/**
	 * The amount of curve information that should be presented. Default: 7 (long) 
	 * @type {number}
	 */
	this.curveQuality = 7;

	/**
	 * If true, export all symbols defined in the palette. Default: false
	 * @type {boolean}
	 */
	this.exportAllSymbols = false;

	/**
	 * The style in which the exported data should be created in Flash. Default: FlashExportStyle.ASFLASHFILE
	 * @type {FlashExportStyle}
	 */
	this.exportStyle = FlashExportStyle.ASFLASHFILE;

	/**
	 *  The version of the exported SWF file. Default: FlashExportVersion.FlashVersion9.
	 * @type {FlashExportVersion}
	 */
	this.exportVersion = FlashExportVersion.FlashVersion9;

	/**
	 * The display rate in frames per second. Range: 0.01–120.0. Default: 12.0 (double) 
	 * @type {number}
	 */
	this.frameRate = 12.0;

	/**
	 * If true, ignore kerning information in text objects. Default: false
	 * @type {boolean}
	 */
	this.ignoreTextKerning = false;

	/**
	 * How should the image in the exported Flash file be compressed. Default: FlashImageFormat.LOSSLESS
	 * @type {FlashImageFormat}
	 */
	this.imageFormat = FlashImageFormat.LOSSLESS;

	/**
	 * If true, include minimal XMP metadata in the SWF file. Default: false
	 * @type {boolean}
	 */
	this.includeMetadata = false;

	/**
	 * Specifies the JPEG method to use. Default: FlashJPEGMethod.Standard
	 * @type {FlashJPEGMethod}
	 */
	this.jpegMethod = FlashJPEGMethod.Standard;

	/**
	 * Level of compression to use. Range 1 to 10. Default: 3 (long) 
	 * @type {number}
	 */
	this.jpegQuality = 3;

	/**
	 * The order in which layers are exported to Flash frames. Default: LayerOrderType.BOTTOMUP
	 * @type {LayerOrderType}
	 */
	this.layerOrder = LayerOrderType.BOTTOMUP;

	/**
	 * If true, the Flash file is set to loop when run. Default: false
	 * @type {boolean}
	 */
	this.looping = false;

	/**
	 * The access level for the exported SWF file. Default: FlashPlaybackSecurity.PlaybackLocal
	 * @type {FlashPlaybackSecurity}
	 */
	this.playbackAccess = FlashPlaybackSecurity.PlaybackLocal;

	/**
	 * If true, preserve appearance. If false, preserve editability. Default: false
	 * @type {boolean}
	 */
	this.preserveAppearance = false;

	/**
	 * If true, export as read-only file. Default: false
	 * @type {boolean}
	 */
	this.readOnly = false;

	/**
	 * If a file with the same name already exists, should it be replaced. Default: SaveOptions.PROMPTTOSAVECHANGES
	 * @type {SaveOptions}
	 */
	this.replacing = SaveOptions.PROMPTTOSAVECHANGES;

	/**
	 * The resolution in pixels per inch. Range: 72–2400. Default: 72 (double) 
	 * @type {number}
	 */
	this.resolution = 72;

	/**
	 * If true, all artboards or range of artboards are saved. Default: false
	 * @type {boolean}
	 */
	this.saveMultipleArtboards = false;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";
}


module.exports = ExportOptionsFlash;