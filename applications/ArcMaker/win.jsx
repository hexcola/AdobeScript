#target "illustrator"
#include "arcMaker.jsx"

var win = new Window ("dialog", "Arc Maker"); 

var groupExternalRadius = win.add ("group");
groupAlign(groupExternalRadius, "left");
groupExternalRadius.add ("statictext", undefined, "External Radius:");
var txtExternalRadius = groupExternalRadius.add ("edittext", undefined, "120");
txtExternalRadius.characters = 10;

var groupInternalRadius = win.add ("group");
groupAlign(groupInternalRadius , "left");
groupInternalRadius .add ("statictext", undefined, "Internal Radius :");
var txtInternalRadius  = groupInternalRadius .add ("edittext", undefined, "100");
txtInternalRadius.characters = 10;

var groupPercentage = win.add ("group");
groupAlign(groupPercentage, "left");
groupPercentage.add ("statictext", undefined, "Percentage:");
var txtPercentage = groupPercentage.add ("edittext", undefined, "60");
txtPercentage.characters = 10;


var groupBtn = win.add ("group");
groupBtn.alignment = "center"; 
var btnOk = groupBtn.add ("button", undefined, "OK"); 
var btnCancel = groupBtn.add ("button", undefined, "Cancel");


btnOk.onClick = function(){
    angle = parseFloat (txtPercentage.text) * 3.6;
    execute(angle, parseFloat (txtExternalRadius.text),  parseFloat (txtInternalRadius.text), Array(0, 0));
    win.close();
}

win.show ();


function groupAlign(group, alignment){
        if(group !=null){
            group.alignment = alignment;
        }
    }