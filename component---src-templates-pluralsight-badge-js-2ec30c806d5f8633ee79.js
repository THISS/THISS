(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});var i=a(0),r=a.n(i),s=a(174),n=a.n(s),l=a(170);t.default=function(e){var t=e.data.pluralsightJson;return console.log("TCL: badge",t),r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,t.title),r.a.createElement("div",null,t.score),r.a.createElement("div",null,Math.floor(t.percentile),"%"),r.a.createElement("div",null,t.dateCompleted),r.a.createElement("div",null,t.level),r.a.createElement(n.a,{fluid:t.localImage.childImageSharp.fluid,alt:t.title,style:{float:"left",marginRight:"1rem",width:150}})))};var o="3153514483"},166:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var i=a(0),r=a.n(i),s=a(5),n=a.n(s),l=a(40),o=a.n(l);a.d(t,"a",function(){return o.a});a(167);var d=r.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,i=e.query,s=e.render,n=a?a.data:t[i]&&t[i].data;return r.a.createElement(r.a.Fragment,null,n&&s(n),!n&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,i=e.render,s=e.children;return r.a.createElement(d.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:a,render:i||s,staticQueryData:e})})};u.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},167:function(e,t,a){var i;e.exports=(i=a(169))&&i.default||i},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Brenton Holswich",subtitle:"thoughts in progress"}}}}},169:function(e,t,a){"use strict";a.r(t);a(41);var i=a(0),r=a.n(i),s=a(5),n=a.n(s),l=a(64),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=o},170:function(e,t,a){"use strict";var i=a(168),r=a(0),s=a.n(r),n=a(5),l=a.n(n),o=a(166),d=function(e){var t=e.siteTitle,a=e.subTitle;return s.a.createElement("header",{className:"container-fluid"},s.a.createElement("section",{className:"row"},s.a.createElement("div",{className:"col-12 pb-2"},s.a.createElement("h1",null,s.a.createElement(o.a,{to:"/"},t)),s.a.createElement("h5",null,a)),s.a.createElement("nav",{className:"col-12 d-flex flex-column"},s.a.createElement("div",{className:"py-2"},s.a.createElement(o.a,{to:"/"},"Home")),s.a.createElement("div",{className:"py-2"},s.a.createElement(o.a,{to:"/about"},"About Me")),s.a.createElement("div",{className:"py-2"},s.a.createElement(o.a,{to:"/skills"},"Skills")))))};d.propTypes={siteTitle:l.a.string,subTitle:l.a.string},d.defaultProps={siteTitle:"",subTitle:""};var c=d,u=(a(158),function(e){var t=e.children;return s.a.createElement(o.b,{query:"565778879",render:function(e){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"d-none d-sm-block col-sm-4 position-fixed"},s.a.createElement(c,{siteTitle:e.site.siteMetadata.title,subTitle:e.site.siteMetadata.subtitle})),s.a.createElement("div",{className:"d-sm-none d-block col-12"},s.a.createElement(c,{siteTitle:e.site.siteMetadata.title,subTitle:e.site.siteMetadata.subtitle})),s.a.createElement("div",{className:" col-12 col-sm-8 offset-sm-4"},s.a.createElement("main",{className:"col-12"},t),s.a.createElement("footer",{className:"col-12"},"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))))},data:i})});u.propTypes={children:l.a.node.isRequired};t.a=u},174:function(e,t,a){"use strict";var i=a(10);t.__esModule=!0,t.default=void 0;var r,s=i(a(8)),n=i(a(42)),l=i(a(95)),o=i(a(96)),d=i(a(0)),c=i(a(5)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,h=g&&window.IntersectionObserver,b=new WeakMap;var y=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+o+a+r+t+n+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.loading,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:i,src:r},f,{onLoad:n,onError:c,ref:t,loading:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});E.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var S=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&h&&!t.critical&&!a.seenBefore;var i=t.critical||g&&(m||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,l=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,L=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,o.default)({opacity:L?1:0,transition:R?"opacity "+b+"ms":"none"},l),T="boolean"==typeof h?"lightgray":h,N={transitionDelay:b+"ms"},O=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&N,l,f),z={title:t,alt:this.state.isVisible?"":a,style:O,className:p};if(m){var q=m;return d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),T&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&N)}),q.base64&&d.default.createElement(E,(0,o.default)({src:q.base64},z)),q.tracedSVG&&d.default.createElement(E,(0,o.default)({src:q.tracedSVG},z)),this.state.isVisible&&d.default.createElement("picture",null,q.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:q.srcSetWebp,sizes:q.sizes}),d.default.createElement(E,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:w},q))}}))}if(g){var C=g,M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},s);return"inherit"===s.display&&delete M.display,d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},T&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:T,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},R&&N)}),C.base64&&d.default.createElement(E,(0,o.default)({src:C.base64},z)),C.tracedSVG&&d.default.createElement(E,(0,o.default)({src:C.tracedSVG},z)),this.state.isVisible&&d.default.createElement("picture",null,C.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),d.default.createElement(E,{alt:a,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:w},C))}}))}return null},t}(d.default.Component);S.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});S.propTypes={resolutions:w,sizes:L,fixed:w,fluid:L,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var R=S;t.default=R}}]);
//# sourceMappingURL=component---src-templates-pluralsight-badge-js-2ec30c806d5f8633ee79.js.map