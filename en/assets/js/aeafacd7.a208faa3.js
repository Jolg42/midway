"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92676],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),m=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=m(e.components);return i.createElement(o.Provider,{value:t},e.children)},h="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=m(a),d=n,c=h["".concat(o,".").concat(d)]||h[d]||s[d]||r;return a?i.createElement(c,p(p({ref:t},u),{},{components:a})):i.createElement(c,p({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[h]="string"==typeof e?e:n,p[1]=l;for(var m=2;m<r;m++)p[m]=a[m];return i.createElement.apply(null,p)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91397:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var i=a(87462),n=(a(67294),a(3905));const r={date:"2023-01-30T20:00",authors:["czy88840616","echosoar","Sakuraine"]},p="v3.10.0",l={permalink:"/en/changelog/v3.10.0",source:"@site/changelog/source/v3.10.0.md",title:"v3.10.0",description:"Breaking Change",date:"2023-01-30T20:00:00.000Z",formattedDate:"January 30, 2023",tags:[],hasTruncateMarker:!0,authors:[{name:"Harry Chen",alias:"czy88840616",url:"https://github.com/czy88840616",imageURL:"https://github.com/czy88840616.png",key:"czy88840616"},{name:"Gao Yang",alias:"echosoar",url:"https://github.com/echosoar",imageURL:"https://github.com/echosoar.png",key:"echosoar"},{name:"iNE",alias:"Sakuraine",url:"https://github.com/Sakuraine",imageURL:"https://github.com/Sakuraine.png",key:"Sakuraine"}],frontMatter:{date:"2023-01-30T20:00",authors:["czy88840616","echosoar","Sakuraine"]},nextItem:{title:"v3.9.9",permalink:"/en/changelog/v3.9.9"},listPageLink:"/en/changelog/"},o={authorsImageUrls:[void 0,void 0,void 0]},m=[{value:"\ud83d\udca5 Breaking Change",id:"-breaking-change",level:2},{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:2},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udc85 Polish",id:"-polish",level:2},{value:"\ud83d\udcdd Documentation",id:"-documentation",level:2},{value:"\ud83d\udce6 Dependencies",id:"-dependencies",level:2},{value:"Committers: 3",id:"committers-3",level:2}],u={toc:m};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-breaking-change"},"\ud83d\udca5 Breaking Change"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"consul"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"core"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2688"},"#2688")," fix(deps): update dependency consul to v1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bull"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"decorator"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"faas"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"info"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"validate"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"web-express"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"web-koa"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"web"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2656"},"#2656")," feat: add pipes for parameter decorator (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"jwt"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2595"},"#2595")," fix(deps): update dependency jsonwebtoken to v9 ","[security]"," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"typegoose"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2642"},"#2642")," chore(deps): update dependency @typegoose/typegoose to v10 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")")))),(0,n.kt)("h2",{id:"-new-feature"},"\ud83d\ude80 New Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"core"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2687"},"#2687")," feat: add simulator (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2654"},"#2654")," feat: add @Singleton and get namespace api (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"typeorm"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2591"},"#2591")," feat: add typeorm logger and logger lazy create (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kafka"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"mock"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2679"},"#2679")," feat: support app enable ssl in dev mode (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bull"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"decorator"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"faas"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"info"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"validate"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"web-express"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"web-koa"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"web"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2656"},"#2656")," feat: add pipes for parameter decorator (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"faas"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"mock"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2672"},"#2672")," feat: add custom response args (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,n.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"core"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2626"},"#2626")," fix: run stop lifecycle with reverse (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bootstrap"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2644"},"#2644")," fix: sticky post (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/echosoar"},"@echosoar"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"swagger"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"validate"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2640"},"#2640")," fix: swagger one of with type (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,n.kt)("h2",{id:"-polish"},"\ud83d\udc85 Polish"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"core"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2646"},"#2646")," chore: change level for default logger level (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"faas"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"mock"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2606"},"#2606")," feat: add ssr and custom trigger (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mock"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2643"},"#2643")," fix: output error when running test in jest environment (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,n.kt)("h2",{id:"-documentation"},"\ud83d\udcdd Documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2653"},"#2653")," docs(site): update guard.md (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Sakuraine"},"@Sakuraine"),")")),(0,n.kt)("h2",{id:"-dependencies"},"\ud83d\udce6 Dependencies"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"consul"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"core"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2688"},"#2688")," fix(deps): update dependency consul to v1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"jwt"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2685"},"#2685")," fix(deps): update dependency @types/jsonwebtoken to v9 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2595"},"#2595")," fix(deps): update dependency jsonwebtoken to v9 ","[security]"," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},"Other",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2683"},"#2683")," chore(deps): update dependency madge to v6 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2680"},"#2680")," chore(deps): update jest monorepo (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2678"},"#2678")," chore(deps): update dependency madge to v5.0.2 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2673"},"#2673")," chore(deps): update dependency @vercel/ncc to v0.36.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2662"},"#2662")," chore(deps): update dependency ts-jest to v29.0.5 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2659"},"#2659")," chore(deps): update dependency @types/jest to v29.2.6 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2660"},"#2660")," chore(deps): update dependency lerna to v6.4.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2649"},"#2649")," chore(deps): update dependency @midwayjs/jest-environment-service-worker to v0.1.3 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2647"},"#2647")," chore(deps): update dependency typedoc to v0.23.24 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2650"},"#2650")," chore(deps): update dependency @midwayjs/jsdom-service-worker to v0.1.3 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2639"},"#2639")," chore(deps): update dependency @types/node to v18 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2641"},"#2641")," chore(deps): update dependency lerna to v6.4.0 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"core"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2684"},"#2684")," chore(deps): update dependency sinon to v15 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"casbin-redis-adapter"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"redis"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2681"},"#2681")," fix(deps): update dependency ioredis to v5.3.0 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2667"},"#2667")," fix(deps): update dependency ioredis to v5.2.5 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"typegoose"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2676"},"#2676")," chore(deps): update dependency @typegoose/typegoose to v10.1.0 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2642"},"#2642")," chore(deps): update dependency @typegoose/typegoose to v10 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"axios"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"http-proxy"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2675"},"#2675")," fix(deps): update dependency axios to v1.2.6 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2665"},"#2665")," fix(deps): update dependency axios to v1.2.3 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mongoose"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"typegoose"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2677"},"#2677")," chore(deps): update dependency mongoose to v6.9.0 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2661"},"#2661")," chore(deps): update dependency mongoose to v6.8.4 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2652"},"#2652")," chore(deps): update dependency mongoose to v6.8.3 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"web-express"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2670"},"#2670")," chore(deps): update dependency @types/express to v4.17.16 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mikro"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2671"},"#2671")," chore(deps): update mikro-orm monorepo to v5.6.8 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2663"},"#2663")," chore(deps): update mikro-orm monorepo to v5.6.7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2648"},"#2648")," chore(deps): update mikro-orm monorepo to v5.6.6 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"grpc"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2674"},"#2674")," fix(deps): update dependency @grpc/grpc-js to v1.8.7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2664"},"#2664")," fix(deps): update dependency @grpc/grpc-js to v1.8.4 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"axios"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"consul"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2668"},"#2668")," chore(deps): update dependency nock to v13.3.0 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mock"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"ws"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2669"},"#2669")," fix(deps): update dependency ws to v8.12.0 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"casbin-redis-adapter"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"casbin-typeorm-adapter"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"casbin"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2666"},"#2666")," fix(deps): update dependency casbin to v5.21.0 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"passport"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2651"},"#2651")," chore(deps): update dependency @types/passport-local to v1.0.35 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")")))),(0,n.kt)("h2",{id:"committers-3"},"Committers: 3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Gao Yang (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/echosoar"},"@echosoar"),")"),(0,n.kt)("li",{parentName:"ul"},"Harry Chen (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"),(0,n.kt)("li",{parentName:"ul"},"iNE (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Sakuraine"},"@Sakuraine"),")")))}h.isMDXComponent=!0}}]);