/*
* $Id: oa.js,v 1.5 2014/02/21 17:10:10 jar2 Exp $
*/
var benchmarkTracker;
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
var ga = document.createElement("script");
ga.setAttribute("type","text/javascript");
ga.setAttribute("src", gaJsHost + "google-analytics.com/ga.js");
document.getElementsByTagName("head")[0].appendChild(ga);
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','hewlettOERTracker');

function _gaReady() {
benchmarkTracker = _gat._getTracker("UA-5145430-1");
benchmarkTracker._setAllowHash(false);
benchmarkTracker._setAllowLinker(true);
benchmarkTracker._trackPageview();
hewlettOERTracker('create', 'UA-5033010-1', 'auto', {
	'allowLinker': true
});
hewlettOERTracker('send', 'pageview');
}
if (window.addEventListener) {
window.addEventListener('load', _gaReady, false);
} else if (window.attachEvent) {
window.attachEvent('onload', _gaReady);
}
function _trackLink(href) {
benchmarkTracker._trackPageview(href);
hewlettOERTracker('send', 'pageview', href);
}
function _transferTo(href) {
if (href.indexOf("://") > -1 && href.indexOf("://" + document.location.hostname) < 0) {
benchmarkTracker._link(href);
return false;
} else {
return true;
}
} 