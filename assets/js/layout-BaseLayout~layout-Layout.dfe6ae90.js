(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{315:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var a=i(98),n=i.n(a),s=(i(67),i(3));function r(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},a="xs"==Object(s.h)()?n()("nav.nav-header").height()+10:n()("div.article").offset().top;n()("div.article").stop(),n()("div.article").animate({scrollTop:t-a},function(t){var e=0;return e=0<=t&&t<500?500:500<=t&&t<1500?800:1500<=t&&t<2500?1300:2e3,"xs"==Object(s.h)()&&n()("div.sidebar").hasClass("active-display")&&(e=0),e}(Math.abs(t-e)),"easeOutExpo",i)}},334:function(t,e,i){"use strict";i(7),i(10);var a=i(12),n={name:"BackTopButton",components:{},props:{is_active:{type:Boolean,default:!1}},data:function(){return{}},computed:{},methods:{},mounted:function(){},updated:function(){},destroyed:function(){}},s=(i(561),i(9)),r=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{mode:"out-in","enter-active-class":"animated fadeInRight fast","leave-active-class":"animated fadeOutRight fast"}},[t.is_active?i("div",{staticClass:"back-top-button",on:{click:function(e){return t.$emit("click")}}},[i("i",{staticClass:"material-icons"},[t._v("expand_less")])]):t._e()])},[],!1,null,"cc2429a0",null).exports,o=i(67),c=i(97),l=i.n(c),u=i(449),_=i(450),h=i(3),d=i(315),f=i(451),v={name:"MainContentLayout",props:{is_minimal_init:{type:Boolean,default:!1}},components:{BackTopButton:r},data:function(){return{scroller_setting:{sub_target:["pre","div.vuepress-flowchart"]},is_active_BackTopButton:!1}},computed:{is_nav_header_active:{get:function(){return this.$store.state.layout.is_nav_header_active}},is_sidebar_active:{get:function(){return this.$store.state.layout.is_sidebar_active}},is_app_first_enter:{get:function(){return this.$store.state.layout.is_app_first_enter}}},methods:Object(a.a)({back_to_top:function(){Object(d.a)(0,this.last_scroll_top)},search_scroll_to_hash:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,i=this;return!!(e=e||i.$route.hash)&&(setTimeout(function(){var t=new u.a("div.main-content").fit();_.a.search_scroll_to_hash(i,e,t)},t),!0)},set_is_nav_header_active:function(t){"xs"==Object(h.h)()&&0==this.is_sidebar_active&&(t>this.last_scroll_top?(this.set_layout({key:"is_nav_header_active",val:!1}),f()):(this.set_layout({key:"is_nav_header_active",val:!0}),f()))},set_scroll_position:function(){if(this.$store.state.layout.is_onpopstate){this.set_layout({key:"is_onpopstate",val:!1});var t=this.$store.state.layout.scrollBehavior[this.$route.path];t&&(document.querySelector("div.article").scrollTop=t.scrollTop)}},on_scroll:l()(function(t){var e=t.target.scrollTop;this.set_is_nav_header_active(e),this.is_active_BackTopButton=e<this.last_scroll_top&&e>2*document.querySelector("div.article").clientHeight,this.last_scroll_top=e<=0?0:e},200),on_anchor_click:function(t){this.search_scroll_to_hash(0,t.target.hash)},init:function(){this.is_minimal_init||(this.set_layout({key:"is_nav_header_active",val:!0}),this.init_scroll()),this.minimal_init()},init_scroll:function(){if(this.$store.state.layout.is_onpopstate)this.set_scroll_position();else{var t=1500;this.is_app_first_enter&&(t=this.is_sidebar_active?2e3:1500),this.search_scroll_to_hash(t)||this.back_to_top()}},minimal_init:function(){var t=this;t.recycle(),i.e(1).then(i.t.bind(null,967,7)).then(function(e){e.default(t.$el,l()(function(){t.trigger_article_resize()},500))}),document.querySelectorAll("div.article").forEach(function(e){return e.addEventListener("scroll",t.on_scroll)}),setTimeout(function(){document.querySelectorAll("a[href^='#']").forEach(function(e){return e.addEventListener("click",t.on_anchor_click)})},1e3),t.trigger_refresh_root_class(),t.trigger_main_content_mounted()},recycle:function(){var t=this;document.querySelectorAll("div.article").forEach(function(e){return e.removeEventListener("scroll",t.on_scroll)}),document.querySelectorAll("a[href^='#']").forEach(function(e){return e.removeEventListener("click",t.on_anchor_click)})}},Object(o.c)("layout",["trigger_refresh_root_class","trigger_article_resize","trigger_main_content_mounted","set_layout"])),watch:{},mounted:function(){var t=this;t.$nextTick(function(){t.init()})},updated:function(){var t=this;t.$nextTick(function(){t.trigger_refresh_root_class()})},beforeDestroy:function(){this.recycle()}},p=(i(562),i(563),Object(s.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-content"},[e("div",{directives:[{name:"scroller",rawName:"v-scroller.noself.sub_target",value:this.scroller_setting,expression:"scroller_setting",modifiers:{noself:!0,sub_target:!0}}],ref:"article",staticClass:"article",class:{sidebar_disactive:!this.is_sidebar_active}},[e("div",{staticClass:"hidden-nav-header"}),this._v(" "),this._t("default")],2),this._v(" "),e("BackTopButton",{attrs:{is_active:this.is_active_BackTopButton},on:{click:this.back_to_top}})],1)},[],!1,null,"0dfb0a27",null));e.a=p.exports},368:function(t,e,i){},370:function(t,e,i){},371:function(t,e,i){},372:function(t,e,i){},373:function(t,e,i){},449:function(t,e,i){"use strict";i.d(e,"a",function(){return d});i(7),i(10);var a=i(6),n=(i(314),i(105)),s=i.n(n),r=(i(32),i(40),i(20)),o=i.n(r),c=i(61),l=i(62),u=i(98),_=i.n(u),h=i(3),d=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;Object(c.a)(this,t),this.element=document.querySelector(e),this.is_set_id=i||!1,this.header_tags=[];for(var n=1;n<=a;n++)this.header_tags.push("h"+n)}return Object(l.a)(t,[{key:"_is_h",value:function(t){if(t&&t.localName){var e=!0,i=!1,a=void 0;try{for(var n,s=o()(this.header_tags);!(e=(n=s.next()).done);e=!0){var r=n.value;if(t.localName.includes(r))return!0}}catch(t){i=!0,a=t}finally{try{e||null==s.return||s.return()}finally{if(i)throw a}}}return!1}},{key:"_iter_child",value:function(t){var e=[];if(t){if(this._is_h(t)){var i=Object(h.j)(),n=t.getAttribute("id")?t.getAttribute("id"):i;this.is_set_id&&(n=i),t.id=n,this.is_set_id&&(t.id=i),e.push({id:n,tag:t.localName,level:s()(t.localName.slice(-1)),title:_.a.trim(t.textContent)})}var r=!0,c=!1,l=void 0;try{for(var u,d=o()(t.childNodes);!(r=(u=d.next()).done);r=!0){var f=u.value;e.push.apply(e,Object(a.a)(this._iter_child(f)))}}catch(t){c=!0,l=t}finally{try{r||null==d.return||d.return()}finally{if(c)throw l}}}return e}},{key:"_count_chaptor",value:function(t){var e=[0,0,0,0,0,0],i=0;t.forEach(function(t){var a=t.level-1;e[a]+=1,i>a&&(e[i]=0),t.chaptor=[];for(var n=0;n<=a;n++)t.chaptor.push(e[n]);t.chaptor=t.chaptor.join(".")+".",i=a})}},{key:"fit",value:function(){var t=this._iter_child(this.element);return this._count_chaptor(t),t}}]),t}()},450:function(t,e,i){"use strict";i.d(e,"a",function(){return l});i(7),i(10),i(314),i(147),i(47);var a=i(61),n=i(62),s=i(35),r=i(98),o=i.n(r),c=i(315),l=function(){function t(){Object(a.a)(this,t)}return Object(n.a)(t,null,[{key:"parse",value:function(e,i){var a=e.query[i];return a?a.split(t.separator).filter(function(t){return t.length}):[]}},{key:"get_tag",value:function(e){return t.parse(e,"tag")}},{key:"get_category",value:function(e){return t.parse(e,"category")}},{key:"search_scroll_to_hash",value:function(t,e,i){if(e){var a=o.a.trim(decodeURI(e));if(a&&i&&(i.forEach(function(t){"#"+o.a.trim(t.title)==a&&(a="#"+t.id)}),o()(a).length>0)){var n=o()("article.article-content").position().top-document.querySelector("article.article-content").offsetTop;Object(c.a)(o()(a).offset().top-n,o()("div.article").scrollTop(),function(){t.$store.commit("layout/set_layout",{is_nav_header_active:!0})})}}}}]),t}();Object(s.a)(l,"separator",",")},558:function(t,e,i){"use strict";var a={name:"SearchMainContent",components:{MainContentLayout:i(334).a},props:{},data:function(){return{}},computed:{},methods:{},beforeMount:function(){this.$options.components.Search=function(){return Promise.all([i.e(0),i.e(2),i.e(5),i.e(40)]).then(i.bind(null,979))}},mounted:function(){},updated:function(){},destroyed:function(){}},n=i(9),s=Object(n.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("MainContentLayout",{staticClass:"search",attrs:{is_minimal_init:!0}},[e("Search")],1)},[],!1,null,"334850e7",null);e.a=s.exports},561:function(t,e,i){"use strict";var a=i(368);i.n(a).a},562:function(t,e,i){"use strict";var a=i(370);i.n(a).a},563:function(t,e,i){"use strict";var a=i(371);i.n(a).a},564:function(t,e,i){"use strict";var a=i(372);i.n(a).a},565:function(t,e,i){"use strict";var a=i(373);i.n(a).a},966:function(t,e,i){"use strict";i.r(e);var a=i(12),n=i(67),s=i(97),r=i.n(s),o=i(3),c=i(558),l={name:"BaseLayout",props:{root_class:{type:String,default:""},is_search_page:{type:Boolean}},data:function(){return{applied_root_class:"",is_previous_search_page:!1,current_screen_size:""}},components:{SearchMainContent:c.a},computed:{is_displayer_active:{get:function(){return this.$store.state.layout.is_displayer_active}},is_sidebar_active:{get:function(){return this.$store.state.layout.is_sidebar_active}},is_app_first_enter:{get:function(){return this.$store.state.layout.is_app_first_enter}},content_appear_active_class:{get:function(){return this.is_sidebar_active?"animated zoomIn delay-1s":"animated zoomIn delay-500ms"}},content_enter_active_class:{get:function(){return this.is_previous_search_page?"animated zoomIn delay-300ms":"animated zoomIn"}}},methods:Object(a.a)({init:function(){},init_once:function(){var t=this;t.current_screen_size=Object(o.h)(),i.e(1).then(i.t.bind(null,967,7)).then(function(e){e.default(document.querySelector("#app"),r()(function(){t.trigger_app_resize(),t.current_screen_size=Object(o.h)()},500))}),i.e(2).then(i.t.bind(null,475,7)).then(function(t){})},after_MainContentLayout_updated:function(){this.applied_root_class=this.root_class,this.set_layout({key:"is_app_first_enter",val:!1})},set_is_sidebar_active:function(){this.set_layout({key:"is_sidebar_active",val:"l"==Object(o.h)()||"xl"==Object(o.h)()})}},Object(n.c)("layout",["trigger_app_resize","set_layout","trigger_main_content_mounted"])),watch:{"$route.path":function(t,e){this.init(),this.is_previous_search_page="/search/"==e&&"/search/"!=t,"xs"==Object(o.h)()&&this.set_layout({key:"is_sidebar_active",val:!1})},"$store.state.layout.refresh_root_class":function(){this.after_MainContentLayout_updated()},is_search_page:function(){var t=this;setTimeout(function(){t.trigger_main_content_mounted()},500)},current_screen_size:function(t,e){t!=e&&this.set_is_sidebar_active()}},beforeMount:function(){this.set_is_sidebar_active()},mounted:function(){this.init_once(),this.init()}},u=(i(564),i(565),i(9)),_=Object(u.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"theme-container",class:t.applied_root_class},[i("transition",{attrs:{appear:"","enter-active-class":"animated fadeInDown"}},[t._t("nav")],2),t._v(" "),i("div",{key:"1",staticClass:"content animated fadeIn",class:{"active-displayer":t.is_displayer_active,"disactive-displayer":!t.is_displayer_active}},[i("transition",{attrs:{appear:"",mode:"out-in","appear-active-class":"animated fadeInLeft delay-700ms","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutLeft"}},[t._t("sidebar")],2),t._v(" "),i("transition",{attrs:{mode:"out-in",appear:"",name:"content","appear-active-class":t.content_appear_active_class,"enter-active-class":t.content_enter_active_class,"leave-active-class":"animated fadeOut fastest"}},[t.is_search_page?t._e():t._t("content")],2),t._v(" "),i("transition",{attrs:{mode:"out-in",name:"search",appear:"","appear-active-class":t.content_appear_active_class,"enter-active-class":"animated zoomIn delay-500ms","leave-active-class":"animated fadeOutRight"}},[i("SearchMainContent",{directives:[{name:"show",rawName:"v-show",value:t.is_search_page,expression:"is_search_page"}]})],1)],1)],1)},[],!1,null,"e9ac11a2",null);e.default=_.exports}}]);