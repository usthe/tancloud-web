"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[193,18,426,925,217],{5:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(9962);function r(e){var t=(0,a.Z)().siteConfig.customFields.cdnUrl;return null!==t&&null!=e?t+e:e}},702:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(7294),r=n(6010),l={features:"features_2p0b",featureImage:"featureImage_2Rbd"},c=n(5);function s(e){var t=e.imageUrl,n=e.title,s=e.description,o=(0,c.Z)(t);return a.createElement("div",{className:(0,r.Z)("col col--4",l.feature)},o&&a.createElement("div",{className:"text--center"},a.createElement("img",{className:l.featureImage,src:o,alt:n})),a.createElement("h3",null,n),a.createElement("p",null,s))}},4109:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(7294),r=n(6010),l="featureTitle_1sBy",c="featureContent_X9Lx",s="featureContentReversed_3gLf",o="featureImage_1CfO",i="darkSection_3BKa",m="featureImageReversed_1bU1";function u(e){var t=e.reversed,n=e.title,u=e.img,g=e.text,h=e.isDark,d=a.createElement("div",{className:(0,r.Z)("col col--6",o,t?m:"")},u),f=a.createElement("div",{className:(0,r.Z)("col col--6",c,t?s:"")},a.createElement("h3",{className:l},n),g);return a.createElement("section",{className:(0,r.Z)("highlightSection",h?i+" darkSection":"")},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},t?a.createElement(a.Fragment,null,f,d):a.createElement(a.Fragment,null,d,f))))}},1100:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(144),r=n(7294),l=n(6010),c="companyUsage_3sOj",s="logos_3g3Q",o="logoNavigation_3yj2",i="button_24Bd",m="buttonActive_WuSB",u=0,g=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={position:-0,activePage:0,swapInterval:0,pages:Math.ceil(t.logos?t.logos.length/6:1),margin:70},n.imgUrl=n.containerRef=r.createRef(),n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.containerRef.current.getBoundingClientRect(),t=Math.floor(e.width/150);this.setState({swapInterval:setInterval(this.nextPage.bind(this),5e3),pages:Math.ceil(this.props.logos?this.props.logos.length/t:1),margin:e.width<700?0:70})},n.componentWillUnmount=function(){clearInterval(this.state.swapInterval)},n.animateTo=function(e){var t=e*-(this.containerRef.current.getBoundingClientRect().width-this.state.margin);this.setState({position:t,activePage:e})},n.handleClick=function(e){this.animateTo(e),clearInterval(this.state.swapInterval),this.setState({swapInterval:setInterval(this.nextPage.bind(this),5e3)})},n.nextPage=function(){var e=this.state.pages-1,t=Math.floor(u/e)%2;this.animateTo(t?e-u%e:u%e),++u},n.render=function(){var e=this;return this.props&&this.props.logos?(this.buttons=function(){return[].concat(Array(e.state.pages)).map((function(t,n){return r.createElement("button",{onClick:function(){return e.handleClick(n)},key:n,className:(0,l.Z)(i,n===e.state.activePage?m:"")},n+1)}))},this.list=function(){return r.createElement("ul",{style:{transform:"translate("+e.state.position+"px, 0px)"}},e.props.logos.map((function(e,t){return r.createElement("li",{key:t},r.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.createElement("img",{src:"https://cdn.jsdelivr.net/gh/usthe/hertzbeat@gh-pages/img/icons/"+e.img,alt:e.alt})))})))},r.createElement("div",{className:c,ref:this.containerRef},r.createElement("h3",null,this.props.headerTitle),r.createElement("div",{className:(0,l.Z)(s)},this.list(),r.createElement("div",{className:o},this.buttons())))):r.createElement("div",null)},t}(r.Component)},5932:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(7294),r={section:"section_2F2o",darkSection:"darkSection_2bDk"};function l(e){var t=e.isDark,n=e.children;return a.createElement("section",{className:[r.section].concat(t?[r.darkSection,"darkSection"]:[]).join(" ")},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},n)))}},8294:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(3117),r=n(7294),l=n(6010),c=n(4562),s=(n(3670),n(3699)),o=n(9962),i=(n(9524),n(7325)),m=n(702),u=n(5932),g=(n(4109),n(1100),n(5)),h={heroBanner:"heroBanner_3P7f",buttons:"buttons_1r9m",frameworkLogos:"frameworkLogos_lURf",reactImage:"reactImage_2YKi",social:"social_1Zu7",tweetBtn:"tweetBtn_2SHy"},d=[{title:(0,i.I)({message:"\u5f00\u7bb1\u5373\u7528"}),description:r.createElement(r.Fragment,null,r.createElement(i.Z,{values:{TANCLOUD:r.createElement("strong",null,"TANCLOUD"),SAAS:r.createElement("strong",null,"SAAS"),console:r.createElement("a",{href:"https://www.console.tancloud.cn"},r.createElement("strong",null,"\u6ce8\u518c\u767b\u9646")),doc:r.createElement("strong",null,"\u6587\u6863"),br:r.createElement("br",null)}},"\u4e2d\u5c0f\u56e2\u961f\u548c\u4e2a\u4eba\u65e0\u9700\u518d\u4e3a\u4e86\u76d1\u63a7\u81ea\u5df1\u7684\u7f51\u7ad9\u8d44\u6e90\uff0c\u800c\u53bb\u90e8\u7f72\u4e00\u5957\u7e41\u7410\u7684\u76d1\u63a7\u7cfb\u7edf\u3002\u5f80\u5f80\u6709\u65f6\u5019\uff0c\u90a3\u5957\u76d1\u63a7\u7cfb\u7edf\u6bd4\u81ea\u8eab\u7f51\u7ad9\u6d88\u8017\u7684\u8d44\u6e90\u8fd8\u5927\u3002{TANCLOUD} \u63d0\u4f9b{SAAS}\u4e91\u7248\u672c\uff0c{console}\u5373\u53ef\u5f00\u59cb\u60a8\u7684\u670d\u52a1\u76d1\u63a7\u3002{br}\u5b89\u5168\u662f\u6700\u91cd\u8981\u7684\uff0c\u6211\u4eec\u5bf9\u8d26\u6237\u5bc6\u94a5\u548c\u76d1\u63a7\u5bc6\u94a5\u5168\u94fe\u8def\u52a0\u5bc6\u3002"))},{title:(0,i.I)({message:"\u591a\u652f\u6301\u4e0e\u81ea\u5b9a\u4e49"}),description:r.createElement(r.Fragment,null,r.createElement(i.Z,{values:{WebSockets:r.createElement("strong",null,"WebSockets"),Servlet:r.createElement("strong",null,"Servlet"),JaxRs:r.createElement("strong",null,"JAX-RS"),custom:r.createElement("a",{href:"/docs/advanced/extend-point"},r.createElement("strong",null,"\u81ea\u5b9a\u4e49\u76d1\u63a7")),br:r.createElement("br",null)}},"TANCLOUD\u76ee\u524d\u652f\u6301\u5bf9\u7f51\u7ad9\uff0cAPI\uff0cPING\u8fde\u901a\u6027\uff0c\u7aef\u53e3\u53ef\u7528\u6027\uff0cMYSQL\u6570\u636e\u5e93\u7b49\u7684\u76d1\u63a7\uff0c\u4e0d\u4e45\u6211\u4eec\u5c06\u517c\u5bb9 prometheus \u534f\u8bae\uff0c\u63d0\u4f9b\u66f4\u591a\u7684\u76d1\u63a7\u7c7b\u578b\u548c\u6027\u80fd\u6307\u6807\u3002{br}\u6211\u4eec\u63d0\u4f9b\u4e86\u66f4\u81ea\u7531\u5316\u7684\u9608\u503c\u544a\u8b66\u914d\u7f6e\uff0c\u652f\u6301\u90ae\u7bb1\uff0c\u77ed\u4fe1\uff0cwebhook\u7b49\u544a\u8b66\u901a\u77e5\uff0c\u66f4\u591a\u4e09\u65b9\u5e94\u7528\u901a\u77e5\u6b63\u5728\u96c6\u6210\u4e2d\u3002{br}\u4e0d\u540c\u56e2\u961f\u7684\u76d1\u63a7\u9700\u6c42\u5343\u53d8\u4e07\u5316\uff0c\u6211\u4eec\u63d0\u4f9b{custom}\uff0c\u4ec5\u9700\u914d\u7f6eYML\u5c31\u80fd\u5feb\u901f\u63a5\u5165\u76d1\u63a7\u7cfb\u7edf\u3002"))},{title:(0,i.I)({message:"\u62e5\u62b1\u5f00\u6e90"}),description:r.createElement(r.Fragment,null,r.createElement(i.Z,{values:{github:r.createElement("a",{href:"https://github.com/usthe/hertzbeat"},r.createElement("strong",null,"HertzBeat Github \u4ee3\u7801\u4ed3\u5e93")),gitee:r.createElement("a",{href:"https://gitee.com/usthe/hertzbeat"},r.createElement("strong",null,"HertzBeat Gitee \u4ee3\u7801\u4ed3\u5e93")),br:r.createElement("br",null)}},"TANCLOUD\u76d1\u63a7\u7cfb\u7edf\u4ee3\u7801\u5f00\u6e90\uff0c\u975e\u5e38\u6b22\u8fce\u4efb\u4f55\u5bf9\u6b64\u6709\u5174\u8da3\u7684\u540c\u5b66\u53c2\u4e0e\u4e2d\u6765\uff0c\u6211\u4eec\u4e00\u8d77\u8fdb\u6b65\uff0c\u4e30\u5bcc\u7684\u8d44\u6e90\u6587\u6863\u6b63\u5728\u5b8c\u5584\u4e2d\u3002{br}\u4e2d\u4e8c\u7684\u6211\u4eec\u76f8\u4fe1\u5f00\u6e90\u6539\u53d8\u4e16\u754c\uff01{br}{github} {br}{gitee}"))}];var f=function(){var e=(0,o.Z)().siteConfig,t=void 0===e?{}:e;return r.createElement(c.Z,{title:t.title+" \xb7 "+t.tagline,description:""+t.tagline},r.createElement("header",{className:(0,l.Z)("hero hero--primary",h.heroBanner)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},r.createElement("img",{style:{width:"500px",marginTop:"100px"},src:(0,g.Z)("img/tancloud-brand.svg"),alt:"#"})),r.createElement("p",{className:"hero__subtitle"},r.createElement(i.Z,null,"\u6613\u7528\u53cb\u597d\u7684\u9ad8\u6027\u80fd\u76d1\u63a7\u4e91")),r.createElement("div",{className:h.social},r.createElement("a",{href:"https://console.tancloud.cn"},r.createElement("img",{src:(0,g.Z)("img/badge/web-monitor.svg"),alt:""})),r.createElement("a",{href:"https://console.tancloud.cn"},r.createElement("img",{src:(0,g.Z)("img/badge/ping-connect.svg"),alt:""})),r.createElement("a",{href:"https://console.tancloud.cn"},r.createElement("img",{src:(0,g.Z)("img/badge/port-available.svg"),alt:""})),r.createElement("a",{href:"https://console.tancloud.cn"},r.createElement("img",{src:(0,g.Z)("img/badge/database-monitor.svg"),alt:""})),r.createElement("a",{href:"https://console.tancloud.cn"},r.createElement("img",{src:(0,g.Z)("img/badge/custom-monitor.svg"),alt:""})),r.createElement("a",{href:"https://console.tancloud.cn"},r.createElement("img",{src:(0,g.Z)("img/badge/threshold.svg"),alt:""})),r.createElement("a",{href:"https://console.tancloud.cn"},r.createElement("img",{src:(0,g.Z)("img/badge/alert.svg"),alt:""}))),r.createElement("div",{className:h.buttons},r.createElement(s.Z,{to:"https://console.tancloud.cn",className:(0,l.Z)("button button--outline button--secondary button--lg",h.getStarted)},r.createElement(i.Z,null,"\u5373\u523b\u767b\u9646\u514d\u8d39\u4f7f\u7528"))))),r.createElement("main",null,d&&d.length>0&&r.createElement(u.default,{isDark:!0},d.map((function(e,t){return r.createElement(m.default,(0,a.Z)({key:t},e))})))))}}}]);