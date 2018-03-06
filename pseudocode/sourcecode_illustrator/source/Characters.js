/**
 * A collection of characters (TextRange objects of length 1). The elements are not named; you must access them by index.
 * @constructor
 */
function Characters() {

	/** 
	 * Read-only. The number of characters in the collection.
	 * @type {number}
	 */
	var length;

	/** 
	 * Read-only. The text art item that contains this character.
	 * @type {object}
	 */
	var parent;

	/** 
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	var typename;


	/**
	 * Adds a new character with specified text contents at the specified location in the current document. If a location is not specified, adds the new character to the containing text frame after the current text selection or insertion point.
	 * @params {string}
	 * @params {TextFrameItem}
	 * @params {ElementPlacement}
	 * @returns {TextRange}
	 */
	function add(contents, relativeObject, insertionLocation) {

	}


	/**
	 * Adds a character before the specified text selection.
	 * @params {string}
	 * @returns {TextRange}
	 */
	function addBefore(contents) {

	}

	/**
	 * Gets an element from the collection.
	 * @params {number}
	 * @returns {TextRange}
	 */
	function index(itemKey) {}

	/**
	 * Nothing Deletes all elements in the collection.
	 */
	function removeAll() {}

}