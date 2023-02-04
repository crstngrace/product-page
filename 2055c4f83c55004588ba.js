(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{203:function(t,e,r){"use strict";var n=r(1),o=(r(37),r(262),{computed:{isSmallScreen:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":case"md":return!0;default:return!1}}},methods:{formatPrice:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=parseFloat(Math.round(100*t)/100).toFixed(e);return"$".concat(r)}}});n.a.mixin(o)},255:function(t,e,r){var content=r(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("16a3af0e",content,!0,{sourceMap:!1})},266:function(t,e,r){var content=r(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("ab9b6bf8",content,!0,{sourceMap:!1})},268:function(t,e,r){var content=r(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("031cb2ae",content,!0,{sourceMap:!1})},281:function(t,e,r){"use strict";var n=r(434),o=r(439),c=r(441),l=r(436),f=r(435),d={name:"DefaultLayout"},v=(r(372),r(82)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e(n.a,[e(o.a,{staticClass:"my-10 py-0",attrs:{height:"40",color:"primaryBG",flat:"",app:"",absolute:""}},[e(f.a),t._v(" "),e("div",{staticClass:"text-center"},[e("MyCart")],1)],1),t._v(" "),e(l.a,{staticClass:"main"},[e(c.a,[e("Nuxt")],1)],1)],1)}),[],!1,null,"8f49949e",null);e.a=component.exports;installComponents(component,{MyCart:r(423).default})},288:function(t,e,r){r(289),t.exports=r(290)},338:function(t,e,r){"use strict";r(255)},339:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,"h1[data-v-375cf8bf]{font-size:20px}",""]),n.locals={},t.exports=n},372:function(t,e,r){"use strict";r(266)},373:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".main[data-v-8f49949e]{margin-top:80px}.main *[data-v-8f49949e]{color:var(--v-darkGrey-base)}[data-v-8f49949e] .v-toolbar__content,[data-v-8f49949e] .v-toolbar__extension{padding:4px 12px}",""]),n.locals={},t.exports=n},401:function(t,e,r){"use strict";r(268)},402:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".v-menu__content[data-v-2051668a]{border-radius:0;box-shadow:none}.active[data-v-2051668a],.v-menu__content[data-v-2051668a]{border:1px solid var(--v-lightGrey-base)}.active[data-v-2051668a]{background:#fff}.active[data-v-2051668a]:hover:before{opacity:0}.cart-dropdown[data-v-2051668a]{background-color:#fff;max-height:600px;overflow-y:auto}",""]),n.locals={},t.exports=n},403:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return c})),r.d(e,"getters",(function(){return l})),r.d(e,"mutations",(function(){return f}));r(10),r(11),r(13),r(3),r(15),r(12),r(16);var n=r(2);r(193);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c=function(){return{items:[],total:0}},l={getCartItems:function(t){return t.items},getCartTotal:function(t){return t.total}},f={ADD_CART_ITEMS:function(t,e){var r=t.items.findIndex((function(t){return t.id==e.id&&t.size==e.size}));-1!==r?t.items[r].total+=1:t.items.push(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},e)),t.total++}}},404:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"getters",(function(){return c})),r.d(e,"mutations",(function(){return l})),r.d(e,"actions",(function(){return f}));var n=r(30),o=(r(106),function(){return{products:[]}}),c={getProducts:function(t){return t.products}},l={SET_PRODUCTS:function(t,e){t.products=e}},f={fetchProducts:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.commit,e.prev=1,e.next=4,r.$axios.$get("/products.json");case 4:return n=e.sent,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}},423:function(t,e,r){"use strict";r.r(e);var n=r(437),o=r(440),c=r(196),l=r(282),f=r(131),d=r(61),v=r(198),m=r(113),_=r(438),y=(r(10),r(11),r(13),r(3),r(15),r(12),r(16),r(2)),h=r(93);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var x={name:"Menu",data:function(){return{cart:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(h.b)({items:"cart/getCartItems",total:"cart/getCartTotal"}))},j=x,w=(r(401),r(82)),component=Object(w.a)(j,(function(){var t=this,e=t._self._c;return e(_.a,{attrs:{"nudge-width":200,"offset-y":"",elevation:"0"},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[e(n.a,t._g(t._b({staticClass:"darkGrey--text font-weight-regular text-capitalize rounded-0",class:{active:t.cart},attrs:{text:""}},"v-btn",l,!1),o),[t.isSmallScreen?e("span",{staticClass:"cart-icon mr-1"},[e(c.a,{attrs:{small:""}},[t._v("mdi-cart")])],1):e("span",{staticClass:"text-caption"},[t._v("My Cart")]),t._v(" "),e("span",{staticClass:"text-caption"},[t._v("( "+t._s(t.total)+" )")])])]}}]),model:{value:t.cart,callback:function(e){t.cart=e},expression:"cart"}},[t._v(" "),e(o.a,{staticClass:"cart-dropdown rounded-0"},[e(v.a,[0===t.total?e(f.a,[e(d.c,[t._v(" No items found ")])],1):t._l(t.items,(function(r,i){return e(f.a,{key:i},[e(m.a,[e(l.a,{attrs:{src:r.imageURL,contain:"",width:"100"}})],1),t._v(" "),e(d.a,{staticClass:"align-self-start"},[e(d.c,{staticClass:"py-1"},[t._v("\n            "+t._s(r.title)+"\n          ")]),t._v(" "),e(d.b,{staticClass:"darkGrey--text"},[e("p",{staticClass:"py-1"},[t._v("\n              "+t._s(r.total)+"x\n              "),e("strong",[t._v(t._s(t.formatPrice(r.price)))])]),t._v(" "),e("p",{staticClass:"py-2"},[t._v("Size: "+t._s(r.size))])])],1)],1)}))],2)],1)],1)}),[],!1,null,"2051668a",null);e.default=component.exports},84:function(t,e,r){"use strict";var n=r(434),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(r(338),r(82)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(n.a,[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"375cf8bf",null);e.a=component.exports}},[[288,5,2,6]]]);