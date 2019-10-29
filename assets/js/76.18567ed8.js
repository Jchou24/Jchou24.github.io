(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1022:function(t,e,a){"use strict";a.r(e);a(76);var i=a(345),n=a(376),r=a(687),s=a.n(r),c={name:"ArticleWaterfall",components:{ArticleMeta:n.a},props:{sample_size:{default:20}},data:function(){return{articles:[],current_articles:[]}},watch:{"$store.state.layout.refresh_waterfall":function(){this.shuffle()}},methods:{init:function(){var t=this.$articles.slice(),e=s.a.sampleSize(t,this.sample_size);this.articles=t,this.current_articles=e},shuffle:function(){var t=this;t.current_articles=s.a.sampleSize(t.articles,t.sample_size),setTimeout(function(){t.current_articles.sort(function(){return Math.random()-.5})},400)},get_random_style:function(){return"style-".concat(s.a.sample([2,3,4,5]))}},beforeMount:function(){this.init()}},l=(a(689),a(690),a(21)),o=Object(l.a)(c,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-waterfall"},[a("transition-group",{attrs:{name:"item",appear:""}},t._l(t.current_articles,function(e,i){return a("ArticleMeta",{key:i,class:t.get_random_style(),attrs:{is_for_search:!1,article:e,"data-index":i}})}),1)],1)},[],!1,null,"6a8e87d4",null).exports,u=a(469),f=a(19),p=a(5),_={name:"IndexMainContent",components:{MainContentLayout:i.a,ArticleWaterfall:o,ArticleList:u.a},data:function(){return{}},computed:{articles:{get:function(){return this.$articles.slice().sort(f.a.datetime_desc)}},is_active_ArticleWaterfall:{get:function(){return this.$store.state.layout.app_resize,"l"==Object(p.i)()||"xl"==Object(p.i)()}}}},h=Object(l.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("MainContentLayout",[this.is_active_ArticleWaterfall?e("ArticleWaterfall",{attrs:{sample_size:8}}):this._e(),this._v(" "),e("ArticleList",{attrs:{articles:this.articles}})],1)},[],!1,null,null,null);e.default=h.exports},300:function(t,e,a){},376:function(t,e,a){"use strict";var i=a(374),n=a(349),r={name:"ArticleMeta",components:{ArticleMetaInfo:i.a,ArticleMetaExcerpt:n.a},props:{article:{required:!0,type:Object},is_for_search:{type:Boolean,default:!1}},data:function(){return{}},computed:{},methods:{init:function(){}},mounted:function(){var t=this;t.$nextTick(function(){t.init()})},updated:function(){},destroyed:function(){}},s=a(21),c=Object(s.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-meta"},[a("h3",{staticClass:"title"},[a("router-link",{attrs:{to:t.article.regularPath}},[t._v(t._s(t.article.title))])],1),t._v(" "),a("ArticleMetaInfo",{staticClass:"article-meta-info",attrs:{article:t.article}}),t._v(" "),a("ArticleMetaExcerpt",{staticClass:"article-meta-wordcloud",attrs:{article:t.article,is_for_search:t.is_for_search}})],1)},[],!1,null,"6309bc1d",null);e.a=c.exports},420:function(t,e,a){"use strict";var i=a(300);a.n(i).a},425:function(t,e,a){},426:function(t,e,a){},469:function(t,e,a){"use strict";var i=a(292),n=a(376),r=(a(500),a(106)),s=a.n(r),c=a(325),l={name:"ArticleList",components:{RippleTransition:i.a,ArticleMeta:n.a},props:{articles:{required:!0,type:Array},is_for_search:{type:Boolean,default:function(){return!1}}},data:function(){return{pageSet:{totalRow:0,language:"en",pageSizeMenu:[10,20,50,100],align:"center"},pageNumber:1,pageSize:10,is_pagination_sm:!1}},watch:{articles:function(){this.$refs.v_page.currentPage=1}},methods:{set_is_pagination_sm:function(t){this.is_pagination_sm=t.clientWidth<440},init:function(){var t=this,e=t.$el.querySelector("div.vPagination.vPaginationCenter ul");t.set_is_pagination_sm(e),a.e(1).then(a.t.bind(null,1007,7)).then(function(a){a.default(e,s()(function(){t.set_is_pagination_sm(e)},500))})},pageChange:function(t){this.pageNumber=t.pageNumber,this.pageSize=t.pageSize;var e=document.querySelector("div.article-waterfall");e=e?e.clientHeight:0,Object(c.a)(e,document.querySelector("div.article").scrollTop)}},mounted:function(){var t=this;t.$nextTick(function(){t.init()})},updated:function(){},destroyed:function(){}},o=(a(420),a(21)),u=Object(o.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"Search"},[t._t("default"),t._v(" "),a("RippleTransition",{staticClass:"search-result"},t._l(t.articles,function(e,i){return(t.pageNumber-1)*t.pageSize<=i&&i<t.pageNumber*t.pageSize?a("ArticleMeta",{key:e.key,attrs:{article:e,is_for_search:t.is_for_search,"data-index":i}}):t._e()}),1),t._v(" "),a("div",{staticClass:"article-meta-footer"},[a("v-page",{directives:[{name:"show",rawName:"v-show",value:t.articles.length>0,expression:"articles.length > 0"}],ref:"v_page",class:{sm:t.is_pagination_sm},attrs:{setting:Object.assign({},t.pageSet,{totalRow:t.articles.length})},on:{"page-change":t.pageChange}})],1)],2)},[],!1,null,null,null);e.a=u.exports},689:function(t,e,a){"use strict";var i=a(425);a.n(i).a},690:function(t,e,a){"use strict";var i=a(426);a.n(i).a}}]);