console.log('It is working!')
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

 function draw() {
   var canvas = document.getElementById('myCanvas');
   if (canvas.getContext) {
     var ctx = canvas.getContext('2d');

     for (var i = 0; i < 4; i++) {
         for (var j = 0; j < 3; j++) {
           ctx.beginPath();
           var x = 25 + j * 100; // x coordinate
           var y = 25 + i * 100; // y coordinate
           var radius = 40; // Arc radius
           var startAngle = 0; // Starting point on circle
           var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
           var anticlockwise = i % 2 == 0 ? false : true; // clockwise or anticlockwise

           ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

           if (i > 1) {
             ctx.fill();
           } else {
             ctx.stroke();
           }
         }
       }
   }
 }
