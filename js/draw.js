var canvas = $("#drawing-canvas");
canvas.mousemove((evt) => { draw(evt); });
var ctx = document.getElementById("drawing-canvas").getContext("2d");
var x, y, pX, pY;
ctx.lineWidth = 4;
function draw(evt) {
    let rect = evt.target.getBoundingClientRect();
    pX = x;
    pY = y;
    x = evt.clientX - rect.left;
    y = evt.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(pX, pY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
}
//setInterval(draw, 10);
