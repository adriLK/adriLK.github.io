"use strict";

var numbers={
  src : "numbers.jpg",
  img: undefined,
  frame:0,
  offset: 0,
  digits: [
    {
      "frame": { //0
        "x": 973,
        "y": 23,
        "w": 24,
        "h": 33
      }
    },
    {
      "frame": { //1
        "x": 37,
        "y": 9,
        "w": 32,
        "h": 57
      }
    },
    {
      "frame": { //2
        "x": 137,
        "y": 12,
        "w": 34,
        "h": 48
      }
    },
    {
      "frame": { //3
        "x": 245,
        "y": 18,
        "w": 25,
        "h": 38
      }
    },
    {
      "frame": { //4
        "x": 340,
        "y": 14,
        "w": 44,
        "h": 47
      }
    },
    {
      "frame": { //5
        "x": 432,
        "y": 9,
        "w": 61,
        "h": 59
      }
    },
    {
      "frame": { //6
        "x": 533,
        "y": 18,
        "w": 64,
        "h": 45
      }
    },
    {
      "frame": { //7
        "x": 650,
        "y": 21,
        "w": 25,
        "h": 33
      }
    },
    {
      "frame": { //8
        "x": 768,
        "y": 17,
        "w": 29,
        "h": 36
      }
    },
    {
      "frame": { //9
        "x": 849,
        "y": 14,
        "w": 40,
        "h": 52
      }
    }

  ]
}


var started = false;



function count() {

  if (!started) {

    started = true;
    
    console.log('COUNT running...');

    // var digits = [];
    //
    // for (let i = 0; i < numbers.digits.length; i++) {
    //   digits[i] = new Image(numbers.digits[i]["frame"].w, numbers.digits[i]["frame"].h);
    // }

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById('numbers');

    var count = 0;

    drawDigits(canvas, ctx, count, img);
  }


}

function drawDigits(canvas, ctx, count, img) {

  console.log('drawing digits');

  var xOffset = 0;
  var yOffset = 0;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (count == 10) {
    xOffset = (canvas.width - numbers.digits[1]["frame"]["w"] - numbers.digits[0]["frame"]["w"])/2;
    //yOffset = (canvas.height - numbers.digits[1]["frame"]["h"])/2;

    ctx.drawImage(img,
      numbers.digits[1]["frame"]["x"], numbers.digits[1]["frame"]["y"],
      numbers.digits[1]["frame"]["w"], numbers.digits[1]["frame"]["h"],
       xOffset, (canvas.height - numbers.digits[1]["frame"]["h"])/2,
       numbers.digits[1]["frame"]["w"], numbers.digits[1]["frame"]["h"]
     );

     ctx.drawImage(img,
       numbers.digits[0]["frame"]["x"], numbers.digits[0]["frame"]["y"],
       numbers.digits[0]["frame"]["w"], numbers.digits[0]["frame"]["h"],
        numbers.digits[1]["frame"]["w"] + xOffset, (canvas.height - numbers.digits[0]["frame"]["h"])/2,
        numbers.digits[0]["frame"]["w"], numbers.digits[0]["frame"]["h"]
      );

  } else {
    xOffset = (canvas.width - numbers.digits[count]["frame"]["w"])/2;
    yOffset = (canvas.height - numbers.digits[count]["frame"]["h"])/2;

    console.log(xOffset);
    console.log(yOffset);

		//ctx.fillText("what",100,100);

    ctx.drawImage(img,
      numbers.digits[count]["frame"]["x"], numbers.digits[count]["frame"]["y"],
      numbers.digits[count]["frame"]["w"], numbers.digits[count]["frame"]["h"],
       xOffset, yOffset,
       numbers.digits[count]["frame"]["w"], numbers.digits[count]["frame"]["h"]
     );

     setTimeout(function(){drawDigits(canvas, ctx, count+1, img);}, 1000);
  }
}

//document.addEventListener('DOMContentLoaded', count);
