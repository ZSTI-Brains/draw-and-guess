var canvas = $("#drawing-canvas");
canvas.mousemove((evt) => { draw(evt); });
var ctx = document.getElementById("drawing-canvas").getContext("2d");

function draw(evt) {
    let rect = evt.target.getBoundingClientRect();
    x = evt.clientX - rect.left;
    y = evt.clientY - rect.top;

    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2, true);
    ctx.fill();
}
//setInterval(draw, 10);
