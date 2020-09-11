(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1137:function(v,_,t){"use strict";t.r(_);var e=t(22),l=Object(e.a)({},function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("一個線上應用服務系統，目前來說大抵都會分成前端與後端")]),v._v(" "),e("p",[v._v("前端專職顯示以及跟Customer互動")]),v._v(" "),e("p",[v._v("後端專職商業邏輯的運算，以及資料的儲存")]),v._v(" "),e("h1",{attrs:{id:"why前後端分離"}},[v._v("Why前後端分離")]),v._v(" "),e("h2",{attrs:{id:"問題點-高耦合、業務邏輯交雜"}},[v._v("問題點: 高耦合、業務邏輯交雜")]),v._v(" "),e("p",[v._v("後端系統很容易看到MVC架構，以C# .net MVC為例")]),v._v(" "),e("p",[v._v("MVC中的V(即View)即專責在準備要顯示給Customer的內容上")]),v._v(" "),e("p",[v._v("當在開發View的部分時，如果是使用像Razor這樣的語法開發")]),v._v(" "),e("p",[v._v("那後端可能改個class name，即使資料格式沒動到，也會影響到View")]),v._v(" "),e("p",[v._v("又或者新增一個頁面，就必須跟著更新router，bundler的設定，等等等")]),v._v(" "),e("p",[v._v("前端跟後端很大程度上是綁在一起的")]),v._v(" "),e("p",[v._v("後端光是開發一個功能，可能就要擔心會影響到前端的什麼東西")]),v._v(" "),e("p",[v._v("若系統已經開發的很大的話，光維護就會耗費相當大的精力")]),v._v(" "),e("h2",{attrs:{id:"好處-權責分離，職責專精"}},[v._v("好處: 權責分離，職責專精")]),v._v(" "),e("p",[v._v("前後端分離後，中間僅透過API進行資料的交換，那事情便會單純許多")]),v._v(" "),e("p",[v._v("前後端兩邊的邊界，就是API的資料格式")]),v._v(" "),e("p",[v._v("後端可以專注在資料的處理，只要確定有滿足資料格式的定義")]),v._v(" "),e("p",[v._v("而前端可以專注在顯示邏輯的開發，降低對資料源，業務核心邏輯的處理")]),v._v(" "),e("p",[v._v("這大大的降低了前後兩端開發所要考慮的範疇")]),v._v(" "),e("p",[v._v("職責變的專精，大幅降低牽一髮動全身的風險")]),v._v(" "),e("h1",{attrs:{id:"系統架構"}},[v._v("系統架構")]),v._v(" "),e("p",[v._v("這邊稍微舉例前後端可能需要注意之事項")]),v._v(" "),e("pre",[e("code",[v._v("前端 <----\x3e 後端 <----\x3e DB\n")])]),v._v(" "),e("h2",{attrs:{id:"前端"}},[v._v("前端")]),v._v(" "),e("ul",[e("li",[v._v("UI/UX\n"),e("ul",[e("li",[v._v("顯示邏輯")]),v._v(" "),e("li",[v._v("跟user互動")])])]),v._v(" "),e("li",[v._v("Routing\n"),e("ul",[e("li",[v._v("SPA")]),v._v(" "),e("li",[v._v("網址對應組件")])])]),v._v(" "),e("li",[v._v("Vuex\n"),e("ul",[e("li",[v._v("共用資料集散地，類似前端的資料庫")])])]),v._v(" "),e("li",[v._v("API介接")]),v._v(" "),e("li",[v._v("PWA")]),v._v(" "),e("li",[v._v("...")])]),v._v(" "),e("h2",{attrs:{id:"後端"}},[v._v("後端")]),v._v(" "),e("h3",{attrs:{id:"ap"}},[v._v("AP")]),v._v(" "),e("ul",[e("li",[v._v("專注在Data的處理\n"),e("ul",[e("li",[v._v("資料的傳輸\n"),e("ul",[e("li",[v._v("對前端")]),v._v(" "),e("li",[v._v("對DB")]),v._v(" "),e("li",[v._v("對第三方")])])]),v._v(" "),e("li",[v._v("機密資料的運作")]),v._v(" "),e("li",[v._v("狀態的儲存/處理\n"),e("ul",[e("li",[v._v("session")])])])])]),v._v(" "),e("li",[v._v("若有MVC架構的話\n"),e("ul",[e("li",[v._v("Model\n"),e("ul",[e("li",[v._v("進行商業邏輯運算")]),v._v(" "),e("li",[v._v("對DB的Model")]),v._v(" "),e("li",[v._v("對前端的Model\n"),e("ul",[e("li",[v._v("第三方")]),v._v(" "),e("li",[v._v("Client端")])])])])]),v._v(" "),e("li",[v._v("View\n"),e("ul",[e("li",[v._v("不再進行傳統顯示邏輯的開發")]),v._v(" "),e("li",[v._v("直接回傳Vue Build(編譯)過的靜態檔")]),v._v(" "),e("li",[v._v("SSR\n"),e("ul",[e("li",[v._v("若有SEO的需求的話，需要在回傳vue build過的檔案前，再多預先render給爬蟲的資料")])])])])]),v._v(" "),e("li",[v._v("Controler\n"),e("ul",[e("li",[v._v("流程的處理")]),v._v(" "),e("li",[v._v("各式API的處理")])])])])])]),v._v(" "),e("h3",{attrs:{id:"db"}},[v._v("DB")]),v._v(" "),e("p",[v._v("資料的實際儲存地")]),v._v(" "),e("p",[v._v("但為了簡化教學範例的複雜度，這邊會在AP上宣告靜態物件來模擬DB的資料儲存")]),v._v(" "),e("p",[v._v("若要在正式系統上使用靜態物件儲存資料，請務必要小心謹慎，避免預期外之資料存取")]),v._v(" "),e("h1",{attrs:{id:"開發環境"}},[v._v("開發環境")]),v._v(" "),e("h2",{attrs:{id:"範例專案"}},[v._v("範例專案")]),v._v(" "),e("p",[v._v("範例專案請"),e("a",{attrs:{href:"https://github.com/Jchou24/vue-csarhp-todolist-tutorial",target:"_blank",rel:"noopener noreferrer"}},[v._v("到此下載"),e("OutboundLink")],1)]),v._v(" "),e("h2",{attrs:{id:"前端-2"}},[v._v("前端")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Node.js"),e("OutboundLink")],1)]),v._v(" "),e("li",[v._v("Vue\n"),e("ul",[e("li",[v._v("在安裝好node.js後，開啟commad line執行"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[v._v("npm")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[v._v("install")]),v._v(" -g @vue/cli\n")])])])]),v._v(" "),e("li",[v._v("詳細內容可以參考"),e("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/installation.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("官網"),e("OutboundLink")],1)])])]),v._v(" "),e("li",[v._v("IDE\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Visual Studio Code"),e("OutboundLink")],1),v._v(" "),e("ul",[e("li",[v._v("Vue Syntax Highlighter\n"),e("ul",[e("li",[v._v("vs code預設是看不懂vue的code的，若想要讓vue語法能有對應的顏色提示，需要安裝相關外掛")]),v._v(" "),e("li",[v._v("這邊我是使用 "),e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=gerane.Theme-FlatlandMonokai",target:"_blank",rel:"noopener noreferrer"}},[v._v("Flatland Monokai Theme"),e("OutboundLink")],1)])])])])])])])]),v._v(" "),e("h2",{attrs:{id:"後端-2"}},[v._v("後端")]),v._v(" "),e("ul",[e("li",[v._v("C#")]),v._v(" "),e("li",[e("a",{attrs:{href:"https://visualstudio.microsoft.com/zh-hant/vs/community/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Visual Studio Community"),e("OutboundLink")],1)])]),v._v(" "),e("h1",{attrs:{id:"範例專案目標"}},[v._v("範例專案目標")]),v._v(" "),e("ul",[e("li",[v._v("製作一個"),e("code",[v._v("TodoList")]),v._v("，跟一個"),e("code",[v._v("DoneList")]),v._v("，每個list中可以放入"),e("code",[v._v("Task")])]),v._v(" "),e("li",[e("code",[v._v("Task")]),v._v("上可以記錄"),e("code",[v._v("Title")]),v._v("跟"),e("code",[v._v("Content")])]),v._v(" "),e("li",[v._v("網頁上方要有Nav可以顯示所有的頁面(總共4個)")]),v._v(" "),e("li",[v._v("在網頁不關掉下，任意點選Nav上之連結，資料不能遺失")]),v._v(" "),e("li",[v._v("隨意輸入網址，要能夠跳到404 not found的頁面")]),v._v(" "),e("li",[v._v("為方便示範，將同樣的功能分成需要後端支援，跟不需要後端支援\n"),e("ul",[e("li",[v._v("不需要後端:\n"),e("ul",[e("li",[v._v("分兩頁，一頁可以編輯，一頁不可編輯")]),v._v(" "),e("li",[v._v("網頁關掉後重開，"),e("code",[v._v("不需要")]),v._v("能看到剛剛的資料")])])]),v._v(" "),e("li",[v._v("需要後端:\n"),e("ul",[e("li",[v._v("分兩頁，一頁可以編輯，一頁不可編輯")]),v._v(" "),e("li",[v._v("網頁關掉後重開，"),e("code",[v._v("需要")]),v._v("能看到剛剛的資料")])])])])]),v._v(" "),e("li",[v._v("操作起來的效果如下\n"),e("ul",[e("li",[e("video",{attrs:{controls:"",preload:"metadata"}},[e("source",{attrs:{type:"video/mp4",src:t(704)}}),v._v("\nYour browser does not support playing HTML5 video. You can "),e("a",{attrs:{href:"./demo(2020-06-10).mp4",download:""}},[v._v("download a copy of the video file")]),v._v(" instead.\n")])])])])]),v._v(" "),e("h1",{attrs:{id:"接下來"}},[v._v("接下來")]),v._v(" "),e("p",[e("router-link",{attrs:{to:"/Coding/Website/vue-csarhp-todolist-tutorial/front-end.html"}},[v._v("下一篇文章")]),v._v("，將開始前端部份的說明")],1)])},[],!1,null,null,null);_.default=l.exports},704:function(v,_,t){v.exports=t.p+"assets/media/demo(2020-06-10).12027fe8.mp4"}}]);