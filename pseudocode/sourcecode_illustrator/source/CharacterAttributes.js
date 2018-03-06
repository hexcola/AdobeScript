/**
 * Specifies the properties of a character contained in a text frame. A CharacterStyle object associates these attributes with a specific text range through its characterAttributes property.
 * 
 * NOTE: Character attributes do not have default values, and are undefined until explicitly set.
 * @constructor
 */
function CharacterAttributes() {

	/** 
	 * The amount of inter-character spacing to be added to the left side of the character, in thousandths of an em (that amount will not compress or expand during full-justification).
	 * @type {number}
	 */
	var akiLeft;

	/** 
	 * The amount of inter-character spacing to be added to the right side of the character, in thousandths of an em (that amount will not compress or expand during full-justification).
	 * @type {number}
	 */
	var akiRigh;


	/** 
	 * The character alignment type.
	 * @type {StyleRunAlignmentType}
	 */
	var alignment;

	/** 
	 * The alternate glyphs form.
	 * @type {AlternateGlyphsForm}
	 */
	var alternateGlyph;

	/** 
	 * If true, the automatic leading should be used.
	 * @type {boolean}
	 */
	var autoLeading;

	/** 
	 * The Japanese text baseline direction.
	 * @type {BaselineDirectionType}
	 */
	var baselineDirection;

	/** 
	 *  The baseline position of text.
	 * @type {FontBaselineOption}
	 */
	var baselinePosition;

	/** 
	 * The amount of shift in points of the text baseline.
	 * @type {number}
	 */
	var baselineShift;

	/** 
	 * The case of text.
	 * @type {FontCapsOption}
	 */
	var capitalization;

	/** 
	 * If true, the OpenType® connection forms should be used.
	 * @type {boolean}
	 */
	var connectionForms;


	/** 
	 * If true, the contextual ligature should be used.
	 * @type {boolean}
	 */
	var contextualLigature;


	/** 
	 * If true, the discretionary ligature should be used.
	 * @type {boolean}
	 */
	var discretionaryLigature;

	/** 
	 * The number style in an OpenType font.
	 * @type {FigureStyleType}
	 */
	var figureStyle;

	/** 
	 * The color of the text fill.
	 * @type {Color}
	 */
	var fillColor;

	/** 
	 * If true, the OpenType fractions should be used.
	 * @type {boolean}
	 */
	var fractions;

	/** 
	 * The character horizontal scaling factor expressed as a percentage (100 = 100%).
	 * @type {number}
	 */
	var horizontalScal;

	/** 
	 * If true, the Japanese OpenType font supports italics.
	 * @type {boolean}
	 */
	var italics;

	/** 
	 * The automatic kerning method to use.
	 * @type {AutoKernType}
	 */
	var kerningMethod;
	/** 
	 * The language of text.
	 * @type {LanguageType}
	 */
	var language;

	/** 
	 * The amount of space between two lines of text, in points.
	 * @type {number}
	 */
	var leading;


	/** 
	 * If true, the ligature should be used.
	 * @type {boolean}
	 */
	var ligature;

	/** 
	 * If true, line breaks are not allowed.
	 * @type {boolean}
	 */
	var noBreak;

	/** 
	 * The OpenType baseline position.
	 * @type {FontOpenTypePositionOption}
	 */
	var openTypePosition;

	/** 
	 * If true, the OpenType ordinals should be used.
	 * @type {boolean}
	 */
	var ordinals;
	/** 
	 * If true, the OpenType ornaments should be used.
	 * @type {boolean}
	 */
	var ornaments;

	/** 
	 * If true, the fill of the text should be overprinted.
	 * @type {boolean}
	 */
	var overprintFill;

	/** 
	 * If true, the stroke of the text should be overprinted.
	 * @type {boolean}
	 */
	var overprintStroke;

	/** 
	 * Read-only. The object’s container.
	 * @type {object}
	 */
	var parent;

	/** 
	 * If true, the Japanese OpenType font supports proportional glyphs.
	 * @type {boolean}
	 */
	var proportionalMetrics;

	/** 
	 * The character rotation angle in degrees.
	 * @type {number}
	 */
	var rotation;

	/** 
	 * Font size in points.
	 * @type {number}
	 */
	var size;

	/** 
	 * If true, characters use strike-through style.
	 * @type {boolean}
	 */
	var strikeThrough;

	/** 
	 * The color of the text stroke.
	 * @type {Color}
	 */
	var strokeColor;

	/** 
	 * Line width of stroke.
	 * @type {number}
	 */
	var strokeWeight;

	/** 
	 * If true, the OpenType stylistic alternates should be used.
	 * @type {boolean}
	 */
	var stylisticAlternates;

	/** 
	 * If true, the OpenType swash should be used.
	 * @type {boolean}
	 */
	var swash;

	/** 
	 * The Tate-Chu-Yoko horizontal adjustment in points.
	 * @type {number}
	 */
	var tateChuYokoHorizontal;

	/** 
	 * The Tate-Chu-Yoko vertical adjustment in points.
	 * @type {number}
	 */
	var tateChuYokoVertical;

	/** 
	 * The text font.
	 * @type {TextFont}
	 */
	var textFon;

	/** 
	 * If true, the OpenType titling alternates should be used.
	 * @type {boolean}
	 */
	var titling;

	/** 
	 * The tracking or range kerning amount, in thousandths of an em.
	 * @type {number}
	 */
	var tracking;

	/** 
	 * The percentage of space reduction around a Japanese character.
	 * @type {number}
	 */
	var Tsume;

	/** 
	 *  Read-only. The class name of the object.
	 * @type {string}
	 */
	var typenam;

	/** 
	 * If true, characters are underlined.
	 * @type {boolean}
	 */
	var underline;

	/** 
	 * Character vertical scaling factor expressed as a percentage (100 = 100%).
	 * @type {number}
	 */
	var verticalScale;

	/** 
	 * Specifies how the characters in Wari-Chu text (an inset note in Japanese text) are divided into two or more lines.
	 * @type {number}
	 */
	var wariChuCharactersAfterBreak;

	/** 
	 * Specifies how the characters in Wari-Chu text (an inset note in Japanese text) are divided into two or more lines.
	 * @type {number}
	 */
	var wariChuCharactersBeforeBrea;

	/** 
	 * If true, Wari-Chu is enabled.
	 * @type {boolean}
	 */
	var wariChuEnabled;

	/** 
	 * The Wari-Chu justification.
	 * @type {WariChuJustificationType}
	 */
	var wariChuJustification;

	/** 
	 * The Wari-Chu line gap.
	 * @type {number}
	 */
	var wariChuLineGap;

	/** 
	 * The number of Wari-Chu (multiple text lines fit into a space meant for one) lines.
	 * 
	 * @type {number}
	 */
	var wariChuLine;
	/** 
	 * The Wari-Chu scale.
	 * @type {number}
	 */
	var wariChuScale;

}