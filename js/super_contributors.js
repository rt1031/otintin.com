window.onload = function() {
 	var script = document.createElement('script');
	script.src = 'https://api.github.com/repositories/39287637/contributors?callback=cb';

	document.getElementsByTagName('head')[0].appendChild(script);
};