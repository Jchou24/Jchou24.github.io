(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1263:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在 linux 機器下，每一段時間就顯示當前機器資訊")]),t._v(" "),a("p",[t._v("包含")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("記憶體")])]),t._v(" "),a("li",[a("p",[t._v("硬碟容量")])]),t._v(" "),a("li",[a("p",[t._v("CPU")])])]),t._v(" "),a("p",[t._v("可將以下指令全選後儲存成 "),a("code",[t._v("monitor.sh")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#! /bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# log system usage of cpu, mem, disk")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# usage:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     monitor.sh seconds > mylog.log")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     seconds: delay time")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     example:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#         monitor.sh 1 > mylog.log")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#         log system resource per seconds")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# note:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     be sure to add execution permision")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#         ex: chmod +x monitor.sh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("printf")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DateTime'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),t._v("Memory"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),t._v("Disk"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),t._v("CPU"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$((")]),t._v("SECONDS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("))")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$SECONDS")]),t._v(" -lt "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$end")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MEMORY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" -m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'NR==2{printf "%.2f%%", '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$3")]),t._v("*100/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v(" }'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DISK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("df")]),t._v(" -h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NF")]),t._v('=="/"{printf "%s", '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$5")]),t._v("}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CPU")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v(" -bn1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" load "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{printf "%.2f%%", '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("NF-2"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+%d/%m/%Y %H:%M:%S'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DT")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$MEMORY")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DISK")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$CPU")]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=n.exports}}]);