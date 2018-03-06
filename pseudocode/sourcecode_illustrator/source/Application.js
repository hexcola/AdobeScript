/**
 * The Adobe® Illustrator® application object, referenced using the pre-defined global app object, which contains all other Illustrator objects.
 * @constructor
 */
function Application() {

	/** Document The active (frontmost) document in Illustrator. */
	var activeDocument;

	/** boolean Read-only. If true, a web browser is available. */
	var browserAvailable;

	/** string Read-only. The application’s build number. */
	var buildNumber;

	/** object Read-only. The list of color-settings files currently available for use. */
	var colorSettingsList;

	/** CoordinateSystem The coordinate system currently in use, document or artboard. */
	var coordinateSystem;

	/**  File Read-only. The default color-settings file for the current application locale.*/
	var defaultColorSettings;

	/** Documents Read-only. The documents in the application. */
	var documents;

	/** object Read-only. The list of flattener style names	currently available for use.*/
	var flattenerPresetList;

	/** number (long) Read-only. The amount of unused memory (in bytes) within the Illustrator partition.*/
	var freeMemory;

	/** string Read-only. The application’s locale.*/
	var locale;

	/** string Read-only. The application’s name (not related to the filename of the application file).*/
	var name;

	/** boolean Read-only. If true, the paste operation maintains the layer structure. */
	var pasteRememberLayers;

	/** File Read-only. The file path to the application. */
	var path;

	/** object Read-only. The list of preset PDF-options names available for use. */
	var PDFPresetsList;

	/** object Read-only. The list of PPD files currently available for use. */
	var PDFileList;

	/** Preferences Illustrator’s preference settings. */
	var preferences;

	/** array of Printer Read-only. The list of installed printers. */
	var printerList;

	/** object Read-only. The list of preset printing-options names available for use.*/
	var printPresetsList;

	/** string Read-only. The version of the Scripting plug-in.*/
	var scriptingVersion;

	/** array of objects All currently selected objects in the active (frontmost) document.*/
	var selection;

	/** object Read-only. The list of presets available for creating a new document. */
	var startupPresetsList;

	/** TextFonts Read-only. The installed fonts. */
	var textFonts;

	/** array of string Read-only. The list of preset tracing-options names available for use. */
	var tracingPresetList;

	/** string Read-only. The class name of the referenced object.*/
	var typename;

	/** UserInteractionLevel What level of interaction with the user should be allowed when handling script commands. */
	var userInteractionLevel;

	/** string Read-only. The application’s version. */
	var version;

	/** boolean Read-only. If true, the application is visible. */
	var visible;

	/** 
	 * Alerts the user.
	 */
	function beep() {}

	/**
	 * Joins two matrices together.
	 * @param {Matrix} matrix
	 * @param {Matrix} secondMatrix
	 * @returns Matrix
	 */
	function concatenateMatrix(matrix, secondMatrix) {}

	/**
	 * Matrix Joins a rotation translation to a transformation matrix.
	 * @param {Matrix} - matrix
	 * @param {number} - angle(double)
	 * @returns Matrix
	 */
	function concatenateRotationMatrix(matrix, angle) {}


	/**
	 * Matrix Concatenates a scale translation to a transformation matrix.
	 * @param {Matrix}
	 * @param {number}  - (double)
	 * @param {number}  - (double)
	 * @returns {Matrix}
	 */
	function concatenateScaleMatrix(matrix, scaleX, scaleY) {}



	/**
	 * Matrix Joins a translation to a transformation matrix.
	 * @param {Matrix}
	 * @param {number}  - (double)
	 * @param {number}  - (double)
	 * @returns {Matrix}
	 */
	function concatenateTranslationMatrix(matrix, deltaX, deltaY) {}



	/**
	 * Converts a sample-component color from one color space to another.
	 * @param {ImageColorSpace}
	 * @param {ColorComponents}
	 * @param {ImageColorSpace}
	 * @param {ColorConvertPurpose}
	 * @param {boolean}
	 * @param {boolean}
	 * @returns {ColorComponents} array of ColorComponents
	 */
	function convertSampleColor(sourceColorSpace, sourceColor, destColorSpace, colorConvertPurpose, sourceHasAlpha, destHasAlpha) {}


	/**
	 * nothing Copies current selection to the clipboard.
	 */
	function copy() {}


	/**
	 * nothing Cuts current selection to the clipboard.
	 */
	function cut() {}


	/**
	 * Deletes an existing workspace.
	 * @params {string} 
	 * @returns {Boolean} 
	 */
	function deleteWorkspace(workspaceName) {}


	/**
	 * Returns an identity matrix.
	 * 
	 * @returns {Matrix}
	 */
	function getIdentityMatrix() {}


	/**
	 * Gets detailed file information for specified PPD file.
	 *
	 * @params {string}
	 * @returns {PPDFileInfo}
	 */
	function getPPDFileInfo(name) {}


	/**
	 * Returns the full path to the application’s default document profile for the specified preset type.
	 * 
	 * @params {DocumentPresetType}
	 * @returns {File}
	 */
	function getPresetFileOfType(presetType) {}


	/**
	 * Retrieves the tracing-option settings from the template with a given preset name.
	 * @params {string}
	 * @returns {DocumentPreset}
	 */
	function getPresetSettings(preset) {}


	/**
	 * Returns a transformation matrix containing a single rotation.
	 * NOTE: Requires a value in degrees. For example, 30 rotates the object 30 degrees counterclockwise; -30 rotates the object 30 degrees clockwise.
	 * 
	 * @params {number} - (double)
	 * @returns {Matrix}
	 */
	function getRotationMatrix(angle) {}



	/**
	 * Returns a transformation matrix containing a single scale.
	 * NOTE: Requires a value in percentage. For example, 60 scales the object to 60% of its original size; 200 doubles the object’s bounds.
	 * 
	 * @params {number} - double
	 * @params {number} - double
	 * @returns {Matrix}
	 */
	function getScaleMatrix(scaleX, scaleY) {}


	/**
	 * Gets the scriptable help group object that represents the search widget in the app bar.
	 * @returns {variant};
	 */
	function getScriptableHelpGroup() {}

	/**
	 * Returns a transformation matrix containing a single translation.
	 * NOTE: Requires a value in points. For example, ({100,200} moves the object 100 pt. to the right and 200 pt. up; a minus before each number moves the object left and down.
	 *
	 * @params {number} - double
	 * @params {number} - double
	 * @returns {Matrix}
	 */
	function getTranslationMatrix(deltaX, deltaY) {}

	/**
	 * Inverts a matrix.
	 * @params {Matrix}
	 * @returns {Matrix}
	 */
	function invertMatrix(matrix) {}


	/**
	 * Checks whether the two matrices are equal.
	 * @params {Matrix}
	 * @params {Matrix}
	 * @returns {boolean}
	 */
	function isEqualMatrix(matrix, secondMatrix) {}


	/**
	 * Checks whether a matrix is singular and cannot be inverted.
	 *
	 * @params {Matrix}
	 * @returns {boolean}
	 */
	function isSingularMatrix(Matrix) {}

	/**
	 * Loads color settings from specified file, or, if file is empty, turns color management off.
	 *
	 * @params {File}
	 */
	function loadColorSettings(fileSpec) {}

	/**
	* Opens the specified document file.
	* If you open a pre-Illustrator 9 document that contains both RGB and CMYK colors and documentColorSpace is supplied, all colors are converted to the specified color space. If the parameter is not supplied, 
	Illustrator opens a dialog so the user can choose the color space.
	*
	* @params {File}
	* @params {DocumentColorSpace}
	* @params {anything}
	* @returns {Document}
	*/
	function open(file, documentColorSpace, options) {}

	/**
	 * Pastes current clipboard content into the current document.
	 *
	 */
	function paste() {}

	/**
	 * Quits Illustrator.
	 * Note that if the clipboard contains data, Illustrator may show a dialog prompting the user to save the data for other applications.
	 */
	function quit() {}


	/**
	 * Redoes the most recently undone transaction.
	 *
	 */
	function redo() {}


	/**
	 * Forces Illustrator to redraw all its windows.
	 *
	 */
	function redraw() {}

	/**
	 * Resets the current workspace.
	 * @returns {Boolean}
	 */
	function resetWorkspace() {}


	/**
	 * Saves a new workspace.
	 * @params {string}
	 * @returns {Boolean}
	 */
	function saveWorkspace(workspaceName) {}


	/**
	 * Sends a plug-in-defined command message to a plug-in with given input arguments, and returns the plug-in-defined result string.
	 *
	 * @params {string}
	 * @params {string}
	 * @params {string}
	 * @returns {string}
	 */
	function sendScriptMessage(pluginName, messageSelector, inputString) {}

	/**
	 * Gets presets from the file.
	 *
	 * @params {File}
	 * @returns {PrintPresetList}
	 */
	function showPresets(fileSpec) {}


	/**
	 * Switches to the specified workspace.
	 * @params {string}
	 * @returns {Boolean}
	 */
	function switchWorkspace(workspaceName) {}


}