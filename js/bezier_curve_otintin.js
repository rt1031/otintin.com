window.addEventListener("DOMContentLoaded", function(){
	draw_bezier_curve_otintin();
});

function draw_bezier_curve_otintin() {//男根のメタファー
	var canvas = document.getElementsByClassName('img_cnvs_animetion');
	var tintin_width = new Array();
	var img_array = new Array();
	var loaded_img_count = 1;
	for(var i=0;i<canvas.length;++i){
		tintin_width[i]=0;
		img_array[i]=new Image();
		img_array[i].src=canvas[i].dataset.imgsrc;
	}
	var loop_animetion = function(){
		var count_end_animetion = 0;
		for(var i=0;i<canvas.length;++i){
			if (canvas[i].getContext) {
				var ctx = canvas[i].getContext('2d');
				var standard_x=canvas[i].width/2;
				var standard_y=canvas[i].height/2;
				if(tintin_width[i]>canvas[i].width){
					//++count_end_animetion;
					tintin_width[i]=0;
				}
				tintin_width[i] += 30;
				var tintin_height = tintin_width*(13/4);
				//height:width = 13:4
				ctx.drawImage(img_array[i],0,0,canvas[i].width,canvas[i].height);
				ctx.beginPath();
				ctx.globalCompositeOperation = "destination-in";
				ctx.moveTo(standard_x-tintin_width/2,standard_y-tintin_height*(5/26));
				ctx.quadraticCurveTo(standard_x, standard_y-tintin_height/2, standard_x+tintin_width/2, standard_y-tintin_height*(5/26));
				ctx.quadraticCurveTo(standard_x+tintin_width/2-tintin_width/40,standard_y-tintin_height*(4/26),standard_x+tintin_width/2-tintin_width/8,standard_y-tintin_height*(4/26));
				ctx.quadraticCurveTo(standard_x+tintin_width/2-tintin_width/40,standard_y-tintin_height*(4/26),standard_x+tintin_width/2-tintin_width/8,standard_y+tintin_height/2);
				ctx.lineTo(standard_x-tintin_width/2+tintin_width/8,standard_y+tintin_height/2);
				ctx.quadraticCurveTo(standard_x-tintin_width/2+tintin_width/40,standard_y-tintin_height*(4/26),standard_x-tintin_width/2+tintin_width/8,standard_y-tintin_height*(4/26));
				ctx.quadraticCurveTo(standard_x-tintin_width/2+tintin_width/40,standard_y-tintin_height*(4/26),standard_x-tintin_width/2,standard_y-tintin_height*(5/26));
				ctx.fill();
				ctx.globalCompositeOperation = "source-over";
			}
		}
		if(count_end_animetion==0){
			setTimeout(loop_animetion,50);
		}
	}

    for (var i in img_array) {
        img_array[i].addEventListener('load', function() {
            if (loaded_img_count == img_array.length) {
            	setTimeout(loop_animetion,50);
            }
            loaded_img_count++;
        }, false);
    }
}
