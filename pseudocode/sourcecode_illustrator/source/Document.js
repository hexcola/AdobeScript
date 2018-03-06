/**
 * An Illustrator document. Documents are contained in the Application object.
 * 
 * The default document settings—those properties starting with the word “default”—are global settings that affect the current document. Be sure to modify these default properties only when a document is open. Note that if you set default properties to desired values before creating new objects, you can streamline your scripts, eliminating the need to specify specific properties such as fillColor and stroked that have default properties.
 * A document’s color space, height, and width can only be set when the document is created. You cannot modify these properties in an existing document. See Application.open for more information on how document color spaces are handled.* @constructor
 * @constructor
 */
function Document() {

	/**
	 * The currently opened dataset.
	 * @type {Dataset}
	 */
	var activeDataset;

	/**
	 * The active layer in the document.
	 * @type {Layer}
	 */
	var activeLayer;

	/**
	 * Read-only. The document’s current view.
	 * @type {View}
	 */
	var activeView;

	/**
	 * Read-only. All artboards in the document.
	 * @type {Artboards}
	 */
	var artboards;

	/**
	 * Read-only. The brushes contained in the document.
	 * @type {Brushes}
	 */
	var brushes;

	/**
	 * Read-only. The list of character styles in this document.
	 * @type {CharacterStyles}
	 */
	var characterStyles;

	/**
	 * Read-only. The compound path items contained in the document.
	 * @type {CompoundPathItems}
	 */
	var compoundPathItems;

	/**
	 * The boundary of the document’s cropping box for output, or null if no value has been set. of 4 numbers 
	 * @type {array}
	 */
	var cropBox;

	/**
	 * The style of the document’s cropping box.
	 * @type {CropOptions}
	 */
	var cropStyle;

	/**
	 * Read-only. The datasets contained in the document.
	 * @type {Datasets}
	 */
	var dataSets;

	/**
	 * The color to use to fill new paths if defaultFilled is true.
	 * @type {Color}
	 */
	var defaultFillColor;

	/**
	 * If true, a new path should be filled.
	 * @type {boolean}
	 */
	var defaultFilled;

	/**
	 *  If true, the art beneath a filled object should be overprinted by default.
	 * @type {boolean}
	 */
	var defaultFillOverprint;

	/**
	 * Default type of line capping for paths created.
	 * @type {StrokeCap}
	 */
	var defaultStrokeCap;

	/**
	 * The stroke color for new paths if default stroked is true.
	 * @type {Color}
	 */
	var defaultStrokeColor;

	/**
	 * If true, a new path should be stroked.
	 * @type {boolean}
	 */
	var defaultStroked;

	/**
	 * Default lengths for dashes and gaps in dashed lines, starting with the first dash length, followed by the first gap length, and so on. Set to an empty object, {}, for solid line.
	 * @type {object}
	 */
	var defaultStrokeDashes;

	/**
	 * The default distance into the dash pattern at which the pattern should be started for new paths. (double) 
	 * @type {number}
	 */
	var defaultStrokeDashOffset;

	/**
	 * Default type of joints in new paths.
	 * @type {StrokeJoin}
	 */
	var defaultStrokeJoin;

	/**
	 * When a default stroke join is set to mitered, this property specifies when the join will be converted to beveled (squared-off ) by default. (double) 
	 * The default miter limit of 4 means that when the length of the point reaches four times the stroke weight, the join switches from a miter join to a bevel join. Range: 1 to 500; a value of 1 specifies a bevel join.
	 * @type {number}
	 */
	var defaultStrokeMiterLimit;

	/**
	 * If true, the art beneath a stroked object should be overprinted by default.
	 * @type {boolean}
	 */
	var defaultStrokeOverprint;

	/**
	 * Default width of stroke for new paths.(double) 
	 * @type {number}
	 */
	var defaultStrokeWidth;

	/**
	 * Read-only. The color specification system to use for this document’s color space.
	 * @type {DocumentColorSpace}
	 */
	var documentColorSpace;

	/**
	 * Read-only. The file associated with the document, which includes the complete path to the file.
	 * @type {File}
	 */
	var fullName;

	/**
	 * Read-only. The bounds of the illustration excluding the stroke width of any objects in the document.  of 4 numbers 
	 * @type {array}
	 */
	var geometricBounds;

	/**
	 * Read-only. The gradients contained in the document.
	 * @type {Gradients}
	 */
	var gradients;

	/**
	 * Read-only. The graphic styles defined in this document.
	 * @type {GraphicStyles}
	 */
	var graphicStyles;

	/**
	 * Read-only. The graph art items in this document.
	 * @type {GraphItems}
	 */
	var graphItems;

	/**
	 * Read-only. The group items contained in the document.
	 * @type {GroupItems}
	 */
	var groupItems;

	/**
	 * Read-only. The height of the document.  (double) 
	 * @type {number}
	 */
	var height;

	/**
	 * Read-only. The list of inks in this document.
	 * @type {object}
	 */
	var inkList;

	/**
	 * Read-only. The Kinsoku set of characters that cannot begin or end a line of Japanese text.
	 * @type {object}
	 */
	var kinsokuSet;

	/**
	 * Read-only. The layers contained in the document.
	 * @type {Layers}
	 */
	var layers;

	/**
	 * Read-only. The legacy text items in the document.
	 * @type {LegacyTextItems}
	 */
	var legacyTextItems;

	/**
	 * Read-only. The mesh art items contained in the document.
	 * @type {MeshItems}
	 */
	var meshItems;

	/**
	 * Read-only. A list of names of predefined Mojikumi sets which specify the spacing for the layout and composition of Japanese text.
	 * @type {object}
	 */
	var mojikumiSet;

	/**
	 * Read-only. The document’s name (not the complete file path to the document).
	 * @type {string}
	 */
	var name;

	/**
	 * Read-only. The non-native art items in this document.
	 * @type {NonNativeItems}
	 */
	var nonNativeItems;

	/**
	 * Read-only. The current output resolution for the document in dots per inch (dpi). (double)
	 * @type {number}
	 */
	var outputResolution;

	/**
	 * Read-only. The page items (all art item classes) contained in the document.
	 * @type {PageItems}
	 */
	var pageItems;

	/**
	 * The zero-point of the page in the document without margins, relative to the overall height and width.  of 2 numbers
	 * @type {array}
	 */
	var pageOrigin;

	/**
	 * Read-only. The list of paragraph styles in this document.
	 * @type {ParagraphStyles}
	 */
	var paragraphStyles;

	/**
	 * Read-only. The application that contains this document.
	 * @type {Application}
	 */
	var parent;

	/**
	 * Read-only. The file associated with the document, which includes the complete path to the file.
	 * @type {File}
	 */
	var path;

	/**
	 * Read-only. The path items contained in this document.
	 * @type {PathItems}
	 */
	var pathItems;

	/**
	 * Read-only. The patterns contained in this document.
	 * @type {Patterns}
	 */
	var patterns;

	/**
	 * Read-only. The placed items contained in this document.
	 * @type {PlacedItems}
	 */
	var placedItems;

	/**
	 * Read-only. The plug-in items contained in this document.
	 * @type {PluginItems}
	 */
	var pluginItems;

	/**
	 * Read-only. If true, this document should be printed as tiled output.
	 * @type {boolean}
	 */
	var printTiles;

	/**
	 * The document’s raster effect settings.
	 * @type {RasterEffectOptions}
	 */
	var rasterEffectSettings;

	/**
	 * Read-only. The raster items contained in this document.
	 * @type {RasterItems}
	 */
	var rasterItems;

	/**
	 * The zero-point of the rulers in the document relative to the bottom left of the document. of 2 numbers
	 * @type {array}
	 */
	var rulerOrigin;

	/**
	 * Read-only. The default measurement units for the rulers in the document.
	 * @type {RulerUnits}
	 */
	var rulerUnits;

	/**
	 * If true, the document has not been changed since last time it was saved.
	 * @type {boolean}
	 */
	var saved;

	/**
	 * References to the objects in this document’s current selection, or null when nothing is selected.
	 * A reference to an insertion point is returned when there is an active insertion point in the contents of a selected text art item. Similarly, a reference to a range of text is returned when characters are selected in the contents of a text art item.
	 * array of objects
	 * @type {array}
	 */
	var selection;

	/**
	 * Read-only. If true, placed images should be displayed in the document.
	 * @type {boolean}
	 */
	var showPlacedImages;

	/**
	 * Read-only. If true, long paths should be split when printing.
	 * @type {boolean}
	 */
	var splitLongPaths;

	/**
	 * Read-only. The spot colors contained in this document.
	 * @type {Spots}
	 */
	var spots;

	/**
	 * Read-only. If true, the file is a stationery file.
	 * @type {boolean}
	 */
	var stationery;

	/**
	 * Read-only. The story items in this document.
	 * @type {Stories}
	 */
	var stories;

	/**
	 * Read-only. The swatches in this document.
	 * @type {Swatches}
	 */
	var swatches;

	/**
	 * Read-only. The swatch groups in this document.
	 * @type {SwatchGroups}
	 */
	var swatchGroups;

	/**
	 * Read-only. The art items in the document linked to symbols.
	 * @type {SymbolItems}
	 */
	var symbolItems;

	/**
	 * Read-only. The symbols in this document.
	 * @type {Symbols}
	 */
	var symbols;

	/**
	 * Read-only. The tags in this document.
	 * @type {Tags}
	 */
	var tags;

	/**
	 * Read-only. The text frames in this document.
	 * @type {TextFrameItems}
	 */
	var textFrames;

	/**
	 * Read-only. If true, full pages should be tiled when printing this document.
	 * @type {boolean}
	 */
	var tileFullPages;

	/**
	 * Read-only. Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	var typename;

	/**
	 * Read-only. If true, the printer’s default screen should be used when printing this document.
	 * @type {boolean}
	 */
	var useDefaultScreen;

	/**
	 * Read-only. The variables defined in this document.
	 * @type {Variables}
	 */
	var variables;

	/**
	 * If true, the variables are locked.
	 * @type {boolean}
	 */
	var variablesLocked;

	/**
	 * Read-only. The views contained in this document.
	 * @type {Views}
	 */
	var views;

	/**
	 * Read-only. The visible bounds of the document, including stroke width of any objects in the illustration. array of 4 numbers
	 * @type {array}
	 */
	var visibleBounds;

	/**
	 * Read-only. The width of this document. (double)
	 * @type {number}
	 */
	var width;

	/**
	 * The XMP metadata packet associated with this document.
	 * @type {string}
	 */
	var XMPString;


	/**
	 * Brings the first window associated with the document to the front.
	 */
	function activate() {}

	/**
	 * Arranges multiple documents in the given layout style.
	 * @params {DocumentLayoutStyle}
	 * @returns {Boolean}
	 */
	function arrange(layoutStyle) {}

	/**
	 * Closes a document using specified save options.
	 * When you close a document, you should set your document reference to null to prevent your script from accidentally trying to access closed documents.
	 * @params {SaveOptions}
	 
	 */
	function close(saveOptions) {}

	/**
	 * Converts the given point between artboard and document coordinate systems. Returns the converted point coordinates.
	 * @params {Point}
	 * @params {CoordinateSystem}
	 * @params {CoordinateSystem}
	 * @returns {Point}
	 */
	function convertCoordinate(coordinate, source, destination) {}

	/**
	 * Exports the document to the specified file using one of the predefined export file formats. 
	 * The appropriate file extension is automatically appended to the file name, except for Photoshop® documents. For these, you must include the file extension (PSD) in the file specification.
	 * @params {File}
	 * @params {ExportType}
	 * @params {variant}
	 * @returns {CompoundPathItem}
	 */
	function exportFile(exportFile, exportFormat, options) {}

	/**
	 * Exports the current PDF preset values to the file.
	 * @params {File}
	 */
	function exportPDFPreset(file) {}

	/**
	 * Exports the current perspective grid preset values to the file.
	 * @params {File}
	 */
	function exportPerspectiveGridPreset(file) {}

	/**
	 * Exports the current print preset values to the file.
	 * @params {File}
	 */
	function exportPrintPreset(file) {}

	/**
	 * Saves datasets into an XML library. The datasets contain variables and their associated dynamic data.
	 * @params {File}
	 */
	function exportVariables(fileSpec) {}

	/**
	 * Resizes the artboard at the given index to fit currently selected art. Index default is 0. Returns true on success.
	 * @params {number}
	 * @returns {boolean}
	 */
	function fitArtboardToSelectedArt(index) {}

	/**
	 * Retrieves the active plane of the active perspective grid of the document.
	 * @returns {PerspectiveGridPlaneType }
	 */
	function getPerspectiveActivePlane() {}

	/**
	 * Hides the current active grid for the document. If no grid is visible, does nothing. Returns true if a grid is hidden.
	 * @returns {boolean}
	 */
	function hidePerspectiveGrid() {}

	/**
	 * Captures the artwork content within the clipping boundaries in this document as a raster image, and writes the image data to a specified file.
	 * If the bounds parameter is omitted, captures the entire artwork.
	 * @params {File}
	 * @params {Rect}
	 * @params {ImageCaptureOptions}
	 * @returns {CompoundPathItem}
	 */
	function imageCapture(imageFile, clipBounds, options) {}

	/**
	 * Loads the character styles from the Illustrator file.
	 * @params {File}
	 */
	function importCharacterStyles(fileSpec) {}

	/**
	 * Loads the paragraph styles from the Illustrator file.
	 * @params {File}
	 */
	function importParagraphStyles(fileSpec) {}

	/**
	 * Loads all PDF presets from a file.
	 * @params {File}
	 * @params {boolean}
	 */
	function importPDFPreset(fileSpec, replacingPreset) {}

	/**
	 * Loads a specified perspective grid preset, or, if preset not specified, all presets from a file.
	 * @params {File}
	 * @params {String}
	 */
	function importPerspectiveGridPreset(fileSpec, perspectivePreset) {}

	/**
	 * Loads the named print preset from the file.
	 * @params {string}
	 * @params {File}
	 */
	function importPrintPreset(printPreset, fileSpec) {}

	/**
	 * Imports a library containing datasets, variables, and their associated dynamic data. Importing variables overwrites existing variables and datasets.
	 * @params {File}
	 */
	function importVariables(fileSpec) {}

	/**
	 * Prints the document.
	 * @params {PrintOptions}
	 */
	function print(options) {}

	/**
	 * Rasterizes the source art(s) within the specified clip bounds. The source art(s) is disposed of as a result of the rasterization.
	 * @params {variant}
	 * @params {Rect}
	 * @params {RasterizeOptions}
	 * @returns {RasterItem}
	 */
	function rasterize(sourceArt, clipBounds, options) {}

	/**
	 * Rearranges artboards in the document. All arguments are optional. Default layout style is DocumentArtboard Layout.GridByRow.
	 * The second argument specifies the number of rows or columns, as appropriate for the chosen layout style, in the range [1..docNumArtboards-1], or 1 (the default) for single row/column layouts. 
	 * Spacing is a number of pixels, default 20. 
	 * When last argument is true (the default), artwork is moved with the artboards.
	 * @params {DocumentArtboardLayout}
	 * @params {integer}
	 * @params {Number}
	 * @params {boolean}
	 * @returns {boolean}
	 */
	function rearrangeArboards(artboardLayout, artboardRowsOrCols, artboardSpacing, artboardMoveArtwork) {}

	/**
	 * Saves the document in it current location.
	 * @params {object}
	 * @returns {CompoundPathItem}
	 */
	function save() {}

	/**
	 * Saves the document in the specified file as an Illustrator, EPS, or PDF file. 
	 * @params {File}
	 * @params {SaveOptions}
	 */
	function saveAs(saveIn, options) {}

	/**
	 * Selects the objects on the currently active artboard. Returns true on success. 
	 * @returns {boolean}
	 */
	function selectObjectsOnActiveArtboard() {}

	/**
	 * Sets the active plane of the active perspective grid of the document. Returns true on success.
	 * @params {PerspectiveGridPlaneType}
	 * @returns {boolean}
	 */
	function setActivePlane(gridPlane) {}

	/**
	 * Selects a predefined preset to define grid for the current document. Returns true on success.
	 * @params {PerspectiveGridType}
	 * @params {string}
	 * @returns {boolean}
	 */
	function selectPerspectivePreset(gridType, presetName) {}

	/**
	 * Shows the current active grid for the document, or if no grid is active, shows the default grid. Returns true on success.
	 * @returns {boolean}
	 */
	function showPerspectiveGrid() {}

	/**
	 * Captures the current document window to the target TIFF image file.
	 * @params {File}
	 * @params {array}
	 */
	function windowCapture(imageFile, windowSize) {}

}