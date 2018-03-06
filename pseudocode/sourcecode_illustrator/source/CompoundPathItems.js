/**
 * A collection of CompoundPathItem objects.
 * @constructor
 */
function CompoundPathItems() {

	/**
	 * Read-only. The number of objects in the collection.
	 * @type {number}
	 */
	var length;

	/**
	 * Read-only. The parent of this collection (either a Layer or a GroupItem).
	 * @type {object}
	 */
	var parent;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	var typename;


	/**
	 * Creates a new CompoundPathItem.
	 * @returns {CompoundPathItem}
	 */
	function add() {

	}

	/**
	 * Gets the first element in the collection with the specified name.
	 * @params {string}
	 * @returns {CompoundPathItem}
	 */
	function getByName(name) {

	}

	/**
	 * Gets an element from the collection.
	 * @params {string | number}
	 * @returns {CompoundPathItem}
	 */
	function index(itemKey) {}

	/**
	 * Deletes all elements in this collection.
	 */
	function removeAll() {}

}