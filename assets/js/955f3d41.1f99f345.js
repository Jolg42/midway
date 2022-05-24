"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4371],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5264:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={},l="\u6269\u5c55\u4e0a\u4e0b\u6587\u5b9a\u4e49",s={unversionedId:"context_definition",id:"context_definition",title:"\u6269\u5c55\u4e0a\u4e0b\u6587\u5b9a\u4e49",description:"\u7531\u4e8e TS \u7684\u9759\u6001\u7c7b\u578b\u5206\u6790\uff0c\u6211\u4eec\u5e76\u4e0d\u63a8\u8350\u52a8\u6001\u53bb\u6302\u8f7d\u67d0\u4e9b\u5c5e\u6027\uff0c\u52a8\u6001\u7684\u6302\u8f7d\u4f1a\u5bfc\u81f4 TS \u7684\u7c7b\u578b\u5904\u7406\u975e\u5e38\u56f0\u96be\u3002\u5728\u67d0\u4e9b\u7279\u6b8a\u573a\u666f\u4e0b\uff0c\u5982\u679c\u9700\u8981\u6269\u5c55\u4e0a\u4e0b\u6587 ctx \u5c5e\u6027\uff0c\u6bd4\u5982 Web \u573a\u666f\u4e0b\u4e2d\u95f4\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u5f80\u4e0a\u9644\u52a0\u4e00\u4e9b\u65b9\u6cd5\u6216\u8005\u5c5e\u6027\u3002",source:"@site/docs/context_definition.md",sourceDirName:".",slug:"/context_definition",permalink:"/docs/context_definition",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/context_definition.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u6570\u636e\u8ba2\u9605",permalink:"/docs/data_listener"},next:{title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",permalink:"/docs/component_development"}},d={},p=[{value:"\u9879\u76ee\u4e2d\u6269\u5c55\u5b9a\u4e49",id:"\u9879\u76ee\u4e2d\u6269\u5c55\u5b9a\u4e49",level:2},{value:"\u7ec4\u4ef6\u4e2d\u6269\u5c55\u5b9a\u4e49",id:"\u7ec4\u4ef6\u4e2d\u6269\u5c55\u5b9a\u4e49",level:2}],m={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6269\u5c55\u4e0a\u4e0b\u6587\u5b9a\u4e49"},"\u6269\u5c55\u4e0a\u4e0b\u6587\u5b9a\u4e49"),(0,i.kt)("p",null,"\u7531\u4e8e TS \u7684\u9759\u6001\u7c7b\u578b\u5206\u6790\uff0c\u6211\u4eec\u5e76\u4e0d\u63a8\u8350\u52a8\u6001\u53bb\u6302\u8f7d\u67d0\u4e9b\u5c5e\u6027\uff0c\u52a8\u6001\u7684\u6302\u8f7d\u4f1a\u5bfc\u81f4 TS \u7684\u7c7b\u578b\u5904\u7406\u975e\u5e38\u56f0\u96be\u3002\u5728\u67d0\u4e9b\u7279\u6b8a\u573a\u666f\u4e0b\uff0c\u5982\u679c\u9700\u8981\u6269\u5c55\u4e0a\u4e0b\u6587 ctx \u5c5e\u6027\uff0c\u6bd4\u5982 Web \u573a\u666f\u4e0b\u4e2d\u95f4\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u5f80\u4e0a\u9644\u52a0\u4e00\u4e9b\u65b9\u6cd5\u6216\u8005\u5c5e\u6027\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Middleware } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class ReportMiddleware implements IWebMiddleware {\n\n  resolve() {\n    return async (ctx: Context, next) => {\n\n      ctx.abc = '123';\n      await next();\n\n    }\n  }\n\n}\n")),(0,i.kt)("p",null,"\u4f46\u662f\u7531\u4e8e TypeScript \u6a21\u5757\u5b9a\u4e49\u7684\u5173\u7cfb\uff0c\u6211\u4eec\u65e0\u6cd5\u5f80\u73b0\u6709\u7684\u6a21\u5757\u4e0a\u53bb\u9644\u52a0\u5b9a\u4e49\uff0c\u6240\u4ee5\u6211\u4eec\u4f7f\u7528\u4e86\u4e00\u79cd\u65b0\u7684\u65b9\u6cd5\u6765\u6269\u5c55\u3002"),(0,i.kt)("h2",{id:"\u9879\u76ee\u4e2d\u6269\u5c55\u5b9a\u4e49"},"\u9879\u76ee\u4e2d\u6269\u5c55\u5b9a\u4e49"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/interface.ts")," \u901a\u8fc7\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u5728\u9879\u76ee\u4e2d\u6269\u5c55 Midway \u901a\u7528\u7684 Context\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/interface.ts\n\nimport '@midwayjs/core';\n\n// ...\n\ndeclare module '@midwayjs/core' {\n  interface Context {\n    abc: string;\n  }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"declare module")," \u4f1a\u66ff\u4ee3\u539f\u6709\u7684\u5b9a\u4e49\uff0c\u6240\u4ee5\u8bf7\u5728\u4e4b\u524d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," \u8bed\u6cd5\u5bfc\u5165\u6a21\u5757\u540e\u518d\u64cd\u4f5c\u3002"))),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u4e2d\u6269\u5c55\u5b9a\u4e49"},"\u7ec4\u4ef6\u4e2d\u6269\u5c55\u5b9a\u4e49"),(0,i.kt)("p",null,"\u7ec4\u4ef6\u4e2d\u7565\u6709\u4e0d\u540c\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u7ec4\u4ef6\u53ef\u80fd\u662f\u53ea\u80fd\u5728\u7279\u5b9a\u7684\u573a\u666f\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u7ec4\u4ef6\u6839\u76ee\u5f55\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"index.d.ts")," \u901a\u8fc7\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u6269\u5c55 Midway \u901a\u7528\u7684 Context\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u5bf9\u6240\u6709\u573a\u666f\u7684 Context \u505a\u6269\u5c55\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// index.d.ts\n\n// \u4e0b\u9762\u8fd9\u6bb5\u53ef\u4ee5\u5bf9\u6240\u6709\u7684 Context \u505a\u6269\u5c55\ndeclare module '@midwayjs/core/dist/interface' {\n  interface Context {\n    abc: string;\n  }\n}\n")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u5e0c\u671b\u5bf9\u7279\u5b9a\u573a\u666f\u7684 Context \u505a\u6269\u5c55\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// index.d.ts\n\n// \u4e0b\u9762\u8fd9\u6bb5\u53ea @midwayjs/koa \u7684 Context \u505a\u6269\u5c55\ndeclare module '@midwayjs/koa/dist/interface' {\n  interface Context {\n    abc: string;\n  }\n}\n\n// \u4e0b\u9762\u8fd9\u6bb5\u53ea @midwayjs/web \u7684 Context \u505a\u6269\u5c55\ndeclare module '@midwayjs/web/dist/interface' {\n  interface Context {\n    abc: string;\n  }\n}\n\n// \u4e0b\u9762\u8fd9\u6bb5\u53ea @midwayjs/faas \u7684 Context \u505a\u6269\u5c55\ndeclare module '@midwayjs/faas/dist/interface' {\n  interface Context {\n    abc: string;\n  }\n}\n\n// \u4e0b\u9762\u8fd9\u6bb5\u53ea @midwayjs/express \u7684 Context \u505a\u6269\u5c55\ndeclare module '@midwayjs/express/dist/interface' {\n  interface Context {\n    abc: string;\n  }\n}\n\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"1\u3001\u7ec4\u4ef6\u4e2d\u6269\u5c55\u548c\u9879\u76ee\u4e2d\u7565\u6709\u4e0d\u540c\uff08\u6000\u7591\u662f TS \u7684 bug\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"2\u3001\u5982\u679c\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u4e86\u9879\u76ee\u7684\u6269\u5c55\u65b9\u5f0f\uff0c\u90a3\u4e48\u5176\u4f59\u7ec4\u4ef6\u7684\u6269\u5c55\u63d0\u793a\u4f1a\u51fa\u73b0\u95ee\u9898\u3002")))))}u.isMDXComponent=!0}}]);