var sketchProc1 = function(processingInstance) {
  with (processingInstance) {
    size(400, 400);
    frameRate(150);

    // ProgramCodeGoesHere
    background(random(0, 100), 129, 166);
    var r = 0;
    var theta = 0;
    var s = 5;

    //text
    // fill(250, 250, 250);
    // textSize(16);
    // text("look at this ;)", 20, 40);

    // function
    draw = function() {
      pushMatrix();
      translate(width / 2, height / 2);

      var x = r * cos(theta);
      var y = r * sin(theta);
      noStroke();
      stroke(255, 255, 255);
      fill(random(50, 150), random(50, 150), 200);
      // line(0, 0, x, y);
      ellipse(x, y, s, s);

      popMatrix();

      theta += 5;
      r += 0.2;
      // r += random(0.08, 0.5);
      s += 0.01;
    };
  }
};

// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas1");
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc1);

//
// second js - project
var sketchProc2 = function(processingInstance) {
  with (processingInstance) {
    size(400, 400);
    frameRate(2);

    // ProgramCodeGoesHere

    var size = random(50, 100);

    background(random(0, 150), 129, 166);

    // text
    // fill(250, 250, 250);
    // textSize(16);
    // text("drag mouse to paint ...", 20, 40);

    // function
    mouseDragged = function() {
      fill(random(0, 50), mouseY - mouseX, random(100, 205));
      stroke(250, 250, 250);
      // noStroke();
      ellipse(mouseX, mouseY, (mouseY * size) / 400, (mouseY * size) / 400);
    };
  }
};

// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas2");
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc2);
