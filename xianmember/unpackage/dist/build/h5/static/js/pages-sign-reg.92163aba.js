(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sign-reg"],{"0fc3":function(e,t,i){var n=i("537a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("7973e39f",n,!0,{sourceMap:!1,shadowMode:!1})},3420:function(e,t,i){"use strict";var n=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("36fb")),o=n(i("66e3")),s={data:function(){return{parentId:"",userPhone:"",userPass:"",checkCode:"",userPass_2:"",checkcode_btn:"获取验证码",timecount:60,license:!1}},onLoad:function(e){a.default.isEmpty(e.parentId)||(this.parentId=e.parentId),uni.removeStorageSync("token")},methods:{btnLicense:function(e){this.license=!this.license},goIndex:function(){uni.navigateTo({url:"/pages/sign/sign"})},goLicense:function(){uni.navigateTo({url:"/pages/sign/license"})},GetCheckCode:function(){var e=this;if(a.default.isEmpty(this.userPhone)||11!=e.userPhone.length)return uni.showModal({title:"信息提示",content:"请输入正确的手机号",showCancel:!1}),e.checkcode_btn="获取验证码",void(e.timecount=60);uni.showLoading({title:"请等待..."}),uni.request({url:e.ApiGateWay+"/sale/message/GetCheckCode?type=1&phone="+e.userPhone,method:"POST",success:function(t){uni.hideLoading(),a.default.CheckData(t)?e.GetCode():uni.showModal({title:"信息提示",content:t.data.errorMessage,showCancel:!1})},fail:function(){uni.hideLoading(),uni.showModal({title:"信息提示",content:"网络错误",showCancel:!1})}})},GetCode:function(){var e=this;0==this.timecount?(this.checkcode_btn="获取验证码",this.timecount=60):(e.checkcode_btn=e.timecount+"秒后重发",e.timecount--,setTimeout((function(){e.GetCode()}),1e3))},goReg:function(){var e=this;if(a.default.isEmpty(this.userPhone)||11!=this.userPhone.length)uni.showToast({title:"请输入正确的手机号",icon:"none"});else if(a.default.isEmpty(this.checkCode)||6!=this.checkCode.length)uni.showToast({title:"请输入6位验证码",icon:"none"});else if(a.default.isEmpty(this.userPass)||this.userPass.length<6)uni.showToast({title:"请输入6位或以上密码",icon:"none"});else if(this.userPass==this.userPass_2)if(this.license){var t=o.default.hex_md5(this.userPass),i={userPhone:e.userPhone,userPass:t,checkCode:e.checkCode,appId:e.appId,parentId:e.parentId};uni.request({url:e.ApiGateWay+"/sale/Member/Register",data:i,dataType:"json",method:"POST",success:function(e){a.default.CheckData(e)?uni.showModal({title:"信息提示",content:"注册成功,去登录",showCancel:!1,success:function(e){e.confirm&&uni.reLaunch({url:"/pages/sign/sign"})}}):uni.showModal({title:"出错了",content:e.data.errorMessage,showCancel:!1})}})}else uni.showToast({title:"请阅读并同意注册协议",icon:"none"});else uni.showToast({title:"两次密码输入不一致",icon:"none"})}}};t.default=s},"537a":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,"uni-page-body[data-v-b363e3bc]{background:#fafafa}.phone[data-v-b363e3bc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?24?%;margin-right:%?24?%;font-size:%?32?%;font-family:PingFang SC;font-weight:400;padding-bottom:%?18?%;color:#333;opacity:1}.phone_A[data-v-b363e3bc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?52?%;border-bottom:%?1?% solid #f5f5f5}.phone_A_S[data-v-b363e3bc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?52?%;border-bottom:%?1?% solid #f5f5f5}.input[data-v-b363e3bc]{font-size:%?28?%;font-family:PingFang SC;font-weight:400;color:#333;opacity:1}.getcode[data-v-b363e3bc]{\r\n\t/* font-size: 28upx;\r\n\tfont-family: PingFang SC;\r\n\tfont-weight: 400;\r\n\tpadding-right: 22upx;\r\n\tcolor: #F04F43;\r\n\topacity: 1; */width:%?200?%;height:%?88?%;background:-webkit-linear-gradient(274deg,#fa5c6c,#fa5c6c 7%,#ff5737);background:linear-gradient(176deg,#fa5c6c,#fa5c6c 7%,#ff5737);opacity:1;border-radius:%?8?%;line-height:%?88?%;text-align:center;font-size:%?30?%;font-family:PingFang SC;font-weight:400;color:#fff}.font_A[data-v-b363e3bc]{font-size:%?22?%;font-family:PingFang SC;font-weight:500;margin-left:%?88?%;margin-right:%?24?%;color:#666;opacity:1}.btn[data-v-b363e3bc]{width:%?702?%;height:%?88?%;background:-webkit-linear-gradient(274deg,#fa5c6c,#fa5c6c 7%,#ff5737);background:linear-gradient(176deg,#fa5c6c,#fa5c6c 7%,#ff5737);opacity:1;border-radius:%?8?%;line-height:%?88?%;text-align:center;font-size:%?36?%;font-family:PingFang SC;font-weight:400;margin-left:%?24?%;margin-right:%?24?%;margin-top:%?46?%;color:#fff;opacity:1}body.?%PAGE?%[data-v-b363e3bc]{background:#fafafa}",""]),e.exports=t},"66e3":function(e,t,i){"use strict";i("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=0,a=8;function o(e){return g(s(p(e),e.length*a))}function s(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var i=1732584193,n=-271733879,a=-1732584194,o=271733878,s=0;s<e.length;s+=16){var c=i,h=n,p=a,g=o;i=r(i,n,a,o,e[s+0],7,-680876936),o=r(o,i,n,a,e[s+1],12,-389564586),a=r(a,o,i,n,e[s+2],17,606105819),n=r(n,a,o,i,e[s+3],22,-1044525330),i=r(i,n,a,o,e[s+4],7,-176418897),o=r(o,i,n,a,e[s+5],12,1200080426),a=r(a,o,i,n,e[s+6],17,-1473231341),n=r(n,a,o,i,e[s+7],22,-45705983),i=r(i,n,a,o,e[s+8],7,1770035416),o=r(o,i,n,a,e[s+9],12,-1958414417),a=r(a,o,i,n,e[s+10],17,-42063),n=r(n,a,o,i,e[s+11],22,-1990404162),i=r(i,n,a,o,e[s+12],7,1804603682),o=r(o,i,n,a,e[s+13],12,-40341101),a=r(a,o,i,n,e[s+14],17,-1502002290),n=r(n,a,o,i,e[s+15],22,1236535329),i=l(i,n,a,o,e[s+1],5,-165796510),o=l(o,i,n,a,e[s+6],9,-1069501632),a=l(a,o,i,n,e[s+11],14,643717713),n=l(n,a,o,i,e[s+0],20,-373897302),i=l(i,n,a,o,e[s+5],5,-701558691),o=l(o,i,n,a,e[s+10],9,38016083),a=l(a,o,i,n,e[s+15],14,-660478335),n=l(n,a,o,i,e[s+4],20,-405537848),i=l(i,n,a,o,e[s+9],5,568446438),o=l(o,i,n,a,e[s+14],9,-1019803690),a=l(a,o,i,n,e[s+3],14,-187363961),n=l(n,a,o,i,e[s+8],20,1163531501),i=l(i,n,a,o,e[s+13],5,-1444681467),o=l(o,i,n,a,e[s+2],9,-51403784),a=l(a,o,i,n,e[s+7],14,1735328473),n=l(n,a,o,i,e[s+12],20,-1926607734),i=u(i,n,a,o,e[s+5],4,-378558),o=u(o,i,n,a,e[s+8],11,-2022574463),a=u(a,o,i,n,e[s+11],16,1839030562),n=u(n,a,o,i,e[s+14],23,-35309556),i=u(i,n,a,o,e[s+1],4,-1530992060),o=u(o,i,n,a,e[s+4],11,1272893353),a=u(a,o,i,n,e[s+7],16,-155497632),n=u(n,a,o,i,e[s+10],23,-1094730640),i=u(i,n,a,o,e[s+13],4,681279174),o=u(o,i,n,a,e[s+0],11,-358537222),a=u(a,o,i,n,e[s+3],16,-722521979),n=u(n,a,o,i,e[s+6],23,76029189),i=u(i,n,a,o,e[s+9],4,-640364487),o=u(o,i,n,a,e[s+12],11,-421815835),a=u(a,o,i,n,e[s+15],16,530742520),n=u(n,a,o,i,e[s+2],23,-995338651),i=d(i,n,a,o,e[s+0],6,-198630844),o=d(o,i,n,a,e[s+7],10,1126891415),a=d(a,o,i,n,e[s+14],15,-1416354905),n=d(n,a,o,i,e[s+5],21,-57434055),i=d(i,n,a,o,e[s+12],6,1700485571),o=d(o,i,n,a,e[s+3],10,-1894986606),a=d(a,o,i,n,e[s+10],15,-1051523),n=d(n,a,o,i,e[s+1],21,-2054922799),i=d(i,n,a,o,e[s+8],6,1873313359),o=d(o,i,n,a,e[s+15],10,-30611744),a=d(a,o,i,n,e[s+6],15,-1560198380),n=d(n,a,o,i,e[s+13],21,1309151649),i=d(i,n,a,o,e[s+4],6,-145523070),o=d(o,i,n,a,e[s+11],10,-1120210379),a=d(a,o,i,n,e[s+2],15,718787259),n=d(n,a,o,i,e[s+9],21,-343485551),i=f(i,c),n=f(n,h),a=f(a,p),o=f(o,g)}return Array(i,n,a,o)}function c(e,t,i,n,a,o){return f(h(f(f(t,e),f(n,o)),a),i)}function r(e,t,i,n,a,o,s){return c(t&i|~t&n,e,t,a,o,s)}function l(e,t,i,n,a,o,s){return c(t&n|i&~n,e,t,a,o,s)}function u(e,t,i,n,a,o,s){return c(t^i^n,e,t,a,o,s)}function d(e,t,i,n,a,o,s){return c(i^(t|~n),e,t,a,o,s)}function f(e,t){var i=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(i>>16);return n<<16|65535&i}function h(e,t){return e<<t|e>>>32-t}function p(e){for(var t=Array(),i=(1<<a)-1,n=0;n<e.length*a;n+=a)t[n>>5]|=(e.charCodeAt(n/a)&i)<<n%32;return t}function g(e){for(var t=n?"0123456789ABCDEF":"0123456789abcdef",i="",a=0;a<4*e.length;a++)i+=t.charAt(e[a>>2]>>a%4*8+4&15)+t.charAt(e[a>>2]>>a%4*8&15);return i}var v={hex_md5:o};t.default=v},a372:function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("uni-page-head",{attrs:{"uni-page-head-type":"default"}},[i("div",{staticClass:"uni-page-head",staticStyle:{background:"linear-gradient(90deg,#762f93,#e23b93,#f08300)",color:"rgb(255, 255, 255)"}},[i("div",{staticClass:"uni-page-head-hd"},[i("div",{staticClass:"uni-page-head-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goIndex.apply(void 0,arguments)}}},[i("i",{staticClass:"uni-btn-icon",staticStyle:{color:"rgb(255, 255, 255)","font-size":"27px"}},[e._v("")])])]),i("div",{staticClass:"uni-page-head-bd"},[i("div",{staticClass:"uni-page-head__title",staticStyle:{"font-size":"16px",opacity:"1"}},[e._v("用户注册")])])]),i("div",{staticClass:"uni-placeholder"})]),i("v-uni-view",{staticClass:"phone"},[i("v-uni-view",{staticStyle:{width:"100upx"}},[e._v("手机号")]),i("v-uni-view",{staticClass:"phone_A"},[i("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入手机号",maxlength:"11"},model:{value:e.userPhone,callback:function(t){e.userPhone=t},expression:"userPhone"}})],1)],1),i("v-uni-view",{staticClass:"phone",staticStyle:{"margin-top":"58upx"}},[i("v-uni-view",{staticStyle:{width:"100upx"}},[e._v("验证码")]),i("v-uni-view",{staticClass:"phone_A_S"},[i("v-uni-input",{staticClass:"input",attrs:{maxlength:"6",placeholder:"请输入验证码"},model:{value:e.checkCode,callback:function(t){e.checkCode=t},expression:"checkCode"}}),60==e.timecount?i("v-uni-view",{staticClass:"getcode",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.GetCheckCode.apply(void 0,arguments)}}},[e._v(e._s(e.checkcode_btn))]):i("v-uni-view",{staticClass:"getcode",staticStyle:{"background-color":"#666666"}},[e._v(e._s(e.checkcode_btn))])],1)],1),i("v-uni-view",{staticClass:"phone",staticStyle:{"margin-top":"74upx"}},[i("v-uni-view",{staticStyle:{width:"100upx"}},[e._v("密码")]),i("v-uni-view",{staticClass:"phone_A"},[i("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入新密码"},model:{value:e.userPass,callback:function(t){e.userPass=t},expression:"userPass"}})],1)],1),i("v-uni-view",{staticClass:"phone",staticStyle:{"margin-top":"58upx"}},[i("v-uni-view",{staticStyle:{width:"100upx"}}),i("v-uni-view",{staticClass:"phone_A"},[i("v-uni-input",{staticClass:"input",attrs:{placeholder:"请再次确认新密码"},model:{value:e.userPass_2,callback:function(t){e.userPass_2=t},expression:"userPass_2"}})],1)],1),i("v-uni-view",{staticClass:"phone",staticStyle:{"margin-top":"36upx","margin-left":"90upx","margin-right":"24upx"}},[i("v-uni-view",{staticClass:"font_A"},[i("v-uni-text",{staticStyle:{color:"#F56C6C"}},[e._v("注:")]),e._v("密码需要填6-20位字符，可由英文字母、数字组成，不能含空格")],1)],1),i("v-uni-view",{staticStyle:{"padding-left":"30upx"}},[i("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"cb",checked:e.license,color:"#F56C6C"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.btnLicense.apply(void 0,arguments)}}}),i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goLicense.apply(void 0,arguments)}}},[e._v("阅读并同意注册协议")])],1),i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goReg()}}},[e._v("确认")])],1)},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},a4a5:function(e,t,i){"use strict";i.r(t);var n=i("a372"),a=i("c802");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("c079");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"b363e3bc",null,!1,n["a"],s);t["default"]=r.exports},c079:function(e,t,i){"use strict";var n=i("0fc3"),a=i.n(n);a.a},c802:function(e,t,i){"use strict";i.r(t);var n=i("3420"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a}}]);