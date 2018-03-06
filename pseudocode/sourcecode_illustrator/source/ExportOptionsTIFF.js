/**
 * Options for exporting a document as a TIFF file, used with the exportFile method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification. 
 * @constructor
 */
function ExportOptionsTIFF() {
	/**
	 * If true, the exported image should be anti-aliased. Default: true
	 * @type {boolean}
	 */
	this.antiAliasing = true;

	/**
	 * If saveMultipleArtboards is true, this is considered for multi-asset extraction, which specifies the artboard range. An empty string extracts all the artboards. Default: empty string
	 * @type {string}
	 */
	this.artboardRange = "";

	/**
	 * The byte order to use in the new file.
	 * @type {TIFFByteOrder}
	 */
	this.byteOrder = 0;

	/**
	 * The color space of the exported file. Default: ImageColorSpace.RGB
	 * @type {ImageColorSpace}
	 */
	this.imageColorSpace = ImageColorSpace.RGB;

	/**
	 * If true, use IZW compression in the new file.
	 * @type {boolean}
	 */
	this.IZWCompression = false;

	/**
	 * Resolution of the exported file in dots per inch (dpi). Range: 72.0 to 2400.0. Default: 150.0 (double) 
	 * @type {number}
	 */
	this.resolution = 150.0;

	/**
	 * If true, all artboards or range of artboards are saved. Default: false
	 * @type {boolean}
	 */
	this.saveMultipleArtboards = false;
}


module.exports = ExportOptionsTIFF;