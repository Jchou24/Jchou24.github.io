(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{320:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var a=i(114),n=i.n(a),r=(i(80),i(5));function s(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},a="xs"==Object(r.h)()?n()("nav.nav-header").height()+10:n()("div.article").offset().top;n()("div.article").stop(),n()("div.article").animate({scrollTop:t-a},function(t){var e=0;return e=0<=t&&t<500?500:500<=t&&t<1500?800:1500<=t&&t<2500?1300:2e3,"xs"==Object(r.h)()&&n()("div.sidebar").hasClass("active-display")&&(e=0),e}(Math.abs(t-e)),"easeOutExpo",i)}},325:function(t,e,i){},326:function(t,e,i){"use strict";i(382)("trim",function(t){return function(){return t(this,3)}})},327:function(t,e,i){},328:function(t,e,i){},329:function(t,e,i){},330:function(t,e,i){},346:function(t,e,i){"use strict";i(7),i(14);var a=i(15),n={name:"BackTopButton",components:{},props:{is_active:{type:Boolean,default:!1}},data:function(){return{}},computed:{},methods:{},mounted:function(){},updated:function(){},destroyed:function(){}},r=(i(409),i(13)),s=Object(r.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{mode:"out-in","enter-active-class":"animated fadeInRight fast","leave-active-class":"animated fadeOutRight fast"}},[t.is_active?i("div",{staticClass:"back-top-button",on:{click:function(e){return t.$emit("click")}}},[i("i",{staticClass:"material-icons"},[t._v("expand_less")])]):t._e()])},[],!1,null,"cc2429a0",null).exports,o=i(80),c=i(113),l=i.n(c),u=i(381),_=i(383),h=i(5),d=i(320),f=i(411),p={name:"MainContentLayout",props:{is_minimal_init:{type:Boolean,default:!1}},components:{BackTopButton:s},data:function(){return{scroller_setting:{sub_target:["pre","div.vuepress-flowchart"]},is_active_BackTopButton:!1}},computed:{is_nav_header_active:{get:function(){return this.$store.state.layout.is_nav_header_active}},is_sidebar_active:{get:function(){return this.$store.state.layout.is_sidebar_active}},is_app_first_enter:{get:function(){return this.$store.state.layout.is_app_first_enter}}},methods:Object(a.a)({back_to_top:function(){Object(d.a)(0,this.last_scroll_top)},search_scroll_to_hash:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,i=this;return!!(e=e||i.$route.hash)&&(setTimeout(function(){var t=new u.a("div.main-content").fit();_.a.search_scroll_to_hash(i,e,t)},t),!0)},set_is_nav_header_active:function(t){"xs"==Object(h.h)()&&0==this.is_sidebar_active&&(t>this.last_scroll_top?(this.set_layout({key:"is_nav_header_active",val:!1}),f()):(this.set_layout({key:"is_nav_header_active",val:!0}),f()))},set_scroll_position:function(){if(this.$store.state.layout.is_onpopstate){this.set_layout({key:"is_onpopstate",val:!1});var t=this.$store.state.layout.scrollBehavior[this.$route.path];t&&(document.querySelector("div.article").scrollTop=t.scrollTop)}},on_scroll:l()(function(t){var e=t.target.scrollTop;this.set_is_nav_header_active(e),this.is_active_BackTopButton=e<this.last_scroll_top&&e>2*document.querySelector("div.article").clientHeight,this.last_scroll_top=e<=0?0:e},200),on_anchor_click:function(t){this.search_scroll_to_hash(0,t.target.hash)},init:function(){this.is_minimal_init||(this.set_layout({key:"is_nav_header_active",val:!0}),this.init_scroll()),this.minimal_init()},init_scroll:function(){var t=this;if(t.$store.state.layout.is_onpopstate)t.set_scroll_position();else{var e=1500;t.is_app_first_enter&&(e=t.is_sidebar_active?2e3:1500),t.search_scroll_to_hash(e)||setTimeout(function(){t.back_to_top()},300)}},minimal_init:function(){var t=this;t.recycle(),i.e(1).then(i.t.bind(null,1012,7)).then(function(e){e.default(t.$el,l()(function(){t.trigger_article_resize()},500))}),document.querySelectorAll("div.article").forEach(function(e){return e.addEventListener("scroll",t.on_scroll)}),setTimeout(function(){document.querySelectorAll("a[href^='#']").forEach(function(e){return e.addEventListener("click",t.on_anchor_click)})},1e3),t.trigger_refresh_root_class(),t.trigger_main_content_mounted()},recycle:function(){var t=this;document.querySelectorAll("div.article").forEach(function(e){return e.removeEventListener("scroll",t.on_scroll)}),document.querySelectorAll("a[href^='#']").forEach(function(e){return e.removeEventListener("click",t.on_anchor_click)})}},Object(o.c)("layout",["trigger_refresh_root_class","trigger_article_resize","trigger_main_content_mounted","set_layout"])),watch:{},mounted:function(){var t=this;t.$nextTick(function(){t.init()})},updated:function(){var t=this;t.$nextTick(function(){t.trigger_refresh_root_class()})},beforeDestroy:function(){this.recycle()}},v=(i(412),i(413),Object(r.a)(p,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-content"},[e("div",{directives:[{name:"scroller",rawName:"v-scroller.noself.sub_target",value:this.scroller_setting,expression:"scroller_setting",modifiers:{noself:!0,sub_target:!0}}],ref:"article",staticClass:"article",class:{sidebar_disactive:!this.is_sidebar_active}},[e("div",{staticClass:"hidden-nav-header"}),this._v(" "),this._t("default")],2),this._v(" "),e("BackTopButton",{attrs:{is_active:this.is_active_BackTopButton},on:{click:this.back_to_top}})],1)},[],!1,null,"727b83fa",null));e.a=v.exports},381:function(t,e,i){"use strict";i.d(e,"a",function(){return d});i(7),i(14);var a=i(11),n=(i(326),i(116)),r=i.n(n),s=(i(40),i(47),i(29)),o=i.n(s),c=i(61),l=i(62),u=i(114),_=i.n(u),h=i(5),d=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;Object(c.a)(this,t),this.element=document.querySelector(e),this.is_set_id=i||!1,this.header_tags=[];for(var n=1;n<=a;n++)this.header_tags.push("h"+n)}return Object(l.a)(t,[{key:"_is_h",value:function(t){if(t&&t.localName){var e=!0,i=!1,a=void 0;try{for(var n,r=o()(this.header_tags);!(e=(n=r.next()).done);e=!0){var s=n.value;if(t.localName.includes(s))return!0}}catch(t){i=!0,a=t}finally{try{e||null==r.return||r.return()}finally{if(i)throw a}}}return!1}},{key:"_iter_child",value:function(t){var e=[];if(t){if(this._is_h(t)){var i=Object(h.j)(),n=t.getAttribute("id")?t.getAttribute("id"):i;this.is_set_id&&(n=i),t.id=n,this.is_set_id&&(t.id=i),e.push({id:n,tag:t.localName,level:r()(t.localName.slice(-1)),title:_.a.trim(t.textContent)})}var s=!0,c=!1,l=void 0;try{for(var u,d=o()(t.childNodes);!(s=(u=d.next()).done);s=!0){var f=u.value;e.push.apply(e,Object(a.a)(this._iter_child(f)))}}catch(t){c=!0,l=t}finally{try{s||null==d.return||d.return()}finally{if(c)throw l}}}return e}},{key:"_count_chaptor",value:function(t){var e=[0,0,0,0,0,0],i=0;t.forEach(function(t){var a=t.level-1;e[a]+=1,i>a&&(e[i]=0),t.chaptor=[];for(var n=0;n<=a;n++)t.chaptor.push(e[n]);t.chaptor=t.chaptor.join(".")+".",i=a})}},{key:"fit",value:function(){var t=this._iter_child(this.element);return this._count_chaptor(t),t}}]),t}()},382:function(t,e,i){var a=i(8),n=i(39),r=i(16),s=i(410),o="["+s+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),u=function(t,e,i){var n={},o=r(function(){return!!s[t]()||"​"!="​"[t]()}),c=n[t]=o?e(_):s[t];i&&(n[i]=c),a(a.P+a.F*o,"String",n)},_=u.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},383:function(t,e,i){"use strict";i.d(e,"a",function(){return l});i(7),i(14),i(326),i(115),i(58);var a=i(61),n=i(62),r=i(44),s=i(114),o=i.n(s),c=i(320),l=function(){function t(){Object(a.a)(this,t)}return Object(n.a)(t,null,[{key:"parse",value:function(e,i){var a=e.query[i];return a?a.split(t.separator).filter(function(t){return t.length}):[]}},{key:"get_tag",value:function(e){return t.parse(e,"tag")}},{key:"get_category",value:function(e){return t.parse(e,"category")}},{key:"search_scroll_to_hash",value:function(t,e,i){if(e){var a=o.a.trim(decodeURI(e));if(a&&i&&(i.forEach(function(t){"#"+o.a.trim(t.title)==a&&(a="#"+t.id)}),o()(a).length>0)){var n=o()("article.article-content").position().top-document.querySelector("article.article-content").offsetTop;Object(c.a)(o()(a).offset().top-n,o()("div.article").scrollTop(),function(){t.$store.commit("layout/set_layout",{is_nav_header_active:!0})})}}}}]),t}();Object(r.a)(l,"separator",",")},406:function(t,e,i){"use strict";var a={name:"SearchMainContent",components:{MainContentLayout:i(346).a},props:{},data:function(){return{}},computed:{},methods:{},beforeMount:function(){this.$options.components.Search=function(){return Promise.all([i.e(0),i.e(2),i.e(4),i.e(5),i.e(61)]).then(i.bind(null,1027))}},mounted:function(){},updated:function(){},destroyed:function(){}},n=i(13),r=Object(n.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("MainContentLayout",{staticClass:"search",attrs:{is_minimal_init:!0}},[e("Search")],1)},[],!1,null,"334850e7",null);e.a=r.exports},409:function(t,e,i){"use strict";var a=i(325);i.n(a).a},410:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},411:function(t,e,i){"use strict";t.exports=r,t.exports.isMobile=r;var a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;function r(t){t||(t={});var e=t.ua;return e||"undefined"==typeof navigator||(e=navigator.userAgent),e&&e.headers&&"string"==typeof e.headers["user-agent"]&&(e=e.headers["user-agent"]),"string"==typeof e&&(t.tablet?n.test(e):a.test(e))}},412:function(t,e,i){"use strict";var a=i(327);i.n(a).a},413:function(t,e,i){"use strict";var a=i(328);i.n(a).a},414:function(t,e,i){"use strict";var a=i(329);i.n(a).a},415:function(t,e,i){"use strict";var a=i(330);i.n(a).a},603:function(t,e,i){"use strict";i.r(e);var a=i(15),n=i(80),r=i(113),s=i.n(r),o=i(5),c=i(406),l={name:"BaseLayout",props:{root_class:{type:String,default:""},is_search_page:{type:Boolean}},data:function(){return{applied_root_class:"",is_previous_search_page:!1,current_screen_size:""}},components:{SearchMainContent:c.a},computed:{is_displayer_active:{get:function(){return this.$store.state.layout.is_displayer_active}},is_sidebar_active:{get:function(){return this.$store.state.layout.is_sidebar_active}},is_app_first_enter:{get:function(){return this.$store.state.layout.is_app_first_enter}},content_appear_active_class:{get:function(){return this.is_sidebar_active?"animated zoomIn delay-1s":"animated zoomIn delay-500ms"}},content_enter_active_class:{get:function(){return this.is_previous_search_page?"animated zoomIn delay-300ms":"animated zoomIn"}}},methods:Object(a.a)({init:function(){},init_once:function(){var t=this;t.current_screen_size=Object(o.h)(),i.e(1).then(i.t.bind(null,1012,7)).then(function(e){e.default(document.querySelector("#app"),s()(function(){t.trigger_app_resize(),t.current_screen_size=Object(o.h)()},500))}),i.e(2).then(i.t.bind(null,518,7)).then(function(t){})},after_MainContentLayout_updated:function(){this.applied_root_class=this.root_class,this.set_layout({key:"is_app_first_enter",val:!1})},set_is_sidebar_active:function(){this.set_layout({key:"is_sidebar_active",val:"l"==Object(o.h)()||"xl"==Object(o.h)()})}},Object(n.c)("layout",["trigger_app_resize","set_layout","trigger_main_content_mounted"])),watch:{"$route.path":function(t,e){this.init(),this.is_previous_search_page="/search/"==e&&"/search/"!=t,"xs"==Object(o.h)()&&this.set_layout({key:"is_sidebar_active",val:!1})},"$store.state.layout.refresh_root_class":function(){this.after_MainContentLayout_updated()},is_search_page:function(){var t=this;setTimeout(function(){t.trigger_main_content_mounted()},500)},current_screen_size:function(t,e){t!=e&&this.set_is_sidebar_active()}},beforeMount:function(){this.set_is_sidebar_active()},mounted:function(){this.init_once(),this.init()}},u=(i(414),i(415),i(13)),_=Object(u.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"theme-container",class:t.applied_root_class},[i("transition",{attrs:{appear:"","enter-active-class":"animated fadeInDown"}},[t._t("nav")],2),t._v(" "),i("div",{key:"1",staticClass:"content animated fadeIn",class:{"active-displayer":t.is_displayer_active,"disactive-displayer":!t.is_displayer_active}},[i("transition",{attrs:{appear:"",mode:"out-in","appear-active-class":"animated fadeInLeft delay-700ms","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutLeft"}},[t._t("sidebar")],2),t._v(" "),i("transition",{attrs:{mode:"out-in",appear:"",name:"content","appear-active-class":t.content_appear_active_class,"enter-active-class":t.content_enter_active_class,"leave-active-class":"animated fadeOut fastest"}},[t.is_search_page?t._e():t._t("content")],2),t._v(" "),i("transition",{attrs:{mode:"out-in",name:"search",appear:"","appear-active-class":t.content_appear_active_class,"enter-active-class":"animated zoomIn delay-500ms","leave-active-class":"animated fadeOutRight"}},[i("SearchMainContent",{directives:[{name:"show",rawName:"v-show",value:t.is_search_page,expression:"is_search_page"}]})],1)],1)],1)},[],!1,null,"e9ac11a2",null);e.default=_.exports}}]);