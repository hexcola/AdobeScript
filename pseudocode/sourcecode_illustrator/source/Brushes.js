/**
 * A collection of brush objects in a document.
 * @constructor
 */
function Brushes() {

	/** 
	 * Read-only. The number of objects in the collection.
	 * @type {number}
	 */
	var length;

	/** 
	 * Read-only. Read-only. The document that contains this brushes collection.
	 * @type {Artboard}
	 */
	var parent;

	/** 
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	var typename;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @params {string}
	 * @returns {Brush}
	 */
	function getByName(name) {}


	/**
	 * Gets an element from the collection.
	 * @params {string|number}
	 * @params {Brush}
	 */
	function index(itemKey) {}

}