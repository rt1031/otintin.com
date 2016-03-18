window.onload = function() {
 	var script = document.createElement('script');
	script.src = 'https://api.github.com/repositories/39287637/contributors?callback=cb';

	document.getElementsByTagName('head')[0].appendChild(script);
};

function cb(json){
	
	var text = "";
	
	for(var i = 0; i < json.data.length;i++){
		text = text + "<a href='" + json.data[i].html_url + "'>" + json.data[i].login + "</a>";
		text = text + "<br>"
	}
	
	document.getElementById("contributors").innerHTML = text;
}