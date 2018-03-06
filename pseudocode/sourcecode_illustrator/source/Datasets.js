/**
 * A collection of Dataset objects.
 * @constructor
 */
function Datasets() {

	/** 
	 * Read-only. The number of datasets in the collection
	 * @type {number}
	 */
	var length;

	/** 
	 * Read-only. The name of the object that contains this dataset
	 * @type {Document}
	 */
	var parent;

	/** 
	 * Read-only. Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	var typename;


	/**
	 * Creates a new dataset object.
	 * @returns {Dataset}
	 */
	function add() {

	}


	/**
	 * Gets the first element in the collection with the specified name.
	 * @params {string}
	 * @returns {Dataset}
	 */
	function getByName(name) {

	}

	/**
	 * Gets an element from the collection.
	 * @params {number | string}
	 * @returns {Dataset}
	 */
	function index(itemKey) {}

	/**
	 * Removes all elements in the collection.
	 */
	function removeAll() {}

}