(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33a72fcd"],{"3bff":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),t._m(0),s("div",{staticClass:"banner_open_shoppingcart"},[s("router-link",{attrs:{to:"/shopping_cart/front_cart_items"}},[s("span",{staticClass:"badge"},[t._v(t._s(t.cart.carts.length))]),s("img",{attrs:{alt:"購物車",src:e("688c")}})])],1),t._m(1),s("div",{staticClass:"row"},[s("div",{staticClass:"bg"},[s("div",{staticClass:"content"},[s("div",{staticClass:"h6 content-nav"},[t._v(" 全部商品 ")]),s("ul",{staticClass:"girl clearfix"},t._l(t.products.slice(t.pageStart,t.pageStart+t.countPage),(function(a,e){return s("li",{key:e},[s("a",{attrs:{href:"#",target:"_parent"},on:{click:function(e){return e.preventDefault(),t.getProduct(a.id)}}},[s("div",{staticClass:"bodycard",style:{backgroundImage:"url("+a.imageUrl+")"}}),s("div",{staticClass:"overlay-girl"},[s("h1",[t._v(t._s(a.title))]),s("div",{staticClass:"align-items-baseline"},[a.price?s("del",{staticClass:"h6"},[t._v("原價 "+t._s(t._f("currency")(a.origin_price))+" 元")]):t._e(),a.price?s("div",{staticClass:"h5"},[t._v(" 優惠價 "+t._s(t._f("currency")(a.price))+" 元 ")]):t._e()])])])])})),0)])])]),s("div",{staticClass:"page-box"},[s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination"},[s("li",{staticClass:"page-item",class:{disabled:1===t.current_page}},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.getPage(t.current_page-1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.totalPage,(function(a){return s("li",{key:a,staticClass:"page-item",class:{active:t.current_page===a}},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getPage(a)}}},[t._v(t._s(a))])])})),s("li",{staticClass:"page-item",class:{disabled:t.current_page===t.totalPage}},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.getPage(t.current_page+1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)]),s("GoTop")],1)],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"banner_open_line"},[s("a",{attrs:{href:"https://line.me/ti/p/dKAzJfqWhb"}},[s("img",{attrs:{alt:"line",src:e("3d1f")}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"swiper-slide games"},[s("img",{attrs:{src:e("d2ca"),alt:"Banner"}})])}],i=(e("99af"),e("c12c")),r=e("1157"),c=e.n(r),o={data:function(){return{current_page:1,countPage:12}},methods:{getAllProducts:function(){this.$store.dispatch("getAllProducts")},getProduct:function(t){var a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("jim55167","/product/").concat(t);this.$store.dispatch("updateLoading",!0),localStorage.setItem("filteredList",JSON.stringify(this.products)),this.$http.get(e).then((function(t){t.data.success&&(a.$store.dispatch("updateLoading",!1),a.$router.push("../front_single_product/".concat(t.data.product.id)))}))},getPage:function(t){c()("html, body").animate({scrollTop:0},600),t<=0||t>this.totalPage||(this.current_page=t)},getCart:function(){this.$store.dispatch("getCart")}},computed:{products:function(){return this.$store.state.products},isLoading:function(){return this.$store.state.isLoading},cart:function(){return this.$store.state.cart},pageStart:function(){return(this.current_page-1)*this.countPage},totalPage:function(){return Math.ceil(this.products.length/this.countPage)}},created:function(){this.getAllProducts()},components:{GoTop:i["a"]}},l=o,u=e("2877"),p=Object(u["a"])(l,s,n,!1,null,null,null);a["default"]=p.exports},"3d1f":function(t,a,e){t.exports=e.p+"img/LINEAPP.c00a0760.png"},"688c":function(t,a,e){t.exports=e.p+"img/shoppingCart.a5f583f3.jpg"},c12c:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"goTop",class:{btnFlag:t.btnFlag},on:{click:function(a){return a.preventDefault(),t.goTop(a)}}})])},n=[],i={name:"GoTop",data:function(){return{btnFlag:!0}},methods:{goTop:function(){window.scrollTo({top:0,behavior:"smooth"})}},mounted:function(){var t=this;document.body.onscroll=function(){document.documentElement.scrollTop>200?t.btnFlag=!0:t.btnFlag=!1}}},r=i,c=e("2877"),o=Object(c["a"])(r,s,n,!1,null,null,null);a["a"]=o.exports},d2ca:function(t,a,e){t.exports=e.p+"img/MORESTYLE.a67d2d8e.jpg"}}]);
//# sourceMappingURL=chunk-33a72fcd.5f2b6916.js.map