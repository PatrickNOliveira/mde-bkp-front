(this.webpackJsonphotel=this.webpackJsonphotel||[]).push([[0],{75:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(2),i=n.n(a),o=n(20),r=n.n(o),s=n(8),l=n(7),d=n(3);n(39);function u(){var e=JSON.parse(localStorage.getItem("login"));return null==e?null:e.uuid?e:null}function j(e){localStorage.setItem("login",JSON.stringify(e))}function b(){var e=JSON.parse(localStorage.getItem("conta"));return null==e?null:e.sistema?e:null}function h(e){localStorage.setItem("conta",JSON.stringify(e))}function O(e){e=e||{id:0},localStorage.setItem("Cardapio",JSON.stringify(e))}function p(){var e={id:0};try{var t=localStorage.getItem("Cardapio");return t=null==t?e:JSON.parse(t)}catch(n){return e}}function f(){var e=localStorage.getItem("mesa");return null===e?"":e}function x(e){localStorage.setItem("mesa",null===e?"":e)}function m(){var e=localStorage.getItem("suite");return null===e?"":e}function g(e){localStorage.setItem("suite",null===e?"":e)}function v(e){console.log("contaEncerrada.login.checkout:",e.checkout);var t=e.checkout.substr(0,10),n=e.checkout.substr(11),c=t.split("/"),a=c[2]+"-"+c[1]+"-"+c[0]+" "+n;return new Date>=new Date(a)}var S=n(41),N=n.n(S).a.create({baseURL:"https://web.mde.com.br",withCredentials:!1,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}});n(75);var y=function(){var e,t=Object(l.h)().id,n=Object(l.f)(),c=Object(l.g)();e=-1!==c.pathname.indexOf("/login"),localStorage.setItem("colab",e?"S":"N");var i=Object(a.useState)("Aponte a c\xe2mera do seu celular para o QR CODE"),o=Object(d.a)(i,2),r=(o[0],o[1],Object(a.useState)(u())),s=Object(d.a)(r,1)[0];return Object(a.useEffect)((function(){console.log("QrCodeAuth.login:",s,t),null==s||s.uuid!==t?N.get("/api/order/info/".concat(t)).then((function(e){console.log("Conta:",e.data),h(e.data),j(null),n.push({pathname:"/home/".concat(t,"/").concat(Date.now())})})):n.push({pathname:"/menu/".concat(t,"/").concat(Date.now())})}),[]),""};function C(){var e=Object(l.h)().id,t=Object(l.f)(),n=Object(a.useState)(u()),c=Object(d.a)(n,1)[0];return Object(a.useEffect)((function(){null==c?t.push({pathname:"/entrar/".concat(e,"/").concat(Date.now())}):t.push({pathname:"/menu/".concat(e,"/").concat(Date.now())})}),[]),""}var k=n(5),w=n(14),z=n(6);function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;function n(e){return(e=isNaN(e)?0:Math.round(100*e)/100).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}return 1===(t=parseInt(t))?n(e):n(e)+" x "+t+" = "+n(e*t)}function T(){var e=Object(k.a)(["\n    display: flex;\n    justify-content:center;\n    align-items:center;\n    font-size: 25px;\n"]);return T=function(){return e},e}function E(e){var t=e.pesquisa,n=e.items,a=e.onItemClick,i=e.grupo;return n&&0!==n.length?n.filter((function(e){return function(e){function n(e,t){return e.toUpperCase().includes(t.toUpperCase())}return 0===t.trim().lenght||(n(e.descricao,t)||n(e.codigo,t))}(e)&&function(e){return e.tipo==i}(e)})).map((function(e){return Object(c.jsx)("div",{type:"button",onClick:function(){return a(e)},className:"products",children:Object(c.jsxs)("div",{style:{padding:"10px",width:"100%"},children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{style:{float:"left",width:"70%"},children:[Object(c.jsxs)("p",{style:{fontSize:14,color:"#a2a276"},children:["N\xba ",e.codigo]}),Object(c.jsx)("p",{style:{color:"#3fe799",fontSize:16,maxWidth:190},children:e.descricao})]}),Object(c.jsx)("div",{style:{float:"right"},children:Object(c.jsx)("p",{style:{fontSize:18},children:I(e.preco)})})]}),Object(c.jsx)("div",{children:Object(c.jsx)("p",{style:{fontSize:14,width:"200px"},children:e.nota})})]})},e.id)})):Object(c.jsx)(q,{children:"Sem itens!"})}var q=z.a.p(T()),A=n(45);n(78);function M(e){var t=e.title,n=e.message,c=e.onYes,a=e.onNo;Object(A.confirmAlert)({title:t,message:n,buttons:[{label:"Sim",onClick:function(){c&&c()}},{label:"N\xe3o",onClick:function(){a&&a()}}]})}function _(e){var t=e.cardapio,n=e.locais,a=e.onLocalizacao,i=e.onObservacao;return n.length<2||"0"===t.localizacao?"":Object(c.jsxs)("div",{className:"box_localizacao",children:[Object(c.jsx)("span",{children:"Sua Localiza\xe7\xe3o"}),Object(c.jsx)("select",{onChange:function(e){a(e.target.value)},children:n.map((function(e){return Object(c.jsx)("option",{value:e.codigo,children:e.descricao},e.codigo)}))}),Object(c.jsx)("textarea",{type:"text",placeholder:"Facilite sua localiza\xe7\xe3o. Por exemplo: uso camisa da sele\xe7\xe3o.",onChange:function(e){i(e.target.value)}})]})}function D(){var e=Object(k.a)(["\n    display: flex;\n    justify-content:center;\n    align-items:center;\n    font-size: 25px;\n"]);return D=function(){return e},e}function P(e){var t=e.suite_id,n=e.onCarrinhoVazio,i=Object(l.f)(),o=Object(a.useState)({items:[],total:0}),r=Object(d.a)(o,2),s=r[0],h=r[1],O=Object(a.useState)("Aguarde..."),g=Object(d.a)(O,2),S=g[0],y=g[1],C=Object(a.useState)(u()),k=Object(d.a)(C,1)[0],w=Object(a.useState)(u().suite_id?null:f()),z=Object(d.a)(w,1)[0],T=Object(a.useState)(m()),E=Object(d.a)(T,1)[0],q=Object(a.useState)(b().locais_entrega),A=Object(d.a)(q,1)[0],D=Object(a.useState)(p()),P=Object(d.a)(D,1)[0],R=Object(a.useState)(b().locais_entrega?b().locais_entrega[0]:""),J=Object(d.a)(R,2),U=J[0],B=J[1],F=Object(a.useState)(""),W=Object(d.a)(F,2),V=W[0],Y=W[1],H=function(){if(v(k))return j(null),i.push({pathname:"/".concat(k.uuid)}),!0};Object(a.useEffect)((function(){if(!H()){var e=!0;if(t||z||E){var n="";return n=t||E?"/api/order/cart/".concat(k.uuid,"/").concat(t||E):"/api/order/cart/waiter/".concat(z),N.get(n).then((function(t){e&&(h(t.data),y(t.data.items.length>0?null:"Sem \xedtens!"))})),function(){e=!1}}y("Sem \xedtens!")}}),[z,t]);var G=function(){H()||M({title:"Aten\xe7\xe3o!",message:"Enviar esse pedido?",onYes:function(){N.post("/api/order/cart",{suite_id:null!==E&&void 0!==E?E:t,mesa:z,localizacao:U,observacao:V,uuid:k.uuid}).then((function(e){h(e.data),x(null),n()}))}})},Q=function(){if(!H()){var e="";e=t||E?"/api/order/cart/".concat(k.uuid,"/").concat(t||E):"/api/order/cart/waiter/".concat(z),M({title:"Aten\xe7\xe3o!",message:"Cancela o pedido?",onYes:function(){N.delete("".concat(e,"/todos")).then((function(e){h(e.data),x(null),n()}))}})}},K=function(e){var t=e.total,n=function(e){var t=e.mesa;return t?Object(c.jsxs)("div",{className:"numero-mesa",children:["Mesa: ",t]}):""},a=function(e){var t=e.suite;return t?Object(c.jsxs)("div",{className:"numero-mesa",children:["Suite: ",t]}):""};return Object(c.jsxs)("div",{className:"container-product-info",children:[Object(c.jsxs)("div",{style:{overflow:"hidden"},children:[Object(c.jsx)(n,{mesa:z}),Object(c.jsx)(a,{suite:E}),Object(c.jsxs)("div",{className:"total-carrinho",children:["Total: ",I(t)]})]}),Object(c.jsx)("a",{className:"fecha-pedido",href:"#",onClick:G,style:{color:"white"},children:"Enviar Pedido"}),Object(c.jsx)("a",{className:"cancela-pedido",href:"#",onClick:Q,style:{color:"white"},children:"Cancelar Pedido"}),Object(c.jsx)("br",{})]})},X=function(e){var n=e.items,a=e.onListaVazia;return 0===n.length?(a(),""):n.map((function(e){return Object(c.jsx)("div",{type:"button",onClick:function(){return function(e){if(!H()){var n="";n=t||E?"/api/order/cart/".concat(k.uuid,"/").concat(t||E,"/").concat(e.id):"/api/order/cart/waiter/".concat(z,"/").concat(e.id),M({title:"Aten\xe7\xe3o!",message:"Excluir esse \xedtem?",onYes:function(){N.delete(n).then((function(e){0===e.data.total&&x(null),h(e.data)}))}})}}(e)},className:"products",children:Object(c.jsxs)("div",{style:{paddingBottom:"10px"},children:[Object(c.jsxs)("p",{style:{fontSize:14,color:"#a2a276"},children:["N\xba ",e.codigo]}),Object(c.jsx)("p",{style:{color:"#3fe799",fontSize:16},children:e.descricao}),Object(c.jsx)("p",{style:{fontSize:14,width:300},children:e.nota}),Object(c.jsx)("p",{style:{fontSize:18},children:Object(c.jsx)("span",{style:{color:"#8c8c8c"},children:I(e.preco,e.quantidade)})}),e.atendido?"":Object(c.jsx)("p",{className:"toque",style:{fontSize:14},children:"Toque para excluir"})]})},e.id)}))};return Object(c.jsx)("div",{children:S?Object(c.jsx)(L,{children:S}):Object(c.jsxs)("div",{children:[Object(c.jsx)(X,{items:s.items,onListaVazia:function(){y("Sem \xedtens!")}}),Object(c.jsx)(_,{cardapio:P,locais:A,onLocalizacao:function(e){B(A.filter((function(t){return e===t.codigo}))[0])},onObservacao:function(e){Y(e)}}),Object(c.jsx)(K,{total:s.total})]})})}var L=z.a.p(D()),R=n(18);function J(){var e=Object(k.a)(["\n    background: #232129;\n    border-radius: 5px;\n    width: 80%;\n    padding: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center; \n    margin-top: 20px;\n\n    :hover {\n        background: ","\n      } \n\n    a{\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      text-decoration: none;\n      color: #fff; \n      font-size: 26px;\n    }\n    \n"]);return J=function(){return e},e}function U(){var e=Object(k.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 80vh;\n  width: 350px;\n"]);return U=function(){return e},e}function B(e){var t=e.id,n=e.onCardapioClick,i=Object(l.f)(),o=Object(a.useState)([]),r=Object(d.a)(o,2),s=r[0],b=r[1],h=Object(a.useState)(u()),O=Object(d.a)(h,1)[0];return Object(a.useEffect)((function(){var e=!0;return N.get("/api/cardapios/".concat(t)).then((function(n){if(e){if(v(O))return j(null),void i.push({pathname:"/".concat(t)});console.log("Cardapios:",n.data),b(n.data.filter((function(e){return 0===O.cardapios||-1!==O.cardapios.indexOf(e.id)})))}})),function(){e=!1}}),[]),Object(c.jsxs)(F,{children:[Object(c.jsx)("br",{}),s.map((function(e){return Object(c.jsx)(W,{id:e.id,children:Object(c.jsx)("a",{href:"#",onClick:function(){return n(e)},className:"requests",children:e.descricao})},e.id)}))]})}var F=z.a.div(U()),W=z.a.div(J(),Object(R.a)(.2,"#232129"));function V(){var e=Object(k.a)(["\n    input {\n        background: #232129;\n        border-radius: 10px;\n        padding: 16px;\n        width: 100%;\n\n        color: #666360;\n        border: 2px solid #232129;\n\n        display: flex;\n        align-items: center;\n       \n    }\n"]);return V=function(){return e},e}function Y(){var e=Object(l.h)().id,t=Object(l.f)(),n=Object(a.useState)(u()),i=Object(d.a)(n,1)[0],o=Object(a.useState)(p()),r=Object(d.a)(o,2),b=r[0],h=r[1],f=Object(a.useState)(0===b.id),x=Object(d.a)(f,2),m=x[0],g=x[1],S=Object(a.useState)(!1),y=Object(d.a)(S,2),C=y[0],k=y[1],z=Object(a.useState)([]),I=Object(d.a)(z,2),T=I[0],q=I[1],A=Object(a.useState)([]),M=Object(d.a)(A,2),_=(M[0],M[1],Object(a.useState)([])),D=Object(d.a)(_,2),L=D[0],R=D[1],J=Object(a.useState)(),U=Object(d.a)(J,2),F=U[0],W=U[1],V=Object(a.useState)(!1),Y=Object(d.a)(V,2),G=Y[0],Q=Y[1];Object(a.useEffect)((function(){if(null==i&&t.push({pathname:"/".concat(e)}),0!==b.id){if(v(i))return j(null),void t.push({pathname:"/".concat(e)});var n=!0;return N.get("/api/order/products/".concat(i.uuid,"/").concat(b.id)).then((function(e){if(n){console.log("produtos:",e.data),q(e.data);var t=function(e){var t=[];for(var n in e)t.includes(e[n].tipo)||t.push(e[n].tipo);return t}(e.data);R(t),W(t[0])}})),function(){n=!1}}}),[b]);var K=function(){Q(!1)},X=function(){Q(!0)},Z=function(n){t.push({pathname:"/adiciona/".concat(e),item:n})},$=function(){console.log(L),k(!0),console.log(C)},ee=function(){return Object(c.jsx)("div",{className:"lista-grupos",children:Object(c.jsx)("div",{className:"grupos",children:L.map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)("a",{className:"botao-seleciona-grupo",href:"#",onClick:function(){return function(e){W(e),k(!1)}(e)},style:{color:"white"},children:e},t)})}))})})},te=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(c.jsxs)("div",{className:"body",children:[F?Object(c.jsx)("div",{className:"grupos",children:Object(c.jsx)("a",{className:"botao-grupo",href:"#",onClick:$,children:F})}):"",Object(c.jsx)("div",{className:"filtros",children:(i.login,Object(c.jsxs)("div",{children:[Object(c.jsx)(s.b,{to:"#",style:{color:"white",padding:"10px",paddingRight:"90px",textDecoration:"none"},onClick:K,children:"Produtos"}),Object(c.jsx)(s.b,{to:"#",style:{color:"white",padding:"10px",textDecoration:"none"},onClick:X,children:"Carrinho"})]}))}),Object(c.jsx)("div",{className:"lista",children:G?Object(c.jsx)(P,{suite_id:i.suite_id,onCarrinhoVazio:K}):Object(c.jsxs)("div",{children:[Object(c.jsx)(H,{children:Object(c.jsx)("form",{children:Object(c.jsx)("input",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Digite aqui sua pesquisa"})})}),Object(c.jsx)(E,{pesquisa:n,items:T,onItemClick:Z,grupo:F})]})})]})};return Object(c.jsxs)("div",{className:"root",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"header-content",children:[Object(c.jsx)(w.a,{onClick:function(){t.push({pathname:"/menu/".concat(e)})},className:"seta",type:"button"}),Object(c.jsx)(w.b,{onClick:function(){g(!0)},className:"cardapio",type:"button"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"nome_cardapio",children:"Card\xe1pio"}),Object(c.jsx)("span",{className:"tipo_cardapio",children:b.descricao})]})]}),m?Object(c.jsx)(B,{id:e,onCardapioClick:function(e){console.log(e),g(!1),O(e),h(e)}}):C?Object(c.jsx)(ee,{}):Object(c.jsx)(te,{})]})}var H=z.a.div(V()),G=n(22);function Q(){var e=Object(k.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 44px;\n    width: 44px;\n    background-color: #fff;\n    border-radius: 5px;\n  "]);return Q=function(){return e},e}function K(){var e=Object(k.a)(["                    \n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    background-color: #ff9000;\n    border-radius: 5px;\n    margin: 20px;\n    width: 300px;\n    height: 50px;    \n  "]);return K=function(){return e},e}var X=function(e){var t=e.value,n=e.onUpdate,a=z.a.div(K()),i=z.a.div(Q());return Object(c.jsxs)(a,{children:[Object(c.jsx)("div",{children:Object(c.jsx)(G.a,{onClick:function(){return n(-1)},style:{fontSize:23}})}),Object(c.jsx)(i,{children:Object(c.jsx)("h1",{style:{color:"#ff9000",fontSize:25},children:t})}),Object(c.jsx)("div",{children:Object(c.jsx)(G.b,{onClick:function(){return n(1)},style:{fontSize:23}})})]})};function Z(){var e=Object(k.a)(["\n"]);return Z=function(){return e},e}function $(){var e=Object(k.a)(["\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 80vh;\n"]);return $=function(){return e},e}function ee(){var e=function(){if(v(i))return j(null),O.push({pathname:"/".concat(t)}),!0};Object(a.useEffect)((function(){null==i&&O.push({pathname:"/".concat(t)}),e()}),[]);var t=Object(l.h)().id,n=Object(a.useState)(u()),i=Object(d.a)(n,1)[0],o=Object(a.useState)(b()),r=Object(d.a)(o,1)[0],h=Object(l.g)().item,O=Object(l.f)(),S=Object(a.useState)(h),y=Object(d.a)(S,1)[0],C=Object(a.useState)(f()),k=Object(d.a)(C,2),z=k[0],T=k[1],E=Object(a.useState)(m()),q=Object(d.a)(E,2),A=q[0],M=q[1],_=Object(a.useState)(!1),D=Object(d.a)(_,2),P=D[0],L=D[1],R=Object(a.useState)(y.nota||y.imagem),J=Object(d.a)(R,2),U=J[0],B=J[1],F=function(){O.push({pathname:"/cardapio/".concat(t)})},W=function(){return Object(c.jsxs)(te,{children:[Object(c.jsx)(ne,{children:Object(c.jsx)("img",{src:y.imagem,alt:"foto"})}),Object(c.jsxs)("div",{className:"container-product-detail",children:[Object(c.jsx)("h2",{style:{fontSize:20,textAlign:"center"},children:y.descricao}),Object(c.jsxs)("h2",{style:{fontSize:15,marginTop:20},children:[" ",y.nota]})]}),Object(c.jsx)("a",{className:"continuar-item",href:"#",onClick:function(){B(!1)},style:{color:"white"},children:"Continuar"}),Object(c.jsx)("br",{})]})},V=function(){var n=Object(a.useState)(1),o=Object(d.a)(n,2),s=o[0],l=o[1],u=Object(a.useState)(""),j=Object(d.a)(u,2),b=j[0],h=j[1];return Object(c.jsx)("div",{className:"body",children:Object(c.jsxs)("div",{className:"container-product-info",children:[Object(c.jsx)("h2",{style:{fontSize:20,marginTop:"60px",textAlign:"center"},children:y.descricao}),Object(c.jsx)("h2",{style:{fontSize:25,color:"lightgreen",marginTop:"30px",textAlign:"center"},children:I(y.preco*s)}),Object(c.jsx)(X,{value:s,onUpdate:function(e){var t=s+e;l(t>0?t:1)}}),Object(c.jsx)("textarea",{className:"nota",type:"text",value:b,placeholder:"Observa\xe7\xf5es",onChange:function(e){h(e.target.value)}}),"WINRESTA"===r.sistema?Object(c.jsx)("div",{children:Object(c.jsx)("input",{className:"mesa",type:"text",value:z,onChange:function(e){T(e.target.value)},placeholder:"Mesa"})}):"","camareira"===i.perfil?Object(c.jsx)("div",{children:Object(c.jsx)("input",{className:"mesa",type:"text",value:A,onChange:function(e){M(e.target.value)},placeholder:"Suite"})}):"",Object(c.jsx)("a",{className:"adicionar-item",href:"#",onClick:function(){var n,c,a;if(!e()&&!P){L(!0);var o=p();N.post("/api/order",{uuid:t,mesa:null!==z&&void 0!==z?z:null,funcionario:i.login,funcionario_id:null!==(n=i.funcionario_id)&&void 0!==n?n:"0",suite_id:null!==(c=i.suite_id)&&void 0!==c?c:"",suite:null!==(a=i.suite)&&void 0!==a?a:z,codigo:y.codigo,descricao:y.descricao,foto:y.foto,produto_id:y.id,preco:y.preco,tipo:y.tipo,quantidade:s,nota:b,hospede:i.NrHospede,cardapio:o.id}).then((function(e){x(z),g(A),F()}))}},style:{color:"white"},children:"Adicionar"})]})})};return Object(c.jsxs)("div",{className:"root",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"header-content",children:Object(c.jsx)(s.b,{to:"#",onClick:F,children:Object(c.jsx)(w.a,{type:"button",className:"seta"})})}),Object(c.jsx)("h1",{style:{fontSize:22},children:"Adicionar Item"})]}),U?Object(c.jsx)(W,{}):Object(c.jsx)(V,{})]})}var te=z.a.div($()),ne=z.a.div(Z());function ce(){var e=Object(k.a)(["\n    display: flex;\n    justify-content:center;\n    margin-top: 10px;\n    align-items:center;\n    font-size: 25px;\n"]);return ce=function(){return e},e}function ae(){var e=Object(k.a)(["\n    input {\n        background: #232129;\n        border-radius: 10px;\n        margin-top: 10px;\n        padding: 16px;\n        width: 100%;\n        color: #666360;\n        border: 2px solid #232129;\n        display: flex;\n        align-items: center;\n    }\n"]);return ae=function(){return e},e}function ie(){var e=Object(k.a)(["\n    input {\n        background: #232129;\n        border-radius: 10px;\n        margin-top: 60px;\n        padding: 16px;\n        width: 100%;\n        color: #666360;\n        border: 2px solid #232129;\n        display: flex;\n        align-items: center;\n    }\n"]);return ie=function(){return e},e}function oe(e){var t=e.mesa,n=e.comanda,a=e.onPesquisarMesa,i=e.onTrocarItemMesa,o=Object(l.h)().id,r=Object(l.f)();return Object(c.jsxs)("div",{className:"root",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"header-content",children:Object(c.jsx)(w.a,{onClick:function(){r.push({pathname:"/menu/".concat(o)})},className:"seta",type:"button"})}),Object(c.jsx)("h1",{children:"Pedidos"})]}),Object(c.jsx)("div",{className:"body",children:Object(c.jsxs)("div",{className:"lista_pedidos",children:[Object(c.jsx)(de,{children:Object(c.jsx)("form",{children:Object(c.jsx)("input",{value:t,onChange:function(e){a(e.target.value)},placeholder:"Mesa"})})}),Object(c.jsx)(le,{items:n.items,onTrocarItemMesa:i}),Object(c.jsx)(re,{total:n.total})]})})]})}var re=function(e){var t=e.total;return t&&0!==t?Object(c.jsxs)("div",{className:"total",children:["Total: ",I(t)]}):""},se=function(e){var t=e.item,n=e.trocar,i=e.onTrocarItemMesa,o=Object(a.useState)(""),r=Object(d.a)(o,2),s=r[0],l=r[1];return n?Object(c.jsxs)("div",{children:[Object(c.jsx)(ue,{children:Object(c.jsx)("form",{children:Object(c.jsx)("input",{value:s,placeholder:"Mesa",onChange:function(e){l(e.target.value)}})})}),Object(c.jsx)("a",{className:"trocar-mesa",href:"#",onClick:function(){i(t,s)},style:{color:"white"},children:"Trocar"})]}):""},le=function(e){var t=e.items,n=e.onTrocarItemMesa,i=Object(a.useState)(!1),o=Object(d.a)(i,2),r=o[0],s=o[1];if(!t||0===t.length)return Object(c.jsx)(je,{children:"Sem \xedtens!"});return t.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"item",onClick:function(){return function(e){e.atendido||s(!r)}(e)},children:[Object(c.jsxs)("p",{style:{fontSize:14,color:"#a2a276"},children:["N\xba ",e.codigo]}),Object(c.jsx)("p",{style:{color:"#3fe799",fontSize:16},children:e.descricao}),Object(c.jsx)("p",{style:{fontSize:14,width:200},children:e.nota}),Object(c.jsxs)("p",{style:{fontSize:18},children:[Object(c.jsxs)("span",{style:{color:"#8c8c8c"},children:[e.quantidade," x ",I(e.preco)]})," = ",I(e.preco,e.quantidade)]}),e.atendido?"":Object(c.jsx)("p",{className:"toque",style:{fontSize:14},children:"Toque para trocar mesa"})]}),Object(c.jsx)(se,{item:e,trocar:r,onTrocarItemMesa:function(e,t){s(!1),n(e,t)}})]})}))},de=z.a.div(ie()),ue=z.a.div(ae()),je=z.a.p(ce());function be(e){var t=e.pedidos,n=Object(l.h)().id,a=Object(l.f)();return 0===t.length?"":(console.log(t),Object(c.jsxs)("div",{className:"root",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"header-content",children:Object(c.jsx)(w.a,{onClick:function(){a.push({pathname:"/menu/".concat(n)})},className:"seta",type:"button"})}),Object(c.jsx)("h1",{children:"Pedidos"})]}),Object(c.jsx)("div",{className:"body",children:Object(c.jsxs)("div",{className:"listaItensPedido",children:[t.pedidos.map((function(e){return Object(c.jsxs)("div",{className:"item",children:[Object(c.jsx)("div",{className:"data",children:(t=e.data,t.substr(8,2)+" de "+["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"][parseInt(t.substr(5,2))])}),Object(c.jsx)(Oe,{items:e.items})]},e.id);var t})),Object(c.jsx)(he,{total:t.total})]})})]}))}var he=function(e){var t=e.total;return 0===t?Object(c.jsx)("div",{className:"total",children:"N\xe3o h\xe1 pedidos!"}):Object(c.jsxs)("div",{className:"total",children:["Total: ",I(t)]})},Oe=function(e){var t=e.items;return 0===t.length?"":t.map((function(e){return Object(c.jsxs)("div",{style:{marginTop:"20px"},children:[Object(c.jsxs)("div",{style:{overflow:"hidden"},children:[Object(c.jsx)("div",{className:"esquerda",children:e.descricao}),Object(c.jsx)("div",{className:"direita",children:Object(c.jsxs)("span",{className:"detalhe",children:["N\xba ",e.codigo]})})]}),Object(c.jsxs)("div",{style:{overflow:"hidden"},children:[Object(c.jsxs)("div",{className:"detalhe",children:[e.quantidade," x ",I(e.preco)]}),Object(c.jsx)("div",{className:"valor",children:I(e.preco*e.quantidade)})]}),Object(c.jsx)("div",{className:"atendido",children:(t=e.atendido,""===t?"":"atendido")})]},e.id);var t}))};function pe(){var e=Object(l.h)().id,t=Object(a.useState)(u()),n=Object(d.a)(t,1)[0],i=Object(l.f)(),o=Object(a.useState)([]),r=Object(d.a)(o,2),s=r[0],j=r[1],b=Object(a.useState)(),h=Object(d.a)(b,2),O=h[0],p=h[1];Object(a.useEffect)((function(){if(null==n&&i.push({pathname:"/entrar/".concat(e)}),n.suite_id||O){var t=!0,c="/api/order/consumer/";return c+=n.suite_id?n.suite_id:"waiter/".concat(n.uuid,"/").concat(O),N.get(c).then((function(e){t&&j(e.data)})).catch((function(){j([])})),function(){t=!1}}}),[O]);return n.login?Object(c.jsx)(oe,{mesa:O,comanda:s,onPesquisarMesa:function(e){p(e)},onTrocarItemMesa:function(t,n){N.post("/api/mesa/".concat(e,"/").concat(t.id,"/").concat(O,"/").concat(n)).then((function(e){j(e.data)})).catch((function(){j([])}))}}):Object(c.jsx)(be,{pedidos:s})}function fe(){var e=Object(k.a)(["\n    margin:50px;\n    padding-top: 60px;\n    width: 75%;\n\n    p {\n        margin-top: 10px;\n        margin-bottom: 5px;\n    }\n    \n    strong {\n        display: flex;\n        padding: 8px 0 8px 10px;\n\n        background: #666;\n        border-radius: 5px;\n        font-size: 24px;\n    }\n"]);return fe=function(){return e},e}function xe(){var e=Object(l.h)().id,t=Object(l.f)(),n=Object(a.useState)(u()),i=Object(d.a)(n,1)[0];Object(a.useEffect)((function(){null==i&&t.push({pathname:"/entrar/".concat(e)})}),[]);return Object(c.jsxs)("div",{className:"root",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"header-content",children:Object(c.jsx)("a",{href:"#",onClick:function(){t.push({pathname:"/menu/".concat(e)})},className:"requests",children:Object(c.jsx)(w.a,{className:"seta",type:"button"})})}),Object(c.jsx)("h1",{children:"Informa\xe7\xf5es"})]}),Object(c.jsxs)(me,{children:[Object(c.jsx)("p",{children:"Reserva"}),Object(c.jsx)("strong",{children:i.reserva}),Object(c.jsx)("p",{children:"H\xf3spede Master"}),Object(c.jsx)("strong",{children:i.hospede}),Object(c.jsx)("p",{children:"Su\xedte"}),Object(c.jsx)("strong",{children:i.suite}),Object(c.jsx)("p",{children:"Check-in"}),Object(c.jsx)("strong",{children:i.checkin}),Object(c.jsx)("p",{children:"Check-out"}),Object(c.jsx)("strong",{children:i.checkout}),Object(c.jsx)("p",{children:"Build"}),Object(c.jsx)("strong",{children:"1.0.12"})]})]})}var me=z.a.div(fe());function ge(){var e=Object(k.a)(["\n    background: #232129;\n    border-radius: 5px;\n    width: 80%;\n    padding: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center; \n    margin-top: 16px;\n\n    :hover {\n        background: ","\n      } \n\n    a{\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      text-decoration: none;\n      color: #fff; \n      font-size: 26px;\n    }\n"]);return ge=function(){return e},e}function ve(){var e=Object(k.a)(["\n  background: #232129;\n  margin-top: 90px;\n  border-radius: 8px;\n\n  img {\n    border-radius: 8px;\n  }\n"]);return ve=function(){return e},e}function Se(){var e=Object(k.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 80vh;\n"]);return Se=function(){return e},e}var Ne=function(){var e=Object(l.h)().id,t=Object(l.f)(),n=Object(a.useState)(b()),i=Object(d.a)(n,1)[0],o=Object(a.useState)(u()),r=Object(d.a)(o,1)[0];console.log(r);return Object(c.jsxs)(we,{children:[Object(c.jsx)(ze,{children:Object(c.jsx)("img",{src:"".concat("https://web.mde.com.br","/api/logo/").concat(i.codigo),alt:"logo"})}),r.login?"":Object(c.jsx)(Ie,{children:Object(c.jsx)("a",{href:"#",onClick:function(){t.push({pathname:"/informacoes/".concat(e)})},className:"requests",children:"Informa\xe7\xf5es"})}),Object(c.jsx)(Ie,{children:Object(c.jsx)("a",{href:"#",onClick:function(){t.push({pathname:"/cardapio/".concat(e)})},className:"requests",children:"Card\xe1pio"})}),Object(c.jsx)(Ie,{children:Object(c.jsx)("a",{href:"#",onClick:function(){localStorage.setItem("login",null),t.push({pathname:"/".concat(e)})},children:"Sair"})})]})},ye=function(){var e=Object(l.h)().id,t=Object(l.f)(),n=Object(a.useState)(b()),i=Object(d.a)(n,1)[0];return Object(c.jsxs)(we,{children:[Object(c.jsx)(ze,{children:Object(c.jsx)("img",{src:"".concat("https://web.mde.com.br","/api/logo/").concat(i.codigo),alt:"logo"})}),Object(c.jsx)(Ie,{children:Object(c.jsx)("a",{href:"#",onClick:function(){t.push({pathname:"/cardapio/".concat(e)})},className:"requests",children:"Card\xe1pio"})}),Object(c.jsx)(Ie,{children:Object(c.jsx)("a",{href:"#",onClick:function(){localStorage.setItem("login",null),t.push({pathname:"/".concat(e)})},children:"Sair"})})]})},Ce=function(){var e=Object(l.h)().id,t=Object(l.f)(),n=Object(a.useState)(b()),i=Object(d.a)(n,1)[0],o=Object(a.useState)(u()),r=Object(d.a)(o,1)[0];console.log(r);return Object(c.jsxs)(we,{children:[Object(c.jsx)(ze,{children:Object(c.jsx)("img",{src:"".concat("https://web.mde.com.br","/api/logo/").concat(i.codigo),alt:"logo"})}),r.login?"":Object(c.jsx)(Ie,{children:Object(c.jsx)("a",{href:"#",onClick:function(){t.push({pathname:"/informacoes/".concat(e)})},className:"requests",children:"Informa\xe7\xf5es"})}),-1===r.cardapios?"":Object(c.jsx)(Ie,{children:Object(c.jsx)("a",{href:"#",onClick:function(){t.push({pathname:"/cardapio/".concat(e)})},className:"requests",children:"Card\xe1pio"})}),Object(c.jsx)(Ie,{children:Object(c.jsx)("a",{href:"#",onClick:function(){localStorage.setItem("login",null),t.push({pathname:"/".concat(e)})},children:"Sair"})})]})};function ke(){var e=Object(l.h)().id,t=Object(l.f)(),n=Object(a.useState)(u()),i=Object(d.a)(n,1)[0],o=Object(a.useState)(b()),r=Object(d.a)(o,1)[0];return Object(a.useEffect)((function(){null==i&&t.push({pathname:"/entrar/".concat(e,"/").concat(Date.now())})}),[]),"WINLETOM"===r.sistema?Object(c.jsx)(Ne,{}):"WINRESTA"===r.sistema?Object(c.jsx)(ye,{}):Object(c.jsx)(Ce,{})}var we=z.a.div(Se()),ze=z.a.div(ve()),Ie=z.a.div(ge(),Object(R.a)(.2,"#232129"));function Te(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  place-content: center;\n\n  width: 100%;\n  max-width: 700px;\n\n  img {\n    border-radius:7px;\n  }\n\n  form {\n    margin: 80px 0;\n    width: 340px;\n    text-align: center;\n\n    h1 {\n      margin-bottom: 24px;\n    }\n\n    input {\n      background: #232129;\n      border-radius: 10px;\n      padding: 16px;\n      width: 100%;\n\n      color: #666360;\n      border: 2px solid #232129;\n\n      display: flex;\n      align-items: center;\n      margin-top: 8px;\n      \n    }\n\n    button {\n      background: #ff9000;\n      height: 56px;\n      border-radius: 10px;\n      border: 0;\n      padding: 0 16px;\n      color: #312e38;\n      width: 100%;\n      font-weight: 500;\n      margin-top:16px;\n      transition: background-color 0.2s;\n      font-weight: bold;\n\n      &:hover {\n        background:",";\n      }\n    }\n  }\n\n  > a {\n    color: #ff9000;\n    display: block;\n    margin-top: 24px;\n    text-decoration: none;\n    transition: color 0.2s;\n\n    display: flex;\n    align-items: center;\n\n    &:hover {\n      color: ","\n    }\n  }\n"]);return Te=function(){return e},e}function Ee(){var e=Object(k.a)(["\n  height: 100vh;\n  display: flex;\n  align-items: stretch;\n"]);return Ee=function(){return e},e}var qe=function(){var e=Object(l.h)().id,t=Object(l.f)(),n=Object(a.useState)(""),i=Object(d.a)(n,2),o=i[0],r=i[1],s=Object(a.useState)(""),u=Object(d.a)(s,2),h=u[0],O=u[1],p=Object(a.useState)(b()),f=Object(d.a)(p,1)[0];return Object(c.jsx)(_e,{children:Object(c.jsxs)(De,{children:[Object(c.jsx)("img",{src:"".concat("https://web.mde.com.br","/api/logo/").concat(f.codigo),alt:"logo"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("h1",{children:"Entrar"}),Object(c.jsx)("input",{value:o,onChange:function(e){r(e.target.value)},placeholder:"Su\xedte n\xba"}),Object(c.jsx)("input",{value:h,onChange:function(e){O(e.target.value)},placeholder:"Documento (somente d\xedgitos)"}),Object(c.jsx)("button",{onClick:function(n){n.preventDefault(),N.post("/api/entrar",{id:e,suite:o,cpf:h}).then((function(n){console.log("Login:",n.data),v(n.data)?t.push({pathname:"/".concat(e)}):(j(n.data),g(n.data.suite),t.push({pathname:"/menu/".concat(e,"/").concat(Date.now())}))})).catch((function(e){e.response&&console.log(e.response.status)}))},children:"Entrar"})]})]})})},Ae=function(){var e=Object(l.h)().id,t=Object(l.f)(),n=Object(a.useState)("padrao"),i=Object(d.a)(n,2),o=i[0],r=(i[1],Object(a.useState)("")),s=Object(d.a)(r,2),u=s[0],h=s[1],O=Object(a.useState)(b()),p=Object(d.a)(O,1)[0];return Object(c.jsx)(_e,{children:Object(c.jsxs)(De,{children:[Object(c.jsx)("img",{src:"".concat("https://web.mde.com.br","/api/logo/").concat(p.codigo),alt:"logo"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("h1",{children:"Entrar"}),Object(c.jsx)("input",{type:"password",value:u,onChange:function(e){h(e.target.value)},placeholder:"Senha"}),Object(c.jsx)("button",{onClick:function(n){n.preventDefault(),N.post("/api/entrar",{id:e,login:o,senha:u}).then((function(n){console.log("Login:",n.data),j(n.data),x(null),t.push({pathname:"/menu/".concat(e)})})).catch((function(e){e.response&&console.log(e.response.status)}))},children:"Entrar"})]})]})})};function Me(){Object(l.h)().id,Object(l.f)();var e=Object(a.useState)(null),t=(Object(d.a)(e,1)[0],Object(a.useState)("S"===localStorage.getItem("colab"))),n=Object(d.a)(t,1)[0],i=Object(a.useState)(b()),o=Object(d.a)(i,1)[0];return console.log("Conta:",o),Object(a.useEffect)((function(){O(null),g(null)}),[]),"WINRESTA"==o.sistema||n?Object(c.jsx)(Ae,{}):Object(c.jsx)(qe,{})}var _e=z.a.div(Ee()),De=z.a.div(Te(),Object(R.a)(.2,"#ff9000"),Object(R.a)(.2,"#ff9000"));var Pe=function(){return Object(c.jsx)(s.a,{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/login/:id",children:Object(c.jsx)(y,{})}),Object(c.jsx)(l.a,{path:"/home/:id",children:Object(c.jsx)(C,{})}),Object(c.jsx)(l.a,{path:"/menu/:id",children:Object(c.jsx)(ke,{})}),Object(c.jsx)(l.a,{path:"/entrar/:id",children:Object(c.jsx)(Me,{})}),Object(c.jsx)(l.a,{path:"/cardapio/:id",children:Object(c.jsx)(Y,{})}),Object(c.jsx)(l.a,{path:"/adiciona/:id",children:Object(c.jsx)(ee,{})}),Object(c.jsx)(l.a,{path:"/pedidos/:id",children:Object(c.jsx)(pe,{})}),Object(c.jsx)(l.a,{path:"/informacoes/:id",children:Object(c.jsx)(xe,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/:id",children:Object(c.jsx)(y,{})})]})})};n(79);var Le=function(){return Object(c.jsx)(Pe,{})},Re=n(47),Je=n(21),Ue={id:"",total:0,pedidos:[{id:0,numero:"0",realizado:"",atendido:"",total:0,produtos:[{produto:"",tipo:"",quantidade:"0",preco:"0",total:0,nota:"",id:0}]}]},Be="CONSUMMATIONS/GET",Fe="CONSUMMATIONS/INSERT_ORDER",We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Be:return t.payload;case Fe:var n=e,c=e.orders;return c.push(t.payload),n.orders=c,n;default:return e}},Ve=Object(Je.b)({consummations:We}),Ye=Object(Je.c)(Ve),He=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};r.a.render(Object(c.jsx)(Re.a,{store:Ye,children:Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(Le,{})})}),document.getElementById("root")),He()}},[[81,1,2]]]);
//# sourceMappingURL=main.3832185c.chunk.js.map