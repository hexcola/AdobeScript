/**
 * Associates character attributes with characters. For an example, see CharacterStyles.
 * @constructor
 */
function CharacterStyle() {

	/** 
	 * Read-only. The character properties for the style.
	 * @type {CharacterAttributes}
	 */
	var characterAttributes;

	/** 
	 * Read-only. The character style’s name.
	 * @type {string}
	 */
	var name;

	/** 
	 * Read-only. The object’s container.
	 * @type {object}
	 */
	var parent;

	/** 
	 * Read-only. The class name of the object.
	 * @type {string}
	 */
	var typename;


	/**
	 * Applies the character style to the text object or objects. 
	 * @params {object}
	 * @params {boolean}
	 */
	function applyTo(textItem, clearingOverrides) {

	}

	/**
	 * Deletes the object.
	 */
	function remove() {}

}