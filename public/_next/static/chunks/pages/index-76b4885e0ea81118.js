(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6993)}])},5946:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return s},noSSR:function(){return r}});let a=i(7677);i(4848),i(6540);let o=a._(i(5645));function n(e){return{default:(null==e?void 0:e.default)||e}}function r(e,t){return delete t.webpack,delete t.modules,e(t)}function s(e,t){let i=o.default,a={loading:e=>{let{error:t,isLoading:i,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e});let s=(a={...a,...t}).loader;return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?i({...a,loader:()=>null!=s?s().then(n):Promise.resolve(n(()=>null))}):(delete a.webpack,delete a.modules,r(i,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4319:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return a}});let a=i(7677)._(i(6540)).default.createContext(null)},5645:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let a=i(7677)._(i(6540)),o=i(4319),n=[],r=[],s=!1;function l(e){let t=e(),i={loading:!0,loaded:null,error:null};return i.promise=t.then(e=>(i.loading=!1,i.loaded=e,e)).catch(e=>{throw i.loading=!1,i.error=e,e}),i}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let i=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function l(){if(!n){let t=new c(e,i);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!s){let e=i.webpack?i.webpack():i.modules;e&&r.push(t=>{for(let i of e)if(t.includes(i))return l()})}function d(e,t){!function(){l();let e=a.default.useContext(o.LoadableContext);e&&Array.isArray(i.modules)&&i.modules.forEach(t=>{e(t)})}();let r=a.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),a.default.useMemo(()=>{var t;return r.loading||r.error?a.default.createElement(i.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:n.retry}):r.loaded?a.default.createElement((t=r.loaded)&&t.default?t.default:t,e):null},[e,r])}return d.preload=()=>l(),d.displayName="LoadableComponent",a.default.forwardRef(d)}(l,e)}function m(e,t){let i=[];for(;e.length;){let a=e.pop();i.push(a(t))}return Promise.all(i).then(()=>{if(e.length)return m(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{m(n).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let i=()=>(s=!0,t());m(r,e).then(i,i)})),window.__NEXT_PRELOADREADY=d.preloadReady;let h=d},6993:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Flex_28eea19173f0f54c4e4d00916e3cf018:()=>w,Flex_2c23c75cd7124a93f09edf4a404d2ed3:()=>x,Fragment_8a9bd53f35d577eb57925cf7012c9edb:()=>D,Fragment_fe3a27616a66880c56cdc3b1de493207:()=>S,default:()=>P});var a=i(2445),o=i(6540),n=i(9057),r=i(983),s=i(5765),l=i(922),c=i(2996),d=i(8156),m=i(6726),h=i(8774),p=i(8133),g=i.n(p),f=i(1106),u=i.n(f),_=i(4953),F=i.n(_),b=i(9188),y=i(2930),Y=i(8526),v=i(3368),C=i.n(v);let k=F()(()=>i.e(560).then(i.bind(i,1560)).then(e=>e.FloatButton),{loadableGenerated:{webpack:()=>[1560]},ssr:!1});function x(){(0,o.useEffect)(()=>(!function(){for(var t=arguments.length,i=Array(t),a=0;a<t;a++)i[a]=arguments[a];e([(0,y.Event)("reflex___state____state.link_bio___state____page_state____page_state.check_live",{},{})],i,{})}(),()=>{}),[]);let[e,t]=(0,o.useContext)(b.EventLoopContext);return(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{alignItems:"start"},direction:"column",gap:"6",children:[(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%",alignItems:"start"},direction:"row",gap:"5",children:[(0,a.FD)(r.a,{css:{position:"relative"},children:[(0,a.Y)(Y.d,{}),(0,a.Y)(s.e,{color:"gray",css:{padding:"2px",border:"4px",borderColor:"#14A1F0",alt:"Avatar Mouredev"},fallback:"BM",radius:"full",size:"8",src:"/avatar.jpg"})]}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",direction:"column",gap:"0",children:[(0,a.Y)(l.D,{css:{width:"100%",fontFamily:"Poppins","--default-font-family":"Poppins",paddingTop:"1em",color:"#F1F2F4"},size:"8",children:"Brais Moure"}),(0,a.Y)(c.E,{as:"p",css:{color:"#C3C7CB"},children:"@mouredev"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",direction:"row",gap:"4",children:[(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,a.Y)(u(),{href:"https://github.com",passHref:!0,children:(0,a.Y)("img",{alt:"GitHub",css:{width:"1em"},src:"/icons/github.svg"})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,a.Y)(u(),{href:"https://x.com/",passHref:!0,children:(0,a.Y)("img",{alt:"Twitter/X",css:{width:"1em"},src:"/icons/x.svg"})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,a.Y)(u(),{href:"https://www.instagram.com/",passHref:!0,children:(0,a.Y)("img",{alt:"Instagram",css:{width:"1em"},src:"/icons/instagram.svg"})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,a.Y)(u(),{href:"https://tiktok.com/",passHref:!0,children:(0,a.Y)("img",{alt:"TikTok",css:{width:"1em"},src:"/icons/tiktok.svg"})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,a.Y)(u(),{href:"https://open.spotify.com/",passHref:!0,children:(0,a.Y)("img",{alt:"Spotify",css:{width:"1em"},src:"/icons/spotify.svg"})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,a.Y)(u(),{href:"https://linkedin.com/",passHref:!0,children:(0,a.Y)("img",{alt:"LinkedIn",css:{width:"1em"},src:"/icons/linkedin.svg"})})})]})]})]}),(0,a.Y)(D,{})]})}function w(){(0,o.useEffect)(()=>(!function(){for(var t=arguments.length,i=Array(t),a=0;a<t;a++)i[a]=arguments[a];e([(0,y.Event)("reflex___state____state.link_bio___state____page_state____page_state.featured_links",{},{})],i,{})}(),()=>{}),[]);let[e,t]=(0,o.useContext)(b.EventLoopContext);return(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"column",gap:"4",children:[(0,a.Y)(l.D,{css:{width:"100%",fontFamily:"Poppins","--default-font-family":"Poppins",paddingTop:"1em",color:"#F1F2F4"},size:"8",children:"Comunidad"}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},width:"100%"},target:"",children:(0,a.Y)(u(),{href:"/cursos",passHref:!0,children:(0,a.Y)(m.$,{css:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:["#171F26"],textAlign:"start",color:"#F1F2F4",borderStyle:"solid","&:hover":{backgroundColor:"#087ec4"},borderColor:"#087ec4",borderWidth:"2px"},children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,a.Y)("img",{alt:"Cursos gratis",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/code.svg"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingInlineStart:"0.5em",paddingInlineEnd:"0.5em",alignItems:"start",margin:"0"},direction:"column",gap:"0",children:[(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"Cursos gratis"}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:"Consulta mis tutoriales para aprender programaci\xf3n"})]})]})})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},width:"100%"},target:"_blank",children:(0,a.Y)(u(),{href:"https://twitch.tv/",passHref:!0,children:(0,a.Y)(m.$,{css:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:["#171F26"],textAlign:"start",color:"#F1F2F4",borderStyle:"solid","&:hover":{backgroundColor:"#087ec4"},borderWidth:"0px"},children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,a.Y)("img",{alt:"Twitch",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/twitch.svg"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingInlineStart:"0.5em",paddingInlineEnd:"0.5em",alignItems:"start",margin:"0"},direction:"column",gap:"0",children:[(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"Twitch"}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:"Transmisiones sobre programaci\xf3n de lunes a viernes"})]})]})})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},width:"100%"},target:"_blank",children:(0,a.Y)(u(),{href:"https://discord.gg/",passHref:!0,children:(0,a.Y)(m.$,{css:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:["#171F26"],textAlign:"start",color:"#F1F2F4",borderStyle:"solid","&:hover":{backgroundColor:"#087ec4"},borderWidth:"0px"},children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,a.Y)("img",{alt:"Discord",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/discord.svg"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingInlineStart:"0.5em",paddingInlineEnd:"0.5em",alignItems:"start",margin:"0"},direction:"column",gap:"0",children:[(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"Discord"}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:"El chat y los grupos de estudio de la comunidad"})]})]})})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},width:"100%"},target:"_blank",children:(0,a.Y)(u(),{href:"https://youtube.com/",passHref:!0,children:(0,a.Y)(m.$,{css:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:["#171F26"],textAlign:"start",color:"#F1F2F4",borderStyle:"solid","&:hover":{backgroundColor:"#087ec4"},borderWidth:"0px"},children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,a.Y)("img",{alt:"Youtube",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/youtube.svg"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingInlineStart:"0.5em",paddingInlineEnd:"0.5em",alignItems:"start",margin:"0"},direction:"column",gap:"0",children:[(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"Youtube"}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:"Tutoriales semanales sobre desarrollo de software"})]})]})})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},width:"100%"},target:"_blank",children:(0,a.Y)(u(),{href:"https://youtube.com/",passHref:!0,children:(0,a.Y)(m.$,{css:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:["#171F26"],textAlign:"start",color:"#F1F2F4",borderStyle:"solid","&:hover":{backgroundColor:"#087ec4"},borderWidth:"0px"},children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,a.Y)("img",{alt:"YouTube [canal secundario]",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/youtube.svg"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingInlineStart:"0.5em",paddingInlineEnd:"0.5em",alignItems:"start",margin:"0"},direction:"column",gap:"0",children:[(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"YouTube [canal secundario]"}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:"Emisiones en directo destacadas"})]})]})})})}),(0,a.Y)(S,{}),(0,a.Y)(l.D,{css:{width:"100%",fontFamily:"Poppins","--default-font-family":"Poppins",paddingTop:"1em",color:"#F1F2F4"},size:"8",children:"Recursos y m\xe1s"}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},width:"100%"},target:"_blank",children:(0,a.Y)(u(),{href:"https://mouredev.com/libro-git",passHref:!0,children:(0,a.Y)(m.$,{css:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:["#171F26"],textAlign:"start",color:"#F1F2F4",borderStyle:"solid","&:hover":{backgroundColor:"#087ec4"},borderWidth:"0px"},children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,a.Y)("img",{alt:"Git y Git Hub desde cero",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/git.svg"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingInlineStart:"0.5em",paddingInlineEnd:"0.5em",alignItems:"start",margin:"0"},direction:"column",gap:"0",children:[(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"Git y Git Hub desde cero"}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:"Aqu\xed puedes comprar mi libro en formato f\xedsico y eBook"})]})]})})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},width:"100%"},target:"_blank",children:(0,a.Y)(u(),{href:"https://amazon.es/shop/mouredev/list/2ZIHJJFJ9AVZ3",passHref:!0,children:(0,a.Y)(m.$,{css:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:["#171F26"],textAlign:"start",color:"#F1F2F4",borderStyle:"solid","&:hover":{backgroundColor:"#087ec4"},borderWidth:"0px"},children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,a.Y)("img",{alt:"Libros recomendados",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/book.svg"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingInlineStart:"0.5em",paddingInlineEnd:"0.5em",alignItems:"start",margin:"0"},direction:"column",gap:"0",children:[(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"Libros recomendados"}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:"Mi listado de libros sobre programaci\xf3n, ciencia y tecnolog\xeda"})]})]})})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},width:"100%"},target:"_blank",children:(0,a.Y)(u(),{href:"https://mouredev.com/setup",passHref:!0,children:(0,a.Y)(m.$,{css:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:["#171F26"],textAlign:"start",color:"#F1F2F4",borderStyle:"solid","&:hover":{backgroundColor:"#087ec4"},borderWidth:"0px"},children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,a.Y)("img",{alt:"Mi Setup",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/setup.svg"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingInlineStart:"0.5em",paddingInlineEnd:"0.5em",alignItems:"start",margin:"0"},direction:"column",gap:"0",children:[(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"Mi Setup"}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:"Listado con todos los elementos que uso en mi trabajo"})]})]})})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},width:"100%"},target:"_blank",children:(0,a.Y)(u(),{href:"https://mouredev.com",passHref:!0,children:(0,a.Y)(m.$,{css:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:["#171F26"],textAlign:"start",color:"#F1F2F4",borderStyle:"solid","&:hover":{backgroundColor:"#087ec4"},borderWidth:"0px"},children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,a.Y)("img",{alt:"MoureDev",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/logo.png"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingInlineStart:"0.5em",paddingInlineEnd:"0.5em",alignItems:"start",margin:"0"},direction:"column",gap:"0",children:[(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"MoureDev"}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:"Mi sitio web"})]})]})})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},width:"100%"},target:"_blank",children:(0,a.Y)(u(),{href:"https://buymeacoffee.com/",passHref:!0,children:(0,a.Y)(m.$,{css:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:["#171F26"],textAlign:"start",color:"#F1F2F4",borderStyle:"solid","&:hover":{backgroundColor:"#087ec4"},borderWidth:"0px"},children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,a.Y)("img",{alt:"Invitame a un caf\xe9",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/coffee.svg"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingInlineStart:"0.5em",paddingInlineEnd:"0.5em",alignItems:"start",margin:"0"},direction:"column",gap:"0",children:[(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"Invitame a un caf\xe9"}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:"\xbfQuieres ayudarme a que siga creando contenido?"})]})]})})})}),(0,a.Y)(l.D,{css:{width:"100%",fontFamily:"Poppins","--default-font-family":"Poppins",paddingTop:"1em",color:"#F1F2F4"},size:"8",children:"Contacto"}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},width:"100%"},target:"_blank",children:(0,a.Y)(u(),{href:"https://mypublicinbox.com/mouredev",passHref:!0,children:(0,a.Y)(m.$,{css:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:["#171F26"],textAlign:"start",color:"#F1F2F4",borderStyle:"solid","&:hover":{backgroundColor:"#087ec4"},borderWidth:"0px"},children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,a.Y)("img",{alt:"MyPublicInbox",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/checkemail.svg"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingInlineStart:"0.5em",paddingInlineEnd:"0.5em",alignItems:"start",margin:"0"},direction:"column",gap:"0",children:[(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"MyPublicInbox"}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:"Respuesta r\xe1pida y con preferencia"})]})]})})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},width:"100%"},target:"_blank",children:(0,a.Y)(u(),{href:"mailto:braismoure@mouredev.com",passHref:!0,children:(0,a.Y)(m.$,{css:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:["#171F26"],textAlign:"start",color:"#F1F2F4",borderStyle:"solid","&:hover":{backgroundColor:"#087ec4"},borderWidth:"0px"},children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,a.Y)("img",{alt:"Email",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/email.svg"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingInlineStart:"0.5em",paddingInlineEnd:"0.5em",alignItems:"start",margin:"0"},direction:"column",gap:"0",children:[(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"Email"}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:"braismoure@mouredev.com"})]})]})})})})]})}function S(){let e=(0,o.useContext)(b.StateContexts.reflex___state____state__link_bio___state____page_state____page_state);return(0,a.Y)(o.Fragment,{children:(0,y.isTrue)(e.featured_info)?(0,a.Y)(o.Fragment,{children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",direction:"column",gap:"4",children:[(0,a.Y)(l.D,{css:{width:"100%",fontFamily:"Poppins","--default-font-family":"Poppins",paddingTop:"1em",color:"#F1F2F4"},size:"8",children:"Destacado"}),(0,a.Y)(h.x,{columns:{initial:"1",sm:"2"},gap:"4",children:(0,a.Y)(a.FK,{children:e.featured_info.map((e,t)=>(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,a.Y)(u(),{href:e.url,passHref:!0,children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{alignItems:"start"},direction:"column",gap:"2",children:[(0,a.Y)("img",{css:{borderRadius:"1em"},src:e.image}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:e.title})]})})},t))})})]})}):(0,a.Y)(o.Fragment,{})})}function D(){let e=(0,o.useContext)(b.StateContexts.reflex___state____state__link_bio___state____page_state____page_state);(0,o.useEffect)(()=>(!function(){for(var e=arguments.length,i=Array(e),a=0;a<e;a++)i[a]=arguments[a];t([(0,y.Event)("reflex___state____state.link_bio___state____page_state____page_state.check_schedule",{},{})],i,{})}(),()=>{}),[]);let[t,i]=(0,o.useContext)(b.EventLoopContext);return(0,a.Y)(o.Fragment,{children:(0,a.Y)(o.Fragment,{children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",direction:"column",gap:"6",children:[(0,a.FD)(n.s,{css:{width:"100%"},children:[(0,a.FD)(r.a,{css:{fontSize:"0.8em",color:"#C3C7CB"},children:[(0,a.Y)(c.E,{as:"span",css:{color:"#14A1F0"},weight:"bold",children:"15+"})," a\xf1os de experiencia"]}),(0,a.Y)(n.s,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,a.FD)(r.a,{css:{fontSize:"0.8em",color:"#C3C7CB"},children:[(0,a.Y)(c.E,{as:"span",css:{color:"#14A1F0"},weight:"bold",children:"100+"})," aplicaciones creadas"]}),(0,a.Y)(n.s,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,a.FD)(r.a,{css:{fontSize:"0.8em",color:"#C3C7CB"},children:[(0,a.Y)(c.E,{as:"span",css:{color:"#14A1F0"},weight:"bold",children:"+1M"})," seguidores"]})]}),(0,a.Y)(o.Fragment,{children:e.live_status.live?(0,a.Y)(o.Fragment,{children:(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},width:"100%"},target:"_blank",children:(0,a.Y)(u(),{href:"https://twitch.tv/",passHref:!0,children:(0,a.Y)(m.$,{className:"animate__animated animate__bounceIn",css:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:["#171F26"],textAlign:"start",color:"#F1F2F4",borderStyle:"solid","&:hover":{backgroundColor:"#087ec4"},borderColor:"#9146ff",borderWidth:"2px"},children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,a.Y)("img",{alt:"En directo",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"icons/twitch.svg"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingInlineStart:"0.5em",paddingInlineEnd:"0.5em",alignItems:"start",margin:"0"},direction:"column",gap:"0",children:[(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"En directo"}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:e.live_status.title})]})]})})})})}):(0,a.Y)(o.Fragment,{children:(0,a.Y)(r.a,{css:{width:"100%"},children:(0,a.Y)(o.Fragment,{children:(0,y.isTrue)(e.next_live)?(0,a.Y)(o.Fragment,{children:(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},width:"100%"},target:"_blank",children:(0,a.Y)(u(),{href:"https://twitch.tv/",passHref:!0,children:(0,a.Y)(m.$,{className:"animate__animated animate__bounceIn",css:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:["#171F26"],textAlign:"start",color:"#F1F2F4",borderStyle:"solid","&:hover":{backgroundColor:"#087ec4"},borderColor:"#9146ff",borderWidth:"2px"},children:(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"row",gap:"3",children:[(0,a.Y)("img",{alt:"Pr\xf3ximo directo",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/twitch.svg"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingInlineStart:"0.5em",paddingInlineEnd:"0.5em",alignItems:"start",margin:"0"},direction:"column",gap:"0",children:[(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"Pr\xf3ximo directo"}),(0,a.Y)(c.E,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"300",fontSize:"0.8em",color:"#C3C7CB"},children:e.next_live})]})]})})})})}):(0,a.Y)(o.Fragment,{})})})})}),(0,a.Y)(c.E,{as:"p",css:{color:"#C3C7CB",fontSize:"1em"},children:"\n                    Soy ingeniero de software y actualmente trabajo como freelance\n                    full-stack developer iOS y Android.\n                    Adem\xe1s, creo contenido formativo sobre programaci\xf3n en redes.\n                    Aqu\xed podr\xe1s encontrar todos mis enlaces de inter\xe9s \xa1Bienvenid@!\n                    "})]})})})}function P(){return(0,a.FD)(o.Fragment,{children:[(0,a.FD)(r.a,{children:[(0,a.Y)(g(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{position:"sticky",background:["#171F26"],paddingInlineStart:["2em"],paddingInlineEnd:["2em"],paddingTop:"1em",paddingBottom:"1em",zIndex:"999",top:"0"},direction:"column",gap:"3",children:[(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},children:(0,a.Y)(u(),{href:"/",passHref:!0,children:(0,a.FD)(r.a,{css:{fontFamily:"Comfortaa","--default-font-family":"Comfortaa",fontWeight:"500",fontSize:"1.5em"},children:[(0,a.Y)(c.E,{as:"span",css:{color:"#14A1F0"},children:"moure"}),(0,a.Y)(c.E,{as:"span",css:{color:"#087ec4"},children:"dev"})]})})}),(0,a.Y)(k,{badge:{dot:!0,color:"#14A1F0"},href:"https://buymeacoffee.com/",target:"_blank"})]}),(0,a.Y)(n.s,{css:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.FD)(n.s,{align:"center",className:"rx-Stack",css:{maxWidth:"600px",width:"100%",marginTop:["2em"],marginBottom:["2em"],padding:["2em"]},direction:"column",gap:"3",children:[(0,a.Y)(x,{}),(0,a.Y)(w,{}),(0,a.FD)(n.s,{align:"start",className:"rx-Stack",css:{width:"100%",alignItems:"start"},direction:"column",gap:"4",children:[(0,a.Y)(l.D,{css:{width:"100%",fontFamily:"Poppins","--default-font-family":"Poppins",paddingTop:"1em",color:"#F1F2F4"},size:"8",children:"Colaboran"}),(0,a.FD)(h.x,{columns:{initial:"1",xs:"3"},gap:"8",children:[(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,a.Y)(u(),{href:"https://elgato.sjv.io/mouredev",passHref:!0,children:(0,a.Y)("img",{alt:"Logotipo de el gato",css:{height:"3.5em",aspectRatio:"5 / 2",width:"auto"},src:"/elgato.png"})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,a.Y)(u(),{href:"https://mvp.microsoft.com/es-es/PublicProfile/5004970",passHref:!0,children:(0,a.Y)("img",{alt:"Logotipo de Microsoft MVP",css:{height:"3.5em",aspectRatio:"5 / 2",width:"auto"},src:"/mvp.png"})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,a.Y)(u(),{href:"https://stars.github.com/profiles/mouredev",passHref:!0,children:(0,a.Y)("img",{alt:"Logotipo de Github Star",css:{height:"3.5em",aspectRatio:"5 / 2",width:"auto"},src:"/githubstar.png"})})})]})]})]})}),(0,a.FD)(n.s,{align:"center",className:"rx-Stack",css:{paddingBottom:["2em"],paddingInlineStart:["2em"],paddingInlineEnd:["2em"],color:"#A3ABB2"},direction:"column",gap:"0",children:[(0,a.Y)("img",{alt:'Logotipo de Mouredev. Una "eme" entre llaves',css:{marginBottom:"20px",height:"4em",width:"4em"},src:"/logo.png"}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},fontSize:"0.8em",color:"#A3ABB2"},target:"_blank",children:(0,a.Y)(u(),{href:"https://mouredev.com",passHref:!0,children:(0,a.FD)(r.a,{children:["\xa9 2014-2025 ",(0,a.Y)(c.E,{as:"span",css:{color:"#14A1F0"},children:"MoureDev by Brais Moure"})," v3"]})})}),(0,a.Y)(d.N,{asChild:!0,css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},color:"#A3ABB2"},target:"_blank",children:(0,a.Y)(u(),{href:"https://github.com/mouredev/python-web",passHref:!0,children:(0,a.FD)(n.s,{align:"center",className:"rx-Stack",direction:"row",gap:"3",children:[(0,a.Y)("img",{css:{height:"1.5em",width:"1.5em"},src:"/icons/github.svg"}),(0,a.Y)(c.E,{as:"p",css:{fontSize:"0.8em"},children:"BUILDING SOFTWARE WITH ❤ FROM GALICIA TO THE WORLD"})]})})})]})]}),(0,a.FD)(C(),{children:[(0,a.Y)("title",{children:"MoureDev | Te ense\xf1o programaci\xf3n y desarrollo de software"}),(0,a.Y)("meta",{content:"Hola, mi nombre es Brais Moure. Soy ing de software, desarrollador freelance full-stack y divulgador de contenido",name:"description"}),(0,a.Y)("meta",{content:"https://moure.dev/preview.jpg",property:"og:image"}),(0,a.Y)("meta",{content:"MoureDev | Te ense\xf1o programaci\xf3n y desarrollo de software",name:"og:title"}),(0,a.Y)("meta",{content:"Hola, mi nombre es Brais Moure. Soy ing de software, desarrollador freelance full-stack y divulgador de contenido",name:"og:description"}),(0,a.Y)("meta",{content:"website",name:"og:type"}),(0,a.Y)("meta",{content:"https://moure.dev/preview.jpg",name:"og:image"}),(0,a.Y)("meta",{content:"summary_large_image",name:"twitter:card"}),(0,a.Y)("meta",{content:"@mouredev",name:"twitter:site"})]})]})}},8526:(e,t,i)=>{"use strict";i.d(t,{d:()=>c});var a=i(2445),o=i(6540),n=i(9188);i(2930);var r=i(8156),s=i(1106),l=i.n(s);function c(){let e=(0,o.useContext)(n.StateContexts.reflex___state____state__link_bio___state____page_state____page_state);return(0,a.Y)(o.Fragment,{children:e.live_status.live?(0,a.Y)(o.Fragment,{children:(0,a.Y)(r.N,{asChild:!0,className:"blink",css:{textDecoration:"none","&:hover":{color:"var(--accent-8)"},borderRadius:"50%",padding:"0.5em",background:"#9146ff",position:"absolute",bottom:"0",right:"0"},target:"_blank",children:(0,a.Y)(l(),{href:"https://twitch.tv/",passHref:!0,children:(0,a.Y)("img",{css:{height:"1em",width:"1em"},src:"/icons/twitch.svg"})})})}):(0,a.Y)(o.Fragment,{})})}},4953:(e,t,i)=>{e.exports=i(5946)},3368:(e,t,i)=>{e.exports=i(6085)},8133:(e,t,i)=>{e.exports=i(7610)}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(7276)),_N_E=e.O()}]);