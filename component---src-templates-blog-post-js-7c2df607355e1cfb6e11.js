(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});var n=a(0),r=a.n(n),l=a(173);t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))};var i="861893041"},169:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),l=a(5),i=a.n(l),s=a(40),c=a.n(s);a.d(t,"a",function(){return c.a});a(170);var u=r.a.createContext({});function o(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&l(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(o,{data:t,query:a,render:n||l,staticQueryData:e})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},170:function(e,t,a){var n;e.exports=(n=a(172))&&n.default||n},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Brenton Holswich",subtitle:"Software Developer at Big Bear Software"}}}}},172:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),l=a(5),i=a.n(l),s=a(64),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},173:function(e,t,a){"use strict";var n=a(171),r=a(0),l=a.n(r),i=a(5),s=a.n(i),c=a(169),u=[{title:"Home",uri:"/"},{title:"About Me",uri:"/about"},{title:"Skills",uri:"/skills"},{title:"Blog",uri:"/blog"}],o=function(e){var t=e.siteTitle,a=e.subTitle;return l.a.createElement("header",{className:"container-fluid"},l.a.createElement("section",{className:"row"},l.a.createElement("div",{className:"col-12 pb-2"},l.a.createElement("h1",null,l.a.createElement(c.a,{to:"/"},t)),l.a.createElement("h5",null,a)),l.a.createElement("nav",{className:"col-12 d-flex flex-column"},u.map(function(e,t){return l.a.createElement("div",{className:"py-2",key:t},l.a.createElement(c.a,{to:e.uri},e.title))}),l.a.createElement("div",{className:"py-2"},l.a.createElement("a",{href:"https://github.com/THISS",target:"__blank"},"GitHub")),l.a.createElement("div",{className:"py-2"},l.a.createElement("a",{href:"https://www.linkedin.com/in/brenton-holswich/",target:"__blank"},"linkedIn")))))};o.propTypes={siteTitle:s.a.string,subTitle:s.a.string},o.defaultProps={siteTitle:"",subTitle:""};var d=o,m=(a(158),function(e){var t=e.children;return l.a.createElement(c.b,{query:"565778879",render:function(e){return l.a.createElement("div",{className:"container-fluid site-container d-flex"},l.a.createElement("div",{className:"row flex-fill"},l.a.createElement("div",{className:"d-none d-sm-block col-sm-4 position-fixed"},l.a.createElement(d,{siteTitle:e.site.siteMetadata.title,subTitle:e.site.siteMetadata.subtitle})),l.a.createElement("div",{className:"d-sm-none d-block col-12"},l.a.createElement(d,{siteTitle:e.site.siteMetadata.title,subTitle:e.site.siteMetadata.subtitle})),l.a.createElement("div",{className:"col-12 col-sm-8 offset-sm-4 d-flex pr-0"},l.a.createElement("div",{className:"d-flex flex-column justify-content-between w-100"},l.a.createElement("main",{className:"flex-fill w-100 d-flex"},t),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))))},data:n})});m.propTypes={children:s.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7c2df607355e1cfb6e11.js.map