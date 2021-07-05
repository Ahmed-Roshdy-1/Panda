let canvas = document.querySelector('#my-canvas');
let ctx = canvas.getContext('2d');

//  draw face circle

ctx.beginPath();
ctx.lineWidth = 10
ctx.arc(500, 250, 200, 0, 2 * Math.PI)
ctx.stroke()


//  draw the left eye
ctx.beginPath();
ctx.arc(400, 200, 50, 0, 2 * Math.PI)
ctx.fill()



ctx.beginPath();
ctx.arc(400, 200, 30, 0, 2 * Math.PI)
ctx.fillStyle = `#FFF`
ctx.fill()


ctx.beginPath();
ctx.arc(402, 200, 20, 0, 2 * Math.PI)
ctx.fillStyle = `#000`
ctx.fill()

//  draw the Right eye
ctx.beginPath();
ctx.arc(600, 200, 50, 0, 2 * Math.PI)
ctx.fill()



ctx.beginPath();
ctx.arc(600, 200, 30, 0, 2 * Math.PI)
ctx.fillStyle = `#FFF`
ctx.fill()


ctx.beginPath();
ctx.arc(598, 200, 20, 0, 2 * Math.PI)
ctx.fillStyle = `#000`
ctx.fill()


//  draw the nose
ctx.beginPath();
ctx.arc(500, 270, 35, 0, 2 * Math.PI)
ctx.fill()


//  draw the mouse
ctx.beginPath();
ctx.lineWidth = 10
ctx.arc(500, 290, 100, 0.1 * Math.PI, 0.9 * Math.PI)
ctx.stroke()


//  draw the left ear
ctx.beginPath();
ctx.arc(350, 120, 50, 0.67 * Math.PI, 1.76 * Math.PI)
ctx.fill()


// draw the right ear
ctx.beginPath();
ctx.arc(650, 120, 50, 1.23 * Math.PI, 0.34 * Math.PI)
ctx.fill()





