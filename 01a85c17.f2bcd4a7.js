(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);a(238),a(343),a(279),a(25),a(20),a(19),a(53);var n=a(0),r=a.n(n),l=a(234),c=a(229);t.default=function(e){var t=e.tags,a={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);a[t]=a[t]||[],a[t].push(e)}));var n=Object.entries(a).sort((function(e,t){var a=e[0],n=t[0];return a===n?0:a>n?1:-1})).map((function(e){var a=e[0],n=e[1];return r.a.createElement("div",{key:a},r.a.createElement("h3",null,a),n.map((function(e){return r.a.createElement(c.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),r.a.createElement("hr",null))})).filter((function(e){return null!=e}));return r.a.createElement(l.a,{title:"Tags",description:"Blog Tags"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},n)))))}},233:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var n=a(227);function r(){var e=Object(n.a)().siteConfig,t=(void 0===e?{}:e).customFields.metadata.latest_highlight,a=Date.parse(t.date),r=new Date,l=Math.abs(r-a),c=Math.ceil(l/864e5),i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("highlightsViewedAt")||"0"))),c<30&&(!i||i<a)?t:null}function l(){"undefined"!=typeof window&&window.localStorage.setItem("highlightsViewedAt",(new Date).getTime())}},234:function(e,t,a){"use strict";a(241);var n=a(0),r=a.n(n),l=a(242),c=a(231),i=a(1),o=(a(243),a(229)),m=a(244),s=a(232),u=a.n(s),d=a(245),g=a.n(d),h=a(227),b=a(226),f=a.n(b),v=a(131),E=a.n(v),p=function(){return r.a.createElement("span",{className:f()(E.a.toggle,E.a.moon)})},_=function(){return r.a.createElement("span",{className:f()(E.a.toggle,E.a.sun)})},k=function(e){var t=Object(h.a)().isClient;return r.a.createElement(g.a,Object(i.a)({disabled:!t,icons:{checked:r.a.createElement(p,null),unchecked:r.a.createElement(_,null)}},e))},N=a(233),w=a(230),y=a(249),O=a(239),j=a(240),C=a(237),T=a(132),x=a.n(T);function S(e){var t=e.href,a=e.hideIcon,n=e.label,l=e.onClick,c=(e.position,e.right),m=e.to,s=function(e,t){var a={label:e};switch(e.toLowerCase()){case"chat":return a.hideText=1==t,a.icon="message-circle",a;case"community":return a.hideText=1==t,a.icon="users",a;case"github":return a.badge="6k",a.hideText=!1,a.icon="github",a;case"highlights":return Object(N.a)()&&(a.badge="new",a.badgeStyle="primary"),a.hideText=1==t,a.icon="gift",a;default:return a}}(n,c)||{},u=Object(w.a)(m);return r.a.createElement(o.a,Object(i.a)({className:f()("navbar__item navbar__link",s.className,{navbar__item__icon_only:s.hideText}),title:s.hideText?n:null,onClick:l},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:u}),!a&&s.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-"+s.icon})," ",s.iconLabel),!s.hideText&&s.label,s.badge&&r.a.createElement("span",{className:f()("badge","badge--"+(s.badgeStyle||"secondary"))},s.badge))}var D=function(){var e,t=Object(h.a)(),a=t.siteConfig.themeConfig,l=a.navbar,c=(l=void 0===l?{}:l).title,s=l.links,d=void 0===s?[]:s,g=l.hideOnScroll,b=void 0!==g&&g,v=a.disableDarkMode,E=void 0!==v&&v,p=(t.isClient,Object(n.useState)(!1)),_=p[0],N=p[1],w=Object(n.useState)(!1),T=w[0],D=w[1],L=Object(C.a)(),I=L.isDarkTheme,M=L.setLightTheme,A=L.setDarkTheme,P=Object(y.a)(b),B=P.navbarRef,F=P.isNavbarVisible,G=Object(j.a)(),V=G.logoLink,R=G.logoLinkProps,H=G.logoImageUrl,J=G.logoAlt;Object(O.a)(_);var U=Object(n.useCallback)((function(){N(!0)}),[N]),W=Object(n.useCallback)((function(){N(!1)}),[N]),q=Object(n.useCallback)((function(e){return e.target.checked?A():M()}),[M,A]);return r.a.createElement("nav",{ref:B,className:f()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":_},e[x.a.navbarHideable]=b,e[x.a.navbarHidden]=!F,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:U,onKeyDown:U},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",to:V},R),null!=H&&r.a.createElement(u.a,{className:"navbar__logo",src:H,alt:J}),null!=c&&r.a.createElement("strong",{className:T?x.a.hideLogoText:""},c)),d.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(S,Object(i.a)({},e,{left:!0,key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},d.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(S,Object(i.a)({},e,{right:!0,key:t}))})),!E&&r.a.createElement(k,{className:x.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:I,onChange:q}),r.a.createElement(m.a,{handleSearchBarToggle:D,isSearchBarExpanded:T}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:W}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",onClick:W,to:V},R),null!=H&&r.a.createElement(u.a,{className:"navbar__logo",src:H,alt:J}),null!=c&&r.a.createElement("strong",null,c)),!E&&_&&r.a.createElement(k,{"aria-label":"Dark mode toggle in sidebar",checked:I,onChange:q})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(S,Object(i.a)({className:"menu__link"},e,{hideIcon:!0,onClick:W})))})))))))},L=a(9);a(133);var I=function(e){var t,a=e.block,n=e.buttonClass,l=e.center,c=e.description,i=e.size,o=e.width;return r.a.createElement("div",{className:f()("mailing-list",(t={"mailing-list--block":a,"mailing-list--center":l},t["mailing-list--"+i]=i,t))},!1!==c&&r.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),r.a.createElement("form",{action:"https://app.getvero.com/forms/a748ded7ce0da69e6042fa1e21042506",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:f()("input","input--"+i),name:"email",placeholder:"you@email.com",type:"email",style:{width:o}}),r.a.createElement("button",{className:f()("button","button--"+(n||"primary"),"button--"+i),type:"submit"},"Subscribe")))},M=a(134),A=a.n(M);function P(e){var t=e.to,a=e.href,n=e.label,l=Object(L.a)(e,["to","href","label"]),c=Object(w.a)(t);return r.a.createElement(o.a,Object(i.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:c},l),n)}var B=function(e){var t=e.url,a=e.alt;return r.a.createElement(u.a,{className:"footer__logo",alt:a,src:t})};var F=function(){var e=Object(h.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},l=n.copyright,c=n.links,i=void 0===c?[]:c,o=n.logo,m=void 0===o?{}:o,s=Object(w.a)(m.src);return a?r.a.createElement("footer",{className:f()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(u.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"Gnet",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(I,{description:!1,width:"150px"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/_andy_pan",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"Gnet's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/panjf2000/gnet",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"Gnet's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://strikefreedom.top/rss.xml",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"Gnet's RSS feed"})))),i.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(P,e))}))):null)}))),(m||l)&&r.a.createElement("div",{className:"text--center"},m&&m.src&&r.a.createElement("div",{className:"margin-bottom--sm"},m.href?r.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:A.a.footerLogoLink},r.a.createElement(B,{alt:m.alt,url:s})):r.a.createElement(B,{alt:m.alt,url:s}),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.digitalocean.com/",target:"_blank",rel:"noopener noreferrer",className:A.a.footerLogoLink},r.a.createElement("img",{alt:"DigitalOcean",src:"https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_blue.svg",width:"201px"}))),l,r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("a",{href:"https://github.com/panjf2000/gnet/security/policy"},"Security Policy"),"\xa0\u2022\xa0",r.a.createElement("a",{href:"https://github.com/panjf2000/gnet/blob/master/PRIVACY.md"},"Privacy Policy")),r.a.createElement("br",null),r.a.createElement("small",null,"Acknowledgement for Timber, Inc.")))):null},G=a(250),V=a(251),R=a(3);a(135);t.a=function(e){var t=Object(h.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=(a.tagline,a.title),o=a.themeConfig.image,m=a.url,s=e.children,u=e.title,d=e.noFooter,g=e.description,b=e.image,f=e.keywords,v=(e.permalink,e.version),E=u?u+" | "+i:i,p=b||o,_=m+Object(w.a)(p),k=Object(w.a)(n),N=Object(R.h)(),y=N?"https://gnet.host"+(N.pathname.endsWith("/")?N.pathname:N.pathname+"/"):null;return r.a.createElement(V.a,null,r.a.createElement(G.a,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),n&&r.a.createElement("link",{rel:"shortcut icon",href:k}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),v&&r.a.createElement("meta",{name:"docsearch:version",content:v}),f&&f.length&&r.a.createElement("meta",{name:"keywords",content:f.join(",")}),p&&r.a.createElement("meta",{property:"og:image",content:_}),p&&r.a.createElement("meta",{property:"twitter:image",content:_}),p&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),p&&r.a.createElement("meta",{name:"twitter:site",content:"@vectordotdev"}),p&&r.a.createElement("meta",{name:"twitter:creator",content:"@vectordotdev"}),y&&r.a.createElement("meta",{property:"og:url",content:y}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),y&&r.a.createElement("link",{rel:"canonical",href:y})),r.a.createElement(l.a,null),r.a.createElement(D,null),r.a.createElement("div",{className:"main-wrapper"},s),!d&&r.a.createElement(F,null)))}},238:function(e,t,a){var n=a(24).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},279:function(e,t,a){"use strict";var n=a(12),r=a(29),l=a(26),c=a(13),i=[].sort,o=[1,2,3];n(n.P+n.F*(c((function(){o.sort(void 0)}))||!c((function(){o.sort(null)}))||!a(280)(i)),"Array",{sort:function(e){return void 0===e?i.call(l(this)):i.call(l(this),r(e))}})},280:function(e,t,a){"use strict";var n=a(13);e.exports=function(e,t){return!!e&&n((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},343:function(e,t,a){var n=a(12),r=a(91)(!0);n(n.S,"Object",{entries:function(e){return r(e)}})}}]);