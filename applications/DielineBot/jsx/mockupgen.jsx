#target illustrator

/*
Maybe useful: How to create a javascript enums;
https://stijndewitt.wordpress.com/2014/01/26/enums-in-javascript/
*/
var UnitsRatioEnum = {
	POINTS: 1,
	PICAS: 2,
	INCHES: 3,
	MILLIMETERS: 4,
	CENTIMETERS: 5,

	properties:{
		1: {name:"points", ratio: 1},
		2: {name:"picas", ratio: 12},
		3: {name:"inches", ratio: 72},
		4: {name:"millimeters", ratio: 2.834645},
		5: {name:"centimeters", ratio: 28.346}
	}
}

function say(something){
	alert(something);
}

/*
	Since we need the points to create, we need the ratio.
*/
function getRatio(index){
	var ratio = 1;

	switch(index){
		case 0: ratio = 1; break;
		case 1: ratio = 12; break;
		case 2: ratio = 72; break;
		case 3: ratio = 2.834645; break;
		case 4: ratio = 28.346; break;
	}

	return ratio;
}

/*
We need a document to create layer for the mockup.
*/
function getDocument(){
	var doc = null;

	if(app.documents.length > 0){
	doc = app.activeDocument;
	}

	if(doc == null){
	doc = app.documents.add();
	}

	return doc;
}

/*
 the units of x, y, z, pasteWidth should be points
 unitxIndex:
	0 Points
	1 Picas
	2 Inches
	3 Millimeters
	4 Centimeters
*/
function generateBox(unitsIndex, x, y, z, pasteWidth){

	var doc = getDocument();

	if ( doc == null){
		$.writeln ("The document object is Null");
		return false ;
	}else{

		ratio = getRatio(unitsIndex);

		var finalX = x * ratio;
		var finalY = y * ratio;
		var finalZ = z * ratio;
		var finalPasteWidth = pasteWidth * ratio;

		// to make sure the mockup in the center.
		var totalW = finalZ * 2 + finalX * 2 + finalPasteWidth;
		var top = (doc.height + finalY) / 2;
		var left = (doc.width - totalW) / 2;

		// draw mockup.
		var newLayer = doc.layers.add();
		var rect = newLayer.pathItems.rectangle(top, left, finalZ, finalY);
		var rect = newLayer.pathItems.rectangle(top, left + finalZ, finalX, finalY);
		var rect = newLayer.pathItems.rectangle(top, left + finalZ + finalX, finalZ, finalY);
		var rect = newLayer.pathItems.rectangle(top, left + finalZ + finalX + finalZ, finalX, finalY);
		var rect = newLayer.pathItems.rectangle(top, left + finalZ + finalX + finalZ + finalX, finalPasteWidth, finalY);
		var rect = newLayer.pathItems.rectangle(top + finalZ, left + finalZ, finalX, finalZ);
		var rect = newLayer.pathItems.rectangle(top - finalY, left + finalZ, finalX, finalZ);
		var rect = newLayer.pathItems.rectangle(top + finalZ, left + finalZ + finalX + finalZ, finalX, finalZ);
		var rect = newLayer.pathItems.rectangle(top - finalY, left + finalZ + finalX + finalZ, finalX,  finalZ);
		
		return true;
	}
}


/*
all the parameters a float type and ratio is points
*/
function generateBag(ratio, x, y, backSealWidth, topBottomSealWidth){
	return generateBag2(ratio, x, y, backSealWidth, topBottomSealWidth, topBottomSealWidth);
}

