!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){GIFEncoder=function(){for(var t=0,e={};t<256;t++)e[t]=String.fromCharCode(t);function n(){this.bin=[]}n.prototype.getData=function(){for(var t="",n=this.bin.length,r=0;r<n;r++)t+=e[this.bin[r]];return t},n.prototype.writeByte=function(t){this.bin.push(t)},n.prototype.writeUTFBytes=function(t){for(var e=t.length,n=0;n<e;n++)this.writeByte(t.charCodeAt(n))},n.prototype.writeBytes=function(t,e,n){for(var r=n||t.length,o=e||0;o<r;o++)this.writeByte(t[o])};var r,o,i,a,c,u,f,s,l,d={},p=null,y=-1,h=0,w=!1,m=[],g=7,v=-1,B=!1,b=!0,F=!1,M=10,A="Generated by jsgif (https://github.com/antimatter15/jsgif/)",C=(d.setDelay=function(t){h=Math.round(t/10)},d.setDispose=function(t){t>=0&&(v=t)},d.setRepeat=function(t){t>=0&&(y=t)},d.setTransparent=function(t){p=t},d.setComment=function(t){A=t},d.addFrame=function(t,e){if(null===t||!w||null===a)throw new Error("Please call start method before calling addFrame");var n=!0;try{e?t instanceof ImageData?(c=t.data,sizeset&&r==t.width&&o==t.height||E(t.width,t.height)):t instanceof Uint8ClampedArray?t.length==r*o*4?c=t:(console.log("Please set the correct size: ImageData length mismatch"),n=!1):(console.log("Please provide correct input"),n=!1):(c=t.getImageData(0,0,t.canvas.width,t.canvas.height).data,F||E(t.canvas.width,t.canvas.height)),N(),S(),b&&(I(),_(),y>=0&&x()),j(),""!==A&&O(),T(),b||_(),D(),b=!1}catch(t){n=!1}return n},d.download=function(t){if(null===a||0==B)console.log("Please call start method and add frames and call finish method before calling download");else{t=void 0!==t?t.endsWith(".gif")?t:t+".gif":"download.gif";var e=document.createElement("a");e.download=t,e.href=URL.createObjectURL(new Blob([new Uint8Array(a.bin)],{type:"image/gif"})),e.click()}},d.finish=function(){if(!w)return!1;var t=!0;w=!1;try{a.writeByte(59),B=!0}catch(e){t=!1}return t},function(){i=0,c=null,u=null,f=null,l=null,B=!1,b=!0}),E=(d.setFrameRate=function(t){15!=t&&(h=Math.round(100/t))},d.setQuality=function(t){t<1&&(t=1),M=t},d.setSize=function(t,e){w&&!b||(o=e,(r=t)<1&&(r=320),o<1&&(o=240),F=!0)}),S=(d.start=function(){C();var t=!0;B=!1,a=new n;try{a.writeUTFBytes("GIF89a")}catch(e){t=!1}return w=t},d.cont=function(){C();return B=!1,a=new n,w=!0},function(){var t=u.length,e=t/3;f=[];var n=new NeuQuant(u,t,M);l=n.process();for(var r=0,o=0;o<e;o++){var a=n.map(255&u[r++],255&u[r++],255&u[r++]);m[a]=!0,f[o]=a}u=null,s=8,g=7,null!==p&&(i=P(p))}),P=function(t){if(null===l)return-1;for(var e=(16711680&t)>>16,n=(65280&t)>>8,r=255&t,o=0,i=16777216,a=l.length,c=0;c<a;){var u=e-(255&l[c++]),f=n-(255&l[c++]),s=r-(255&l[c]),d=u*u+f*f+s*s,p=c/3;m[p]&&d<i&&(i=d,o=p),c++}return o},N=function(){var t=r,e=o;u=[];for(var n=c,i=0,a=0;a<e;a++)for(var f=0;f<t;f++){var s=a*t*4+4*f;u[i++]=n[s],u[i++]=n[s+1],u[i++]=n[s+2]}},j=function(){var t,e;a.writeByte(33),a.writeByte(249),a.writeByte(4),null===p?(t=0,e=0):(t=1,e=2),v>=0&&(e=7&v),e<<=2,a.writeByte(0|e|t),k(h),a.writeByte(i),a.writeByte(0)},O=function(){a.writeByte(33),a.writeByte(254),a.writeByte(A.length),a.writeUTFBytes(A),a.writeByte(0)},T=function(){a.writeByte(44),k(0),k(0),k(r),k(o),b?a.writeByte(0):a.writeByte(128|g)},I=function(){k(r),k(o),a.writeByte(240|g),a.writeByte(0),a.writeByte(0)},x=function(){a.writeByte(33),a.writeByte(255),a.writeByte(11),a.writeUTFBytes("NETSCAPE2.0"),a.writeByte(3),a.writeByte(1),k(y),a.writeByte(0)},_=function(){a.writeBytes(l);for(var t=768-l.length,e=0;e<t;e++)a.writeByte(0)},k=function(t){a.writeByte(255&t),a.writeByte(t>>8&255)},D=function(){new LZWEncoder(r,o,f,s).encode(a)};d.stream=function(){return a},d.setProperties=function(t,e){w=t,b=e};return d},t.exports=GIFEncoder,LZWEncoder=function(){var t,e,n,r,o,i,a,c,u,f,s,l,d={},p=[],y=[],h=0,w=!1,m=0,g=0,v=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],B=[],b=d.LZWEncoder=function(o,i,a,c){t=o,e=i,n=a,r=Math.max(2,c)},F=function(t,e){B[l++]=t,l>=254&&E(e)},M=function(t){A(5003),h=f+2,w=!0,N(f,t)},A=function(t){for(var e=0;e<t;++e)p[e]=-1},C=d.compress=function(t,e){var n,r,o,i,d,m;for(w=!1,c=S(a=u=t),s=(f=1<<t-1)+1,h=f+2,l=0,i=P(),m=0,n=5003;n<65536;n*=2)++m;m=8-m,A(5003),N(f,e);t:for(;-1!=(o=P());)if(n=(o<<12)+i,p[r=o<<m^i]!=n){if(p[r]>=0){d=5003-r,0===r&&(d=1);do{if((r-=d)<0&&(r+=5003),p[r]==n){i=y[r];continue t}}while(p[r]>=0)}N(i,e),i=o,h<4096?(y[r]=h++,p[r]=n):M(e)}else i=y[r];N(i,e),N(s,e)},E=(d.encode=function(n){n.writeByte(r),o=t*e,i=0,C(r+1,n),n.writeByte(0)},function(t){l>0&&(t.writeByte(l),t.writeBytes(B,0,l),l=0)}),S=function(t){return(1<<t)-1},P=function(){return 0===o?-1:(--o,255&n[i++])},N=function(t,e){for(m&=v[g],g>0?m|=t<<g:m=t,g+=a;g>=8;)F(255&m,e),m>>=8,g-=8;if((h>c||w)&&(w?(c=S(a=u),w=!1):c=12==++a?4096:S(a)),t==s){for(;g>0;)F(255&m,e),m>>=8,g-=8;E(e)}};return b.apply(this,arguments),d},NeuQuant=function(){var t,e,n,r,o,i={},a=[],c=[],u=[],f=[],s=i.NeuQuant=function(t,i,a){var f,s;for(e=t,n=i,r=a,o=new Array(256),f=0;f<256;f++)o[f]=new Array(4),(s=o[f])[0]=s[1]=s[2]=(f<<12)/256,u[f]=256,c[f]=0},l=(i.map=function(t,e,n){var r,i,c,u,f,s,l;for(f=1e3,l=-1,i=(r=a[e])-1;r<256||i>=0;)r<256&&((c=(s=o[r])[1]-e)>=f?r=256:(r++,c<0&&(c=-c),(u=s[0]-t)<0&&(u=-u),(c+=u)<f&&((u=s[2]-n)<0&&(u=-u),(c+=u)<f&&(f=c,l=s[3])))),i>=0&&((c=e-(s=o[i])[1])>=f?i=-1:(i--,c<0&&(c=-c),(u=s[0]-t)<0&&(u=-u),(c+=u)<f&&((u=s[2]-n)<0&&(u=-u),(c+=u)<f&&(f=c,l=s[3]))));return l},i.process=function(){return function(){var o,i,a,c,u,s,l,h,w,m,g,v,B,b;for(n<1509&&(r=1),t=30+(r-1)/3,v=e,B=0,b=n,m=(g=n/(3*r))/100|0,h=1024,(l=(s=2048)>>6)<=1&&(l=0),o=0;o<l;o++)f[o]=h*(256*(l*l-o*o)/(l*l));for(w=n<1509?3:n%499!=0?1497:n%491!=0?1473:n%487!=0?1461:1509,o=0;o<g;)if(a=(255&v[B+0])<<4,c=(255&v[B+1])<<4,u=(255&v[B+2])<<4,i=y(a,c,u),p(h,i,a,c,u),0!==l&&d(l,i,a,c,u),(B+=w)>=b&&(B-=n),o++,0===m&&(m=1),o%m==0)for(h-=h/t,(l=(s-=s/30)>>6)<=1&&(l=0),i=0;i<l;i++)f[i]=h*(256*(l*l-i*i)/(l*l))}(),l(),function(){var t,e,n,r,i,c,u,f;for(u=0,f=0,t=0;t<256;t++){for(n=t,r=(i=o[t])[1],e=t+1;e<256;e++)(c=o[e])[1]<r&&(n=e,r=c[1]);if(c=o[n],t!=n&&(e=c[0],c[0]=i[0],i[0]=e,e=c[1],c[1]=i[1],i[1]=e,e=c[2],c[2]=i[2],i[2]=e,e=c[3],c[3]=i[3],i[3]=e),r!=u){for(a[u]=f+t>>1,e=u+1;e<r;e++)a[e]=t;u=r,f=t}}for(a[u]=f+255>>1,e=u+1;e<256;e++)a[e]=255}(),function(){for(var t=[],e=new Array(256),n=0;n<256;n++)e[o[n][3]]=n;for(var r=0,i=0;i<256;i++){var a=e[i];t[r++]=o[a][0],t[r++]=o[a][1],t[r++]=o[a][2]}return t}()},function(){var t;for(t=0;t<256;t++)o[t][0]>>=4,o[t][1]>>=4,o[t][2]>>=4,o[t][3]=t}),d=function(t,e,n,r,i){var a,c,u,s,l,d,p;for((u=e-t)<-1&&(u=-1),(s=e+t)>256&&(s=256),a=e+1,c=e-1,d=1;a<s||c>u;){if(l=f[d++],a<s){p=o[a++];try{p[0]-=l*(p[0]-n)/(1<<18),p[1]-=l*(p[1]-r)/(1<<18),p[2]-=l*(p[2]-i)/(1<<18)}catch(t){}}if(c>u){p=o[c--];try{p[0]-=l*(p[0]-n)/(1<<18),p[1]-=l*(p[1]-r)/(1<<18),p[2]-=l*(p[2]-i)/(1<<18)}catch(t){}}}},p=function(t,e,n,r,i){var a=o[e];a[0]-=t*(a[0]-n)/1024,a[1]-=t*(a[1]-r)/1024,a[2]-=t*(a[2]-i)/1024},y=function(t,e,n){var r,i,a,f,s,l,d,p,y,h;for(y=p=~(1<<31),d=l=-1,r=0;r<256;r++)(i=(h=o[r])[0]-t)<0&&(i=-i),(a=h[1]-e)<0&&(a=-a),i+=a,(a=h[2]-n)<0&&(a=-a),(i+=a)<p&&(p=i,l=r),(f=i-(c[r]>>12))<y&&(y=f,d=r),s=u[r]>>10,u[r]-=s,c[r]+=s<<10;return u[l]+=64,c[l]-=65536,d};return s.apply(this,arguments),i}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(0);let o,i,a;e.options={scale:.5,durationSec:3,keyCode:67,capturingFps:20,appFps:60,isAppendingImgElement:!0,quality:10,downloadFileName:null};let c=0,u=0,f=new Image,s=!1;function l(t){u++;const n=e.options.appFps/e.options.capturingFps;u<n||(u-=n,i||function(t){s?i=[]:(o=e.options.durationSec*e.options.capturingFps,i=y(o,()=>d(t)),a=y(o,()=>!1));document.addEventListener("keydown",t=>{t.keyCode==e.options.keyCode&&p()})}(t),s&&i.push(d(t)),i[c].drawImage(t,0,0),s||(a[c]=!0),c++,!s&&c>=o&&(c=0))}function d(t){const n=document.createElement("canvas");n.width=t.width*e.options.scale,n.height=t.height*e.options.scale;const r=n.getContext("2d");return r.scale(e.options.scale,e.options.scale),r}function p(){const t=new r;if(t.setRepeat(0),t.setDelay(1e3/e.options.capturingFps),t.setQuality(e.options.quality),t.start(),s)y(c-1,e=>{t.addFrame(i[e])});else{let e=c;y(o,()=>{a[e]&&t.addFrame(i[e]),++e>=o&&(e=0)})}if(t.finish(),null!=e.options.downloadFileName)return t.download(e.options.downloadFileName),null;const n=t.stream().getData(),u=document.createElement("img");return u.src="data:image/gif;base64,"+function(t){var e,n,r,o,i,a,c,u="",f=0,s=t.length,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";for(;f<s;)e=t.charCodeAt(f++),n=t.charCodeAt(f++),r=t.charCodeAt(f++),o=e>>2,i=(3&e)<<4|n>>4,a=(15&n)<<2|r>>6,c=63&r,isNaN(n)?a=c=64:isNaN(r)&&(c=64),u=u+l.charAt(o)+l.charAt(i)+l.charAt(a)+l.charAt(c);return u}(n),e.options.isAppendingImgElement&&document.getElementsByTagName("body")[0].appendChild(u),u}function y(t,e){let n=[];for(let r=0;r<t;r++)n.push(e(r));return n}e.capture=l,e.captureSvg=function(t){const n=e.options.appFps/e.options.capturingFps;if(u+1<n)return void u++;const r=(new XMLSerializer).serializeToString(t);f.src="data:image/svg+xml;base64,"+btoa(r),l(f)},e.end=p,e.setOptions=function(t){for(let n in t)e.options[n]=t[n];s=e.options.durationSec<=0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(1);let o,i,a,c,u,f,s=0;function l(){requestAnimationFrame(l),i.strokeStyle="#"+Math.floor(4*Math.sin(.01*s)+5)+Math.floor(4*Math.cos(.015*s)+5)+Math.floor(4*Math.sin(.018*s)+5),i.beginPath(),i.moveTo(128,128),i.lineTo(a,c),i.stroke(),c+=f,((a+=u)<0||a>256)&&(u*=-1),(c<0||c>256)&&(f*=-1),r.capture(o),s++}function d(t){return Math.floor(Math.random()*t)}window.onload=(()=>{(o=document.createElement("canvas")).width=256,o.height=256,document.body.appendChild(o),(i=o.getContext("2d")).fillStyle="#fff",i.fillRect(0,0,256,256),r.setOptions({scale:.5,durationSec:3,keyCode:67,capturingFps:20,appFps:60,isAppendingImgElement:!0,quality:10,downloadFileName:null}),a=d(256),c=d(256),u=(Math.random()+2)*(2*d(2)-1),f=(Math.random()+2)*(2*d(2)-1),requestAnimationFrame(l)})}]);