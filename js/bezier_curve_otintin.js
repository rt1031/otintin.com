window.addEventListener("DOMContentLoaded", function () {
  draw_bezier_curve_otintin();
});

function draw_bezier_curve_otintin() {//男根のメタファー
  var otintin_canvas = document.getElementsByClassName('img_cnvs_animetion');
  var otintin_width = new Array();
  var img_array = new Array();
  var loaded_img_count = 1;
  for (var i = 0; i < otintin_canvas.length; ++i) {
    otintin_width[i] = 0;
    img_array[i] = new Image();
    img_array[i].src = otintin_canvas[i].dataset.imgsrc;
  }
  var loop_animetion = function () {
    var count_end_animetion = 0;
    for (var i = 0; i < otintin_canvas.length; ++i) {
      if (otintin_canvas[i].getContext) {
        var ctx = otintin_canvas[i].getContext('2d');
        var standard_x = otintin_canvas[i].width / 2;
        var standard_y = otintin_canvas[i].height / 2;
        var otintin_height = otintin_width * (13 / 4);
        if (otintin_width[i] > otintin_canvas[i].width && otintin_height > otintin_canvas[i].height) {
          //++count_end_animetion;
          otintin_width[i] = 0;
        }
        otintin_width[i] += 30;
        //height:width = 13:4
        ctx.drawImage(img_array[i], 0, 0, otintin_canvas[i].width, otintin_canvas[i].height);
        ctx.beginPath();
        ctx.globalCompositeOperation = "destination-in";
        ctx.moveTo(standard_x - otintin_width / 2, standard_y - otintin_height * (5 / 26));
        ctx.quadraticCurveTo(standard_x, standard_y - otintin_height / 2, standard_x + otintin_width / 2, standard_y - otintin_height * (5 / 26));
        ctx.quadraticCurveTo(standard_x + otintin_width / 2 - otintin_width / 40, standard_y - otintin_height * (4 / 26), standard_x + otintin_width / 2 - otintin_width / 8, standard_y - otintin_height * (4 / 26));
        ctx.quadraticCurveTo(standard_x + otintin_width / 2 - otintin_width / 40, standard_y - otintin_height * (4 / 26), standard_x + otintin_width / 2 - otintin_width / 8, standard_y + otintin_height / 2);
        ctx.lineTo(standard_x - otintin_width / 2 + otintin_width / 8, standard_y + otintin_height / 2);
        ctx.quadraticCurveTo(standard_x - otintin_width / 2 + otintin_width / 40, standard_y - otintin_height * (4 / 26), standard_x - otintin_width / 2 + otintin_width / 8, standard_y - otintin_height * (4 / 26));
        ctx.quadraticCurveTo(standard_x - otintin_width / 2 + otintin_width / 40, standard_y - otintin_height * (4 / 26), standard_x - otintin_width / 2, standard_y - otintin_height * (5 / 26));
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
      }
    }
    if (!count_end_animetion) {
      setTimeout(loop_animetion, 50);
    }
  }

  for (var i in img_array) {
    img_array[i].addEventListener('load', function () {
      if (loaded_img_count == img_array.length) {
        setTimeout(loop_animetion, 50);
      }
      ++loaded_img_count;
    }, false);
  }
}