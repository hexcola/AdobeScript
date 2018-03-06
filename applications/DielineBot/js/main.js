var CSLibrary = new CSInterface();


$(document).on('click', "#btnVersion", function(){
	alert(CSLibrary.getCurrentApiVersion());
	alert('Hello world');
});

$(document).on('click', "#btnGen", function(){
	// get units index
	unitsIndex = $("#units").val();
	// TODO: check valid
	x = parseFloat($("#x").val());
	y = parseFloat($("#y").val());
	z = parseFloat($("#z").val());
	pw = parseFloat($("#pw").val());

	alert("generateBox("+unitsIndex +"," + x + ","+ y + "," + z +"," + pw + ")");

	CSLibrary.evalScript("generateBox("+unitsIndex +"," + x + ","+ y + "," + z +"," + pw + ")");
});
