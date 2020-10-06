(this["webpackJsonpfilter-app"]=this["webpackJsonpfilter-app"]||[]).push([[4],{159:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(5),l=t(6);function s(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return s=function(){return e},e}function o(){var e=Object(i.a)(["\n  margin: 1em 1em;\n"]);return o=function(){return e},e}function c(){var e=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return c=function(){return e},e}function u(){var e=Object(i.a)(["\n  color: #6B6A63;\n  font-size: 24px;\n  text-align: center;\n  font-family: 'Heebo', sans-serif;\n"]);return u=function(){return e},e}function m(){var e=Object(i.a)(["\n  padding: 2em;\n"]);return m=function(){return e},e}function d(){var e=Object(i.a)(["\n  padding: 2em 4em;\n  max-width:1024px;\n  margin:0 auto;\n  overflow: auto;\n  &::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n    background-color: transparent;\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: 8px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: var(--border);\n    box-shadow: inset var(--shadow);\n    border-radius: 10px;\n  }\n  @media screen and (max-width:640px){\n    padding: 2em;\n  }\n"]);return d=function(){return e},e}var p=l.b.div(d()),h=l.b.div(m()),f=l.b.h3(u()),v=l.b.div(c()),g=l.b.div(o()),b=l.b.div(s()),y=t(61),E=t(78),k=t(166),C=t(148),_=t(163),O=t(89),j=t(106),w=t(107),N=function(){function e(a,t,n){Object(j.a)(this,e),this.dataToolsConnect=null,this._listener=null,a.has(t)&&(this.dataToolsConnect=a.get(t)),this._store=Object(O.a)({},n),this._backup=JSON.stringify(n),this.render=this.render.bind(this),this.hasChange=this.hasChange.bind(this)}return Object(w.a)(e,[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return null!=this.dataToolsConnect&&(this.dataToolsConnect.render(Object(O.a)(Object(O.a)({},this.dataToolsConnect.props),e)),!0)}},{key:"update",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this._listener){var t=this._listener(Object.freeze(Object(O.a)(Object(O.a)({},this._store),e)));if(!1===t)return!1}var n=Object(O.a)(Object(O.a)({},this._store),e);return this._store=n,a&&this.render(Object(O.a)({},this.dataToolsConnect.props)),!0}},{key:"hasChange",value:function(){return this._backup!==JSON.stringify(this._store)}},{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=JSON.parse(this._backup);this._store=a,e&&this.render()}},{key:"getInit",value:function(){return JSON.parse(this._backup)}},{key:"value",get:function(){return Object.freeze(Object(O.a)({},this._store))}},{key:"on",set:function(e){this._listener=e}}]),e}(),x=new Map;var z=t(120);function M(e){return Object(O.a)(Object(O.a)({},e),{},{_hash:"".concat("CONNECT","_").concat(Math.random().toString(36).substr(2,9))})}function S(e,a,t){var n=function(e,a,t){var n=null,r=null;function i(){return null}return{setKeyName:function(e){n=e},setComponent:function(e){r=e},saveRegister:function(l,s,o){var c=t.has(n),u=a.has(n);function m(){var e=r;return c&&(e=t.get(n)),u?i:e}var d={keyName:n,render:l,children:m(),props:s,memory:!1,waiting:!1,payload:o.payload};return e.set(n,d),{Component:m(),nextProps:s}},deleteRegister:function(){e.delete(n)}}}(e,a,t),i=n.saveRegister,l=n.deleteRegister,s=n.setComponent,o=n.setKeyName,c=function(){var e=null,a={id:null,props:{},payload:{}};return{defaultOptionConnect:function(){return a},setOptionConnect:function(t){if("function"===typeof t)e=t;else{if("object"!==typeof t||Array.isArray(t))throw new Error("optionConnect is not a function or object");e=function(){return Object(O.a)(Object(O.a)({},a),t)}}},processOptionControlConnect:function(t){var n=e(t);return Object(O.a)(Object(O.a)(Object(O.a)({},a),n),{},{props:Object(O.a)(Object(O.a)({},t),n.props)})}}}(),u=c.defaultOptionConnect,m=c.setOptionConnect,d=c.processOptionControlConnect;function p(e){var a=d(e),t=function(e){var a=r.a.useState(M(e)),t=Object(z.a)(a,2),n=t[0],i=t[1];return{propsHashed:n,forceRender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(M(e))}}}(a.props),n=t.propsHashed,s=t.forceRender,o=null,c={};r.a.useEffect((function(){var e=i(s,n,a);return o=e.Component,c=e.nextProps,l}),[]);var u=i(s,n,a);return o=u.Component,c=u.nextProps,r.a.createElement(o,Object.assign({},c,{render:s}))}function h(e){return s(e),p}return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;return m(a),o(e),h}}var P=t(96);function A(e,a,t){this.hide=function(){return!a.has(e.keyName)&&(a.set(e.keyName,!0),e.render(e.props),!0)},this.show=function(){return!!a.has(e.keyName)&&(a.delete(e.keyName),e.render(e.props),!0)},this.setTemplate=function(a){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function i(e){return r.a.createElement(a,e)}t.set(e.keyName,i),n&&e.render(e.props)},this.removeTemplate=function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=t.delete(e.keyName);return a&&e.render(e.props),n},this.restore=function(){return!!t.has(e.keyName)&&(t.delete(e.keyName),e.render(e.props),!0)},this.trade=function(e){},this.payload=function(){return Object.freeze(Object(O.a)({},e.payload))},this.props=function(){var a=e.props,t=(a._hash,Object(P.a)(a,["_hash"]));return Object.freeze(t)},this.render=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.render(Object(O.a)(Object(O.a)({},e.props),a))}}function K(e){var a=JSON.stringify(e),t=e,n=function(e){};this.on=function(e){n=e},this.get=function(){return t},this.set=function(e){return n(e),t=e},this.hasChange=function(){return a!==JSON.stringify(t)},this.init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null!==e)return a=JSON.stringify(e),t=e;var n=JSON.parse(a);return t=n}}var T=function(){function e(a){var t=this;for(var n in Object(j.a)(this,e),this.states=new Map,this.hasChange=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null!==e)return!!t.states.has(e)&&t.states.get(e).hasChange();var a=!1;return t.states.forEach((function(e,t){a||(a=e.hasChange())})),a},this.whoDataChanges=function(){var e={};return t.states.forEach((function(a,t){a.hasChange()&&(e[t]=a.get())})),e},a){var r=new K(a[n]);this.states.set(n,r)}}return Object(w.a)(e,[{key:"update",value:function(e){for(var a in e){if(this.states.has(a))this.states.get(a).set(e[a])}return this.val}},{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null!==e)for(var a in e)this.states.has(a)&&this.states.get(a).init(e[a]);else this.states.forEach((function(e){e.init()}))}},{key:"val",get:function(){var e={};return this.states.forEach((function(a,t){e[t]=a.get()})),e}},{key:"method",get:function(){var e={};return this.states.forEach((function(a,t){e[t]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return void 0!==e&&a.set(e),a.get()}})),e}}]),e}();function R(){var e=function(){var e=new Map,a=new Map,t=new Map;return{registersOfConnections:e,hideChildrens:a,createStore:function(a,t){return new N(e,a,t)},templateChildrens:t}}(),a=e.registersOfConnections,t=e.hideChildrens,n=e.createStore,i=e.templateChildrens,l=function(e){var a=!1,t=0;function n(){return!0}function r(a){e.set(a.keyName,Object(O.a)(Object(O.a)({},a),{},{waiting:!0})),t++}function i(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;if(!e.has(t))return!1;var s=e.get(t);if(a)return r(s),!1;var o=l(Object.freeze(Object(O.a)({},s.props)));return!!o&&(s.render(Object(O.a)(Object(O.a)({},s.props),i)),!0)}return{render:i,wait:function(){a=!0},proceed:function(){if(!a)return 0;a=!1;var n=0;return e.forEach((function(e){e.waiting&&(i(e.keyName,e.props),n++,e.waiting=!1)})),t=0,n},hasRendersWaiting:function(){return t>0},getProps:function(a){if(!e.has(a))return{};var t=e.get(a);return Object.freeze(Object(O.a)({},t.props))}}}(a),s=l.render,o=l.wait,c=l.proceed,u=l.hasRendersWaiting,m=function(e,a,t){function n(a){if(e.has(a)){var t=e.get(a);t.render(t.props)}}return{getCapsuleByKeyName:function(n){return e.has(n)?new A(e.get(n),a,t):null},getProps:function(a){if(!e.has(a))return{};var t=e.get(a).props,n=(t._hash,Object(P.a)(t,["_hash"]));return Object.freeze(n)},getPayload:function(a){if(!e.has(a))return{};var t=e.get(a);return Object.freeze(Object(O.a)({},t.payload))},setTemplate:function(e,a){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.set(e,a),r&&n(e)},removeTemplate:function(e,a){var r=t.delete(e);return a&&n(e),r},setProps:function(a,t){if(!e.has(a))return!1;var n=e.get(a);return n.props=Object(O.a)(Object(O.a)({},n.props),t),!0}}}(a,t,i),d=m.getCapsuleByKeyName,p=m.getProps,h=m.setProps,f=m.getPayload,v=m.setTemplate,g=m.removeTemplate;function b(e,n){return S(a,t,i)(e,n)}var y,E=function(e,a){function t(e){var t=a(e.keyName,{payload:Object(O.a)({},e.payload)})((function(a){return r.a.createElement(r.a.Fragment,null,e.children(a))}));return r.a.createElement(t,null)}return{Capsule:t,createCapsule:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(n){var i=n.children;return r.a.createElement(t,{keyName:e},(function(e){return i(Object(O.a)(Object(O.a)({},a),e))}))};return n}}}(0,b),k=E.Capsule,C=E.createCapsule;this.connect=b,this.render=s,this.wait=o,this.proceed=c,this.hasRendersWaiting=u,this.getProps=p,this.Capsule=k,this.createCapsule=C,this.getCapsuleByKeyName=d,this.getPayload=f,this.createStore=n,this.setTemplate=v,this.removeTemplate=g,this.createTemplate=(y=this,function(e,a,t){return y.connect(e)((function(e){return r.a.createElement(t,Object.assign({},a,e))}))}),this.setProps=h}R.States=T,R.createStore=function(e,a){var t=new T(a);return x.set(e,t),t};var Y=new R,F=[[0,1,0],[1,-4,1],[0,1,0]],I=[[0,-1,0],[-1,4,-1],[0,-1,0]],B=[[1,1,1],[1,-8,1],[1,1,1]],J=[[-1,-1,-1],[-1,8,-1],[-1,-1,-1]],L=[[-1,-2,-1],[0,0,0],[1,2,1]],D=[[1,0,-1],[2,0,-2],[1,0,-1]],V=[{value:"laplaciano_1",mask:F},{value:"laplaciano_2",mask:I},{value:"laplaciano_3",mask:B},{value:"laplaciano_4",mask:J}],H=[{value:"sobel_1",mask:L},{value:"sobel_2",mask:D}];var G=new function(){var e=this;this.KEY="_INDEXS",this.loading=!1,this.message={type:"error",message:"Ha ocurrido un error..."},this.message_open=!1,this.step=0,this.generated=!1,this.filterSelected=!1,this.filter_type=!1,this.filter_type_mask=!1,this.dimensions={rows:0,columns:0},this.mask=0,this.matriz=[],this.new_matriz=[],this.mask_matriz=[],this.rescale_available=!1,this.new_matriz_rescale=!1,this.handleChangeNextStep=function(){e.step=e.step+1,Y.render(e.KEY)},this.handleGenerateButton=function(){e.matriz=[],Y.render(e.KEY);for(var a=0;a<e.dimensions.rows;a++){for(var t=[],n=0;n<e.dimensions.columns;n++)t.push(0);e.matriz.push(t)}e.dimensions.rows>0&&e.dimensions.columns>0&&(e.generated=!0,e.step=1),Y.render(e.KEY)},this.handleChangeValue=function(a){var t=""===a.value?"":parseInt(a.value);t>7&&(t=7),e.matriz[a.row][a.column]=t,Y.render(e.KEY)},this.handleChangeDimension=function(a){var t=""===a.target.value?"":parseInt(a.target.value);t>25&&(t=25),e.dimensions[a.target.name]=t,Y.render(e.KEY)},this.handleChangeFilterType=function(a){"sobel"===a.target.value&&(e.mask_matriz=L,e.filter_type_mask="sobel_1"),"laplaciano"===a.target.value&&(e.mask_matriz=F,e.filter_type_mask="laplaciano_1"),e.filter_type=a.target.value,Y.render(e.KEY)},this.handleChangeMask=function(a){var t=""===a.target.value?"":parseInt(a.target.value);e.mask=t,Y.render(e.KEY)},this.createMask=function(){e.mask_matriz=[];for(var a=0;a<e.mask;a++){for(var t=[],n=0;n<e.mask;n++)t.push("1/"+e.mask*e.mask);e.mask_matriz.push(t)}},this.handleChangeMaskType=function(a){switch(e.filter_type_mask=a.target.value,a.target.value){case"laplaciano_1":e.mask_matriz=F;break;case"laplaciano_2":e.mask_matriz=I;break;case"laplaciano_3":e.mask_matriz=B;break;case"laplaciano_4":e.mask_matriz=J;break;case"sobel_1":e.mask_matriz=L;break;case"sobel_2":e.mask_matriz=D}Y.render(e.KEY)},this.handleClickResultMedia=function(a){e.createMask();var t=[];if(e.mask%2===0)return e.message={type:"error",message:"La dimensi\xf3n de la m\xe1scara debe ser impar"},e.handleCloseMessage(!0),void Y.render(e.KEY);for(var n=0;n<e.dimensions.rows;n++){for(var r=[],i=0;i<e.dimensions.columns;i++)r.push(e.calculateMedia(n,i));t.push(r)}e.new_matriz=t,e.step=3,Y.render(e.KEY)},this.calculateMedia=function(a,t){for(var n=e.mask*e.mask,r=Math.floor(e.mask/2),i=r,l=r,s=-1*r,o=-1*r,c=0;s<=i;s++){for(;o<=l;o++)s+a>=0&&s+a<e.dimensions.rows&&o+t>=0&&o+t<e.dimensions.columns&&(c+=e.matriz[s+a][o+t]);o=-1*r}return Math.round(c/n)},this.handleClickResultMedian=function(){if(e.createMask(),e.mask%2===0)return e.message={type:"error",message:"La dimensi\xf3n de la m\xe1scara debe ser impar"},e.handleCloseMessage(!0),void Y.render(e.KEY);for(var a=[],t=0;t<e.dimensions.rows;t++){for(var n=[],r=0;r<e.dimensions.columns;r++)n.push(e.calculateMedian(t,r));a.push(n)}e.new_matriz=a,e.step=3,Y.render(e.KEY)},this.handleClickResultLaplacianoSobel=function(){for(var a=[],t=0;t<e.dimensions.rows;t++){for(var n=[],r=0;r<e.dimensions.columns;r++)n.push(e.calculateLaplacianoSobel(t,r));a.push(n)}e.new_matriz=a;var i=e.calculateMinMax(a),l=i.min,s=i.max;(l<0||s>7)&&(e.rescale_available=!0),e.step=3,Y.render(e.KEY)},this.calculateMinMax=function(a){for(var t=a[0][0],n=a[0][0],r=0;r<e.dimensions.rows;r++)for(var i=0;i<e.dimensions.columns;i++)t>=a[r][i]&&(t=a[r][i]),n<=a[r][i]&&(n=a[r][i]);return{min:t,max:n}},this.handleRescale=function(){var a=e.calculateMinMax(e.new_matriz),t=a.min,n=a.max;e.rescale(t,n),Y.render(e.KEY)},this.rescale=function(a,t){for(var n=7/(t-a),r=0-n*a,i=[],l=0;l<e.dimensions.rows;l++){for(var s=[],o=0;o<e.dimensions.columns;o++){var c=parseFloat(n*e.new_matriz[l][o].toFixed(2)),u=parseFloat(r.toFixed(2));s.push(Math.round(c+u))}i.push(s)}e.new_matriz_rescale=i},this.calculateLaplacianoSobel=function(a,t){for(var n=-1,r=-1,i=0;r<=1;r++){for(;n<=1;n++){if(r+a>=0&&r+a<e.dimensions.rows&&n+t>=0&&n+t<e.dimensions.columns)i+=e.matriz[r+a][n+t]*e.mask_matriz[r+1][n+1]}n=-1}return i},this.calculateMedian=function(a,t){for(var n=[],r=Math.floor(e.mask/2),i=r,l=r,s=-1*r,o=-1*r;s<=i;s++){for(;o<=l;o++)s+a>=0&&s+a<e.dimensions.rows&&o+t>=0&&o+t<e.dimensions.columns&&n.push(e.matriz[s+a][o+t]);o=-1*r}n.sort((function(e,a){return e-a})),console.log(n);var c=Math.floor((n.length-1)/2);return n.length%2?n[c]:Math.round((n[c]+n[c+1])/2)},this.handleCloseMessage=function(a){e.message_open=a,Y.render(e.KEY)},this.restart=function(){e.step=0,e.generated=!1,e.filterSelected=!1,e.filter_type=!1,e.dimensions={rows:0,columns:0},e.mask=0,e.matriz=[],e.new_matriz=[],e.mask_matriz=[],e.new_matriz_rescale=!1,e.rescale_available=!1,Y.render(e.KEY)}},W=Object(E.a)((function(e){return{root:{width:"100%",background:"red"}}}));function X(){var e=G,a=W();return r.a.createElement("div",{className:a.root},r.a.createElement(k.a,{activeStep:e.step},[{value:1,label:"Ingresa las dimensiones"},{value:2,label:"Ingresa los valores"},{value:3,label:"Elige el tipo de filtro"},{value:4,label:"\xa1Listo!"}].map((function(a,t){var n={},i={};return n.completed=t<=e.step,r.a.createElement(C.a,Object.assign({key:a.value},n),r.a.createElement(_.a,i,a.label))}))))}var q=t(40),Q=t(150),U=t(151),Z=Object(q.a)({palette:{primary:{main:"#E84545"},secondary:{main:"#C90000"}}});function $(e){e.name;var a=e.color,t=e.children,n=Object(P.a)(e,["name","color","children"]);return r.a.createElement(Q.a,{theme:Z},r.a.createElement(U.a,Object.assign({variant:"contained",color:a},n),t))}var ee=t(8),ae=t(158),te=Object(ee.a)({root:{"& label.Mui-focused":{color:"#6B6A63"},"& .MuiInput-underline:after":{borderBottomColor:"#A9A7B2"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#A9A7B2"},"&:hover fieldset":{borderColor:"#6B6A63"},"&.Mui-focused fieldset":{borderColor:"#6B6A63"}}}})(ae.a);function ne(e){var a=e.label,t=e.id,n=e.name,i=e.value,l=e.onChange,s=Object(P.a)(e,["label","id","name","value","onChange"]);return r.a.createElement(te,Object.assign({label:a,variant:s.variant,id:t,className:s.className,onChange:l,value:i,name:n},s))}var re=t(160),ie=t(154);function le(){var e=G;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,"Ingresa las dimensiones"),r.a.createElement(v,{className:"mt-3 mb-3"},r.a.createElement(ne,{label:"Filas",variant:"outlined",id:"input-rows",className:"mr-2",name:"rows",inputProps:{min:0,style:{textAlign:"center"}},value:e.dimensions.rows,onChange:e.handleChangeDimension,type:"number"}),r.a.createElement(ne,{label:"Columnas",variant:"outlined",id:"input-columns",className:"mr-2",name:"columns",inputProps:{min:0,style:{textAlign:"center"}},value:e.dimensions.columns,onChange:e.handleChangeDimension,type:"number"}),r.a.createElement($,{color:"primary",onClick:e.handleGenerateButton},"Generar")),e.generated&&r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a,{severity:"warning",className:"mt-3"},"La imagen es de 3 bits. Valores permitidos del 0 al 7"),r.a.createElement(g,null,e.matriz.map((function(a,t){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"},key:t},a.map((function(a,n){return r.a.createElement(ae.a,{key:n,id:"input-"+t+"-"+n,margin:"dense",variant:"outlined",className:"mr-2 ml-2",inputProps:{min:0,style:{textAlign:"center"}},type:"number",value:a,onChange:function(a){return e.handleChangeValue({row:t,column:n,value:a.target.value})}})})))}))),r.a.createElement(b,{className:"mt-3"},r.a.createElement($,{color:"primary",onClick:e.handleChangeNextStep},"Siguiente"))),!e.generated&&r.a.createElement(re.a,{severity:"info",className:"mt-3"},r.a.createElement(ie.a,null,"Importante"),"Agrega las dimensiones para poder realizar la representaci\xf3n matricial de la imagen"))}var se=t(161),oe=t(168),ce=t(155),ue=t(156),me=t(167),de=t(152),pe=t(157);function he(){var e=G;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,"Elige el tipo de filtro"),r.a.createElement(me.a,{component:"fieldset"},r.a.createElement(de.a,{component:"legend"},"Tipo de filtro"),r.a.createElement(oe.a,{row:!0,"aria-label":"position",name:"position",value:e.filter_type,className:"mt-3",onChange:e.handleChangeFilterType},r.a.createElement(ue.a,{value:"media",control:r.a.createElement(se.a,{color:"primary"}),label:"Media",labelPlacement:"end"}),r.a.createElement(ue.a,{value:"mediana",control:r.a.createElement(se.a,{color:"secondary"}),label:"Mediana",labelPlacement:"end"}),r.a.createElement(ue.a,{value:"laplaciano",control:r.a.createElement(se.a,{color:"primary"}),label:"Laplaciano",labelPlacement:"end"}),r.a.createElement(ue.a,{value:"sobel",control:r.a.createElement(se.a,{color:"secondary"}),label:"Sobel",labelPlacement:"end"}))),!e.filter_type&&r.a.createElement(re.a,{severity:"info",className:"mt-3"},r.a.createElement(ie.a,null,"Importante"),"Selecciona el tipo de filtro correspondiente para poder agregar la m\xe1scara dependiendo el caso"),"media"===e.filter_type&&r.a.createElement(ce.a,null,r.a.createElement(v,{className:"mt-3"},r.a.createElement("label",{className:"mr-3",htmlFor:"input-mask"},"Ingresa la dimensi\xf3n de la m\xe1scara:"),r.a.createElement(ne,{label:"Dimension de la m\xe1scara",variant:"outlined",id:"input-mask",className:"mr-3",name:"mask",onChange:e.handleChangeMask,value:e.mask,type:"number"}),r.a.createElement($,{color:"primary",onClick:e.handleClickResultMedia},"Aplicar filtro de la media"))),"mediana"===e.filter_type&&r.a.createElement(v,{className:"mt-3"},r.a.createElement("label",{className:"mr-3",htmlFor:"input-mask"},"Ingresa la dimensi\xf3n de la m\xe1scara:"),r.a.createElement(ne,{label:"Dimension de la m\xe1scara",variant:"outlined",id:"input-mask",className:"mr-3",name:"mask",onChange:e.handleChangeMask,value:e.mask,type:"number"}),r.a.createElement($,{color:"primary",onClick:e.handleClickResultMedian},"Aplicar filtro de la mediana")),"laplaciano"===e.filter_type&&r.a.createElement(v,{className:"mt-3"},r.a.createElement(pe.a,{container:!0,spacing:2},r.a.createElement("label",{className:"mt-3"},"Seleccione la m\xe1scara:"),r.a.createElement(oe.a,{row:!0,"aria-label":"position",name:"position",value:e.filter_type_mask,className:"mt-2",onChange:e.handleChangeMaskType},V.map((function(e){return r.a.createElement(pe.a,{item:!0,xs:12,md:6},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(ue.a,{value:e.value,control:r.a.createElement(se.a,{color:"primary"}),label:"",labelPlacement:"end"}),r.a.createElement(g,null,e.mask.map((function(e,a){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"},key:a},e.map((function(e,t){return r.a.createElement(ae.a,{key:t,id:"input-"+a+"-"+t,margin:"dense",variant:"outlined",className:"mr-2 ml-2",inputProps:{min:0,style:{textAlign:"center"}},disabled:!0,style:{width:"50px"},value:e,onChange:function(e){}})})))})))))}))),r.a.createElement(pe.a,{item:!0,xs:12,container:!0,justify:"flex-end"},r.a.createElement($,{color:"primary",onClick:e.handleClickResultLaplacianoSobel},"Aplicar filtro laplaciano")))),"sobel"===e.filter_type&&r.a.createElement(v,{className:"mt-3"},r.a.createElement(pe.a,{container:!0,spacing:2},r.a.createElement("label",{className:"mt-3"},"Seleccione la m\xe1scara:"),r.a.createElement(oe.a,{row:!0,"aria-label":"position",name:"position",value:e.filter_type_mask,className:"mt-2",onChange:e.handleChangeMaskType},H.map((function(e){return r.a.createElement(pe.a,{item:!0,xs:12,md:6},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(ue.a,{value:e.value,control:r.a.createElement(se.a,{color:"primary"}),label:"",labelPlacement:"end"}),r.a.createElement(g,null,e.mask.map((function(e,a){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"},key:a},e.map((function(e,t){return r.a.createElement(ae.a,{key:t,id:"input-"+a+"-"+t,margin:"dense",variant:"outlined",className:"mr-2 ml-2",inputProps:{min:0,style:{textAlign:"center"}},disabled:!0,style:{width:"50px"},value:e,onChange:function(e){}})})))})))))}))),r.a.createElement(pe.a,{item:!0,xs:12,container:!0,justify:"flex-end"},r.a.createElement($,{color:"primary",onClick:e.handleClickResultLaplacianoSobel},"Aplicar filtro sobel")))))}function fe(){var e=G;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,"Imagen original"),r.a.createElement(g,null,e.matriz.map((function(a,t){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"},key:t},a.map((function(a,n){return r.a.createElement(ae.a,{key:n,id:"input-"+t+"-"+n,margin:"dense",variant:"outlined",className:"mr-2 ml-2",style:{width:"50px"},inputProps:{min:0,style:{textAlign:"center"}},disabled:!0,value:a,onChange:function(a){return e.handleChangeValue({row:t,column:n,value:a.target.value})}})})))}))),"mediana"!==e.filter_type&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,"M\xe1scara"),r.a.createElement(g,null,e.mask_matriz.map((function(a,t){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"},key:t},a.map((function(a,n){return r.a.createElement(ae.a,{key:n,id:"input-"+t+"-"+n,margin:"dense",variant:"outlined",className:"mr-2 ml-2",inputProps:{min:0,style:{textAlign:"center"}},disabled:!0,style:{width:"50px"},value:a,onChange:function(a){return e.handleChangeValue({row:t,column:n,value:a.target.value})}})})))})))),!e.new_matriz_rescale&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,"Imagen nueva"),r.a.createElement(g,null,e.new_matriz.map((function(a,t){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"},key:t},a.map((function(a,n){return r.a.createElement(ae.a,{key:n,id:"input-"+t+"-"+n,margin:"dense",variant:"outlined",inputProps:{min:0,style:{textAlign:"center"}},className:"mr-2 ml-2",style:{width:"50px"},disabled:!0,value:a,onChange:function(a){return e.handleChangeValue({row:t,column:n,value:a.target.value})}})})))})))),e.new_matriz_rescale&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,"Imagen reescalada"),r.a.createElement(g,null,e.new_matriz_rescale.map((function(a,t){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"},key:t},a.map((function(a,n){return r.a.createElement(ae.a,{key:n,id:"input-"+t+"-"+n,margin:"dense",variant:"outlined",inputProps:{min:0,style:{textAlign:"center"}},className:"mr-2 ml-2",style:{width:"50px"},disabled:!0,value:a,onChange:function(a){return e.handleChangeValue({row:t,column:n,value:a.target.value})}})})))})))),r.a.createElement(b,{className:"mt-3"},e.rescale_available&&r.a.createElement($,{color:"secondary",className:"mr-3",onClick:e.handleRescale},"Reescalar"),r.a.createElement($,{color:"secondary",onClick:e.restart},"Nuevo")))}var ve=t(165);function ge(e){return r.a.createElement(re.a,Object.assign({elevation:6,variant:"filled"},e))}a.default=r.a.memo(Y.connect(G.KEY)((function(){var e=G;return r.a.createElement(p,null,r.a.createElement(X,null),r.a.createElement("br",null),r.a.createElement(y.a,null,r.a.createElement(h,null,(0===e.step||1===e.step)&&r.a.createElement(le,null),2===e.step&&r.a.createElement(he,null),3===e.step&&r.a.createElement(fe,null))),r.a.createElement(ve.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:e.message_open,autoHideDuration:6e3,onClose:function(){return e.handleCloseMessage(!1)}},r.a.createElement(ge,{severity:e.message.type,onClose:function(){return e.handleCloseMessage(!1)}},e.message.message)))})))}}]);
//# sourceMappingURL=4.1b4c1952.chunk.js.map