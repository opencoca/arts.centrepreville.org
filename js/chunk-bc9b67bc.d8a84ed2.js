(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc9b67bc"],{"35ae":function(t,e,r){},4612:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.$route.params?r("div",{attrs:{id:"content"}},[r("div",{attrs:{id:"header"}},[r("span",{staticClass:"connState"}),r("div",{attrs:{id:"save"}}),t._m(0),r("h1",[t._v(t._s(t.thisRooms.name))]),r("div",{staticClass:"modal-container"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.thisRooms.checked,expression:"thisRooms.checked"}],attrs:{id:"modal-toggle",type:"checkbox"},domProps:{checked:Array.isArray(t.thisRooms.checked)?t._i(t.thisRooms.checked,null)>-1:t.thisRooms.checked},on:{change:function(e){var r=t.thisRooms.checked,n=e.target,o=!!n.checked;if(Array.isArray(r)){var i=null,a=t._i(r,i);n.checked?a<0&&t.$set(t.thisRooms,"checked",r.concat([i])):a>-1&&t.$set(t.thisRooms,"checked",r.slice(0,a).concat(r.slice(a+1)))}else t.$set(t.thisRooms,"checked",o)}}}),r("button",[t._v("Onload Info")]),r("div",{staticClass:"modal-backdrop"},[r("div",{staticClass:"modal-content"},[r("label",{staticClass:"modal-close",attrs:{for:"modal-toggle"}},[t._v("x")]),r("h1",[t._v(t._s(t.thisRooms.name))]),r("div",[r("h2",[t._v(t._s(t.thisRooms.alt))]),r("h2",[t._v(t._s(t.thisRooms.meet))])]),r("label",{staticClass:"modal-close button",attrs:{for:"modal-toggle"}},[t._v("Close")])])])]),t._m(1),r("div",{staticStyle:{right:"1%",position:"fixed"},attrs:{id:"open"}},[r("a",{staticClass:"dot",staticStyle:{"background-color":"#ff5555"},attrs:{href:"https://meet.jit.si/"+t.thisRooms.meet,target:"meeting_iframe",id:"dot1",onclick:"breakout(this)"}},[r("img",{attrs:{src:"assets/home.svg"}})])])]),t._m(2),r("div",{staticClass:"window"},[r("div",{staticClass:"Open",attrs:{id:"app"}},[r("qrcode-vue",{staticClass:"open",attrs:{value:t.thisRooms.classroom.app_set[0].iframe,level:"H",size:500,id:"app"}})],1)])]):t._e()])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"logo"}},[r("img",{staticStyle:{height:"37px",padding:"6px 6px 6px 6px","margin-left":"60px"},attrs:{src:"assets/Preville-Logo-white.svg",alt:"Preville Logo",id:"logoImg"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{display:"none"}},[r("input",{attrs:{type:"radio",name:"app_state",value:"assets/show-window.svg",checked:"checked"}}),r("input",{attrs:{type:"radio",name:"app_state",value:"assets/fullscreen.svg"}}),r("input",{attrs:{type:"radio",name:"app_state",value:"assets/close-window.svg"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal",attrs:{id:"myModal"}},[r("div",{staticClass:"modal-content"},[r("p",[t._v("Faites tourner votre portable. ")]),r("img",{attrs:{src:"/assets/rotate-phone.svg"}}),r("p",[t._v("Please rotate your device.")])])])}],i=r("d39c"),a=r.n(i),s={name:"meet",title:"Préville - Preville",created:function(){},data:function(){return{app:"",config:{meetingSettings:"#jitsi_meet_external_api_id=0&amp;config.requireDisplayName=true&amp;config.startAudioMuted=6&amp;config.disableAudioLevels=true&amp;interfaceConfig.DISABLE_VIDEO_BACKGROUND=true&interfaceConfig.SHOW_CHROME_EXTENSION_BANNER=false&config.disableDeepLinking=true&setVideoQuality=720"}}},computed:{params:function(){return this.$route.params.meet?this.$route.params:{meet:"Foyer de Préville - Preville Lobby",alt:"Foyer de Préville - Preville Lobby",name:"Foyer de Préville - Preville Lobby",title:"Hall",frameposition:0,breakout_rooms:1}},app_set:function(){return this.$route.params.app_set?this.$route.params.app_set:[{name:"FAQ",logo:"https://centrepreville.org/wp-content/uploads/2020/12/Pre%CC%81villeLogoNEW-300x153.png",iframe:"https://centrepreville.org/camp-f-a-q-troubleshooting/"}]},meetingRooms:function(){return parseInt(this.params.breakout_rooms)},thisRooms:function(){return this.$parent.rooms.find(t=>t.meet==this.$route.params.meet)}},components:{QrcodeVue:a.a}},u=s,l=(r("9d65"),r("2877")),h=Object(l["a"])(u,n,o,!1,null,"10ef93d4",null);e["default"]=h.exports},"9d65":function(t,e,r){"use strict";r("35ae")},d39c:function(t,e,r){
/*!
 * qrcode.vue v3.2.2
 * A Vue.js component to generate QRCode.
 * © 2017-2021 @scopewu(https://github.com/scopewu)
 * MIT License.
 */
(function(e,n){t.exports=n(r("2b0e"))})(0,(function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var e=function(){return e=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},e.apply(this,arguments)},r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8};function n(t){this.mode=r.MODE_8BIT_BYTE,this.data=t}n.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}};var o=n,i={L:1,M:0,Q:3,H:2};function a(t,e){this.totalCount=t,this.dataCount=e}a.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],a.getRSBlocks=function(t,e){var r=a.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,o=new Array,i=0;i<n;i++)for(var s=r[3*i+0],u=r[3*i+1],l=r[3*i+2],h=0;h<s;h++)o.push(new a(u,l));return o},a.getRsBlockTable=function(t,e){switch(e){case i.L:return a.RS_BLOCK_TABLE[4*(t-1)+0];case i.M:return a.RS_BLOCK_TABLE[4*(t-1)+1];case i.Q:return a.RS_BLOCK_TABLE[4*(t-1)+2];case i.H:return a.RS_BLOCK_TABLE[4*(t-1)+3];default:return}};var s=a;function u(){this.buffer=new Array,this.length=0}u.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};for(var l=u,h={glog:function(t){if(t<1)throw new Error("glog("+t+")");return h.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return h.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},c=0;c<8;c++)h.EXP_TABLE[c]=1<<c;for(c=8;c<256;c++)h.EXP_TABLE[c]=h.EXP_TABLE[c-4]^h.EXP_TABLE[c-5]^h.EXP_TABLE[c-6]^h.EXP_TABLE[c-8];for(c=0;c<255;c++)h.LOG_TABLE[h.EXP_TABLE[c]]=c;var f=h;function d(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var r=0;while(r<t.length&&0==t[r])r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}d.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<t.getLength();n++)e[r+n]^=f.gexp(f.glog(this.get(r))+f.glog(t.get(n)));return new d(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=f.glog(this.get(0))-f.glog(t.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<t.getLength();n++)r[n]^=f.gexp(f.glog(t.get(n))+e);return new d(r,0).mod(t)}};var g=d,m={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},v={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(v.getBCHDigit(e)-v.getBCHDigit(v.G15)>=0)e^=v.G15<<v.getBCHDigit(e)-v.getBCHDigit(v.G15);return(t<<10|e)^v.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(v.getBCHDigit(e)-v.getBCHDigit(v.G18)>=0)e^=v.G18<<v.getBCHDigit(e)-v.getBCHDigit(v.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return v.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case m.PATTERN000:return(e+r)%2==0;case m.PATTERN001:return e%2==0;case m.PATTERN010:return r%3==0;case m.PATTERN011:return(e+r)%3==0;case m.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case m.PATTERN101:return e*r%2+e*r%3==0;case m.PATTERN110:return(e*r%2+e*r%3)%2==0;case m.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new g([1],0),r=0;r<t;r++)e=e.multiply(new g([1,f.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:return 8;case r.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var o=0;o<e;o++){for(var i=0,a=t.isDark(n,o),s=-1;s<=1;s++)if(!(n+s<0||e<=n+s))for(var u=-1;u<=1;u++)o+u<0||e<=o+u||0==s&&0==u||a==t.isDark(n+s,o+u)&&i++;i>5&&(r+=3+i-5)}for(n=0;n<e-1;n++)for(o=0;o<e-1;o++){var l=0;t.isDark(n,o)&&l++,t.isDark(n+1,o)&&l++,t.isDark(n,o+1)&&l++,t.isDark(n+1,o+1)&&l++,0!=l&&4!=l||(r+=3)}for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);var h=0;for(o=0;o<e;o++)for(n=0;n<e;n++)t.isDark(n,o)&&h++;var c=Math.abs(100*h/e/e-50)/5;return r+=10*c,r}},p=v;function C(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var E=C.prototype;E.addData=function(t){var e=new o(t);this.dataList.push(e),this.dataCache=null},E.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},E.getModuleCount=function(){return this.moduleCount},E.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=s.getRSBlocks(t,this.errorCorrectLevel),r=new l,n=0,o=0;o<e.length;o++)n+=e[o].dataCount;for(o=0;o<this.dataList.length;o++){var i=this.dataList[o];r.put(i.mode,4),r.put(i.getLength(),p.getLengthInBits(i.mode,t)),i.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},E.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=C.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},E.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},E.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=p.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},E.createMovieClip=function(t,e,r){var n=t.createEmptyMovieClip(e,r),o=1;this.make();for(var i=0;i<this.modules.length;i++)for(var a=i*o,s=0;s<this.modules[i].length;s++){var u=s*o,l=this.modules[i][s];l&&(n.beginFill(0,100),n.moveTo(u,a),n.lineTo(u+o,a),n.lineTo(u+o,a+o),n.lineTo(u,a+o),n.endFill())}return n},E.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},E.setupPositionAdjustPattern=function(){for(var t=p.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],o=t[r];if(null==this.modules[n][o])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[n+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},E.setupTypeNumber=function(t){for(var e=p.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},E.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=p.getBCHTypeInfo(r),o=0;o<15;o++){var i=!t&&1==(n>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!t&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},E.mapData=function(t,e){for(var r=-1,n=this.moduleCount-1,o=7,i=0,a=this.moduleCount-1;a>0;a-=2){6==a&&a--;while(1){for(var s=0;s<2;s++)if(null==this.modules[n][a-s]){var u=!1;i<t.length&&(u=1==(t[i]>>>o&1));var l=p.getMask(e,n,a-s);l&&(u=!u),this.modules[n][a-s]=u,o--,-1==o&&(i++,o=7)}if(n+=r,n<0||this.moduleCount<=n){n-=r,r=-r;break}}}},C.PAD0=236,C.PAD1=17,C.createData=function(t,e,r){for(var n=s.getRSBlocks(t,e),o=new l,i=0;i<r.length;i++){var a=r[i];o.put(a.mode,4),o.put(a.getLength(),p.getLengthInBits(a.mode,t)),a.write(o)}var u=0;for(i=0;i<n.length;i++)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*u+")");o.getLengthInBits()+4<=8*u&&o.put(0,4);while(o.getLengthInBits()%8!=0)o.putBit(!1);while(1){if(o.getLengthInBits()>=8*u)break;if(o.put(C.PAD0,8),o.getLengthInBits()>=8*u)break;o.put(C.PAD1,8)}return C.createBytes(o,n)},C.createBytes=function(t,e){for(var r=0,n=0,o=0,i=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var u=e[s].dataCount,l=e[s].totalCount-u;n=Math.max(n,u),o=Math.max(o,l),i[s]=new Array(u);for(var h=0;h<i[s].length;h++)i[s][h]=255&t.buffer[h+r];r+=u;var c=p.getErrorCorrectPolynomial(l),f=new g(i[s],c.getLength()-1),d=f.mod(c);a[s]=new Array(c.getLength()-1);for(h=0;h<a[s].length;h++){var m=h+d.getLength()-a[s].length;a[s][h]=m>=0?d.get(m):0}}var v=0;for(h=0;h<e.length;h++)v+=e[h].totalCount;var C=new Array(v),E=0;for(h=0;h<n;h++)for(s=0;s<e.length;s++)h<i[s].length&&(C[E++]=i[s][h]);for(h=0;h<o;h++)for(s=0;s<e.length;s++)h<a[s].length&&(C[E++]=a[s][h]);return C};var _=C,w={L:1,M:0,Q:3,H:2},L=function(t,e){e=e||{};var r=new _(e.typeNumber||-1,e.errorCorrectLevel||w.H);return r.addData(t),r.make(),r};L.ErrorCorrectLevel=w;var P=L,A="H",T=function(){try{(new Path2D).addPath(new Path2D)}catch(t){return!1}return!0}();function y(t,e){return new P(t,{typeNumber:-1,errorCorrectLevel:e})}function B(t){return t in P.ErrorCorrectLevel}function k(t){for(var e="",r=0;r<t.length;r++){var n=t.charCodeAt(r);n<128?e+=String.fromCharCode(n):n<2048?(e+=String.fromCharCode(192|n>>6),e+=String.fromCharCode(128|63&n)):n<55296||n>=57344?(e+=String.fromCharCode(224|n>>12),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|63&n)):(r++,n=65536+((1023&n)<<10|1023&t.charCodeAt(r)),e+=String.fromCharCode(240|n>>18),e+=String.fromCharCode(128|n>>12&63),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|63&n))}return e}function b(t,e){void 0===e&&(e=0);var r=[];return t.forEach((function(t,n){var o=null;t.forEach((function(i,a){if(!i&&null!==o)return r.push("M"+(o+e)+" "+(n+e)+"h"+(a-o)+"v1H"+(o+e)+"z"),void(o=null);if(a!==t.length-1)i&&null===o&&(o=a);else{if(!i)return;null===o?r.push("M"+(a+e)+","+(n+e)+" h1v1H"+(a+e)+"z"):r.push("M"+(o+e)+","+(n+e)+" h"+(a+1-o)+"v1H"+(o+e)+"z")}}))})),r.join("")}var D={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:A,validator:function(t){return B(t)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},N=e(e({},D),{renderAs:{type:String,required:!1,default:"canvas",validator:function(t){return["canvas","svg"].indexOf(t)>-1}}}),R=t.defineComponent({render:function(){var e=this,r=e.size,n=e.background,o=e.foreground,i=e.numCells,a=e.fgPath;return t.h("svg",{width:r,height:r,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+i+" "+i},[t.h("path",{fill:n,d:"M0,0 h"+i+"v"+i+"H0z"}),t.h("path",{fill:o,d:a})])},props:D,data:function(){return{numCells:0,fgPath:""}},created:function(){this.generate()},updated:function(){this.generate()},methods:{generate:function(){var t=this,e=t.value,r=t.level,n=t.margin,o=y(k(e),P.ErrorCorrectLevel[r]).modules;this.numCells=o.length+2*n,this.fgPath=b(o,n)}}}),M=t.defineComponent({render:function(){var e=this.size;return t.h("canvas",{style:{width:e+"px",height:e+"px"}})},props:D,mounted:function(){this.generate()},updated:function(){this.generate()},methods:{generate:function(){var t=this,e=t.value,r=t.level,n=t.size,o=t.margin,i=t.background,a=t.foreground,s=y(k(e),P.ErrorCorrectLevel[r]).modules,u=s.length+2*o,l=this.$el;if(l){var h=l.getContext("2d");if(h){var c=window.devicePixelRatio||1,f=n/u*c;l.height=l.width=n*c,h.scale(f,f),h.fillStyle=i,h.fillRect(0,0,u,u),h.fillStyle=a,T?h.fill(new Path2D(b(s,o))):s.forEach((function(t,e){t.forEach((function(t,r){t&&h.fillRect(r+o,e+o,1,1)}))}))}}}}}),O=t.defineComponent({render:function(){var e=this.$props,r=e.renderAs,n=e.value,o=e.size,i=e.margin,a=e.level,s=e.background,u=e.foreground,l=o>>>0,h=i>>>0,c=B(a)?a:A;return t.h("svg"===r?R:M,{value:n,size:l,margin:h,level:c,background:s,foreground:u})},props:N});return O}))}}]);
//# sourceMappingURL=chunk-bc9b67bc.d8a84ed2.js.map