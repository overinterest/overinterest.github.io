(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4407:function(e,n,t){"use strict";t.d(n,{A:function(){return p}});var r=t(5893),o=t(7294),a=t(1664),i=t(3926),c=t.n(i),s=function(e){var n=e.link,t=e.title;return(0,r.jsx)(a.default,{href:n,children:(0,r.jsx)("a",{className:c().NavLink,children:t})})},l=t(1144),u=t.n(l),f=function(){return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("div",{className:u().Banner,children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsxs)("button",{href:"/",className:u().Logo,children:["OI",(0,r.jsx)("span",{className:u().Title,children:"overinterest"})]})})}),(0,r.jsxs)("div",{className:u().Links,children:[(0,r.jsx)(s,{link:"/about",title:"About"}),(0,r.jsx)(s,{link:"/projects",title:"Projects"}),(0,r.jsx)(s,{link:"/blog",title:"Blog"})]})]})},d=t(1604),v=t.n(d),p=function(e){var n=e.children;return(0,r.jsxs)("div",{className:v().Layout,children:[(0,r.jsx)("div",{className:v().Header,children:(0,r.jsx)(f,{})}),(0,r.jsx)("div",{className:v().Content,children:n})]})}},6071:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var a=o(t(7294)),i=t(1689),c=t(2441),s=t(5749),l={};function u(e,n,t,r){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),o=t&&t.asPath||"/",f=a.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,v=f.as,p=e.children,h=e.replace,_=e.shallow,L=e.scroll,y=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var k=a.Children.only(p),x=k&&"object"===typeof k&&k.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),j=r(g,2),m=j[0],N=j[1],b=a.default.useCallback((function(e){m(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,m]);(0,a.useEffect)((function(){var e=N&&n&&(0,i.isLocalURL)(d),r="undefined"!==typeof y?y:t&&t.locale,o=l[d+"%"+v+(r?"%"+r:"")];e&&!o&&u(t,d,v,{locale:r})}),[v,d,N,y,n,t]);var E={ref:b,onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:s,scroll:c}))}(e,t,d,v,h,_,L,y)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),u(t,d,v,{priority:!0}))}};if(e.passHref||"a"===k.type&&!("href"in k.props)){var C="undefined"!==typeof y?y:t&&t.locale,w=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(v,C,t&&t.locales,t&&t.domainLocales);E.href=w||(0,i.addBasePath)((0,i.addLocale)(v,C,t&&t.defaultLocale))}return a.default.cloneElement(k,E)};n.default=f},5749:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],v=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[v,f]};var o=t(7294),a=t(8391),i="undefined"!==typeof IntersectionObserver;var c=new Map},8474:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(4407),a=function(){return(0,r.jsx)("div",{children:"HOME"})};n.default=a,a.Layout=o.A},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8474)}])},1144:function(e){e.exports={Logo:"Header_Logo__3erfX",Title:"Header_Title__lZyik",Links:"Header_Links__1IiAy"}},3926:function(e){e.exports={NavLink:"Nav_NavLink__3EqvI"}},1604:function(e){e.exports={Header:"Layout_Header__sZkFO",Content:"Layout_Content__14-N4",Layout:"Layout_Layout__1h2_s"}},1664:function(e,n,t){e.exports=t(6071)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);