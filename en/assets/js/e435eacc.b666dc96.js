"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25768],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={},a="Self-executing code",c={unversionedId:"auto_run",id:"auto_run",title:"Self-executing code",description:"In the initialization process, when our code has nothing to do with the main process but wants to execute it, it will usually be executed in the startup onReady phase. As the amount of code increases, the onReady will become bloated.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/auto_run.md",sourceDirName:".",slug:"/auto_run",permalink:"/en/docs/auto_run",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/auto_run.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Interceptors(AOP)",permalink:"/en/docs/aspect"},next:{title:"Pipeline",permalink:"/en/docs/pipeline"}},s={},l=[{value:"Self-initialization",id:"self-initialization",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"self-executing-code"},"Self-executing code"),(0,o.kt)("p",null,"In the initialization process, when our code has nothing to do with the main process but wants to execute it, it will usually be executed in the startup onReady phase. As the amount of code increases, the onReady will become bloated."),(0,o.kt)("p",null,"For example, we have some logic that needs to be executed in advance, one for listening for Redis errors and the other for initializing data synchronization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\n@Scope(ScopeEnum.Singleton)\nexport class RedisErrorListener {\n  // ...\n}\n\n@Provide()\n@Scope(ScopeEnum.Singleton)\nexport class DataSyncListener {\n  // ...\n}\n")),(0,o.kt)("p",null,"In general, we will create an instance at startup by ",(0,o.kt)("inlineCode",{parentName:"p"},"getAsync")," methods to make it execute."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\n\n// configuration.ts\n//...\n\n@Configuration({\n  // ...\n})\nexport class MainConfiguration {\n  async onReady(container) {\n    await container.getAsync(RedisErrorListerner);\n    await container.getAsync(DataSyncListerner);\n  }\n}\n")),(0,o.kt)("p",null,"In this way, once there is more code, there will be many unnecessary process codes in onReady."),(0,o.kt)("h2",{id:"self-initialization"},"Self-initialization"),(0,o.kt)("p",null,"If the code is not coupled to the main process and belongs to independent logic, such as listening to some events and initializing data synchronization, you can use the @Autoload decorator to enable a class to initialize itself."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Autoload, Scope, ScopeEnum } from '@midwayjs/decorator';\n\n@Autoload()\n@Scope(ScopeEnum.Singleton)\nexport class RedisErrorListener {\n  @Init()\n  async init() {\n    const redis = new Redis();\n    redis.on('xxx', () => {\n      // ...\n    });\n  }\n}\n")),(0,o.kt)("p",null,"This automatically initializes without using the ",(0,o.kt)("inlineCode",{parentName:"p"},"getAsync")," method in ",(0,o.kt)("inlineCode",{parentName:"p"},"onReady")," and executes the init method."))}p.isMDXComponent=!0}}]);