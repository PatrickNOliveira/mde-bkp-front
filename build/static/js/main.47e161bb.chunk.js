(this.webpackJsonphotel=this.webpackJsonphotel||[]).push([[0],{76:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(2),i=n.n(a),r=n(20),o=n.n(r),s=n(8),l=n(7),d=n(3);n(39);function u(){var e=JSON.parse(localStorage.getItem("login"));return null==e?null:e.uuid?e:null}function j(e){localStorage.setItem("login",JSON.stringify(e))}function b(){var e=JSON.parse(localStorage.getItem("conta"));return null==e?null:e.sistema?e:null}function O(e){localStorage.setItem("conta",JSON.stringify(e))}function h(e){e=e||{id:0},localStorage.setItem("Cardapio",JSON.stringify(e))}function f(e){e=e||{id:0},localStorage.setItem("Apartamento",JSON.stringify(e))}function p(){var e=localStorage.getItem("Apartamento");return null==e?{id:0}:JSON.parse(e)}function x(){var e={id:0};try{var t=localStorage.getItem("Cardapio");return t=null==t?e:JSON.parse(t)}catch(n){return e}}function m(){var e=localStorage.getItem("mesa");return null===e?"":e}function g(e){localStorage.setItem("mesa",null===e?"":e)}function v(){var e=p().id>0?p().id:localStorage.getItem("suite");return null===e?"":e}function S(e){localStorage.setItem("suite",null===e?"":e)}function N(){return localStorage.getItem("grupo")}function y(e){if(console.log("contaEncerrada.login.checkout:",e.checkout),!e.checkout)return!1;var t=e.checkout.substr(0,10),n=e.checkout.substr(11),c=t.split("/"),a=c[2]+"-"+c[1]+"-"+c[0]+" "+n;return new Date>=new Date(a)}var C=n(41),k=n.n(C).a.create({baseURL:"https://web.mde.com.br",withCredentials:!1,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}});n(76);var w=function(){var e=Object(l.h)().id;e?function(e){localStorage.setItem("id",e)}(e):e=localStorage.getItem("id"),console.log("id:",e);var t,n=Object(l.f)(),c=Object(l.g)();t=-1!==c.pathname.indexOf("/login"),localStorage.setItem("colab",t?"S":"N");var i=Object(a.useState)("Aponte a c\xe2mera do seu celular para o QR CODE"),r=Object(d.a)(i,2),o=(r[0],r[1],Object(a.useState)(u())),s=Object(d.a)(o,1)[0];return Object(a.useEffect)((function(){var t=b();console.log("QrCodeAuth.login:",s,e,t),document.title=t?t.hotel:"MDE Pedidos",null==s||s.uuid!==e?(console.log("getHost:","https://web.mde.com.br"),k.get("/api/order/info/".concat(e)).then((function(t){console.log("Conta:",t.data),O(t.data),j(null),n.push({pathname:"/home/".concat(e,"/").concat(Date.now())})}))):n.push({pathname:"/menu/".concat(e,"/").concat(Date.now())})}),[]),""};function I(){var e=Object(l.h)().id,t=Object(l.f)(),n=Object(a.useState)(u()),c=Object(d.a)(n,1)[0];return Object(a.useEffect)((function(){null==c?t.push({pathname:"/entrar/".concat(e,"/").concat(Date.now())}):t.push({pathname:"/menu/".concat(e,"/").concat(Date.now())})}),[]),""}var z=n(5),E=n(10),T=n(6);function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;function n(e){return(e=isNaN(e)?0:Math.round(100*e)/100).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}return 1===(t=parseInt(t))?n(e):n(e)+" x "+t+" = "+n(e*t)}function _(){var e=Object(z.a)(["\n    display: flex;\n    justify-content:center;\n    align-items:center;\n    font-size: 25px;\n"]);return _=function(){return e},e}function q(e){var t=e.pesquisa,n=e.items,a=e.onItemClick,i=e.grupo;return n&&0!==n.length?n.filter((function(e){return function(e){function n(e,t){return e.toUpperCase().includes(t.toUpperCase())}return 0===t.trim().lenght||(n(e.descricao,t)||n(e.codigo,t))}(e)&&function(e){return e.tipo==i}(e)})).map((function(e){return Object(c.jsx)("div",{type:"button",onClick:function(){return a(e)},className:"products",children:Object(c.jsxs)("div",{style:{padding:"10px",width:"100%"},children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{style:{float:"left",width:"70%"},children:[Object(c.jsxs)("p",{style:{fontSize:14,color:"#a2a276"},children:["N\xba ",e.codigo]}),Object(c.jsx)("p",{style:{color:"#3fe799",fontSize:16,maxWidth:190},children:e.descricao})]}),Object(c.jsx)("div",{style:{float:"right"},children:Object(c.jsx)("p",{style:{fontSize:18},children:A(e.preco)})})]}),Object(c.jsx)("div",{children:Object(c.jsx)("p",{style:{fontSize:14,width:"200px"},children:e.nota})})]})},e.id)})):Object(c.jsx)(M,{children:"Sem itens!"})}var M=T.a.p(_()),P=n(45);n(79);function D(e){var t=e.title,n=e.message,c=e.onYes,a=e.onNo;Object(P.confirmAlert)({title:t,message:n,buttons:[{label:"Sim",onClick:function(){c&&c()}},{label:"N\xe3o",onClick:function(){a&&a()}}]})}function L(e){var t=e.cardapio,n=e.locais,a=e.onLocalizacao,i=e.onObservacao;return"0"===t.localizacao?"":Object(c.jsxs)("div",{className:"box_localizacao",children:[Object(c.jsx)("span",{children:"Sua Localiza\xe7\xe3o"}),Object(c.jsx)("select",{onChange:function(e){a(e.target.value)},children:n.map((function(e){return Object(c.jsx)("option",{value:e.codigo,children:e.descricao},e.codigo)}))}),Object(c.jsx)("textarea",{type:"text",placeholder:"Facilite sua localiza\xe7\xe3o. Por exemplo: uso camisa da sele\xe7\xe3o.",onChange:function(e){i(e.target.value)}})]})}function R(){var e=Object(z.a)(["\n    display: flex;\n    justify-content:center;\n    align-items:center;\n    font-size: 25px;\n"]);return R=function(){return e},e}function U(e){var t=e.suite_id,n=e.onCarrinhoVazio,i=Object(l.f)(),r=Object(a.useState)({items:[],total:0}),o=Object(d.a)(r,2),s=o[0],O=o[1],h=Object(a.useState)("Aguarde..."),S=Object(d.a)(h,2),N=S[0],C=S[1],w=Object(a.useState)(u()),I=Object(d.a)(w,1)[0],z=Object(a.useState)(u().suite_id?null:m()),E=Object(d.a)(z,1)[0],T=Object(a.useState)(v()),_=Object(d.a)(T,2),q=_[0],M=(_[1],Object(a.useState)(b().locais_entrega)),P=Object(d.a)(M,1)[0],R=Object(a.useState)(x()),U=Object(d.a)(R,1)[0],F=Object(a.useState)(b().locais_entrega?b().locais_entrega[0]:""),B=Object(d.a)(F,2),H=B[0],V=B[1],Y=Object(a.useState)(""),G=Object(d.a)(Y,2),Q=G[0],W=G[1],K=function(){if(y(I))return j(null),i.push({pathname:"/".concat(I.uuid)}),!0};Object(a.useEffect)((function(){var e;if(!K()){var n=!0;if(t||E||q){var c=p(),a=null!==(e=I.suite)&&void 0!==e?e:c.id,i="/api/order/cart/".concat(I.uuid,"/").concat(a);return k.get(i).then((function(e){n&&(O(e.data),C(e.data.items.length>0?null:"Sem \xedtens!"))})),function(){n=!1}}C("Sem \xedtens!")}}),[E,t]);var X=function(){var e;if(!K()){var t=p(),c=null!==(e=I.suite)&&void 0!==e?e:t.id;D({title:"Aten\xe7\xe3o!",message:"Enviar esse pedido?",onYes:function(){k.post("/api/order/cart",{suite_id:c,mesa:E,localizacao:H,observacao:Q,uuid:I.uuid}).then((function(e){f(null),O(e.data),g(null),n()}))}})}},Z=function(){var e;if(!K()){var t=p(),c=null!==(e=I.suite)&&void 0!==e?e:t.id,a="/api/order/cart/".concat(I.uuid,"/").concat(c);D({title:"Aten\xe7\xe3o!",message:"Cancela o pedido?",onYes:function(){k.delete("".concat(a,"/todos")).then((function(e){O(e.data),f(null),g(null),n()}))}})}},$=function(e){var t=e.total,n=function(e){e.suite;var t,n=p(),a=null!==(t=I.suite)&&void 0!==t?t:n.id;return Object(c.jsxs)("div",{className:"numero-mesa",children:["Suite: ",a]})};return Object(c.jsxs)("div",{className:"container-product-info",children:[Object(c.jsxs)("div",{style:{overflow:"hidden"},children:[Object(c.jsxs)("div",{className:"total-carrinho",children:["Total: ",A(t)]}),Object(c.jsx)(n,{suite:q})]}),Object(c.jsx)("a",{className:"fecha-pedido",href:"#",onClick:X,style:{color:"white"},children:"Enviar Pedido"}),Object(c.jsx)("a",{className:"cancela-pedido",href:"#",onClick:Z,style:{color:"white"},children:"Cancelar Pedido"}),Object(c.jsx)("br",{})]})},ee=function(e){var t=e.items,n=e.onListaVazia;return 0===t.length?(n(),""):t.map((function(e){return Object(c.jsx)("div",{type:"button",onClick:function(){return function(e){var t;if(!K()){var n=p(),c=null!==(t=I.suite)&&void 0!==t?t:n.id,a="/api/order/cart/".concat(I.uuid,"/").concat(c,"/").concat(e.id);D({title:"Aten\xe7\xe3o!",message:"Excluir esse \xedtem?",onYes:function(){k.delete(a).then((function(e){0===e.data.total&&g(null),O(e.data)}))}})}}(e)},className:"products",children:Object(c.jsxs)("div",{style:{paddingBottom:"10px"},children:[Object(c.jsxs)("p",{style:{fontSize:14,color:"#a2a276"},children:["N\xba ",e.codigo]}),Object(c.jsx)("p",{style:{color:"#3fe799",fontSize:16},children:e.descricao}),Object(c.jsx)("p",{style:{fontSize:14,width:300},children:e.nota}),Object(c.jsx)("p",{style:{fontSize:18},children:Object(c.jsx)("span",{style:{color:"#8c8c8c"},children:A(e.preco,e.quantidade)})}),e.atendido?"":Object(c.jsx)("p",{className:"toque",style:{fontSize:14},children:"Toque para excluir"})]})},e.id)}))};return Object(c.jsx)("div",{children:N?Object(c.jsx)(J,{children:N}):Object(c.jsxs)("div",{children:[Object(c.jsx)(ee,{items:s.items,onListaVazia:function(){C("Sem \xedtens!")}}),Object(c.jsx)(L,{cardapio:U,locais:P,onLocalizacao:function(e){V(P.filter((function(t){return e===t.codigo}))[0])},onObservacao:function(e){W(e)}}),Object(c.jsx)($,{total:s.total})]})})}var J=T.a.p(R()),F=n(15);function B(){var e=Object(z.a)(["\n    background: #232129;\n    border-radius: 5px;\n    width: 80%;\n    padding: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center; \n    margin-top: 20px;\n\n    :hover {\n        background: ","\n      } \n\n    a{\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      text-decoration: none;\n      color: #fff; \n      font-size: 26px;\n    }\n    \n"]);return B=function(){return e},e}function H(){var e=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 80vh;\n  width: 350px;\n  margin-top: 20px;\n  "]);return H=function(){return e},e}function V(e){var t=e.id,n=e.onCardapioClick,i=Object(l.f)(),r=Object(a.useState)([]),o=Object(d.a)(r,2),s=o[0],b=o[1],O=Object(a.useState)(u()),h=Object(d.a)(O,1)[0];return Object(a.useEffect)((function(){var e=!0;return k.get("/api/cardapios/".concat(t)).then((function(n){if(e){if(y(h))return j(null),void i.push({pathname:"/".concat(t)});console.log("Cardapios:",n.data),b(n.data.filter((function(e){return"0"==h.cardapios||-1!==h.cardapios.indexOf(e.id)})))}})),function(){e=!1}}),[]),Object(c.jsx)(Y,{children:s.map((function(e){return Object(c.jsx)(G,{id:e.id,children:Object(c.jsx)("a",{href:"#",onClick:function(){return n(e)},className:"requests",children:e.descricao})},e.id)}))})}var Y=T.a.div(H()),G=T.a.div(B(),Object(F.a)(.2,"#232129"));function Q(){var e=Object(z.a)(["\n    input {\n        background: #232129;\n        border-radius: 10px;\n        padding: 16px;\n        width: 100%;\n\n        color: #666360;\n        border: 2px solid #232129;\n\n        display: flex;\n        align-items: center;\n       \n    }\n"]);return Q=function(){return e},e}function W(){var e=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 80vh;\n  margin-top: 60px;\n  "]);return W=function(){return e},e}function K(){var e=Object(l.h)().id,t=Object(l.f)(),n=Object(a.useState)(u()),i=Object(d.a)(n,1)[0],r=Object(l.g)().busca,o=Object(a.useState)(x()),b=Object(d.a)(o,2),O=b[0],f=b[1],p=Object(a.useState)(0===O.id),m=Object(d.a)(p,2),g=m[0],v=m[1],S=Object(a.useState)(r),C=Object(d.a)(S,2),w=C[0],I=C[1],z=Object(a.useState)([]),T=Object(d.a)(z,2),A=T[0],_=T[1],M=Object(a.useState)([]),P=Object(d.a)(M,2),D=(P[0],P[1],Object(a.useState)([])),L=Object(d.a)(D,2),R=L[0],J=L[1],F=Object(a.useState)(N()),B=Object(d.a)(F,2),H=B[0],Y=B[1],G=Object(a.useState)(!1),Q=Object(d.a)(G,2),W=Q[0],K=Q[1],$=Object(a.useState)(W?"btnProdutos":"btnProdutosClicked"),ee=Object(d.a)($,2),te=ee[0],ne=ee[1],ce=Object(a.useState)(W?"btnCarrinhoClicked":"btnCarrinho"),ae=Object(d.a)(ce,2),ie=ae[0],re=ae[1];Object(a.useEffect)((function(){if(null==i&&t.push({pathname:"/".concat(e)}),0!==O.id){if(y(i))return j(null),void t.push({pathname:"/".concat(e)});var n=!0;return k.get("/api/order/products/".concat(i.uuid,"/").concat(O.id)).then((function(e){if(n){_(e.data);var t=function(e){var t=[];for(var n in e)t.includes(e[n].tipo)||t.push(e[n].tipo);return t}(e.data);J(t),Y(N())}})),function(){n=!1}}}),[O]);var oe=function(){K(!1),ne("btnProdutosClicked"),re("btnCarrinho")},se=function(){K(!0),re("btnCarrinhoClicked"),ne("btnProdutos")},le=function(n){t.push({pathname:"/adiciona/".concat(e),item:n})},de=function(){v(!0)},ue=function(){I(!0)},je=function(e){Y(e),function(e){localStorage.setItem("grupo",e)}(e),I(!1)},be=function(){return Object(c.jsx)(X,{children:R.map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)("a",{className:"botao-seleciona-grupo",href:"#",onClick:function(){return je(e)},style:{color:"white"},children:e},t)})}))})},Oe=function(){return Object(c.jsxs)("a",{className:"botao-grupo",href:"#",onClick:ue,children:[Object(c.jsx)("span",{children:H}),Object(c.jsx)(E.b,{style:{float:"right",display:"flex"}})]})},he=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{className:"body",children:[H?Object(c.jsx)(Oe,{}):"",Object(c.jsx)("div",{className:"filtros",children:(i.login,Object(c.jsxs)("div",{className:"pnlOptions",children:[Object(c.jsx)(s.b,{to:"#",className:te,onClick:oe,children:"Produtos"}),Object(c.jsx)(s.b,{to:"#",className:ie,onClick:se,children:"Carrinho"})]}))}),Object(c.jsx)("div",{className:"lista",children:W?Object(c.jsx)(U,{suite_id:i.suite_id,onCarrinhoVazio:oe}):Object(c.jsxs)("div",{children:[Object(c.jsx)(Z,{children:Object(c.jsx)("form",{children:Object(c.jsx)("input",{value:n,onChange:function(e){r(e.target.value)},placeholder:"Digite aqui sua pesquisa"})})}),Object(c.jsx)(q,{pesquisa:n,items:A,onItemClick:le,grupo:H})]})})]})},fe=function(){return Object(c.jsxs)("div",{className:"btnCardapio",onClick:de,children:[Object(c.jsx)("span",{className:"nome_cardapio",children:"Card\xe1pio"}),Object(c.jsx)("span",{className:"tipo_cardapio",children:O.descricao})]})};return Object(c.jsxs)("div",{className:"root",children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsxs)("div",{className:"header-content",children:[Object(c.jsx)(E.c,{className:"seta",onClick:function(){t.push({pathname:"/menu/".concat(e)})},type:"button"}),Object(c.jsx)(fe,{}),Object(c.jsx)(E.c,{className:"hidden"})]})}),g?Object(c.jsx)(V,{id:e,onCardapioClick:function(e){v(!1),h(e),f(e),I(!0)}}):w?Object(c.jsx)(be,{}):Object(c.jsx)(he,{})]})}var X=T.a.div(W()),Z=T.a.div(Q());function $(){var e=Object(z.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    margin-top: 40px;\n  "]);return $=function(){return e},e}function ee(){var e=Object(l.h)().id,t=Object(a.useState)(u()),n=Object(d.a)(t,1)[0],i=Object(l.f)(),r=Object(a.useState)([]),o=Object(d.a)(r,2),j=o[0],b=o[1];Object(a.useEffect)((function(){null==n&&i.push({pathname:"/".concat(e)}),k.get("/api/rooms/".concat(n.uuid)).then((function(e){b(e.data)}))}),[]);return Object(c.jsxs)("div",{className:"rooms",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"header-content",children:Object(c.jsx)(s.b,{to:"#",onClick:function(){i.push({pathname:"/cardapio/".concat(e)})},children:Object(c.jsx)(E.a,{type:"button",className:"seta"})})}),Object(c.jsx)("h1",{style:{fontSize:22},children:"Ocupa\xe7\xf5es"})]}),Object(c.jsx)(te,{children:j.map((function(e,t){return Object(c.jsx)("a",{className:"botao-apartamento",href:"#",onClick:function(){return function(e){f(e)}(e)},style:{color:"white"},children:e.id},t)}))})]})}var te=T.a.div($()),ne=n(46),ce=n(22);function ae(){var e=Object(z.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 44px;\n    width: 44px;\n    background-color: #fff;\n    border-radius: 5px;\n  "]);return ae=function(){return e},e}function ie(){var e=Object(z.a)(["                    \n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    background-color: #ff9000;\n    border-radius: 5px;\n    margin: 20px;\n    width: 300px;\n    height: 50px;    \n  "]);return ie=function(){return e},e}var re=function(e){var t=e.value,n=e.onUpdate,a=T.a.div(ie()),i=T.a.div(ae());return Object(c.jsxs)(a,{children:[Object(c.jsx)("div",{children:Object(c.jsx)(ce.a,{onClick:function(){return n(-1)},style:{fontSize:23}})}),Object(c.jsx)(i,{children:Object(c.jsx)("h1",{style:{color:"#ff9000",fontSize:25},children:t})}),Object(c.jsx)("div",{children:Object(c.jsx)(ce.b,{onClick:function(){return n(1)},style:{fontSize:23}})})]})};function oe(){var e=Object(z.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    margin-top: 40px;\n  "]);return oe=function(){return e},e}function se(){var e=Object(z.a)(["\n"]);return se=function(){return e},e}function le(){var e=Object(z.a)(["\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 80vh;\n"]);return le=function(){return e},e}function de(){var e=function(){if(y(i))return j(null),O.push({pathname:"/".concat(t)}),!0};Object(a.useEffect)((function(){null==i&&O.push({pathname:"/".concat(t)}),e()||i.login&&k.get("/api/rooms/".concat(i.uuid)).then((function(e){X(e.data.sort((function(e,t){return e.id<t.id?-1:1})))}))}),[]);var t=Object(l.h)().id,n=Object(a.useState)(u()),i=Object(d.a)(n,1)[0],r=Object(a.useState)(b()),o=Object(d.a)(r,1)[0],s=Object(l.g)().item,O=Object(l.f)(),h=Object(a.useState)(s),N=Object(d.a)(h,1)[0],C=Object(a.useState)(m()),w=Object(d.a)(C,2),I=w[0],z=w[1],T=Object(a.useState)(v()),_=Object(d.a)(T,2),q=_[0],M=_[1],P=Object(a.useState)(!1),D=Object(d.a)(P,2),L=D[0],R=D[1],U=Object(a.useState)(p().id),J=Object(d.a)(U,2),F=J[0],B=J[1],H=Object(a.useState)((N.nota||N.imagem)&&!i.login),V=Object(d.a)(H,2),Y=V[0],G=V[1],Q=Object(a.useState)([]),W=Object(d.a)(Q,2),K=W[0],X=W[1],Z=Object(a.useState)(!!i.login&&0===p().id),$=Object(d.a)(Z,2),ee=$[0],te=$[1],ce=function(){O.push({pathname:"/cardapio/".concat(t),busca:!1})},ae=function(){return Object(c.jsx)(be,{children:K.map((function(e,t){return Object(c.jsx)("a",{className:"botao-apartamento",href:"#",onClick:function(){return function(e){f(e),B(e.id),te(!1)}(e)},style:{color:"black"},children:e.id},t)}))})},ie=function(){return Object(c.jsxs)(ue,{children:[Object(c.jsx)(je,{children:Object(c.jsx)("img",{src:N.imagem,alt:"foto"})}),Object(c.jsxs)("div",{className:"container-product-detail",children:[Object(c.jsx)("h2",{style:{fontSize:20,textAlign:"center"},children:N.descricao}),Object(c.jsxs)("h2",{style:{fontSize:15,marginTop:20},children:[" ",N.nota]})]}),Object(c.jsx)("a",{className:"continuar-item",href:"#",onClick:function(){G(!1)},style:{color:"white"},children:"Continuar"}),Object(c.jsx)("br",{})]})},oe=function(){var n=Object(a.useState)(1),r=Object(d.a)(n,2),s=r[0],l=r[1],u=Object(a.useState)(""),j=Object(d.a)(u,2),b=j[0],O=j[1];return Object(c.jsx)("div",{className:"body",children:Object(c.jsxs)("div",{className:"container-product-info",children:[Object(c.jsx)("h2",{style:{fontSize:20,marginTop:"60px",textAlign:"center"},children:N.descricao}),Object(c.jsx)("h2",{style:{fontSize:25,color:"lightgreen",marginTop:"30px",textAlign:"center"},children:A(N.preco*s)}),Object(c.jsx)(re,{value:s,onUpdate:function(e){var t=s+e;l(t>0?t:1)}}),Object(c.jsx)("textarea",{className:"nota",type:"text",value:b,placeholder:"Observa\xe7\xf5es",onChange:function(e){O(e.target.value)}}),"WINRESTA"===o.sistema?Object(c.jsx)("div",{children:Object(c.jsx)("input",{className:"mesa",type:"text",value:I,onChange:function(e){z(e.target.value)},placeholder:"Mesa"})}):"","camareira"===i.perfil?Object(c.jsx)("div",{children:Object(c.jsx)("input",{className:"mesa",type:"text",value:q,onChange:function(e){M(e.target.value)},placeholder:"Suite"})}):"",Object(c.jsx)("a",{className:"adicionar-item",href:"#",onClick:function(){var n,c,a,r;if(!e()&&!L){R(!0);var o=x(),l=p();k.post("/api/order",{uuid:t,mesa:null!==I&&void 0!==I?I:null,funcionario:i.login,funcionario_id:null!==(n=i.funcionario_id)&&void 0!==n?n:"0",suite_id:null!==(c=i.suite_id)&&void 0!==c?c:0,suite:null!==(a=i.suite)&&void 0!==a?a:l.id,codigo:N.codigo,descricao:N.descricao,foto:N.foto,produto_id:N.id,preco:N.preco,tipo:N.tipo,quantidade:s,nota:b,hospede:null!==(r=i.NrHospede)&&void 0!==r?r:l.NrHospede,cardapio:o.id}).then((function(e){g(I),S(q),ce()}))}},style:{color:"white"},children:"Adicionar"})]})})},se=0==F?"Selecione apartamento":"Apartamento "+F;return Object(c.jsxs)("div",{className:"rooms",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"header-content",children:[Object(c.jsx)(E.a,{onClick:ce,className:"seta",type:"button"}),i.login?Object(c.jsx)(ne.a,{onClick:function(){te(!0)},className:"cama",type:"button"}):""]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"nome_cardapio",children:"Adicionar Item"}),i.login?Object(c.jsx)("span",{className:"tipo_cardapio",children:se}):""]})]}),ee?Object(c.jsx)(ae,{}):Y?Object(c.jsx)(ie,{}):Object(c.jsx)(oe,{})]})}var ue=T.a.div(le()),je=T.a.div(se()),be=T.a.div(oe());function Oe(){var e=Object(z.a)(["\n    display: flex;\n    justify-content:center;\n    margin-top: 10px;\n    align-items:center;\n    font-size: 25px;\n"]);return Oe=function(){return e},e}function he(){var e=Object(z.a)(["\n    input {\n        background: #232129;\n        border-radius: 10px;\n        margin-top: 10px;\n        padding: 16px;\n        width: 100%;\n        color: #666360;\n        border: 2px solid #232129;\n        display: flex;\n        align-items: center;\n    }\n"]);return he=function(){return e},e}function fe(){var e=Object(z.a)(["\n    input {\n        background: #232129;\n        border-radius: 10px;\n        margin-top: 60px;\n        padding: 16px;\n        width: 100%;\n        color: #666360;\n        border: 2px solid #232129;\n        display: flex;\n        align-items: center;\n    }\n"]);return fe=function(){return e},e}function pe(e){var t=e.mesa,n=e.comanda,a=e.onPesquisarMesa,i=e.onTrocarItemMesa,r=Object(l.h)().id,o=Object(l.f)();return Object(c.jsxs)("div",{className:"root",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"header-content",children:Object(c.jsx)(E.a,{onClick:function(){o.push({pathname:"/menu/".concat(r)})},className:"seta",type:"button"})}),Object(c.jsx)("h1",{children:"Pedidos"})]}),Object(c.jsx)("div",{className:"body",children:Object(c.jsxs)("div",{className:"lista_pedidos",children:[Object(c.jsx)(ve,{children:Object(c.jsx)("form",{children:Object(c.jsx)("input",{value:t,onChange:function(e){a(e.target.value)},placeholder:"Mesa"})})}),Object(c.jsx)(ge,{items:n.items,onTrocarItemMesa:i}),Object(c.jsx)(xe,{total:n.total})]})})]})}var xe=function(e){var t=e.total;return t&&0!==t?Object(c.jsxs)("div",{className:"total",children:["Total: ",A(t)]}):""},me=function(e){var t=e.item,n=e.trocar,i=e.onTrocarItemMesa,r=Object(a.useState)(""),o=Object(d.a)(r,2),s=o[0],l=o[1];return n?Object(c.jsxs)("div",{children:[Object(c.jsx)(Se,{children:Object(c.jsx)("form",{children:Object(c.jsx)("input",{value:s,placeholder:"Mesa",onChange:function(e){l(e.target.value)}})})}),Object(c.jsx)("a",{className:"trocar-mesa",href:"#",onClick:function(){i(t,s)},style:{color:"white"},children:"Trocar"})]}):""},ge=function(e){var t=e.items,n=e.onTrocarItemMesa,i=Object(a.useState)(!1),r=Object(d.a)(i,2),o=r[0],s=r[1];if(!t||0===t.length)return Object(c.jsx)(Ne,{children:"Sem \xedtens!"});return t.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"item",onClick:function(){return function(e){e.atendido||s(!o)}(e)},children:[Object(c.jsxs)("p",{style:{fontSize:14,color:"#a2a276"},children:["N\xba ",e.codigo]}),Object(c.jsx)("p",{style:{color:"#3fe799",fontSize:16},children:e.descricao}),Object(c.jsx)("p",{style:{fontSize:14,width:200},children:e.nota}),Object(c.jsxs)("p",{style:{fontSize:18},children:[Object(c.jsxs)("span",{style:{color:"#8c8c8c"},children:[e.quantidade," x ",A(e.preco)]})," = ",A(e.preco,e.quantidade)]}),e.atendido?"":Object(c.jsx)("p",{className:"toque",style:{fontSize:14},children:"Toque para trocar mesa"})]}),Object(c.jsx)(me,{item:e,trocar:o,onTrocarItemMesa:function(e,t){s(!1),n(e,t)}})]})}))},ve=T.a.div(fe()),Se=T.a.div(he()),Ne=T.a.p(Oe());function ye(e){var t=e.pedidos,n=Object(l.h)().id,a=Object(l.f)();return 0===t.length?"":(console.log(t),Object(c.jsxs)("div",{className:"root",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"header-content",children:Object(c.jsx)(E.a,{onClick:function(){a.push({pathname:"/menu/".concat(n)})},className:"seta",type:"button"})}),Object(c.jsx)("h1",{children:"Pedidos"})]}),Object(c.jsx)("div",{className:"body",children:Object(c.jsxs)("div",{className:"listaItensPedido",children:[t.pedidos.map((function(e){return Object(c.jsxs)("div",{className:"item",children:[Object(c.jsx)("div",{className:"data",children:(t=e.data,t.substr(8,2)+" de "+["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"][parseInt(t.substr(5,2))])}),Object(c.jsx)(ke,{items:e.items})]},e.id);var t})),Object(c.jsx)(Ce,{total:t.total})]})})]}))}var Ce=function(e){var t=e.total;return 0===t?Object(c.jsx)("div",{className:"total",children:"N\xe3o h\xe1 pedidos!"}):Object(c.jsxs)("div",{className:"total",children:["Total: ",A(t)]})},ke=function(e){var t=e.items;return 0===t.length?"":t.map((function(e){return Object(c.jsxs)("div",{style:{marginTop:"20px"},children:[Object(c.jsxs)("div",{style:{overflow:"hidden"},children:[Object(c.jsx)("div",{className:"esquerda",children:e.descricao}),Object(c.jsx)("div",{className:"direita",children:Object(c.jsxs)("span",{className:"detalhe",children:["N\xba ",e.codigo]})})]}),Object(c.jsxs)("div",{style:{overflow:"hidden"},children:[Object(c.jsxs)("div",{className:"detalhe",children:[e.quantidade," x ",A(e.preco)]}),Object(c.jsx)("div",{className:"valor",children:A(e.preco*e.quantidade)})]}),Object(c.jsx)("div",{className:"atendido",children:(t=e.atendido,""===t?"":"atendido")})]},e.id);var t}))};function we(){var e=Object(l.h)().id,t=Object(a.useState)(u()),n=Object(d.a)(t,1)[0],i=Object(l.f)(),r=Object(a.useState)([]),o=Object(d.a)(r,2),s=o[0],j=o[1],b=Object(a.useState)(),O=Object(d.a)(b,2),h=O[0],f=O[1];Object(a.useEffect)((function(){if(null==n&&i.push({pathname:"/entrar/".concat(e)}),n.suite_id||h){var t=!0,c="/api/order/consumer/";return c+=n.suite_id?n.suite_id:"waiter/".concat(n.uuid,"/").concat(h),k.get(c).then((function(e){t&&j(e.data)})).catch((function(){j([])})),function(){t=!1}}}),[h]);return n.login?Object(c.jsx)(pe,{mesa:h,comanda:s,onPesquisarMesa:function(e){f(e)},onTrocarItemMesa:function(t,n){k.post("/api/mesa/".concat(e,"/").concat(t.id,"/").concat(h,"/").concat(n)).then((function(e){j(e.data)})).catch((function(){j([])}))}}):Object(c.jsx)(ye,{pedidos:s})}function Ie(){var e=Object(z.a)(["\n    margin:50px;\n    width: 75%;\n\n    p {\n        margin-top: 10px;\n        margin-bottom: 5px;\n    }\n    \n    strong {\n        display: flex;\n        padding: 8px 0 8px 10px;\n\n        background: #666;\n        border-radius: 5px;\n        font-size: 24px;\n    }\n"]);return Ie=function(){return e},e}function ze(){var e=Object(z.a)(["\n    background: #232129;\n    border-radius: 5px;\n    width: 80%;\n    padding: 18px 98px;\n    display: flex;\n    align-items: center;\n    justify-content: center; \n    margin-top: 46px;\n    margin-bottom: 40px;\n\n    :hover {\n        background: ","\n      } \n\n    a{\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-decoration: none;\n      color: #fff; \n      font-size: 26px;\n    }\n"]);return ze=function(){return e},e}function Ee(){var e=Object(z.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin: 120px;\n  align-items: center;\n  justify-content: start;\n  height: 80vh;\n"]);return Ee=function(){return e},e}function Te(){var e,t="1.0.36",n=Object(l.h)().id,i=Object(l.f)(),r=Object(a.useState)(u()),o=Object(d.a)(r,2),s=o[0],j=(o[1],Object(a.useState)("MENU")),b=Object(d.a)(j,2),O=b[0],h=b[1],f=Object(a.useState)("Informa\xe7\xf5es"),p=Object(d.a)(f,2),x=p[0],m=p[1],g=Object(a.useState)(!0),v=Object(d.a)(g,2),S=v[0],N=v[1];Object(a.useEffect)((function(){null==s&&i.push({pathname:"/entrar/".concat(n)});var t=!0;return e=setInterval((function(){t&&y()}),5e3),function(){t=!1,setTimeout((function(){clearInterval(e),e=null}),1e3)}}),[]);var y=function(){var e={id:s.uuid,suite:s.suite,cpf:s.cpf};console.log("data:",e),k.post("/api/entrar",e).then((function(e){console.log("/api/entrar:",e.data),N(!S)})).catch((function(e){e.response&&console.log(e.response.status)}))},C=function(){return Object(c.jsxs)(Ae,{children:[Object(c.jsx)(_e,{children:Object(c.jsx)("a",{href:"#",onClick:w,className:"requests",children:"Perfil"})}),s.login?"":Object(c.jsx)(_e,{children:Object(c.jsx)("a",{href:"#",onClick:I,className:"requests",children:"Conta"})})]})},w=function(){h("PERFIL"),m("Perfil de uso")},I=function(){h("CONTA"),m("Resumo da conta")},z=function(){return s.login?Object(c.jsx)(_,{}):Object(c.jsx)(q,{})},T=function(){return Object(c.jsxs)(qe,{children:[Object(c.jsx)("p",{children:"Di\xe1rias (+)"}),Object(c.jsx)("strong",{children:A(s.diarias)}),Object(c.jsx)("p",{children:"Extras (+)"}),Object(c.jsx)("strong",{children:A(s.extras)}),Object(c.jsx)("p",{children:"Taxas (+)"}),Object(c.jsx)("strong",{children:A(s.taxas)}),Object(c.jsx)("p",{style:{color:"#d0fa5b"},children:"Antecipado (-)"}),Object(c.jsx)("strong",{children:A(s.antecipado)}),Object(c.jsx)("p",{style:{color:"#ff9000"},children:"Saldo (=)"}),Object(c.jsx)("strong",{children:A(s.saldo)})]})},_=function(){return Object(c.jsxs)(qe,{children:[Object(c.jsx)("p",{children:"Funcion\xe1rio"}),Object(c.jsx)("strong",{children:M}),Object(c.jsx)("p",{children:"Build"}),Object(c.jsx)("strong",{children:t})]})},q=function(){return Object(c.jsxs)(qe,{children:[Object(c.jsx)("p",{children:"Reserva"}),Object(c.jsx)("strong",{children:s.reserva}),Object(c.jsx)("p",{children:"H\xf3spede Master"}),Object(c.jsx)("strong",{children:s.hospede}),Object(c.jsx)("p",{children:"Su\xedte"}),Object(c.jsx)("strong",{children:s.suite}),Object(c.jsx)("p",{children:"Check-in"}),Object(c.jsx)("strong",{children:s.checkin}),Object(c.jsx)("p",{children:"Check-out"}),Object(c.jsx)("strong",{children:s.checkout}),Object(c.jsx)("p",{children:"Build"}),Object(c.jsx)("strong",{children:t})]})},M=s.login+" "+s.funcionario_id;return Object(c.jsxs)("div",{className:"rooms",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"header-content",children:Object(c.jsx)("a",{href:"#",onClick:function(){"MENU"!=O?(h("MENU"),m("Informa\xe7\xf5es")):i.push({pathname:"/menu/".concat(n)})},className:"requests",children:Object(c.jsx)(E.a,{className:"seta",type:"button"})})}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{className:"nome_cardapio",children:x})})]}),"MENU"===O?Object(c.jsx)(C,{}):"PERFIL"==O?Object(c.jsx)(z,{}):Object(c.jsx)(T,{timer:S})]})}var Ae=T.a.div(Ee()),_e=T.a.div(ze(),Object(F.a)(.2,"#232129")),qe=T.a.div(Ie());function Me(){var e=Object(z.a)(["\n    background: #232129;\n    border-radius: 5px;\n    width: 80%;\n    padding: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center; \n    margin-top: 16px;\n\n    :hover {\n        background: ","\n      } \n\n    a{\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      text-decoration: none;\n      color: #fff; \n      font-size: 26px;\n    }\n"]);return Me=function(){return e},e}function Pe(){var e=Object(z.a)(["\n  background: #232129;\n  margin-top: 90px;\n  border-radius: 8px;\n\n  img {\n    border-radius: 8px;\n  }\n"]);return Pe=function(){return e},e}function De(){var e=Object(z.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 80vh;\n"]);return De=function(){return e},e}var Le=function(){var e=Object(l.h)().id,t=Object(l.f)(),n=Object(a.useState)(b()),i=Object(d.a)(n,1)[0],r=Object(a.useState)(u()),o=Object(d.a)(r,1)[0];console.log(o);return Object(c.jsxs)(Ue,{children:[Object(c.jsx)(Je,{children:Object(c.jsx)("img",{src:"".concat("https://web.mde.com.br","/api/logo/").concat(i.codigo),alt:"logo"})}),Object(c.jsx)(Fe,{children:Object(c.jsx)("a",{href:"#",onClick:function(){t.push({pathname:"/informacoes/".concat(e)})},className:"requests",children:"Informa\xe7\xf5es"})}),Object(c.jsx)(Fe,{children:Object(c.jsx)("a",{href:"#",onClick:function(){t.push({pathname:"/cardapio/".concat(e),busca:!0})},className:"requests",children:"Card\xe1pio"})}),Object(c.jsx)(Fe,{children:Object(c.jsx)("a",{href:"#",onClick:function(){localStorage.setItem("login",null),t.push({pathname:"/".concat(e)})},children:"Sair"})})]})};function Re(){var e=Object(l.h)().id,t=Object(l.f)(),n=Object(a.useState)(u()),i=Object(d.a)(n,1)[0],r=Object(a.useState)(b());Object(d.a)(r,1)[0];return Object(a.useEffect)((function(){null==i&&t.push({pathname:"/entrar/".concat(e,"/").concat(Date.now())}),console.log(i)}),[]),Object(c.jsx)(Le,{})}var Ue=T.a.div(De()),Je=T.a.div(Pe()),Fe=T.a.div(Me(),Object(F.a)(.2,"#232129"));function Be(){var e=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  place-content: center;\n\n  width: 100%;\n  max-width: 700px;\n\n  img {\n    border-radius:7px;\n  }\n\n  form {\n    margin: 80px 0;\n    width: 340px;\n    text-align: center;\n\n    h1 {\n      margin-bottom: 24px;\n    }\n\n    input {\n      background: #232129;\n      border-radius: 10px;\n      padding: 16px;\n      width: 100%;\n\n      color: #666360;\n      border: 2px solid #232129;\n\n      display: flex;\n      align-items: center;\n      margin-top: 8px;\n      \n    }\n\n    button {\n      background: #ff9000;\n      height: 56px;\n      border-radius: 10px;\n      border: 0;\n      padding: 0 16px;\n      color: #312e38;\n      width: 100%;\n      font-weight: 500;\n      margin-top:16px;\n      transition: background-color 0.2s;\n      font-weight: bold;\n\n      &:hover {\n        background:",";\n      }\n    }\n  }\n\n  > a {\n    color: #ff9000;\n    display: block;\n    margin-top: 24px;\n    text-decoration: none;\n    transition: color 0.2s;\n\n    display: flex;\n    align-items: center;\n\n    &:hover {\n      color: ","\n    }\n  }\n"]);return Be=function(){return e},e}function He(){var e=Object(z.a)(["\n  height: 100vh;\n  display: flex;\n  align-items: stretch;\n"]);return He=function(){return e},e}var Ve=function(){var e=Object(l.h)().id,t=Object(l.f)(),n=Object(a.useState)(""),i=Object(d.a)(n,2),r=i[0],o=i[1],s=Object(a.useState)(""),u=Object(d.a)(s,2),O=u[0],h=u[1],f=Object(a.useState)(b()),p=Object(d.a)(f,1)[0];return Object(c.jsx)(Ge,{children:Object(c.jsxs)(Qe,{children:[Object(c.jsx)("img",{src:"".concat("https://web.mde.com.br","/api/logo/").concat(p.codigo),alt:"logo"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("h1",{children:"Entrar"}),Object(c.jsx)("input",{value:r,onChange:function(e){o(e.target.value)},placeholder:"Su\xedte n\xba"}),Object(c.jsx)("input",{value:O,onChange:function(e){h(e.target.value)},placeholder:"Documento (somente d\xedgitos)"}),Object(c.jsx)("button",{onClick:function(n){n.preventDefault();var c=0==r?{id:e,login:null,senha:O}:{id:e,suite:r,cpf:O};k.post("/api/entrar",c).then((function(n){console.log("Login:",n.data),y(n.data)?t.push({pathname:"/".concat(e)}):(j(n.data),S(n.data.suite),t.push({pathname:"/menu/".concat(e,"/").concat(Date.now())}))})).catch((function(e){e.response&&console.log(e.response.status)}))},children:"Entrar"})]})]})})};function Ye(){Object(l.h)().id,Object(l.f)();var e=Object(a.useState)(null),t=(Object(d.a)(e,1)[0],Object(a.useState)("S"===localStorage.getItem("colab"))),n=(Object(d.a)(t,1)[0],Object(a.useState)(b())),i=Object(d.a)(n,1)[0];return console.log("Conta:",i),Object(a.useEffect)((function(){h(null),S(null),document.title=i.hotel}),[]),Object(c.jsx)(Ve,{})}var Ge=T.a.div(He()),Qe=T.a.div(Be(),Object(F.a)(.2,"#ff9000"),Object(F.a)(.2,"#ff9000"));var We=function(){return Object(c.jsx)(s.a,{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/login/:id",children:Object(c.jsx)(w,{})}),Object(c.jsx)(l.a,{path:"/home/:id",children:Object(c.jsx)(I,{})}),Object(c.jsx)(l.a,{path:"/menu/:id",children:Object(c.jsx)(Re,{})}),Object(c.jsx)(l.a,{path:"/entrar/:id",children:Object(c.jsx)(Ye,{})}),Object(c.jsx)(l.a,{path:"/entrar/:id/:rnd",children:Object(c.jsx)(Ye,{})}),Object(c.jsx)(l.a,{path:"/cardapio/:id",children:Object(c.jsx)(K,{})}),Object(c.jsx)(l.a,{path:"/apartamentos/:id",children:Object(c.jsx)(ee,{})}),Object(c.jsx)(l.a,{path:"/adiciona/:id",children:Object(c.jsx)(de,{})}),Object(c.jsx)(l.a,{path:"/pedidos/:id",children:Object(c.jsx)(we,{})}),Object(c.jsx)(l.a,{path:"/informacoes/:id",children:Object(c.jsx)(Te,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/:id",children:Object(c.jsx)(w,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/:id/:rnd",children:Object(c.jsx)(w,{})}),Object(c.jsx)(l.a,{path:"/",children:Object(c.jsx)(w,{})})]})})};n(80);var Ke=function(){return Object(c.jsx)(We,{})},Xe=n(48),Ze=n(21),$e={id:"",total:0,pedidos:[{id:0,numero:"0",realizado:"",atendido:"",total:0,produtos:[{produto:"",tipo:"",quantidade:"0",preco:"0",total:0,nota:"",id:0}]}]},et="CONSUMMATIONS/GET",tt="CONSUMMATIONS/INSERT_ORDER",nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case et:return t.payload;case tt:var n=e,c=e.orders;return c.push(t.payload),n.orders=c,n;default:return e}},ct=Object(Ze.b)({consummations:nt}),at=Object(Ze.c)(ct),it=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};o.a.render(Object(c.jsx)(Xe.a,{store:at,children:Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(Ke,{})})}),document.getElementById("root")),it()}},[[82,1,2]]]);
//# sourceMappingURL=main.47e161bb.chunk.js.map