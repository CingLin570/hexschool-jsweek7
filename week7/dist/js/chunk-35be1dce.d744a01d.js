(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35be1dce"],{"159b":function(t,a,i){var c=i("da84"),s=i("fdbc"),r=i("17c2"),e=i("9112");for(var n in s){var o=c[n],u=o&&o.prototype;if(u&&u.forEach!==r)try{e(u,"forEach",r)}catch(d){u.forEach=r}}},"17c2":function(t,a,i){"use strict";var c=i("b727").forEach,s=i("a640"),r=i("ae40"),e=s("forEach"),n=r("forEach");t.exports=e&&n?[].forEach:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,a,i){"use strict";var c=i("23e7"),s=i("17c2");c({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},b789:function(t,a,i){"use strict";i.r(a);var c=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"pt-5"},[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),i("h2",{staticClass:"mt-2"},[t._v("這裡是購物車")]),i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("table",{staticClass:"table"},[t._m(0),i("tbody",[t._l(t.cart,(function(a){return i("tr",{key:a.product.id},[t._m(1,!0),i("td",[i("img",{staticClass:"img-fluid",attrs:{src:a.product.imageUrl,alt:"",width:"100px"}})]),i("td",[t._v(t._s(a.product.title))]),i("td",[i("div",{staticClass:"d-flex justify-content-center"},[i("button",{staticClass:"btn btn-outline-dark btn-sm rounded-0",attrs:{type:"button",disabled:1===a.quantity},on:{click:function(i){return t.quantityUpdata(a.product.id,a.quantity-1)}}},[i("i",{staticClass:"fas fa-minus"})]),i("span",{staticClass:"d-block px-2 border-top border-bottom border-primary border-dark"},[t._v(t._s(a.quantity))]),i("button",{staticClass:"btn btn-outline-dark btn-sm rounded-0",attrs:{type:"button"},on:{click:function(i){return t.quantityUpdata(a.product.id,a.quantity+1)}}},[i("i",{staticClass:"fas fa-plus"})])])]),i("td",[t._v(t._s(a.product.unit))]),i("td",[t._v(t._s(t._f("total")(a.product.price)))])])})),i("tr",[i("td"),i("td"),i("td"),i("td"),i("td",[t._v("總計")]),i("td",{staticClass:"text-center"},[t._v(" "+t._s(t._f("total")(t.cartTotal))+" ")])])],2)])])])],1)},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("thead",[i("tr",[i("th",{attrs:{scope:"col"}},[t._v("刪除")]),i("th",{attrs:{scope:"col"}},[t._v("產品圖片")]),i("th",{attrs:{scope:"col"}},[t._v("產品名稱")]),i("th",{attrs:{scope:"col"}},[t._v("產品數量")]),i("th",{attrs:{scope:"col"}},[t._v("單位")]),i("th",{attrs:{scope:"col"}},[t._v("價格")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("th",{attrs:{scope:"row"}},[i("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"}},[t._v("刪除")])])}],r=(i("99af"),i("4160"),i("159b"),{data:function(){return{cart:[],cartTotal:0,cartQuantity:0,isLoading:!1}},created:function(){this.getCart()},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/ec/shopping");this.$http.get(a).then((function(a){t.cart=a.data.data,t.cart.forEach((function(a){t.cartTotal+=a.product.price*a.quantity,t.cartQuantity+=a.quantity})),t.isLoading=!1}))},quantityUpdata:function(t,a){var i=this;this.isLoading=!0;var c="".concat("https://course-ec-api.hexschool.io","/api/").concat("958a050f-3e4c-4878-9e46-1770b3152f41","/ec/shopping"),s={product:t,quantity:a};this.$http.patch(c,s).then((function(t){i.cartTotal=0,i.cartQuantity=0,i.getCart()}))}}}),e=r,n=i("2877"),o=Object(n["a"])(e,c,s,!1,null,null,null);a["default"]=o.exports},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-35be1dce.d744a01d.js.map