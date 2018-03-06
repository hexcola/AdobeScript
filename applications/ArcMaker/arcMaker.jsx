/*
GOAL:       Draw any arc which angle value between 0~360(0 and 360 not included, I should write (0,360), :) )
VERSION:    0.0.1
AUTHOR:     hexcola
DATE :      2015.12.25
*/

function ArcPath(anchors, directions){
    this.anchors = anchors;
    this.directions = directions;
}

function getRadians(angle){
    return (angle/360) * (2 * Math.PI);
}

function getCoordinate( angle, radius,center){
    return Array(radius * Math.cos(getRadians(angle)) + center[0], 
        radius * Math.sin(getRadians(angle)) + center[1]);
}

function getArcPath(angle, radius, center){
    if(angle <= 0 || angle >= 360){ 
        alert("Not correct value");
        return null;
    }

    // 默认设置中心点为原点
    center = center== null? Array(0,0) : center;
    
    // 求该角度所在象限值
    var quadrantVal  = parseInt((Math.abs(angle - 1) / 90 )) +1;
    // 组成该弧形需要多少个点
    var pointsNum = quadrantVal + 1;

    // 设置所有点坐标
    var coords = new Array();
    for(i=0; i<pointsNum; i++){
        if(i == quadrantVal){
            // 获取最后一个点的坐标
            coords.push(getCoordinate( angle, radius, center));
        }else{
            // 其他所有点的坐标从0度开始，Step值为90度
            coords.push(getCoordinate(i * 90, radius, center));
        }
    }
    // 设置所有点的Handler的left direction 与 right direction
    var directions = new Array();
    // push first one
    directions.push(coords[0]);

    for(i=1;i <=quadrantVal ;i ++){
        var tempAngle = (i == quadrantVal&& angle %90 !=0) ? angle % 90 : 90;
        var handlebarLength = Math.tan(Math.PI / (2 * (360/tempAngle))) * 4 * radius / 3;
        var newRadius = Math.sqrt(Math.pow(handlebarLength, 2) + Math.pow(radius, 2));
        var angle1 = Math.atan(handlebarLength/radius)*180/Math.PI;
        var angel2 = tempAngle - angle1;

        // get real angle
        var newAngle1 = (i-1)*90 + angle1;
        var newAngle2 = (i-1)*90 + angel2;

        directions.push(getCoordinate(newAngle1, newRadius, center));
        directions.push(getCoordinate(newAngle2, newRadius, center));
    }

    // push last one
    directions.push(coords[pointsNum-1]);

    var newDirs = new Array();
    for(i=0; i<pointsNum; i++){
        newDirs.push(Array(directions[2*i],directions[2*i + 1]));
    }

    return new ArcPath(coords, newDirs);
}

function execute(angle, externalRadius, internalRadius, center){

    var externalArchPath = getArcPath(angle, externalRadius, center);
    var internalArchPath = getArcPath(angle, internalRadius, center);

    var coords = new Array();
    var dirs = new Array();

    for(i=0; i<externalArchPath.anchors.length; i++){
        coords.push(externalArchPath.anchors[i]);
        dirs.push(externalArchPath.directions[i]);
    }

    for (i= internalArchPath.anchors.length; i>0; i--){
        coords.push(internalArchPath.anchors[i-1]);
        dirs.push(Array(internalArchPath.directions[i-1][1],internalArchPath.directions[i-1][0]));
    }

    // Set line parameters
    var lnColor = new GrayColor; 
    lnColor.gray = 100;

    var ln = app.activeDocument.pathItems.add();
    ln.stroke = true;
    ln.strokeColor = lnColor;
    ln.strokeWidth = 1;
    ln.filled =false;
    ln.setEntirePath(coords);
    ln.closed = true;

    // set the left and right directions
    for(var i = 0; i < ln.pathPoints.length;i++){
        ln.pathPoints[i].leftDirection = dirs[i][0];
        ln.pathPoints[i].rightDirection = dirs[i][1];    
    }
}