(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});var r=a(0),i=a.n(r),n=a(161),s=a.n(n),l=a(157);t.default=function(e){var t=e.data.pluralsightJson;return console.log("TCL: badge",t),i.a.createElement(l.a,null,i.a.createElement("div",null,i.a.createElement("h1",null,t.title),i.a.createElement("div",null,t.score),i.a.createElement("div",null,Math.floor(t.percentile),"%"),i.a.createElement("div",null,t.dateCompleted),i.a.createElement("div",null,t.level),i.a.createElement(s.a,{fluid:t.localImage.childImageSharp.fluid,alt:t.title,style:{float:"left",marginRight:"1rem",width:150}})))};var o="3153514483"},153:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(154);var d=i.a.createContext({}),u=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},154:function(e,t,a){var r;e.exports=(r=a(156))&&r.default||r},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Brenton Holswich - thoughts in progress"}}}}},156:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),l=a(55),o=a(2),d=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},157:function(e,t,a){"use strict";var r=a(155),i=a(0),n=a.n(i),s=a(4),l=a.n(s),o=a(153),d=function(e){var t=e.siteTitle;return n.a.createElement("header",null,n.a.createElement("div",null,n.a.createElement("h1",null,n.a.createElement(o.a,{to:"/"},t))))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var u=d,c=(a(158),function(e){var t=e.children;return n.a.createElement(o.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",null,n.a.createElement("main",null,t),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})});c.propTypes={children:l.a.node.isRequired};t.a=c},161:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),l=r(a(75)),o=r(a(76)),d=r(a(0)),u=r(a(4)),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;var y=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+o+a+i+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},S=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},f,{onLoad:s,onError:u,ref:t,loading:c,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});S.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var E=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&m&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,w=e.loading,L=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,o.default)({opacity:L?1:0,transition:R?"opacity "+b+"ms":"none"},l),O="boolean"==typeof m?"lightgray":m,T={transitionDelay:b+"ms"},z=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&T,l,f),q={title:t,alt:this.state.isVisible?"":a,style:z,className:p};if(g){var C=g;return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),O&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&T)}),C.base64&&d.default.createElement(S,(0,o.default)({src:C.base64},q)),C.tracedSVG&&d.default.createElement(S,(0,o.default)({src:C.tracedSVG},q)),this.state.isVisible&&d.default.createElement("picture",null,C.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),d.default.createElement(S,{alt:a,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:w},C))}}))}if(h){var j=h,V=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete V.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},O&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:O,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},R&&T)}),j.base64&&d.default.createElement(S,(0,o.default)({src:j.base64},q)),j.tracedSVG&&d.default.createElement(S,(0,o.default)({src:j.tracedSVG},q)),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement(S,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:w},j))}}))}return null},t}(d.default.Component);E.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var w=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),L=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});E.propTypes={resolutions:w,sizes:L,fixed:w,fluid:L,fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"])};var R=E;t.default=R}}]);
//# sourceMappingURL=component---src-templates-pluralsight-badge-js-92d393eb7471d61eef24.js.map