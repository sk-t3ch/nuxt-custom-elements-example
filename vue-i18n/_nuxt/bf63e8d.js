(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{227:function(t,e,n){var content=n(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("5d3c8c4b",content,!0,{sourceMap:!1})},228:function(t,e,n){"use strict";e.a={locales:[{code:"en",name:"English"},{code:"de",name:"Deutsch"},{code:"ja",name:"日本語"}],defaultLocale:"en",vueI18n:{messages:{de:{message:{hello:"hallo welt"}},en:{message:{hello:"hello world"}},ja:{message:{hello:"こんにちは、世界"}}}}}},229:function(t,e,n){"use strict";n(227)},230:function(t,e,n){var l=n(92)(!1);l.push([t.i,'.example[data-v-933b4d26]{padding:10px;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;color:#35495e;text-align:center;background:#35495e;border-radius:4px}nav[data-v-933b4d26]{display:flex;padding:5px 10px;margin-bottom:10px;color:#fff;background:#3b8070}nav>span[data-v-933b4d26]{padding-right:10px}ul[data-v-933b4d26]{display:flex;flex:1;padding:0;list-style:none}ul li[data-v-933b4d26]{padding:0 5px}a[data-v-933b4d26]{display:block;color:#fff;text-decoration:none;text-transform:uppercase;cursor:pointer}.nuxt-link-exact-active.nuxt-link-active[data-v-933b4d26],.router-link-exact-active.router-link-active[data-v-933b4d26],.title[data-v-933b4d26]{font-weight:700}.title[data-v-933b4d26]{margin-bottom:10px;font-size:24px;text-transform:uppercase}.content[data-v-933b4d26],.title[data-v-933b4d26]{padding:5px;line-height:1.6;color:#35495e;background:#fff}.fade-leave-active[data-v-933b4d26]{transition:opacity .35s}.fade-enter[data-v-933b4d26],.fade-leave-to[data-v-933b4d26]{opacity:0}',""]),t.exports=l},231:function(t,e,n){"use strict";n(33),n(22);var l=n(228),o={computed:{links:function(){var t=this;return(this.$i18n.locales||l.a.locales).map((function(e){var n=e.name,code=e.code;return{code:code,class:code===t.$i18n.locale?"router-link-exact-active router-link-active":"",title:n,to:t.switchLocalePath(code)}}))}}},c=(n(229),n(52)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"example"},[n("nav",{staticClass:"navigation"},[n("span",[t._v("Locales:")]),t._v(" "),n("ul",t._l(t.links,(function(link){return n("li",{key:link.title},[t.$nuxt?n("nuxt-link",{attrs:{to:link.to,title:link.title}},[t._v("\n          "+t._s(link.title)+"\n        ")]):n("a",{class:link.class,attrs:{title:link.title},on:{click:function(e){e.preventDefault(),t.$i18n.locale=link.code}}},[t._v("\n          "+t._s(link.title)+"\n        ")])],1)})),0)]),t._v(" "),n("div",{staticClass:"content"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("span",{key:t.$i18n.locale},[t._v(t._s(t.$t("message").hello))])])],1)])}),[],!1,null,"933b4d26",null);e.a=component.exports},238:function(t,e,n){"use strict";n.r(e);var l={components:{Example:n(231).a}},o=n(52),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("fieldset",[n("legend",[t._v("Nuxt Component")]),t._v(" "),n("div",[n("Example")],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);