!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(12),o=n(13);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var r=n(14);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){t.exports=n(16)},function(t,e,n){var r=n(9),o=n(10),i=n(11);t.exports=function(t){return r(t)||o(t)||i()}},function(t,e){function n(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)})}}},function(t,e,n){var r=n(15);t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return E()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=P(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?p:f,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function y(){}function m(){}function v(){}var b={};b[i]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(_([])));w&&w!==n&&r.call(w,i)&&(b=w);var x=v.prototype=y.prototype=Object.create(b);function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){var e;this._invoke=function(n,o){function i(){return new Promise(function(e,i){!function e(n,o,i,a){var c=u(t[n],t,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,a)})}a(c.arg)}(n,o,e,i)})}return e=e?e.then(i,i):i()}}function P(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,P(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:E}}function E(){return{value:e,done:!0}}return m.prototype=x.constructor=v,v.constructor=m,v[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(S.prototype),S.prototype[a]=function(){return this},t.AsyncIterator=S,t.async=function(e,n,r,o){var i=new S(s(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},k(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=_,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e);var r=n(6),o=n.n(r),i=n(0),a=n.n(i),c=n(1),s=n.n(c),u=n(2),l=n.n(u),f=n(3),h=n.n(f),p=n(4),d=n.n(p),y=n(8),m=n.n(y),v=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a()(this,t),this.element=e,this.props=n,this.childred={}}return s()(t,[{key:"on",value:function(t,e,n){this.element.addEventListener(t,function(t){var r=t.target.closest('[data-element="'.concat(e,'"]'));r&&(t.delegateTarget=r,n(t))})}},{key:"setState",value:function(t){this.state=m()({},this.state,t),this.render()}},{key:"initComponent",value:function(t,e){var n=this.element.querySelector(t.name);if(n){var r=this.childred[t.name];r&&_.isEqual(e,r.props)?n.replaceWith(r.element):this.childred[t.name]=new t(n,e)}else delete this.childred[t.name]}}]),t}(),b=function(t){function e(t,n){var r;return a()(this,e),(r=l()(this,h()(e).call(this,t,n))).render(),r.on("click","phone-link",function(t){r.props.onPhoneSelected(t.delegateTarget.dataset.phoneId)}),r.on("click","add-button",function(t){r.props.onAdd(t.delegateTarget.dataset.phoneId)}),r}return d()(e,t),s()(e,[{key:"render",value:function(){this.element.innerHTML='\n      <ul class="phones">\n        '.concat(this.props.phones.map(function(t){return'\n\n          <li class="thumbnail">\n            <a\n              data-element="phone-link"\n              data-phone-id="'.concat(t.id,'"\n              href="#').concat(t.id,'"\n              class="thumb"\n            >\n              <img alt="').concat(t.name,'" src="').concat(t.imageUrl,'">\n            </a>\n\n            <div class="phones__btn-buy-wrapper">\n              <a\n              class="btn btn-success"\n              data-element="add-button"\n              data-phone-id="').concat(t.id,'"\n              >\n                Add\n              </a>\n            </div>\n\n            <a\n              data-element="phone-link"\n              data-phone-id="').concat(t.id,'"\n              href="#').concat(t.id,'"\n            >\n              ').concat(t.name,"\n            </a>\n\n            <p>").concat(t.snippet,"</p>\n          </li>\n\n        ")}).join(""),"\n      </ul>\n    ")}}]),e}(v),g=function(t){function e(t,n){var r;return a()(this,e),(r=l()(this,h()(e).call(this,t,n))).state={currentPicture:r.props.phone.images[0]},r.render(),r.on("click","back-button",r.props.onBack),r.on("click","thumbnail",function(t){r.setState({currentPicture:t.delegateTarget.src})}),r.on("click","add-button",function(){r.props.onAdd(r.props.phone.id)}),r}return d()(e,t),s()(e,[{key:"render",value:function(){var t=this.props.phone,e=this.state.currentPicture;this.element.innerHTML='\n      <div>\n        <img class="phone" src="'.concat(e,'">\n\n        <button data-element="back-button">Back</button>\n        <button data-element="add-button" data-phone-id="').concat(t.id,'">Add to basket</button>\n\n\n        <h1>').concat(t.name,"</h1>\n\n        <p>").concat(t.description,'</p>\n        <ul class="phone-thumbs">\n          ').concat(t.images.map(function(t,e){return'\n            <li>\n              <img\n              src="'.concat(t,'"\n              data-element="thumbnail">\n            </li>\n            ')}).join(""),"\n        </ul>\n      </div>\n    ")}}]),e}(v),w=n(5),x=n.n(w),k=n(7),S=n.n(k),P="https://e-milbichenko.github.io/js-20190426/api",j=function(){var t=S()(x.a.mark(function t(e){var n;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(P,"/phones/").concat(e,".json"));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=S()(x.a.mark(function t(e){var n,r,o,i;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(P,"/phones.json?query=").concat(e.query,"&sortField=").concat(e.sortField));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,o=e.query.toLowerCase(),i=e.sortField,t.abrupt("return",r.filter(function(t){return t.name.toLowerCase().includes(o)}).sort(function(t,e){return t[i]>e[i]?1:-1}));case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),L=function(t){function e(t,n){var r;return a()(this,e),(r=l()(this,h()(e).call(this,t,n))).render(),r.on("click","delete-button",function(t){r.props.onDelete(+t.delegateTarget.dataset.itemIndex)}),r}return d()(e,t),s()(e,[{key:"render",value:function(){var t=this.props.items;this.element.innerHTML='\n    <section class="basket">\n      <h4>Shopping Cart</h4>\n\n      '.concat(t.length>0?"\n        <ul>\n        ".concat(t.map(function(t,e){return"\n          <li>\n          ".concat(t,'\n            <button\n              data-element="delete-button"\n              data-item-index="').concat(e,'"\n            >\n            x\n            </button>\n          </li>\n        ')}).join(""),"\n        </ul>\n        "):"\n          <p>No items yet</p>\n        ","\n    </section>\n    ")}}]),e}(v),E=function(t){function e(t,n){var r;return a()(this,e),(r=l()(this,h()(e).call(this,t,n))).render(),r.on("change","query-field",function(t){r.props.onQueryChange(t.target.value)}),r.on("change","sort-field",function(t){r.props.onSortChange(t.target.value)}),r}return d()(e,t),s()(e,[{key:"render",value:function(){this.element.innerHTML='\n      <section>\n        <p>\n          Search:\n          <input\n          value="'.concat(this.props.query,'"\n          data-element="query-field"\n          >\n        </p>\n\n        <p>\n          Sort by:\n          <select\n            value="').concat(this.props.sortField,'"\n            data-element="sort-field"\n          >\n            <option\n              value="name"\n              ').concat("name"===this.props.sortField?"selected":"",'\n            >\n            Alphabetical\n            </option>\n            <option\n              value="age"\n              ').concat("age"===this.props.sortField?"selected":"","\n            >\n            Newest\n            </option>\n          </select>\n        </p>\n      </section>\n    ")}}]),e}(v);new(function(t){function e(t){var n;a()(this,e),n=l()(this,h()(e).call(this,t));var r=localStorage.getItem("basketItems")?localStorage.getItem("basketItems").split(","):[];return n.state={phones:[],selectedPhone:null,basketItems:r,query:"moto",sortField:"name"},n.addBasketItem=function(t){n.setState({basketItems:[].concat(o()(n.state.basketItems),[t])}),localStorage.setItem("basketItems",n.state.basketItems.join(","))},n.deleteBasketItem=function(t){var e=n.state.basketItems;n.setState({basketItems:[].concat(o()(e.slice(0,t)),o()(e.slice(t+1)))}),localStorage.setItem("basketItems",n.state.basketItems.join(","))},n.showPhone=function(t){j(t).then(function(t){n.setState({selectedPhone:t})})},n.hidePhone=function(){n.setState({selectedPhone:null})},n.setQuery=function(t){n.setState({query:t}),n.loadPhones()},n.setSortField=function(t){n.setState({sortField:t}),n.loadPhones()},n.render(),n.loadPhones(),n}return d()(e,t),s()(e,[{key:"loadPhones",value:function(){var t=this;O({query:this.state.query,sortField:this.state.sortField}).then(function(e){t.setState({phones:e})})}},{key:"render",value:function(){this.element.innerHTML='\n      <div class="row">\n        \x3c!--Sidebar--\x3e\n        <div class="col-md-2">\n          <Filter></Filter>\n          <Basket></Basket>\n        </div>\n\n        \x3c!--Main content--\x3e\n        <div class="col-md-10">\n          '.concat(this.state.selectedPhone?"\n            <PhoneViewer></PhoneViewer>\n          ":"\n            <PhonesCatalog></PhonesCatalog>\n          ","\n        </div>\n      </div>\n    "),this.initComponent(b,{phones:this.state.phones,onPhoneSelected:this.showPhone,onAdd:this.addBasketItem}),this.initComponent(g,{phone:this.state.selectedPhone,onBack:this.hidePhone,onAdd:this.addBasketItem}),this.initComponent(L,{items:this.state.basketItems,onDelete:this.deleteBasketItem}),this.initComponent(E,{query:this.state.query,sortField:this.state.sortField,onQueryChange:this.setQuery,onSortChange:this.setSortField})}}]),e}(v))(document.querySelector("App"))}]);