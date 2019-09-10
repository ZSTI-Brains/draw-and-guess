var canvas = $("#drawing-canvas");
canvas.mousedown((evt) => { startDraw(evt); });
canvas.mousemove((evt) => { draw(evt); });
var ctx = document.getElementById("drawing-canvas").getContext("2d");
var x, y, pX, pY;
var pressed;

function startDraw(evt) {
    pressed = true;

    let rect = evt.target.getBoundingClientRect();
    x = pX = evt.clientX - rect.left;
    y = pY = evt.clientY - rect.top;
ctx.beginPath();
    ctx.moveTo(x, y);
}

function draw(evt) {
    if (pressed) {
        let rect = evt.target.getBoundingClientRect();
        x = evt.clientX - rect.left;
        y = evt.clientY - rect.top;

        if (x != pX || y != pY) {
                    console.log(x);
            ctx.lineWidth = 10;
            //ctx.beginPath();
            ctx.lineTo(x, y);
            ctx.stroke();

            pX = x;
            pY = y;
        }
    }
    //ctx.beginPath();
    //ctx.arc(x, y, 10, 0, Math.PI * 2)
    //ctx.fill();
}
