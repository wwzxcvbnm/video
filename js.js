	var system={win:false,mac:false,xll:false,ipad:false};
	var plat=navigator.platform;
	system.win=plat.indexOf("Win")==0;
	system.mac=plat.indexOf("Mac")==0;
	system.x11=(plat=="X11")||(plat.indexOf("Linux")==0);
	system.ipad=(navigator.userAgent.match(/iPad/i)!=null)?true:false;
	if(system.win||system.mac||system.xll||system.ipad){}if(!isWeiXin()){}function isWeiXin(){var ua=window.navigator.userAgent.toLowerCase();
 	if(ua.match(/MicroMessenger/i)=='micromessenger'){return true}else{return false}}
  //window.location.href = "https://www.baidu.com";
