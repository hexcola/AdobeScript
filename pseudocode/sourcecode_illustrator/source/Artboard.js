/**
 * An Artboard object represents a single artboard in a document. There can be between 1 to 100 artboards in one document.
 * @constructor
 */
function Artboard() {

	/** 
	 * Size and position of the artboard.
	 * @type {rect}
	 */
	var artboardRect;

	/** 
	 * The unique identifying name of the artboard.
	 *  @type {string}
	 */
	var name;

	/** 
	 * Read-only. The parent of this object.
	 * @type {Document}
	 */
	var parent;

	/** 
	 * Ruler origin of the artboard, relative to the top left corner of the artboard.
	 * @type {Point}
	 */
	var rulerOrigin;

	/** 
	 * Pixel aspect ratio, used in ruler visualization if the units are pixels. Range: 0.1 to 10.0
	 * @type {number}
	 */
	var rulerPAR;

	/** 
	 * Show center mark.
	 * @type {boolean}
	 */
	var showCenter;

	/** 
	 * Show cross hairs.
	 * @type {boolean}
	 */
	var showCrossHairs;
	/** 
	 * Show title and action safe areas (for video).
	 * @type {boolean}
	 */
	var showSafeAreas;

	/** 
	 * Read-only.  The class name of this object.
	 * @type {string}
	 */
	var typename;


	/**
	 * Nothing Deletes this artboard object. You cannot remove the last artboard in a document.
	 */
	function remove() {}
}