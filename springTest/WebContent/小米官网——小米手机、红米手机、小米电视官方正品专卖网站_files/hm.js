(function(){var h={},mt={},c={id:"4982d57ea12df95a2b24715fb6440726",dm:["mi.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:true,align:1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,apps:''};var p=!0,q=null,r=!1;mt.h={};mt.h.ua=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.h.cookieEnabled=navigator.cookieEnabled;mt.h.javaEnabled=navigator.javaEnabled();mt.h.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.h.xa=(window.screen.width||0)+"x"+(window.screen.height||0);mt.h.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,b,g){var f;g.D&&(f=new Date,f.setTime(f.getTime()+g.D));document.cookie=a+"="+b+(g.domain?"; domain="+g.domain:"")+(g.path?"; path="+g.path:"")+(f?"; expires="+f.toGMTString():"")+(g.Ka?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:q};mt.o={};mt.o.Da=function(a){return document.getElementById(a)};mt.o.ha=function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return q};
(mt.o.va=function(){function a(){if(!a.t){a.t=p;for(var b=0,k=f.length;b<k;b++)f[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(f){setTimeout(b,1);return}a()}var g=r,f=[],k;document.addEventListener?k=function(){document.removeEventListener("DOMContentLoaded",k,r);a()}:document.attachEvent&&(k=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",k),a())});(function(){if(!g)if(g=p,"complete"===document.readyState)a.t=p;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
k,r),window.addEventListener("load",a,r);else if(document.attachEvent){document.attachEvent("onreadystatechange",k);window.attachEvent("onload",a);var f=r;try{f=window.frameElement==q}catch(n){}document.documentElement.doScroll&&f&&b()}})();return function(b){a.t?b():f.push(b)}}()).t=r;mt.event={};mt.event.d=function(a,b,g){a.attachEvent?a.attachEvent("on"+b,function(f){g.call(a,f)}):a.addEventListener&&a.addEventListener(b,g,r)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=r};mt.l={};mt.l.parse=function(){return(new Function('return (" + source + ")'))()};
mt.l.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=g[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var g={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(f){switch(typeof f){case "undefined":return"undefined";case "number":return isFinite(f)?String(f):"null";case "string":return a(f);case "boolean":return String(f);
default:if(f===q)return"null";if(f instanceof Array){var k=["["],g=f.length,n,e,d;for(e=0;e<g;e++)switch(d=f[e],typeof d){case "undefined":case "function":case "unknown":break;default:n&&k.push(","),k.push(mt.l.stringify(d)),n=1}k.push("]");return k.join("")}if(f instanceof Date)return'"'+f.getFullYear()+"-"+b(f.getMonth()+1)+"-"+b(f.getDate())+"T"+b(f.getHours())+":"+b(f.getMinutes())+":"+b(f.getSeconds())+'"';n=["{"];e=mt.l.stringify;for(g in f)if(Object.prototype.hasOwnProperty.call(f,g))switch(d=
f[g],typeof d){case "undefined":case "unknown":case "function":break;default:k&&n.push(","),k=1,n.push(e(g)+":"+e(d))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.e=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Ha=function(a){return mt.lang.e(a,"Number")&&isFinite(a)};mt.lang.Ja=function(a){return mt.lang.e(a,"String")};mt.localStorage={};
mt.localStorage.A=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return r}return p};
mt.localStorage.set=function(a,b,g){var f=new Date;f.setTime(f.getTime()+g||31536E6);try{window.localStorage?(b=f.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.A()&&(mt.localStorage.f.expires=f.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,b),mt.localStorage.f.save(document.location.hostname))}catch(k){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),g=a.substring(0,b)-0;if(g&&g>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.A())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(f){}return q};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.A())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(g){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):q};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.L={};mt.L.log=function(a,b){var g=new Image,f="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[f]=g;g.onload=g.onerror=g.onabort=function(){g.onload=g.onerror=g.onabort=q;g=window[f]=q;b&&b(a)};g.src=a};mt.M={};
mt.M.oa=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(g){}return a};
mt.M.Ca=function(a,b,g,f,k){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+g+'" height="'+f+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(k||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+g+'" height="'+f+'" src="'+b+'" flashvars="'+(k||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.i=function(a,b){var g=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return g?g[3]:q};mt.url.Fa=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:q};mt.url.la=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):q};mt.url.P=function(a){return(a=mt.url.la(a))?a.replace(/:\d+$/,""):a};mt.url.Ea=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):q};
h.B={Ga:"http://tongji.baidu.com/hm-web/welcome/ico",J:"hm.baidu.com/hm.gif",Y:"baidu.com",ra:"hmmd",sa:"hmpl",qa:"hmkw",pa:"hmci",ta:"hmsr",m:0,j:Math.round(+new Date/1E3),protocol:"https:"==document.location.protocol?"https:":"http:",Ia:0,ca:6E5,da:10,N:1024,ba:1,n:2147483647,V:"cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")};
(function(){var a={k:{},d:function(a,g){this.k[a]=this.k[a]||[];this.k[a].push(g)},q:function(a,g){this.k[a]=this.k[a]||[];for(var f=this.k[a].length,k=0;k<f;k++)this.k[a][k](g)}};return h.r=a})();
(function(){function a(a,f){var k=document.createElement("script");k.charset="utf-8";b.e(f,"Function")&&(k.readyState?k.onreadystatechange=function(){if("loaded"===k.readyState||"complete"===k.readyState)k.onreadystatechange=q,f()}:k.onload=function(){f()});k.src=a;var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(k,m)}var b=mt.lang;return h.load=a})();
(function(){var a=mt.o,b=mt.event,g=mt.h,f=h.B,k=[],m={W:function(){c.ctrk&&(b.d(document,"mouseup",m.aa()),b.d(window,"unload",function(){m.w()}),setInterval(function(){m.w()},f.ca))},aa:function(){return function(a){a=m.ia(a);if(""!==a){var e=(f.protocol+"//"+f.J+"?"+h.b.U().replace(/ep=[^&]*/,"ep="+encodeURIComponent("["+a+"]"))).length;e+(f.n+"").length>f.N||(e+encodeURIComponent(k.join(",")+(k.length?",":"")).length+(f.n+"").length>f.N&&m.w(),k.push(a),(k.length>=f.da||/t:a/.test(a))&&m.w())}}},
ia:function(b){if(0===f.ba){var e=b.target||b.srcElement,d=e.tagName.toLowerCase();if("embed"==d||"object"==d)return""}g.ua?(e=Math.max(document.documentElement.scrollTop,document.body.scrollTop),d=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),d=b.clientX+d,e=b.clientY+e):(d=b.pageX,e=b.pageY);var l=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:d-=l/2;break;case 2:d-=l}d="{x:"+d+",y:"+e+",";e=b.target||b.srcElement;
return d=(b="a"==e.tagName.toLowerCase()?e:a.ha(e))?d+("t:a,u:"+encodeURIComponent(b.href)+"}"):d+"t:b}"},w:function(){0!==k.length&&(h.b.a.et=2,h.b.a.ep="["+k.join(",")+"]",h.b.g(),k=[])}};h.r.d("pv-b",m.W);return m})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.C.ma()+","+h.C.ka();h.b.g()}}function b(){clearTimeout(x);var a;w&&(a="visible"==document[w]);y&&(a=!document[y]);e="undefined"==typeof a?p:a;if((!n||!d)&&e&&l)u=p,s=+new Date;else if(n&&d&&(!e||!l))u=r,t+=+new Date-s;n=e;d=l;x=setTimeout(b,100)}function g(d){var a=document,l="";if(d in a)l=d;else for(var e=["webkit","ms","moz","o"],s=0;s<e.length;s++){var b=e[s]+d.charAt(0).toUpperCase()+d.slice(1);if(b in a){l=
b;break}}return l}function f(d){if(!("focus"==d.type||"blur"==d.type)||!(d.target&&d.target!=window))l="focus"==d.type||"focusin"==d.type?p:r,b()}var k=mt.event,m=h.r,n=p,e=p,d=p,l=p,v=+new Date,s=v,t=0,u=p,w=g("visibilityState"),y=g("hidden"),x;b();(function(){var d=w.replace(/[vV]isibilityState/,"visibilitychange");k.d(document,d,b);k.d(window,"pageshow",b);k.d(window,"pagehide",b);"object"==typeof document.onfocusin?(k.d(document,"focusin",f),k.d(document,"focusout",f)):(k.d(window,"focus",f),
k.d(window,"blur",f))})();h.C={ma:function(){return+new Date-v},ka:function(){return u?+new Date-s+t:t}};m.d("pv-b",function(){k.d(window,"unload",a())});return h.C})();
(function(){function a(d){for(var l in d)if({}.hasOwnProperty.call(d,l)){var e=d[l];f.e(e,"Object")||f.e(e,"Array")?a(e):d[l]=String(e)}}function b(d){return d.replace?d.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):d}var g=mt.L,f=mt.lang,k=mt.l,m=h.B,n=h.r,e={Q:q,p:[],z:0,R:r,init:function(){e.c=0;e.Q={push:function(){e.I.apply(e,arguments)}};n.d("pv-b",function(){e.ea();e.fa()});n.d("pv-d",e.ga);n.d("stag-b",function(){h.b.a.api=e.c||e.z?e.c+"_"+e.z:""});n.d("stag-d",function(){h.b.a.api=
0;e.c=0;e.z=0})},ea:function(){var d=window._hmt;if(d&&d.length)for(var a=0;a<d.length;a++){var b=d[a];switch(b[0]){case "_setAccount":1<b.length&&/^[0-9a-z]{32}$/.test(b[1])&&(e.c|=1,window._bdhm_account=b[1]);break;case "_setAutoPageview":if(1<b.length&&(b=b[1],r===b||p===b))e.c|=2,window._bdhm_autoPageview=b}}},fa:function(){if("undefined"===typeof window._bdhm_account||window._bdhm_account===c.id){window._bdhm_account=c.id;var d=window._hmt;if(d&&d.length)for(var a=0,b=d.length;a<b;a++)f.e(d[a],
"Array")&&"_trackEvent"!==d[a][0]&&"_trackRTEvent"!==d[a][0]?e.I(d[a]):e.p.push(d[a]);window._hmt=e.Q}},ga:function(){if(0<e.p.length)for(var d=0,a=e.p.length;d<a;d++)e.I(e.p[d]);e.p=q},I:function(d){if(f.e(d,"Array")){var a=d[0];if(e.hasOwnProperty(a)&&f.e(e[a],"Function"))e[a](d)}},_trackPageview:function(d){if(1<d.length&&d[1].charAt&&"/"==d[1].charAt(0)){e.c|=4;h.b.a.et=0;h.b.a.ep="";h.b.G?(h.b.a.nv=0,h.b.a.st=4):h.b.G=p;var a=h.b.a.u,b=h.b.a.su;h.b.a.u=m.protocol+"//"+document.location.host+
d[1];e.R||(h.b.a.su=document.location.href);h.b.g();h.b.a.u=a;h.b.a.su=b}},_trackEvent:function(a){2<a.length&&(e.c|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=b(a[1])+"*"+b(a[2])+(a[3]?"*"+b(a[3]):"")+(a[4]?"*"+b(a[4]):""),h.b.g())},_setCustomVar:function(a){if(!(4>a.length)){var l=a[1],f=a[4]||3;if(0<l&&6>l&&0<f&&4>f){e.z++;for(var s=(h.b.a.cv||"*").split("!"),t=s.length;t<l-1;t++)s.push("*");s[l-1]=f+"*"+b(a[2])+"*"+b(a[3]);h.b.a.cv=s.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.wa("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"==a[1].charAt(0)?m.protocol+"//"+window.location.host+a[1]:a[1],e.R=p)},_trackOrder:function(d){d=d[1];f.e(d,"Object")&&(a(d),e.c|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=k.stringify(d),h.b.g())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])e.c|=32,h.b.a.et=93,h.b.a.ep=a,h.b.g()},_trackRTPageview:function(d){d=
d[1];f.e(d,"Object")&&(a(d),d=k.stringify(d),512>=encodeURIComponent(d).length&&(e.c|=64,h.b.a.rt=d))},_trackRTEvent:function(d){d=d[1];if(f.e(d,"Object")){a(d);d=encodeURIComponent(k.stringify(d));var b=function(a){var d=h.b.a.rt;e.c|=128;h.b.a.et=90;h.b.a.rt=a;h.b.g();h.b.a.rt=d},g=d.length;if(900>=g)b.call(this,d);else for(var g=Math.ceil(g/900),s="block|"+Math.round(Math.random()*m.n).toString(16)+"|"+g+"|",t=[],u=0;u<g;u++)t.push(u),t.push(d.substring(900*u,900*u+900)),b.call(this,s+t.join("|")),
t=[]}},_setUserId:function(a){a=a[1];if(f.e(a,"String")||f.e(a,"Number")){var b=h.b.F(),k="hm-"+h.b.a.v;e.T=e.T||Math.round(Math.random()*m.n);g.log("//datax.baidu.com/x.gif?si="+c.id+"&dm="+encodeURIComponent(b)+"&ac="+encodeURIComponent(a)+"&v="+k+"&li="+e.T+"&rnd="+Math.round(Math.random()*m.n))}}};e.init();h.Z=e;return h.Z})();
(function(){function a(){"undefined"==typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=p,this.a={},this.G=r,this.init())}var b=mt.url,g=mt.L,f=mt.M,k=mt.lang,m=mt.cookie,n=mt.h,e=mt.localStorage,d=mt.sessionStorage,l=h.B,v=h.r;a.prototype={H:function(a,d){a="."+a.replace(/:\d+/,"");d="."+d.replace(/:\d+/,"");var b=a.indexOf(d);return-1<b&&b+d.length==a.length},S:function(a,d){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(d)},s:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.S(a,c.dm[d]))return p}else{var e=b.P(a);if(e&&this.H(e,c.dm[d]))return p}return r},F:function(){for(var a=document.location.hostname,d=0,b=c.dm.length;d<b;d++)if(this.H(a,c.dm[d]))return c.dm[d].replace(/(:\d+)?[\/\?#].*/,"");return a},O:function(){for(var a=0,d=c.dm.length;a<d;a++){var b=c.dm[a];if(-1<b.indexOf("/")&&this.S(document.location.href,b))return b.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},na:function(){if(!document.referrer)return l.j-l.m>c.vdur?1:4;var a=
r;this.s(document.referrer)&&this.s(document.location.href)?a=p:(a=b.P(document.referrer),a=this.H(a||"",document.location.hostname));return a?l.j-l.m>c.vdur?1:4:3},getData:function(a){try{return m.get(a)||d.get(a)||e.get(a)}catch(b){}},setData:function(a,b,f){try{m.set(a,b,{domain:this.F(),path:this.O(),D:f}),f?e.set(a,b,f):d.set(a,b)}catch(l){}},wa:function(a){try{m.set(a,"",{domain:this.F(),path:this.O(),D:-1}),d.remove(a),e.remove(a)}catch(b){}},Aa:function(){var a,d,b,e,f;l.m=this.getData("Hm_lpvt_"+
c.id)||0;13==l.m.length&&(l.m=Math.round(l.m/1E3));d=this.na();a=4!=d?1:0;if(b=this.getData("Hm_lvt_"+c.id)){e=b.split(",");for(f=e.length-1;0<=f;f--)13==e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<l.j-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(l.j);4<e.length;)e.shift();b=e.join(",");e=e[e.length-1]}else b=l.j,e="",f=1;this.setData("Hm_lvt_"+c.id,b,c.age);this.setData("Hm_lpvt_"+c.id,l.j);b=l.j==this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.s(document.location.href)&&
(""===document.referrer||this.s(document.referrer)))a=0,d=4;this.a.nv=a;this.a.st=d;this.a.cc=b;this.a.lt=e;this.a.lv=f},U:function(){for(var a=[],d=0,b=l.V.length;d<b;d++){var e=l.V[d],f=this.a[e];"undefined"!=typeof f&&""!==f&&a.push(e+"="+encodeURIComponent(f))}d=this.a.et;this.a.rt&&(0===d?a.push("rt="+encodeURIComponent(this.a.rt)):90===d&&a.push("rt="+this.a.rt));return a.join("&")},Ba:function(){this.Aa();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.xa;this.a.cl=n.colorDepth+"-bit";
this.a.ln=n.language;this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"==typeof _bdhm_top?1:0;this.a.fl=f.oa();this.a.v="1.0.83";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");1==this.a.nv&&(this.a.tt=document.title||"");var a=document.location.href;this.a.cm=b.i(a,l.ra)||"";this.a.cp=b.i(a,l.sa)||"";this.a.cw=b.i(a,l.qa)||"";this.a.ci=b.i(a,l.pa)||"";this.a.cf=b.i(a,l.ta)||""},init:function(){try{this.Ba(),0===this.a.nv?this.za():this.K(".*"),h.b=this,this.$(),
v.q("pv-b"),this.ya()}catch(a){var d=[];d.push("si="+c.id);d.push("n="+encodeURIComponent(a.name));d.push("m="+encodeURIComponent(a.message));d.push("r="+encodeURIComponent(document.referrer));g.log(l.protocol+"//"+l.J+"?"+d.join("&"))}},ya:function(){function a(){v.q("pv-d")}"undefined"===typeof window._bdhm_autoPageview||window._bdhm_autoPageview===p?(this.G=p,this.a.et=0,this.a.ep="",this.g(a)):a()},g:function(a){var d=this;d.a.rnd=Math.round(Math.random()*l.n);v.q("stag-b");var b=l.protocol+"//"+
l.J+"?"+d.U();v.q("stag-d");d.X(b);g.log(b,function(b){d.K(b);k.e(a,"Function")&&a.call(d)})},$:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=-1<document.referrer.indexOf(l.Y)?p:r,f=b.i(a,"jn"),g=/^heatlink$|^select$/.test(f);a&&(d.test(a)&&e&&g)&&(a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",l.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,
f))},X:function(a){var b=d.get("Hm_unsent_"+c.id)||"",e=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+e)+(b?","+b:"");d.set("Hm_unsent_"+c.id,b)},K:function(a){var b=d.get("Hm_unsent_"+c.id)||"";b&&((b=b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//,"")).replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),"").replace(/,$/,""))?d.set("Hm_unsent_"+c.id,b):d.remove("Hm_unsent_"+c.id))},za:function(){var a=this,b=d.get("Hm_unsent_"+
c.id);if(b)for(var b=b.split(","),e=function(d){g.log(l.protocol+"//"+decodeURIComponent(d).replace(/^https?:\/\//,""),function(d){a.K(d)})},f=0,k=b.length;f<k;f++)e(b[f])}};return new a})();
(function(){var a=mt.o,b=mt.event,g=mt.url,f=mt.l;try{if(window.performance&&performance.timing){var k=+new Date,m=function(a){var d=performance.timing,b=d[a+"Start"]?d[a+"Start"]:0;a=d[a+"End"]?d[a+"End"]:0;return{start:b,end:a,value:0<a-b?a-b:0}},n=q;a.va(function(){n=+new Date});var e=function(){var a,d,b;b=m("navigation");d=m("request");b={netAll:d.start-b.start,netDns:m("domainLookup").value,netTcp:m("connect").value,srv:m("response").start-d.start,dom:performance.timing.domInteractive-performance.timing.fetchStart,
loadEvent:m("loadEvent").end-b.start};a=document.referrer;var e=q;d=q;if("www.baidu.com"===(a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[])[2])e=g.i(a,"qid"),d=g.i(a,"click_t");a=e;b.qid=a!=q?a:"";d!=q?(b.bdDom=n?n-d:0,b.bdRun=k-d):(b.bdDom=0,b.bdRun=0);h.b.a.et=87;h.b.a.ep=f.stringify(b);h.b.g()};b.d(window,"load",function(){setTimeout(e,500)})}}catch(d){}})();
(function(){if("378f3aa9b8779062c8de4dc247dd8874"===c.id){var a=function(a){if(a.item){for(var d=a.length,b=Array(d);d--;)b[d]=a[d];return b}return[].slice.call(a)},b={click:function(){for(var b=[],d=a(document.getElementsByTagName("a")),d=[].concat.apply(d,a(document.getElementsByTagName("area"))),f=/openZoosUrl\(/,g=0,k=d.length;g<k;g++)f.test(d[g].getAttribute("onclick"))&&b.push(d[g]);return b}},g=function(a,d){for(var b in a)if(a.hasOwnProperty(b)&&d.call(a,b,a[b])===r)return r},f=function(a,
d){return Object.prototype.toString.call(a)==="[object "+d+"]"};window._hmt=window._hmt||[];var k,m="/zoosnet"+(/\/$/.test("/zoosnet")?"":"/"),n=function(a,d){if(k===d){window._hmt.push(["_trackPageview",m+a]);for(var b=+new Date;500>=+new Date-b;);return r}if(f(d,"Array")||f(d,"NodeList"))for(var b=0,g=d.length;b<g;b++)if(k===d[b]){window._hmt.push(["_trackPageview",m+a+"/"+(b+1)]);for(b=+new Date;500>=+new Date-b;);return r}};(function(a,d,b){a.addEventListener?a.addEventListener(d,b,p):a.attachEvent&&
a.attachEvent("on"+d,b)})(document,"click",function(a){a=a||window.event;k=a.target||a.srcElement;var d={};for(g(b,function(a,b){d[a]=f(b,"Function")?b():document.getElementById(b)});k&&k!==document&&g(d,n)!==r;)k=k.parentNode})}})();})();
