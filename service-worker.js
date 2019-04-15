/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6e93af36d018dbc280561d7c1d102afa"
  },
  {
    "url": "About/index.html",
    "revision": "1ecd21c1458dd290edd2b9bb5688ff61"
  },
  {
    "url": "archive/index.html",
    "revision": "e251f1dd0058ac239841e50416966541"
  },
  {
    "url": "assets/css/0.styles.332c5e52.css",
    "revision": "8132e8448c743bb959066c163aaa2ab3"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.1ba8a24a.woff2",
    "revision": "1ba8a24a34177c2ffb565c9215073d79"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.6e83a9fb.woff",
    "revision": "6e83a9fb848f6ed110947bbea540160e"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.ca857b15.ttf",
    "revision": "ca857b159d215139f84ec5406486b5dc"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.2c8faa1b.ttf",
    "revision": "2c8faa1b5f83e4062290d6f1f48feeef"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.9e74aa81.woff2",
    "revision": "9e74aa81afcd2a2c51e6fdda41905bbd"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.c0985438.woff",
    "revision": "c09854387bea3260d7c3eae73dc9d01c"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.31f25d65.woff2",
    "revision": "31f25d65c5a444b82edbd416cecf1c24"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.35974d12.woff",
    "revision": "35974d12700c7250a51804f82845dc16"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.52a6a165.ttf",
    "revision": "52a6a1658f19627bacf35b495b60891c"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.34c03657.woff",
    "revision": "34c0365729037176f5f2a662f5ba0f5c"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.34c1d184.ttf",
    "revision": "34c1d184d4ab02f85c035ed9fc25caa7"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.71620e6a.woff2",
    "revision": "71620e6ae5f7675d278fa891e0653b5b"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.b48160ea.woff",
    "revision": "b48160eab3a0afe79f8102a504f31bb8"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.bae342e8.woff2",
    "revision": "bae342e85347989ffe3407d5d286abc0"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.f6780ff5.ttf",
    "revision": "f6780ff593f7ba72754d7e57dc31f7d9"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.6a754845.woff",
    "revision": "6a754845184d0bbadc833d7938d4df66"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.9e629571.ttf",
    "revision": "9e6295711d9a28d1991bc02b2ba6a8c6"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.b5549071.woff2",
    "revision": "b5549071a4cf728bf88d49f042fc7313"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.2cefb96e.woff2",
    "revision": "2cefb96e245f6175b4ef2f2ca0db06c1"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.3df52c58.ttf",
    "revision": "3df52c586302de43bd5ca95182fb1315"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.ff75463a.woff",
    "revision": "ff75463a7fa586585fd3586e79000d36"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.9485af58.ttf",
    "revision": "9485af58d5ca94fbb6bc0378860a9b72"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.d2f17a9e.woff",
    "revision": "d2f17a9e3f2a368e28042f28f8988a03"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.d9153c94.woff2",
    "revision": "d9153c94a9b598eefe0e4179c9e97205"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.28a2d0a5.woff",
    "revision": "28a2d0a50e53991263c83f5bb3c8205c"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.bce47876.ttf",
    "revision": "bce47876efef2be1f02bfe02a2b2ed29"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.ddb93dd1.woff2",
    "revision": "ddb93dd102489fb45c99d6712fdb5f25"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.8c96bb55.woff2",
    "revision": "8c96bb5502e4d11c51cc9f3eb062f3d7"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.91370c15.ttf",
    "revision": "91370c15e6c8c636f86c01838fa7f654"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.b4a5e15f.woff",
    "revision": "b4a5e15f65b5afbe788cc687aa6af3bc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.2342417f.woff",
    "revision": "2342417fbf7f6ae5910a34ea90e844c6"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.efef72b8.woff2",
    "revision": "efef72b8e4ff4083ca1e91a6b4ec2363"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.f47a61c8.ttf",
    "revision": "f47a61c859ea90d15547822f4836dafb"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.000b9ed0.ttf",
    "revision": "000b9ed03c3867fd218ec15822564ec4"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.5d4480bd.woff",
    "revision": "5d4480bd287fed8d9f52f15f9e891cf4"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.b2acfbf0.woff2",
    "revision": "b2acfbf0bcb210d7dcacd3a625691c29"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.255f1668.woff2",
    "revision": "255f1668bf91741143ff907abfe87350"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.40d559e3.ttf",
    "revision": "40d559e307d2766ad67e717b07c6bfe8"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.d5333e23.woff",
    "revision": "d5333e23e0fb885dcce91f8d39dcfbe1"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.7ba33ebb.ttf",
    "revision": "7ba33ebb57e020a4948ef3da67a961fe"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.8de2dee1.woff2",
    "revision": "8de2dee189a5cb86d2c63ec286594f63"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.a8506f1b.woff",
    "revision": "a8506f1b1fb95010d2e46a2ce5edc453"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.46b2d8cf.woff",
    "revision": "46b2d8cfe4fd0021561890cf34a99e86"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.4b4feb45.woff2",
    "revision": "4b4feb459569bc556025e27940c5a43c"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.b3881cee.ttf",
    "revision": "b3881ceea63499db39bfebca1edd0df7"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.686db35f.ttf",
    "revision": "686db35f856dc151987748d946b577f2"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.3f883bff.ttf",
    "revision": "3f883bff6b52775d6f96de5cc9d50052"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.4c04d946.ttf",
    "revision": "4c04d946e924fcb72074640737e05f5c"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.a5ed4d0a.ttf",
    "revision": "a5ed4d0a38f0c027bcc49c972e41330b"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.cabbcf15.woff2",
    "revision": "cabbcf159469220758fdde285fdb9a37"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.e52da442.woff",
    "revision": "e52da4424fa372f4ff884569d461369d"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.012cf6a1.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.570eb838.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.a37b0c01.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.e79bfd88.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "assets/img/blue_wash_wall_4.ee64ddfc.png",
    "revision": "ee64ddfcb1b52dddaa795ed34bebabfb"
  },
  {
    "url": "assets/img/crossword.b5c5ab66.png",
    "revision": "b5c5ab66d8331513696fe3ec992187a0"
  },
  {
    "url": "assets/img/dust_scratches.608ab5fe.png",
    "revision": "608ab5fe4a45e2ac93febd3416b260f0"
  },
  {
    "url": "assets/img/pika.264710a4.png",
    "revision": "264710a4e7826b35df2e562895c44ee2"
  },
  {
    "url": "assets/img/pika.9f1eafdd.gif",
    "revision": "9f1eafdd20b87ca874da588867df2497"
  },
  {
    "url": "assets/img/whitey.db698606.png",
    "revision": "db698606ff0094844cc0d3b5e99b807a"
  },
  {
    "url": "assets/img/xv_light_blue.9693a7e2.png",
    "revision": "9693a7e2dbef5afa0fe66488e8f51896"
  },
  {
    "url": "assets/img/xv.30148b7c.png",
    "revision": "30148b7c22dc86276789e064c85bec9c"
  },
  {
    "url": "assets/js/1.6d816035.js",
    "revision": "9435b16f5fad0b355b9531533728bea6"
  },
  {
    "url": "assets/js/2.309640ab.js",
    "revision": "d63e967036649416f06e02b919866d54"
  },
  {
    "url": "assets/js/39.0bf0539f.js",
    "revision": "1e9a6948c3090e38611d63d07c421b0f"
  },
  {
    "url": "assets/js/4.f8e0dc90.js",
    "revision": "212780f1b9f77e26b4f28e973ef4d855"
  },
  {
    "url": "assets/js/40.7cd55fc0.js",
    "revision": "49eb82d990bbed31d031368a40305608"
  },
  {
    "url": "assets/js/41.e637e5d8.js",
    "revision": "8b0d7b65b0cf374dad185498cb9b7174"
  },
  {
    "url": "assets/js/42.832f908e.js",
    "revision": "d6336fc770fe9dca568e2a0a287e56fe"
  },
  {
    "url": "assets/js/43.974f3a17.js",
    "revision": "0dfac496ad2bc7526ed017d8da71654c"
  },
  {
    "url": "assets/js/44.3a19e61c.js",
    "revision": "0b3b213c2a93d04a67620106b7ffb42e"
  },
  {
    "url": "assets/js/45.7cf870e8.js",
    "revision": "52b93861646ef7613d5ac4acadba870e"
  },
  {
    "url": "assets/js/46.4bd0c16d.js",
    "revision": "aa898b812120e70f5468008b1f10f1e9"
  },
  {
    "url": "assets/js/47.fd83cafe.js",
    "revision": "fa29372079c4a413c05ad54e5a9a8a82"
  },
  {
    "url": "assets/js/48.d69bd533.js",
    "revision": "5ff976a9dac6450e3a215bfbe946c7ba"
  },
  {
    "url": "assets/js/49.037fee9f.js",
    "revision": "f2aa8c2cf1c994138d04d0195e46c81d"
  },
  {
    "url": "assets/js/5.dd64acd6.js",
    "revision": "c6e070e45002456a77851e522f9fe39a"
  },
  {
    "url": "assets/js/50.fa4943b0.js",
    "revision": "72c414dc08d3a9e222dd40f821284fdf"
  },
  {
    "url": "assets/js/51.132d38bc.js",
    "revision": "d46501e9d061e9fe2cf7554600249f9a"
  },
  {
    "url": "assets/js/52.2c693bf8.js",
    "revision": "3c240688d8e8a6bc040201212caecabe"
  },
  {
    "url": "assets/js/53.db6bec98.js",
    "revision": "aef0d7f6f3b3dc9c0b61971ce3a06a57"
  },
  {
    "url": "assets/js/6.b845f405.js",
    "revision": "9577ecf5c8b5ddd92983756fdc440f3b"
  },
  {
    "url": "assets/js/app.95c05468.js",
    "revision": "cfcd83271ad874a1542a1f2e664c83c0"
  },
  {
    "url": "assets/js/layout-BaseLayout.73708630.js",
    "revision": "cb7ad793a773ea870b268c39f0628c5d"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.b2cd3e83.js",
    "revision": "448733bbb1a0c5415feb7b278e1a94f3"
  },
  {
    "url": "assets/js/layout-Layout.1fbcce0b.js",
    "revision": "824cd352220c474a1ed0d8ac039f4ccc"
  },
  {
    "url": "assets/js/layout-NotFound.314da349.js",
    "revision": "94593dc1c3281b6c3ca4837ac6d60353"
  },
  {
    "url": "assets/js/page-0815fe43.391789bb.js",
    "revision": "49ef9e1fc7eb54c4ea39618410239fed"
  },
  {
    "url": "assets/js/page-1bb4b3ad.46e627b1.js",
    "revision": "d9d524e109e189bcff4b34f794313105"
  },
  {
    "url": "assets/js/page-22a9043f.83d1acb2.js",
    "revision": "f0a54a776633858d4070104a52ae4961"
  },
  {
    "url": "assets/js/page-23e99a6f.1f5360b6.js",
    "revision": "ae57a6db4b5aefec479b276fd3648cd5"
  },
  {
    "url": "assets/js/page-293f1fdc.d477e45e.js",
    "revision": "4a34ddd74c6e4ccec8c69df11b46e832"
  },
  {
    "url": "assets/js/page-32e15e7c.190ea72e.js",
    "revision": "8118a40f0b162b15ce25f9fbacc21115"
  },
  {
    "url": "assets/js/page-3841e8ef.a2ed413a.js",
    "revision": "be28c4d8183ee8294977e9925e7f0261"
  },
  {
    "url": "assets/js/page-3c4a43ae.01e99e33.js",
    "revision": "d2b8822d8c9515876e74f2bf8c9f29de"
  },
  {
    "url": "assets/js/page-49376acf.4b422360.js",
    "revision": "3447ec8e2124f61490d846f5c664895b"
  },
  {
    "url": "assets/js/page-4abc2b47.3a20daf5.js",
    "revision": "37b21e5c20644d05c93fbcb5dcd714b7"
  },
  {
    "url": "assets/js/page-50e0a6f6.5f965e12.js",
    "revision": "8ae4dbc6fbd96ac1d854b0b04f983a1b"
  },
  {
    "url": "assets/js/page-5607f94f.2ba8e4ad.js",
    "revision": "d8db2b927eedcd00af0f484e30a6407a"
  },
  {
    "url": "assets/js/page-5c008213.66f6dd55.js",
    "revision": "a33fab4d859a79857b73f51d649c6268"
  },
  {
    "url": "assets/js/page-5fc63572.2e4617e9.js",
    "revision": "c75384444dc596e0ce9aec598ddae876"
  },
  {
    "url": "assets/js/page-6365d1e8.da5b9718.js",
    "revision": "69bec49295645443f9cd38fb686a657f"
  },
  {
    "url": "assets/js/page-6f8a8732.917cf8f9.js",
    "revision": "b861e836196496afd70bbb061d4a989c"
  },
  {
    "url": "assets/js/page-70a930f7.9a6afbd8.js",
    "revision": "1a7e08b0cb9c3f9fc77a5ddc6c2e707d"
  },
  {
    "url": "assets/js/page-782df662.2e154745.js",
    "revision": "9a934298de9e446ccc1e8ded3164d6e0"
  },
  {
    "url": "assets/js/page-921a5862.434f2714.js",
    "revision": "1a6fb159cd58c890f2430b9e6e66e310"
  },
  {
    "url": "assets/js/page-9a911df4.3635ada4.js",
    "revision": "ca0883b009a58bb384338a78807ef647"
  },
  {
    "url": "assets/js/page-bfd44046.3f20bfb8.js",
    "revision": "bce78cddf6f5ca4ffe62baab1c57ba83"
  },
  {
    "url": "assets/js/page-bffdee08.b68aba7d.js",
    "revision": "683ac3b6acffa6873f90798cd6431dbb"
  },
  {
    "url": "assets/js/page-cd7053a2.9d54461e.js",
    "revision": "5c7f23384dc22b45ff731801bec06bbf"
  },
  {
    "url": "assets/js/page-dad8d1c2.78952fb6.js",
    "revision": "9b9770d456e32cc0169d57dfe35e9b3f"
  },
  {
    "url": "assets/js/page-eaea12a2.77d24a6d.js",
    "revision": "e4c54a30f321377a05a333d824f91bcd"
  },
  {
    "url": "assets/js/page-fa1749c8.9ed797b4.js",
    "revision": "33b308e9c0747198f4a714e6f6f54c6b"
  },
  {
    "url": "assets/js/vendors~flowchart.4dfbbe88.js",
    "revision": "6fb5962df3346f585adf467b67ffde75"
  },
  {
    "url": "assets/js/vendors~layout-Layout.5a9d30b6.js",
    "revision": "da5246ceb2a66a6ad844e925d2c6abb6"
  },
  {
    "url": "category/index.html",
    "revision": "e6318d643c0ee7e0f59453dbdf18726b"
  },
  {
    "url": "hello-vblog.html",
    "revision": "fa0b54c9ff7f82e53cb7c816b01ab18f"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "78302dc69b70caf43060550aaec94bf8"
  },
  {
    "url": "search/index.html",
    "revision": "50deb6b7c2ed7086e6d075e985d5436d"
  },
  {
    "url": "tag/index.html",
    "revision": "d798944ef6fee9b81b941a6bb8c2bd42"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load.html",
    "revision": "b95c57f6c61c0e32139ec34b5111581a"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load2.html",
    "revision": "35c9d5e73bf5c9654586bd7c0dccc254"
  },
  {
    "url": "VBlog/Feature/about-page.html",
    "revision": "9bcb16da22877439c72d181655dd0251"
  },
  {
    "url": "VBlog/Feature/archive-page.html",
    "revision": "a15d987bf222ebdd940081eb8c9a6b59"
  },
  {
    "url": "VBlog/Feature/category-page.html",
    "revision": "8b40fdf9e5381c3b660938f4dd8f875b"
  },
  {
    "url": "VBlog/Feature/common-feature.html",
    "revision": "3da6158effc8f83562f87ad589e29771"
  },
  {
    "url": "VBlog/Feature/index-page.html",
    "revision": "c25753d1db379b90c5d8503568ed7236"
  },
  {
    "url": "VBlog/Feature/index.html",
    "revision": "d80d50044c5b681dd45d645b7a60ca34"
  },
  {
    "url": "VBlog/Feature/post-page.html",
    "revision": "7f5cf321b32b529a464038988805c551"
  },
  {
    "url": "VBlog/Feature/search-page.html",
    "revision": "4a07f789994e4741feb99246de0f7267"
  },
  {
    "url": "VBlog/Feature/sidebar-feature.html",
    "revision": "967ff569ff5370a260a079099e8328f0"
  },
  {
    "url": "VBlog/Feature/tag-page.html",
    "revision": "baff66d5e718fe186d3d57eb873f5f4f"
  },
  {
    "url": "VBlog/index.html",
    "revision": "c494139238b3e71b39323bc0a06c0452"
  },
  {
    "url": "VBlog/Installation.html",
    "revision": "fe6d34e036d3449b6656fae77bd677bb"
  },
  {
    "url": "VBlog/Quick-Start.html",
    "revision": "af583d080beee4c5d5ae05d143d951a5"
  },
  {
    "url": "VBlog/Usage/Container/index.html",
    "revision": "454900c1e5025d7f9c208d503652e066"
  },
  {
    "url": "VBlog/Usage/front-matter.html",
    "revision": "107dd854bcfe1297ca84d492d1e2ea01"
  },
  {
    "url": "VBlog/Usage/index.html",
    "revision": "2d6316cd39063e0c2e49470ced9aabee"
  },
  {
    "url": "VBlog/Usage/Markdown/advanced.html",
    "revision": "d19ce911f958564c546646de7c912839"
  },
  {
    "url": "VBlog/Usage/Markdown/basic.html",
    "revision": "098a3cdf88c8187e6796316a9eecb873"
  },
  {
    "url": "VBlog/Usage/Markdown/flow-chart.html",
    "revision": "6685744aab12dd9d0ae2ed2a4f7d74e0"
  },
  {
    "url": "VBlog/Usage/Markdown/index.html",
    "revision": "9a431e141c1312f3bc83a8639cea508d"
  },
  {
    "url": "VBlog/Usage/Markdown/link.html",
    "revision": "e8ea31cbcc110495031ac5cc0f5f17f5"
  },
  {
    "url": "VBlog/Usage/Slide.html",
    "revision": "eb3f97405f5ed73c8e2545dde14de8ea"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
