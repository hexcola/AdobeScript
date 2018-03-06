/**
 * A transformation matrix specification, used to transform the geometry of objects. Use it to specify and retrieve matrix information from an Illustrator document or from page items in a document.
 * 
 * Matrices are used in conjunction with the transform method and as a property of a number of objects. A matrix specifies how to transform the geometry of an object. You can generate an original matrix using the Application object methods getTranslationMatrix, getScaleMatrix, or getRotationMatrix.
 * 
 * A Matrix is a record containing the matrix values, not a reference to a matrix object. The matrix commands operate on the values of a matrix record. If a command modifies a matrix, a modified matrix record is returned as the result of the command. The original matrix record passed to the command is not modified.
 * 
 * @constructor
 */
function Matrix() {
	/**
	 * Matrix property a. number (double)
	 * @type {number}
	 */
	this.mValueA = 0.0;

	/**
	 *  Matrix property b. number (double)
	 *  @type {number}
	 */
	this.mValueB = 0.0;

	/**
	 * Matrix property c. number (double)
	 * @type {number}
	 */
	this.mValueC = 0.0;

	/**
	 * Matrix property d. number (double)
	 * @type {number}
	 */
	this.mValueD = 0.0;

	/**
	 * Matrix property tx. number (double)
	 * @type {number}
	 */
	this.mValueTX = 0.0;

	/**
	 * Matrix property ty. number (double)
	 * @type {number}
	 */
	this.mValueTY = 0.0;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {string}
	 */
	this.typename = "";
}



module.exports = Matrix;