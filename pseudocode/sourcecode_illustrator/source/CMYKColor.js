/**
 * A CMYK color specification, used where a color object is required.
 * If the color space of a document is RGB and you specify the color value for a page item in that document using CMYK, Illustrator will translate the CMYK color specification into an RGB color specification. The samething happens if the document’s color space is CMYK and you specify colors using RGB. Since this translation can lose information, you should specify colors using the class that matches the document’s actual color space.
 * @constructor
 */
function CMYKColor() {


	/**
	 * The black color value. Range 0.0–100.0. Default: 0.0
	 * @type {number}
	 */
	var black;

	/**
	 * The cyan color value. Range 0.0–100.0. Default: 0.0
	 * @type {number}
	 */
	var cyan;

	/**
	 * The magenta color value. Range 0.0–100.0. Default: 0.0
	 * @type {number}
	 */
	var magenta;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	var typename;

	/**
	 * The yellow color value. Range 0.0–100.0. Default: 0.0
	 * @type {number}
	 */
	var yellow;
}