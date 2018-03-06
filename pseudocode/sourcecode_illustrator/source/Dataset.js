/**
 * A set of data used for dynamic publishing. A dataset allows you to collect a number of variables and their dynamic data into one object. You must have at least one variable bound to an art item in order to create a dataset. See the class Variable.
 * @constructor
 */
function Dataset() {

	/** 
	 * Then name of the dataset.
	 * @type {string}
	 */
	var name;

	/** 
	 * Read-only. The name of the object that contains this dataset.
	 * @type {Document}
	 */
	var parent;

	/** 
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	var typename;


	/**
	 * Displays the dataset.
	 */
	function display() {

	}


	/**
	 * Deletes this object.
	 */
	function remove() {

	}

	/**
	Updates the dataset.
	*/
	function update() {}

}