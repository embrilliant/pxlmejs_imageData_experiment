$(function() {

	var photo = document.getElementById("photo");

	var canvas = document.getElementById("canvas"),
		c = canvas.getContext("2d"),
		canvasWidth = canvas.width,
		canvasHeight = canvas.height;

	/*var canvasOutput = document.getElementById("output"),
		cOutput = canvasOutput.getContext("2d");*/

	var colors = [];
  	function print() {

		c.drawImage(photo, 0, 0, canvasWidth, canvasHeight);

		var image = c.getImageData(0, 0, canvasWidth, canvasHeight),
		imageData = image.data,
		dataLength = imageData.length;
		
		for ( var i = 0; i < dataLength; i += 25600 ) {
			var r = imageData[i],
				g = imageData[i+1],
				b = imageData[i+2],
				a = imageData[i+3];
			/*if (r <= 255 && r >= 230 && g <= 255 && g >= 200 && b <= 255 && b >= 210 ) {
		    	imageData[i+3] = 0;
			}
			image.data = imageData;*/
			colors.push("rgba(" + r + "," + g + "," + b + "," + a + ")");
		}

		// cOutput.putImageData(image, 0, 0, 0, 0, canvasWidth, canvasHeight);
	
		
	}

	print();

//pxlme
var opt = {};
            opt.containerId = "output";
            opt.width = 640;
            opt.height = 360;
            opt.matrix = [
                "12",
                "34",
                "56",
                "78"
            ];
            opt.colors = {
                "1": colors[0],
                "2": colors[1],
                "3": colors[2],
                "4": colors[3],
                "5": colors[4],
                "6": colors[5],
                "7": colors[6],
                "8": colors[7]
            };
            opt.pixelSize = 20;
            opt.pixelSizeRatio = .1;
            opt.pixelSizeMax = 26;
            opt.cursorRadius = 40;
            opt.speedUp = 1.8;
            opt.speedDown = .7;


            var app = new PXLME.App();
            var stage = app.addStage( opt );

    console.log(opt.colors);

});
