(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"2f98":function(t,n,e){"use strict";(function(t){e("6013"),e("921b");o(e("66fd"));var n=o(e("9e5f"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"4f4b":function(t,n,e){"use strict";var o=e("5bb0"),a=e.n(o);a.a},"5bb0":function(t,n,e){},"9e5f":function(t,n,e){"use strict";e.r(n);var o=e("de89"),a=e("fd5b");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("4f4b");var u=e("2877"),c=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,"3e381496",null);n["default"]=c.exports},c736:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("56a2"));function a(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{indicatorDots:!0,autoplay:!0,interval:5e3,duration:500,backgrounds:[],introList:[],notice:"",advList:[],showSubject:"",navigationBar_fiexd:!1}},onLoad:function(){this.getHomeList()},onPageScroll:function(t){t.scrollTop>800?this.navigationBar_fiexd=!0:this.navigationBar_fiexd=!1,console.log(t.scrollTop)},onShareAppMessage:function(t){var n=["博学教育，多才的捷径","点滴成长，我们陪在你身边"],e=Math.floor(Math.random()+.5);return console.log(e,"randomNum"),{title:n[e],path:"/pages/index/index",imageUrl:"../../static/share.jpg",success:function(t){console.log("转发回调",t)},fail:function(t){console.log("失败")}}},methods:{goConnact:function(){t.makePhoneCall({phoneNumber:"18862769971",success:function(t){console.log("调用成功!")},fail:function(t){console.log("调用失败!")}})},goDetail:function(){t.navigateTo({url:"/pages/detail/detail"})},getHomeList:function(){var t=this;o.default.getHomeList().then(function(n){200===n.statusCode&&(console.log(n),t.backgrounds=n.data.backgrounds,t.introList=n.data.introList,t.notice=n.data.notice,t.advList=n.data.advList,t.showSubject=n.data.showSubject),console.log(n)})},previewImg:function(n){t.previewImage({current:n,urls:[n]})}},computed:{imgHeight:function(){return.52*t.getSystemInfoSync().screenWidth}}};n.default=i}).call(this,e("543d")["default"])},de89:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},fd5b:function(t,n,e){"use strict";e.r(n);var o=e("c736"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a}},[["2f98","common/runtime","common/vendor"]]]);