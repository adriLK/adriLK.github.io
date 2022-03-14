"use strict";

var Scene = {
    canvas : undefined,
    canvasContext : undefined,
	bgImage : undefined,
	desk : undefined,
	phoenixSprite: undefined,
	sceneNo: undefined,
	objection: undefined,
	objFrame: undefined
};

Scene.start = function () {
	// Get the canvas and it's context.
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");
	
	Scene.sceneNo = 1;
	Scene.objFrame = 0;
	
	// Seup the BG to be displayed.
    Scene.bgImage = new Image(256,192);
	Scene.bgImage.src = "sprites/background.png";
	
	Scene.desk = new Image(256,192);
	Scene.desk.src = "sprites/desk.png";
	
	Scene.objection = new Image(256,192);
	Scene.objection.src = "sprites/objection.png";
	
	Scene.phoenixSprite = phoenix;
	
	// Attach the image to be used for the sprite.
	Scene.phoenixSprite.img = new Image();
    Scene.phoenixSprite.img.src = Scene.phoenixSprite.src;
	
	// Wait till the images are loaded before starting the animation.
	Scene.phoenixSprite.img.onload = function() {		
		Scene.phoenixSprite.offset=-Scene.phoenixSprite.frames[Scene.phoenixSprite.frame].frame.w;
    	Scene.mainLoop();
	}
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener( 'DOMContentLoaded', Scene.start);

Scene.clearCanvas = function () {
    Scene.canvasContext.fillStyle = "white";
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();
	
	// Animate at 24 frames a second.
    window.setTimeout(Scene.mainLoop, 1000 / 14);
};

Scene.update = function () {
	// Set the canvas width to be that of the display Window. Which helps if you resize the window.
  	//Scene.canvas.width = window.innerWidth;
	
	// Set the location of the next frame. 
  	Scene.phoenixSprite.offset = 0;
	//if(Scene.phoenixSprite.offset>Scene.canvas.width)
 	//	Scene.phoenixSprite.offset=-Scene.phoenixSprite.frames[Scene.phoenixSprite.frame].frame.w;
};

Scene.draw = function () {
	switch (Scene.sceneNo) {
		case 0:
	
			Scene.canvasContext.drawImage(Scene.bgImage, 0, 0, 256, 192, 0, 0, 256, 192);
	
			Scene.canvasContext.drawImage(
				Scene.phoenixSprite.img,
				Scene.phoenixSprite.frames[Scene.phoenixSprite.frame].frame.x,
				Scene.phoenixSprite.frames[Scene.phoenixSprite.frame].frame.y,
				Scene.phoenixSprite.frames[Scene.phoenixSprite.frame].frame.w,
				Scene.phoenixSprite.frames[Scene.phoenixSprite.frame].frame.h,
				Scene.phoenixSprite.offset,
				8,
				Scene.phoenixSprite.frames[Scene.phoenixSprite.frame].frame.w,
				Scene.phoenixSprite.frames[Scene.phoenixSprite.frame].frame.h);
		
		
			Scene.canvasContext.drawImage(Scene.desk, 0, 0, 256, 192, 0, 0, 256, 192);
	
			// Advance to the next frame.
			Scene.phoenixSprite.frame++;

			// At the end of the phoenixSprite sheet, start at the first frame.
			if(Scene.phoenixSprite.frame==Scene.phoenixSprite.frames.length) {
				Scene.phoenixSprite.frame-= 1;
				Scene.sceneNo = 1; }
			break;
		case 1:
			Scene.canvasContext.drawImage(Scene.bgImage, 0, 0, 256, 192, 0, 0, 256, 192);
	
			Scene.canvasContext.drawImage(
				Scene.phoenixSprite.img,
				Scene.phoenixSprite.frames[Scene.phoenixSprite.frame].frame.x,
				Scene.phoenixSprite.frames[Scene.phoenixSprite.frame].frame.y,
				Scene.phoenixSprite.frames[Scene.phoenixSprite.frame].frame.w,
				Scene.phoenixSprite.frames[Scene.phoenixSprite.frame].frame.h,
				Scene.phoenixSprite.offset,
				8,
				Scene.phoenixSprite.frames[Scene.phoenixSprite.frame].frame.w,
				Scene.phoenixSprite.frames[Scene.phoenixSprite.frame].frame.h);
				
			Scene.canvasContext.drawImage(Scene.desk, 0, 0, 256, 192, 0, 0, 256, 192);
			
			if (Scene.objFrame < 10) {
				Scene.canvasContext.drawImage(Scene.objection, Math.floor(Math.random() * 20 -10), Math.floor(Math.random() * 20 -10), 256, 192, 0, 0, 256, 192);
			} else {
				Scene.canvasContext.drawImage(Scene.objection, 0, 0, 256, 192, 0, 0, 256, 192);
			}
			
			switch (Scene.objFrame) {
				case 0:
				case 1:
				case 2:
					Scene.canvasContext.fillStyle = "white";
					Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
					break;
				case 3:
					Scene.canvasContext.fillStyle = "rgba(255,255,255,0.75)";
					Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
					break;
				case 4:
					Scene.canvasContext.fillStyle = "rgba(255,255,255,0.50)";
					Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
					break;
				case 5:
					Scene.canvasContext.fillStyle = "rgba(255,255,255,0.25)";
					Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
					break;
			}
			
			
			
			Scene.objFrame++;
			
			if (Scene.objFrame >= 15) {
				Scene.sceneNo = 0;
				Scene.objFrame = 0;
				Scene.phoenixSprite.frame = 0;
			}
			
			break;
	}
		
};

