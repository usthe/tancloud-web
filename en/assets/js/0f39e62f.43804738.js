"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[18],{1100:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var a=n(144),s=n(7294),i=n(6010),r="companyUsage_3sOj",o="logos_3g3Q",l="logoNavigation_3yj2",c="button_24Bd",h="buttonActive_WuSB",u=0,p=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={position:-0,activePage:0,swapInterval:0,pages:Math.ceil(e.logos?e.logos.length/6:1),margin:70},n.imgUrl=n.containerRef=s.createRef(),n}(0,a.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this.containerRef.current.getBoundingClientRect(),e=Math.floor(t.width/150);this.setState({swapInterval:setInterval(this.nextPage.bind(this),5e3),pages:Math.ceil(this.props.logos?this.props.logos.length/e:1),margin:t.width<700?0:70})},n.componentWillUnmount=function(){clearInterval(this.state.swapInterval)},n.animateTo=function(t){var e=t*-(this.containerRef.current.getBoundingClientRect().width-this.state.margin);this.setState({position:e,activePage:t})},n.handleClick=function(t){this.animateTo(t),clearInterval(this.state.swapInterval),this.setState({swapInterval:setInterval(this.nextPage.bind(this),5e3)})},n.nextPage=function(){var t=this.state.pages-1,e=Math.floor(u/t)%2;this.animateTo(e?t-u%t:u%t),++u},n.render=function(){var t=this;return this.props&&this.props.logos?(this.buttons=function(){return[].concat(Array(t.state.pages)).map((function(e,n){return s.createElement("button",{onClick:function(){return t.handleClick(n)},key:n,className:(0,i.Z)(c,n===t.state.activePage?h:"")},n+1)}))},this.list=function(){return s.createElement("ul",{style:{transform:"translate("+t.state.position+"px, 0px)"}},t.props.logos.map((function(t,e){return s.createElement("li",{key:e},s.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},s.createElement("img",{src:"https://cdn.jsdelivr.net/gh/usthe/sureness@gh-pages/img/icons/"+t.img,alt:t.alt})))})))},s.createElement("div",{className:r,ref:this.containerRef},s.createElement("h3",null,this.props.headerTitle),s.createElement("div",{className:(0,i.Z)(o)},this.list(),s.createElement("div",{className:l},this.buttons())))):s.createElement("div",null)},e}(s.Component)}}]);