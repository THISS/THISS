(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(151),i=a(167),u=a.n(i),o=a(168),c=a.n(o),s=new u.a(c.a),d=(s.scale,s.rhythm,s.options,a(155));a.d(t,"query",function(){return m});t.default=function(e){var t=e.data;return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"A site by me for me!"),r.a.createElement("h4",null,"check it out I have ",t.allMarkdownRemark.totalCount," posts"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement(l.a,{to:t.fields.slug},r.a.createElement("h3",null,t.frontmatter.title," ",r.a.createElement("span",null,"— ",t.frontmatter.date)),r.a.createElement("p",null,t.excerpt)))})))};var m="2068765159"},151:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),u=a(33),o=a.n(u);a.d(t,"a",function(){return o.a});a(152);var c=r.a.createContext({}),s=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Brenton Holswich - thoughts in progress"}}}}},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),u=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},155:function(e,t,a){"use strict";var n=a(153),r=a(0),l=a.n(r),i=a(4),u=a.n(i),o=a(151),c=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.propTypes={siteTitle:u.a.string},c.defaultProps={siteTitle:""};var s=c,d=(a(156),function(e){var t=e.children;return l.a.createElement(o.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,t),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});d.propTypes={children:u.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-876551a0585e44cb3aa7.js.map