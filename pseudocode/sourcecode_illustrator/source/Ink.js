/**
 * Associates a document ink name with ink information.
 * @constructor
 */
function Ink() {
	/**
	 * The ink information
	 * @type {InkInfo}
	 */
this.inkInfo  = null;

/**
 * The ink’s name
 * @type {string}
 */
this.name = ""; 

/**
 * Read-only. The class name of the object
 * @type {string}
 */
this.typename = "";  
}

module.exports = Ink;