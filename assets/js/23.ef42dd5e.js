(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{304:function(t,e,r){"use strict";r.r(e);var n={computed:{posts(){return this.$site.pages.filter(t=>t.path.startsWith("/poe/")&&!t.frontmatter.poe_index).sort((t,e)=>new Date(e.frontmatter.date)-new Date(t.frontmatter.date))}}},a=r(14),s=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("div",t._l(t.posts,(function(r){return e("div",[e("h2",[e("router-link",{attrs:{to:r.path}},[t._v(t._s(r.frontmatter.title))]),e("span",[t._v(" - "+t._s(r.frontmatter.data))])],1),t._v(" "),e("p",[t._v(t._s(r.frontmatter.description))])])})),0)}),[],!1,null,null,null);e.default=s.exports}}]);