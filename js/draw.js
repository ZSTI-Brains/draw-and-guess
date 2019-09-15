var canvas = $("#drawing-canvas");
var ctx = document.getElementById("drawing-canvas").getContext("2d");
var pressed = false;
var path = [];
var paths = [];
var previousPoint, currentPoint;

canvas.mousedown(function (e) {
    pressed = true;
    currentPoint = { x: e.offsetX, y: e.offsetY };

    ctx.lineWidth = 6;
    ctx.lineCap = ctx.lineJoin = "round";
    //ctx.moveTo(e.offsetX, e.offsetY);
    //ctx.beginPath();
});

canvas.mousemove(function (e) {
    if (pressed) {
        previousPoint = currentPoint;
        currentPoint = { x: e.offsetX, y: e.offsetY };
        let d = distance(previousPoint, currentPoint);
        //console.log(d);

        for (let i = 0; i < d; i++) {
            ctx.beginPath();
            ctx.arc(e.offsetX, e.offsetY, 6, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

canvas.mouseup(function (e) {
    pressed = false;
    path = [];
    paths.push(path);
});

function distance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
