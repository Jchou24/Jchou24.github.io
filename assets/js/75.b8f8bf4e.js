(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1034:function(e,t,i){"use strict";i.r(t);i(51),i(74),i(75),i(32),i(42),i(159),i(6),i(8);var n=i(21),s=i(107),o=i.n(s),r=(i(110),i(73)),c=i(383);function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}var a={name:"FullScreenButton",components:{},props:{},data:function(){return{}},watch:{},computed:{is_full_screen:{get:function(){return this.$store.state.layout.is_full_screen}}},methods:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(i,!0).forEach(function(t){Object(n.a)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({init:function(){this.recycle()},recycle:function(){},toggle_full_screen:function(){this.toggle_layout_is("is_full_screen"),this.$emit("clicked")}},Object(r.c)("layout",["toggle_layout_is"])),mounted:function(){},updated:function(){},beforeDestroy:function(){this.recycle()}},u=(i(678),i(20)),d=Object(u.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"FullScreenButton",on:{click:this.toggle_full_screen}},[this.is_full_screen?t("i",{staticClass:"material-icons"},[this._v("fullscreen_exit")]):t("i",{staticClass:"material-icons"},[this._v("fullscreen")])])},[],!1,null,"5a3f8971",null).exports,_={name:"ScreenRotateButton",components:{},props:{is_display_mobile_only:{type:Boolean,default:!0}},data:function(){return{}},watch:{},computed:{is_show:{get:function(){return!this.is_display_mobile_only||this.is_mobile()}}},methods:{init:function(){this.recycle()},recycle:function(){},clicked:function(){this.$emit("clicked")},is_mobile:function(){return t=!1,e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t;var e,t}},mounted:function(){},updated:function(){},beforeDestroy:function(){this.recycle()}};i(679);function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(i,!0).forEach(function(t){Object(n.a)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var m={name:"Slide",components:{FullScreenButton:d,ScreenRotateButton:Object(u.a)(_,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ScreenRotateButton",on:{click:this.clicked}},[this.is_show?t("i",{staticClass:"material-icons"},[this._v("screen_rotation")]):this._e()])},[],!1,null,"50b56806",null).exports,ResponsiveElement:i(387).a},props:{},data:function(){var e=this._uid,t=this.$store.state.slide[e];return console.log(this),console.log(e),console.log(t),{reveal:null,reveal_script_id:"reveal_script_id",reveal_menu_script_id:"reveal_menu_script_id",reveal_toolbar_script_id:"reveal_toolbar_script_id",is_slide_full_screen:!1,is_rotate_slide:!1,slide_info:f({indexh:0,indexv:0,indexf:0},t)}},computed:{is_layout_full_screen:{get:function(){return this.$store.state.layout.is_full_screen||!1}},is_slide_active_full_screen:{get:function(){return this.is_layout_full_screen&&this.is_slide_full_screen}}},methods:f({init:function(){this.recycle(),this.set_table_width(),this.init_slide(),setTimeout(function(){},500)},init_slide:function(){var e=this,t=i(508);e.reveal=t,e.regist_reveal(t),e.init_plugins(t),t.initialize({slideNumber:!0,width:"100%",height:"100%",touch:!1,margin:0,dependencies:[]}),console.log(e.indexh,e.indexv,e.indexf),t.addEventListener("slidechanged",function(t){console.log(t),e.set_table_width(),e.slide_info.indexh=t.indexh,e.slide_info.indexv=t.indexv,e.slide_info.indexf=t.indexf}),t.slide(e.slide_info.indexh,e.slide_info.indexv,e.slide_info.indexf),t.layout(),t.sync()},regist_reveal:function(e){window.Reveal=e,this.remove_reveal_script();var t=document.createElement("script"),i=document.createTextNode("Reveal = window.Reveal");t.appendChild(i),t.setAttribute("id",this.reveal_script_id),document.querySelector("body").appendChild(t)},init_plugins:function(e){i(509),i(510),i(511)},init_reveal_menu:function(){var e=document.createElement("script");e.src="".concat(this.get_url_domain(),"reveal-plugins/reveal.js-menu/menu.js");var t=document.createTextNode("window.RevealMenu()");e.appendChild(t),e.setAttribute("id",this.reveal_menu_script_id),document.querySelector("body").appendChild(e)},init_reveal_toolbar:function(){var e=document.createElement("script");e.src="".concat(this.get_url_domain(),"reveal-plugins/reveal.js-toolbar/toolbar.js");var t=document.createTextNode("window.RevealToolbar()");e.appendChild(t),e.setAttribute("id",this.reveal_toolbar_script_id),document.querySelector("body").appendChild(e)},remove_reveal_script:function(){var e=document.getElementById(this.reveal_script_id);e&&e.parentNode.removeChild(e),(e=document.getElementById(this.reveal_menu_script_id))&&e.parentNode.removeChild(e),document.querySelectorAll(".slide-menu-wrapper").forEach(function(e){return e.parentNode.removeChild(e)})},remove_plugins:function(){delete i.c[509],delete i.c[510],delete i.c[511]},get_url_domain:function(){return this.$router.options.base},recycle:function(){this.remove_reveal_script(),this.remove_plugins(),delete i.c[508],c.a.destroy()},set_table_width:function(){o()("table").each(function(){var e=o()(this).find("tr").width();e&&o()(this).width(e)})},update_slide_screen:function(){this.reveal.layout(),this.reveal.sync()},clicked_full_screen_button:function(){if(this.is_slide_full_screen=!this.is_slide_full_screen,this.set_layout({key:"is_disabled_scroll",val:this.is_slide_active_full_screen}),this.is_slide_active_full_screen){for(var e=1;e<=3;e++)setTimeout(this.update_slide_screen,150*e);setTimeout(this.update_slide_screen,3e3)}else setTimeout(this.update_slide_screen,500);this.set_table_width()},clicked_screen_rotate_button:function(){this.is_rotate_slide=!this.is_rotate_slide,setTimeout(this.update_slide_screen,500)}},Object(r.c)("layout",["toggle_layout_is","set_layout"])),watch:{},mounted:function(){var e=this;e.$nextTick(function(){e.init()})},updated:function(){},beforeDestroy:function(){this.recycle()},destroyed:function(){}},h=(i(680),i(681),i(682),Object(u.a)(m,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ResponsiveElement",{staticClass:"Slide",class:{"full-screen":e.is_slide_active_full_screen}},[i("div",{ref:"slide",staticClass:"reveal",class:{rotate:e.is_rotate_slide}},[i("div",{directives:[{name:"scroller",rawName:"v-scroller"}],staticClass:"slides"},[e._t("default")],2)]),e._v(" "),i("div",{staticClass:"toolbar",class:{rotate:e.is_rotate_slide}},[i("FullScreenButton",{staticClass:"toolbar-btn",on:{clicked:function(t){return e.clicked_full_screen_button()}}})],1)])},[],!1,null,"b1f5182e",null));t.default=h.exports},387:function(e,t,i){"use strict";i(275);var n=i(110),s=i(106),o=i.n(s),r={name:"ResponsiveElement",components:{},props:{get_class:{type:Function,default:null},wait_time:{type:Number,default:300}},data:function(){return{size_class:""}},watch:{},computed:{},methods:{init:function(){this.recycle()},recycle:function(){},default_get_class:function(e){return e<=n.a.screen_size.sm?"sm":""},maintance_size_class:function(){var e=this.$el.offsetWidth,t=this.get_class||this.default_get_class;this.size_class=t(e)}},mounted:function(){var e=this;e.maintance_size_class(),i.e(1).then(i.t.bind(null,1023,7)).then(function(t){t.default(e.$el,o()(e.maintance_size_class,e.wait_time))})},updated:function(){},beforeDestroy:function(){this.recycle()}},c=i(20),l=Object(c.a)(r,function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.size_class},[this._t("default")],2)},[],!1,null,"5318a492",null);t.a=l.exports},429:function(e,t,i){},430:function(e,t,i){},431:function(e,t,i){},432:function(e,t,i){},433:function(e,t,i){},678:function(e,t,i){"use strict";var n=i(429);i.n(n).a},679:function(e,t,i){"use strict";var n=i(430);i.n(n).a},680:function(e,t,i){"use strict";var n=i(431);i.n(n).a},681:function(e,t,i){"use strict";var n=i(432);i.n(n).a},682:function(e,t,i){"use strict";var n=i(433);i.n(n).a}}]);