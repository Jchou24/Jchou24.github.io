(window.webpackJsonp=window.webpackJsonp||[]).push([[56,61],{1034:function(t,e,n){"use strict";n.r(e);var a={name:"SWUpdateBotton",components:{SWUpdatePopup:n(600).default}},o=(n(668),n(13)),u=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){e.enabled;var a=e.reload,o=e.message,u=e.buttonText;return n("div",{staticClass:"my-sw-update-popup"},[t._v("\n        "+t._s(o)),n("br"),t._v(" "),n("button",{on:{click:a}},[t._v(t._s(u))])])}}])})},[],!1,null,null,null);e.default=u.exports},332:function(t,e,n){},438:function(t,e,n){"use strict";var a=n(332);n.n(a).a},439:function(t,e,n){},600:function(t,e,n){"use strict";n.r(e);var a=n(45),o=n(1);const u={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var s={data:function(){return{rawPopupConfig:!0,updateEvent:null}},created:function(){a.a.$on("sw-updated",this.onSWUpdated),this.rawPopupConfig=u},computed:{popupConfig:function(){return Object(o.h)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||u["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||u["/"].buttonText}},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then(function(){location.reload(!0)}),this.updateEvent=null)}}},i=(n(438),n(13)),p=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)},[],!1,null,"ef6a919a",null);e.default=p.exports},668:function(t,e,n){"use strict";var a=n(439);n.n(a).a}}]);