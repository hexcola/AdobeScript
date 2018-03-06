/**
 * A grayscale color specification, used where a color object is required.
 * @constructor
 */
function GrayColor() {
/**
 * The tint of the gray. Range: 0.0 to 100.0, where 0.0 is black and 100.0 is white.
 * @type {number}
 */
this.gray  = 1.0;

/**
 * Read-only. The class name of the referenced object.
 * @type {string}
 */
this.typename = "" ;
}

module.exports = GrayColor;