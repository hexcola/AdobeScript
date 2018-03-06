/**
 * A brush in an Illustrator document. Brushes are contained in documents. Additional brushes may be created by the user within Illustrator. You can access brushes within a script, but you cannot create them.
 * @constructor
 */
function Brush() {

	/**
	 * The name of the brush.
	 *
	 * @type {string}
	 */
	var name;

	/**
	 * Read-only. The document that contains this brush.
	 * @type {Document}
	 */
	var parent;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	var typename;

	/**
	 * Applies the brush to a specific art item.
	 * 
	 * @param {PageItem}
	 */
	function applyTo(artItem) {}

}