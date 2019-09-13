var canvas = $("#drawing-canvas");
var ctx = document.getElementById("drawing-canvas").getContext("2d");
var pressed = false;
var path = [];
var paths = [];

canvas.mousedown(function (e) {
    pressed = true;
    path.push({ x: e.offsetX, y: e.offsetY });

    ctx.lineWidth = 6;
    ctx.lineCap = ctx.lineJoin = "round";
});

canvas.mousemove(function (e) {
    if (pressed) {
        path.push({ x: e.offsetX, y: e.offsetY });

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) {
            ctx.lineTo(path[i].x, path[i].y);
        }
        /*for (let i = 0; i < paths.length; i++) {
            ctx.moveTo(paths[i][0].x, paths[i][0].y);
            for (let j = 1; j < paths[i].length; j++) {
                ctx.lineTo(paths[i][j].x, paths[i][j].y);
            }
        }*/

        ctx.stroke();
    }
});

canvas.mouseup(function (e) {
    pressed = false;
    path = [];
    paths.push(path);
});
