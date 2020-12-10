(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1232:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("有時當網頁上的組件越來越多時，拆分共用組件的議題就會悄悄到來")]),t._v(" "),a("p",[t._v("而當拆分完組件後，怎麼使用就會是個問題")]),t._v(" "),a("p",[t._v("一種做法是使用相對路徑引用套件"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[t._v("[1]")])])]),t._v(" "),a("p",[t._v("一種是將套件打包後，上傳到npm上")]),t._v(" "),a("p",[t._v("而最近我剛好也有這個需求，因此本篇想記錄的就是這個打包上傳的過程")]),t._v(" "),a("p",[t._v("這邊我會以我自己寫的"),a("a",{attrs:{href:"https://github.com/Jchou24/table-form",target:"_blank",rel:"noopener noreferrer"}},[t._v("小套件"),a("OutboundLink")],1),t._v("發布為例，記錄下我發布的步驟")]),t._v(" "),a("p",[t._v("本文主要參考了這幾篇文章 "),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn2",id:"fnref2"}},[t._v("[2]")])]),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn3",id:"fnref3"}},[t._v("[3]")])]),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn4",id:"fnref4"}},[t._v("[4]")])])]),t._v(" "),a("h1",{attrs:{id:"專案架構"}},[t._v("專案架構")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("vue create project")]),t._v("後，再來要新增2個檔案")]),t._v(" "),a("h2",{attrs:{id:"index-js"}},[t._v("index.js")]),t._v(" "),a("p",[t._v("檔名其實不叫 "),a("code",[t._v("index.js")]),t._v(" 也沒關係，但這個作為 "),a("code",[t._v("進入點(entry point)")]),t._v(" 的檔案，通常都會叫做 "),a("code",[t._v("index.js")])]),t._v(" "),a("p",[t._v("位置放哪都可以，有人放 "),a("code",[t._v("/src/coomponents")]),t._v(" 有人放 "),a("code",[t._v("/src")]),t._v("，只要在 "),a("code",[t._v("packages.json")]),t._v(" 指定位置時不要指錯就好")]),t._v(" "),a("p",[t._v("這邊我放在 "),a("code",[t._v("/src/index.js")])]),t._v(" "),a("p",[a("code",[t._v("index.js")]),t._v(" 有許多種寫法，那因為我的套件剛好比較單純，就是單一一個進入點組件"),a("code",[t._v("TableForm.vue")])]),t._v(" "),a("p",[t._v("因此我只要註冊 "),a("code",[t._v("TableForm.vue")]),t._v(" 就好")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TableForm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/TableForm.vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Components "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    TableForm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Components\n")])])]),a("p",[t._v("透過這樣的寫法，使用套件時，只要在 "),a("code",[t._v("main.js")]),t._v(" 引用套件就好")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jctk-table-form'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jctk-table-form/dist/jctk-table-form.css'")]),t._v("\n")])])]),a("h2",{attrs:{id:"vue-config-js"}},[t._v("vue.config.js")]),t._v(" "),a("p",[t._v("由於我有製作 demo 頁，並想放在 github pages 上的子目錄，因此我需要在這個檔案中調整一下路徑設定")]),t._v(" "),a("p",[t._v("預設的根目錄是 "),a("code",[t._v("./")]),t._v("，但我的根目錄是我的網誌")]),t._v(" "),a("p",[t._v("所以我想將套件範例放在 "),a("code",[t._v("https://jchou24.github.io/Demos/TableForm/index.html")]),t._v(" 這邊")]),t._v(" "),a("p",[t._v("那麼 "),a("code",[t._v("vue.config.js")]),t._v(" 就要寫成這樣")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    publicPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://jchou24.github.io/Demos/TableForm/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 記得一定要斜線結尾")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其中上面會判斷編譯的指令是使用哪個環境進行編譯，當是要上"),a("code",[t._v("營運環境(production)")])]),t._v(" "),a("p",[t._v("網址前面就是 "),a("code",[t._v("https://jchou24.github.io/Demos/TableForm/")]),t._v("，否則為 "),a("code",[t._v("/")])]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v("publicPath")]),t._v(" 沒有設定就放到 "),a("code",[t._v("https://jchou24.github.io/Demos/TableForm/")])]),t._v(" "),a("p",[t._v("那網頁不會正常顯示，裡面的靜態檔路徑會錯誤")]),t._v(" "),a("h1",{attrs:{id:"寫設定檔-package-json"}},[t._v("寫設定檔(package.json)")]),t._v(" "),a("p",[t._v("寫 "),a("code",[t._v("package.json")]),t._v(" 有幾個重要的原因")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("整理好開發、發布的指令")])]),t._v(" "),a("li",[a("p",[t._v("發布又可分成發布套件，跟發布demo網頁")])]),t._v(" "),a("li",[a("p",[t._v("撰寫發布npm的設定")]),t._v(" "),a("p",[t._v("而這又會跟使用套件有關")])])]),t._v(" "),a("p",[t._v("最重要的設定範例如下:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jctk-table-form"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1.8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/jctk-table-form.common.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build --target lib ./src/index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build-demo-dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build --mode development --target app --dest demo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build-demo-prod"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build --mode production --target app --dest demo-prod"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"repository"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git+https://github.com/Jchou24/table-form.git"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"public/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demo/*"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("完整設定檔請參考"),a("a",{attrs:{href:"https://github.com/Jchou24/table-form/blob/main/package.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("這邊"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("以下說明各設定值")]),t._v(" "),a("h2",{attrs:{id:"name"}},[t._v("name")]),t._v(" "),a("p",[t._v('套件名稱，這邊我取做 "jctk-table-form"')]),t._v(" "),a("p",[t._v("而這個名稱會影響到使用套件時，import 裡面的名稱")]),t._v(" "),a("h2",{attrs:{id:"version"}},[t._v("version")]),t._v(" "),a("p",[t._v("每次上傳 npm 時，npm 會強制規定 version 要跳號")]),t._v(" "),a("p",[t._v("而 version  有許多種命名方式，如果想發布正式的套件的話")]),t._v(" "),a("p",[t._v("這個"),a("code",[t._v("版號")]),t._v("建議要訂的有規則一點")]),t._v(" "),a("h2",{attrs:{id:"main"}},[t._v("main")]),t._v(" "),a("p",[t._v("控制使用套件時，import套件時的位置")]),t._v(" "),a("p",[t._v("這邊我設定為 "),a("code",[t._v("dist/jctk-table-form.common.js")])]),t._v(" "),a("p",[t._v("其中，"),a("code",[t._v("jctk-table-form")]),t._v(" 必須要跟 "),a("code",[t._v("name")]),t._v(" 的設定值一樣")]),t._v(" "),a("p",[t._v("當在新專案的 "),a("code",[t._v("main.js")]),t._v(" 使用套件時，若寫")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jctk-table-form'")]),t._v("\n")])])]),a("p",[t._v("其實就等價於寫")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jctk-table-form/dist/jctk-table-form.common.js'")]),t._v("\n")])])]),a("h2",{attrs:{id:"scripts"}},[t._v("scripts")]),t._v(" "),a("p",[t._v("設定 npm 的快速指令")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build --target lib ./src/index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build-demo-dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build --mode development --target app --dest demo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build-demo-prod"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build --mode production --target app --dest demo-prod"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上述寫法的意思為")]),t._v(" "),a("h3",{attrs:{id:"npm-run-build"}},[t._v("npm run build")]),t._v(" "),a("p",[t._v("下 "),a("code",[t._v("npm run build")]),t._v("，相當於執行 "),a("code",[t._v("vue-cli-service build --target lib ./src/index.js")])]),t._v(" "),a("p",[t._v("其中 "),a("code",[t._v("--target lib")]),t._v(" 代表要編譯成套件")]),t._v(" "),a("p",[t._v("而由於編譯是靠 "),a("code",[t._v("webpack")]),t._v(" 來達成，所以要告訴他進入點在 "),a("code",[t._v("./src/index.js")])]),t._v(" "),a("h3",{attrs:{id:"npm-run-build-demo-dev"}},[t._v("npm run build-demo-dev")]),t._v(" "),a("p",[t._v("而下 "),a("code",[t._v("npm run build-demo-dev")]),t._v(" 相當於執行 "),a("code",[t._v("vue-cli-service build --mode development --target app --dest demo")])]),t._v(" "),a("p",[t._v("其中")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("--mode development")]),t._v(" 代表要用開發環境來編譯")]),t._v(" "),a("p",[t._v("這樣"),a("code",[t._v("vue.config.js")]),t._v('就會把網址的前面設為"/"')]),t._v(" "),a("p",[t._v("這樣開發環境觀看 demo 頁時，路徑就不會有問題")]),t._v(" "),a("p",[t._v("當新專案下載套件後，也可以直接進資料夾下 "),a("code",[t._v("serve")]),t._v(" 直接使用 demo 網頁")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("--target app")]),t._v(" 代表要編譯成網頁")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("--dest demo")]),t._v(" 代表要把編譯後的網頁放在 "),a("code",[t._v("demo")]),t._v(" 這個資料夾")]),t._v(" "),a("p",[t._v("若不設定的話，預設會在 "),a("code",[t._v("dist")]),t._v("，那就有可能會覆蓋掉套件編譯後的檔案")])])]),t._v(" "),a("h3",{attrs:{id:"npm-run-build-demo-prod"}},[t._v("npm run build-demo-prod")]),t._v(" "),a("p",[t._v("設定內容與 "),a("code",[t._v("npm run build-demo-dev")]),t._v(" 大同小異")]),t._v(" "),a("p",[t._v("只差在")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("編譯環境為 "),a("code",[t._v("production")])]),t._v(" "),a("p",[t._v("由於編譯環境為 "),a("code",[t._v("production")]),t._v("，vue cli還會幫忙做編譯的最佳化")])]),t._v(" "),a("li",[a("p",[t._v("編譯後檔案放到 "),a("code",[t._v("demo-prod")])])])]),t._v(" "),a("h2",{attrs:{id:"repository"}},[t._v("repository")]),t._v(" "),a("p",[t._v("設定 npm 網頁上的顯示資訊")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"repository"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git+https://github.com/Jchou24/table-form.git"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("這樣寫代表程式碼的託管庫在github上面")]),t._v(" "),a("h2",{attrs:{id:"files"}},[t._v("files")]),t._v(" "),a("p",[t._v("設定那些檔案要打包到 npm 上")]),t._v(" "),a("p",[t._v("當新專案 install 套件時，就會下載設定上的檔案")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"public/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demo/*"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h1",{attrs:{id:"上傳到npm"}},[t._v("上傳到npm")]),t._v(" "),a("p",[t._v("首先要先到 npm 註冊帳號")]),t._v(" "),a("p",[t._v("註冊完成後，到cmd上先進行登入，然後上傳")]),t._v(" "),a("p",[t._v("指令如下")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" login // 登入\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoami")]),t._v(" // 檢查身分\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" publish --access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public // 上傳\n")])])]),a("p",[t._v("到此就算大功告成了!")]),t._v(" "),a("p",[t._v("此外若想要刪掉套件，可以這麼下")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" unpublish "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("your-package-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("hr",{staticClass:"footnotes-sep"}),t._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/15806241/how-to-specify-local-modules-as-npm-package-dependencies",target:"_blank",rel:"noopener noreferrer"}},[t._v("how to specify local modules as npm package dependencies"),a("OutboundLink")],1),t._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])]),t._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[a("p",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/plugins.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("开发插件"),a("OutboundLink")],1),t._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[t._v("↩︎")])])]),t._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[a("p",[a("a",{attrs:{href:"https://medium.com/@debbyji/%E6%88%91%E7%9A%84%E7%AC%AC%E4%B8%80%E5%80%8B-npm-%E5%A5%97%E4%BB%B6-%E6%8A%8A-vue-component-%E6%89%93%E5%8C%85%E5%88%B0-npm-%E5%90%A7-e5f9a6901c5c",target:"_blank",rel:"noopener noreferrer"}},[t._v("我的第一個 npm 套件：把 vue component 打包到 npm 吧"),a("OutboundLink")],1),t._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[t._v("↩︎")])])]),t._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[a("p",[a("a",{attrs:{href:"https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to create, publish and use your own VueJS Component library on NPM using @vue/cli 3.0"),a("OutboundLink")],1),t._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[t._v("↩︎")])])])])])])},[],!1,null,null,null);s.default=n.exports}}]);