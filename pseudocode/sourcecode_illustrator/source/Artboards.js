/**
 * A collection of Artboard objects.
 * @constructor
 */
function Artboards() {

	/** 
	 * Read-only. The number of datasets in the collection
	 * @type {number}
	 */
	var length;

	/** 
	 * Read-only. The name of the object that contains this dataset
	 * @type {Artboard}
	 */
	var parent;

	/** 
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	var typename;


	/**
	 * Creates a new Artboard object.
	 * 
	 * @param {rect}
	 * @returns {Artboard}
	 */
	function add(artboardRect) {}

	/**
	 * Retrieves the index position of the active artboard in the document's list.  Returns the 0-based index.
	 *
	 * @returns {number} - (long) 
	 */
	function getActiveArtboardIndex() {}

	/**
	 * Gets the first element in the collection with the specified name.
	 * @params {string}
	 * @returns {Artboard}
	 */
	function getByName(name) {}


	/**
	 * Creates a new Artboard object and inserts it at the given index in the list.
	 * @params {rect}
	 * @params {number} - long
	 */
	function insert(artboardRect, index) {}

	/**
	 * Deletes an artboard object. You cannot remove the last artboard in a document.
	 * 
	 * @params {number} - long
	 */
	function remove(index) {}

	/**
	 * Makes a specific artboard active and makes it current in the iteration order.
	 * 
	 * @params {number} - long
	 */
	function setActiveArtboardIndex(index) {}
}