function generateBag2(ratio, x, y, backSealWidth, topSealWidth, bottomSealWidth){

	var doc = getDocument();

	if ( doc == null){
		$.writeln ("The document object is Null");
		return false ;

	}else{
		var finalX = x * ratio;
		var finalY = y * ratio;
		var finalBackSealWidth = backSealWidth * ratio;
		var finalTopSealWidth = topSealWidth * ratio;
		var finalBottomSealWidth = bottomSealWidth * ratio;

		// make sure our mockup in the center.
		var totalW = finalBackSealWidth * 2 + finalX * 2;

		var top = (doc.height + finalY + finalTopSealWidth + finalBottomSealWidth) / 2;
		var left = (doc.width - totalW) / 2;

		// draw mockup.
		var newLayer = doc.layers.add();
		
		var rect = newLayer.pathItems.rectangle(top, left, finalBackSealWidth, (finalY + finalTopSealWidth + finalBottomSealWidth));
		var rect = newLayer.pathItems.rectangle(top, left + finalBackSealWidth, finalX * 2, finalTopSealWidth);
		
		var rect = newLayer.pathItems.rectangle(top - finalTopSealWidth, left + finalBackSealWidth, finalX / 2, finalY);
		var rect = newLayer.pathItems.rectangle(top - finalTopSealWidth, left + finalBackSealWidth + finalX / 2, finalX , finalY);
		var rect = newLayer.pathItems.rectangle(top - finalTopSealWidth, left + finalBackSealWidth + finalX * 1.5 , finalX / 2, finalY);


		var rect = newLayer.pathItems.rectangle(top, left + finalBackSealWidth + finalX * 2, finalBackSealWidth, finalY + finalTopSealWidth + finalBottomSealWidth);
		var rect = newLayer.pathItems.rectangle(top - finalY - finalTopSealWidth, left + finalBackSealWidth, finalX * 2, finalTopSealWidth);

		return true;
	}
}

function generateBag3(ratio, outsideWidth, outsideHeight, insideWidth, insideHeight, insideTop, insideLeft){

	var doc = getDocument();

	if ( doc == null){
		$.writeln ("The document object is Null");
		return false ;

	}else{
		var finalOutsideWidth = outsideWidth * ratio;
		var finalOutsideHeight = outsideHeight * ratio;
		var finalInsideWidth = insideWidth * ratio;
		var finalInsideHeight = insideHeight * ratio;
		var finalInsideTop = insideTop * ratio;
		var finalInsideLeft = insideLeft * ratio;


		// make sure our mockup in the center.
		var top = (doc.height + finalOutsideHeight) / 2;
		var left = (doc.width - finalOutsideWidth * 2 ) / 2;

		// draw mockup.
		var newLayer = doc.layers.add();
		
		var rect = newLayer.pathItems.rectangle(top, left, finalOutsideWidth, finalOutsideHeight);
		var rect = newLayer.pathItems.rectangle(top, left + finalOutsideWidth, finalOutsideWidth, finalOutsideHeight);
		
		var rect = newLayer.pathItems.rectangle(top - finalInsideTop, left + finalInsideLeft, finalInsideWidth, finalInsideHeight);
		var rect = newLayer.pathItems.rectangle(top - finalInsideTop, left + finalInsideLeft * 3 + finalInsideWidth, finalInsideWidth, finalInsideHeight);

		return true;
	}
}

function generateGirdle(ratio, x, y, z, pasteWidth){
	var doc = getDocument();

	if ( doc == null){
		$.writeln ("The document object is Null");
		return false ;
	}else{

		var finalX = x * ratio;
		var finalY = y * ratio;
		var finalZ = z * ratio;
		var finalPasteWidth = pasteWidth * ratio;

		// to make sure the mockup in the center.
		var totalH = finalZ * 2 + finalY * 2 + finalPasteWidth;
		var totalW = finalX;
		var top = (doc.height + finalY) / 2;
		var left = (doc.width - totalW) / 2;

		// draw mockup.
		var newLayer = doc.layers.add();
		var rect = newLayer.pathItems.rectangle(top, left, finalX, finalY * 0.5);
		var rect = newLayer.pathItems.rectangle(top - (finalY * 0.5), left, finalX, finalZ);
		var rect = newLayer.pathItems.rectangle(top - (finalY * 0.5 + finalZ), left, finalX, finalY);
		var rect = newLayer.pathItems.rectangle(top - (finalY * 1.5 + finalZ), left, finalX, finalZ);
		var rect = newLayer.pathItems.rectangle(top - (finalY * 1.5 + finalZ * 2), left, finalX, finalY * 0.5);
		var rect = newLayer.pathItems.rectangle(top - (finalY * 2.0 + finalZ * 2), left, finalX, finalPasteWidth);

		return true;
	}
}