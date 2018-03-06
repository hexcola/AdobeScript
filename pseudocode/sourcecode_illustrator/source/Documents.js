/**
 * A collection of Document objects.
 * @constructor
 */
function Documents() {

	/** 
	 * Read-only. The number of objects in the collection.
	 * @type {number}
	 */
	var length;

	/** 
	 * Read-only. The parent of this object.
	 * @type {object}
	 */
	var parent;

	/** 
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	var typename;


	/**
	 * Creates a new document using optional parameters and returns a reference to the new document.
	 * @param {DocumentColorSpace} documentColorSpace [description]
	 * @param {number} width              [description]
	 * @param {number} height             [description]
	 * @param {number} numArtBoards       [description]
	 * @param {DocumentArtboardLayout} artboardLayout     [description]
	 * @param {number} artboardSpacing    [description]
	 * @param {number} artboardRowsOrCols [description]
	 * @returns {Document} [description]
	 */
	function add(documentColorSpace, width, height, numArtBoards, artboardLayout, artboardSpacing, artboardRowsOrCols) {

	}

	/**
	 * Creates a document from the preset, replacing any provided setting values, and returns a reference to the new document.
	 * @param {string} startupPreset     [description]
	 * @param {DocumentPreset} presetSettings    [description]
	 * @param {boolean} showOptionsDialog [description]
	 * @returns {Document} [description]
	 */
	function addDocument(startupPreset, presetSettings, showOptionsDialog) {}


	/**
	 * Gets the first element in the collection with the specified name.
	 * @param  {string} name [description]
	 * @return {Document}      [description]
	 */
	function getByName(name) {

	}


	/**
	 * Gets an element from the collection.
	 * @param  {string} itemKey [description]
	 * @return {number}         [description]
	 */
	function index(itemKey) {}

}