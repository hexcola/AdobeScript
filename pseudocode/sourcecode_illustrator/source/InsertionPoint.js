/**
 * A location between characters that is used to insert new text objects. An insertion point is contained in an InsertionPoints collection.
 * @constructor
 */
function InsertionPoint() {
	/**
	 * Read-only. All the characters in this text range.
	 * @type {Characters}
	 */
	this.characters = null;

	/**
	 * Read-only. All the lines in this text range.
	 * @type {Lines}
	 */
	this.lines = null;

	/**
	 * Read-only. All the paragraphs in this text range.
	 * @type {Paragraphs}
	 */
	this.paragraphs = null;

	/**
	 * Read-only. The object’s container.
	 * @type {TextRange}
	 */
	this.parent = null;

	/**
	 * Read-only. The story to which the text range belongs.
	 * @type {Story}
	 */
	this.story = null;

	/**
	 *  Read-only. All of the text in this text range.
	 *  @type {TextRanges}
	 */
	this.textRanges = null;

	/**
	 * Read-only. The class name o f the object.
	 * @type {string}
	 */
	this.typename = "";

	/**
	 * Read-only. All the words contained in this text range.
	 * @type {Words}
	 */
	this.words = null;
}

module.exports = InsertionPoint;