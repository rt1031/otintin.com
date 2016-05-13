window.addEventListener('load', function() {
 	var script = document.createElement('script');
	script.src = 'https://api.github.com/repositories/39287637/contributors?callback=cb';
	document.getElementsByTagName('head')[0].appendChild(script);
  $('#hide-canvas').on('click', function() {
    $('#processing-canvas').hide();
  });
}, false);

function cb(json) {
	var text = "";
	for(var i = 0; i < json.data.length;i++){
		text = text + "<a href='" + json.data[i].html_url + "'>" + json.data[i].login + "</a>";
		text = text + "<br>"
	}
	document.getElementById("contributors").innerHTML = text;
}

!function (d,s,id) {
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if (!d.getElementById(id)) {
		js=d.createElement(s);
		js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
	}
}(document, 'script', 'twitter-wjs');
