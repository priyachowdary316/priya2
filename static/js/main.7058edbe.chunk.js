(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{119:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(32),i=c.n(s),r=(c(66),c(55)),o=c(4),j=(c(67),c(68),c(56)),l=c.n(j),d=c(57),b=c.n(d),u=c(14),h=c(0),O=Object(n.createContext)(),m=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(h.jsx)(O.Provider,{value:Object(n.useReducer)(t,c),children:a})},p=function(){return Object(n.useContext)(O)},x=c(28),g=c.n(x);var f=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],n=c.basket,a=c.user;return t[1],Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(u.b,{to:"/login",children:Object(h.jsx)("img",{className:"header_logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(h.jsxs)("div",{className:"header_search",children:[Object(h.jsx)("input",{className:"header_searchInput",type:"text"}),Object(h.jsx)(l.a,{className:"header_searchIcon"})]}),Object(h.jsxs)("div",{className:"header_nav",children:[Object(h.jsx)(u.b,{to:!a&&"/login",children:Object(h.jsxs)("div",{onClick:function(){a&&x.auth.signOut()},className:"header_option",children:[Object(h.jsxs)("span",{className:"header_optionLineOne",children:["Hello ",a?a.email:"Guest"]}),Object(h.jsx)("span",{className:"header_optionLineTwo",children:a?"Sign Out":"Sign In"})]})}),Object(h.jsxs)("div",{className:"header_option",children:[Object(h.jsx)("span",{className:"header_optionLineOne",children:"Returns"}),Object(h.jsx)("span",{className:"header_optionLineTwo",children:"& Orders"})]}),Object(h.jsxs)("div",{className:"header_option",children:[Object(h.jsx)("span",{className:"header_optionLineOne",children:"Your"}),Object(h.jsx)("span",{className:"header_optionLineTwo",children:"Prime"})]}),Object(h.jsx)(u.b,{to:"/checkout",children:Object(h.jsxs)("div",{className:"header_optionBasket",children:[Object(h.jsx)(b.a,{}),Object(h.jsxs)("span",{className:"header_optionLineTwo header_basketCount",children:[" ",n.length]})]})})]})]})};c(86),c(87);var v=function(e){var t=e.id,c=e.title,n=e.image,a=e.price,s=e.rating,i=p(),r=Object(o.a)(i,2),j=r[0].basket,l=r[1];return console.log("this is the basket >>> ",j),Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("div",{className:"product_info",children:[Object(h.jsx)("p",{children:c}),Object(h.jsxs)("p",{className:"product_price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:a})]}),Object(h.jsx)("div",{className:"product_rating",children:Array(s).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(h.jsx)("img",{src:n,alt:""}),Object(h.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:a,rating:s}})},children:"Add to Basket"})]})};var N=function(){return Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"home_container",children:[Object(h.jsx)("img",{className:"home_image",src:"https://i.ytimg.com/vi/4fREGW7Treo/maxresdefault.jpg",alt:""}),Object(h.jsxs)("div",{className:"home_row",children:[Object(h.jsx)(v,{id:"12321341",title:"The lean startup",price:29.99,image:"https://www.vision-preneur.nl/wp-content/uploads/2021/02/81jgCiNJPUL.jpg",rating:5}),Object(h.jsx)(v,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Steel Bowl",price:239,rating:4,image:"https://5.imimg.com/data5/SELLER/Default/2020/8/VJ/RK/AW/3241702/736395-500x500.jpg"})]}),Object(h.jsxs)("div",{className:"home_row",children:[Object(h.jsx)(v,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKgNPW9ooIQW4S_weIbNlCcQ_tE7okEM9cF6BbEBMV5XBjYZAvrPKy25uE56HQpgotIk&usqp=CAU"}),Object(h.jsx)(v,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://cdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/assets/f/8/f/a/f8fa2e7011354b94d48ccf6ad73d24082928171e_1.jpg"}),Object(h.jsx)(v,{id:"3254354345",title:"2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB) - Silver (5th Generation)",price:598.99,rating:4,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOYV5qXOe6qYad2grjcXVZE7PsVVlyobhd9k5k8R0TjQR94b9-7nRpnUSBFxJty8fbTE&usqp=CAU"})]}),Object(h.jsx)("div",{className:"home_row",children:Object(h.jsx)(v,{id:"90829332",title:"REFLEX VOX DIGITAL SILICONE RED STRAP WATCH(FAST TRACk)",price:199.99,rating:4,image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTLePHph79hRvVrLLKCayoCGFC4RQKO95FfNb-ObBw4NTHpjwqd-kWCzy5_gj75fgF6-Ag91K0trPC6NW6TTKy_5Xxi7VjKiE0bJ51_e04&usqp=CAc"})})]})})},_=c(5),k=(c(88),c(89),c(35)),y=c.n(k),S=c(23),E=c(18),w=function(e){return e.reduce((function(e,t){return t.price+e}),0)},A=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[].concat(Object(S.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(S.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(E.a)(Object(E.a)({},e),{},{basket:n});case"SET_USER":return Object(E.a)(Object(E.a)({},e),{},{user:t.user});default:return e}};var T=function(){var e=Object(_.f)(),t=p(),c=Object(o.a)(t,2),n=c[0].basket;return c[1],Object(h.jsxs)("div",{className:"subtotal",children:[Object(h.jsx)(y.a,{renderText:function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Subtotal (",n.length," items):  ",Object(h.jsx)("strong",{children:e})]}),Object(h.jsxs)("small",{className:"subtotal_gift",children:[Object(h.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:w(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(h.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})};c(91);var C=function(e){var t=e.id,c=e.image,n=e.title,a=e.price,s=e.rating,i=p(),r=Object(o.a)(i,2),j=(r[0].basket,r[1]);return Object(h.jsxs)("div",{className:"checkoutProduct",children:[Object(h.jsx)("img",{className:"checkoutProduct_image",src:c}),Object(h.jsxs)("div",{className:"checkoutProduct_info",children:[Object(h.jsx)("p",{className:"checkoutProduct_title",children:n}),Object(h.jsxs)("p",{className:"checkoutProduct_price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:a})]}),Object(h.jsx)("div",{className:"checkoutProduct_rating",children:Array(s).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\ud83c\udf1f "})}))}),Object(h.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove From Basket"})]})]})};var P=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],n=c.basket,a=c.user;return t[1],Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsxs)("div",{className:"checkout__left",children:[Object(h.jsx)("img",{className:"checkout__ad",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8ETzhv5Ju31JW6hx4aztbAGBkkx0RY339w&usqp=CAU",alt:""}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:["Hello, ",null===a||void 0===a?void 0:a.email]}),Object(h.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),n.map((function(e){return Object(h.jsx)(C,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(h.jsx)("div",{className:"checkout__right",children:Object(h.jsx)(T,{})})]})},R=(c(92),c(93),c(94),g.a.initializeApp({apiKey:"AIzaSyA4DHIWVlSxMiqezb6MU7zHVplAYKg5q2w",authDomain:"project-d4698.firebaseapp.com",projectId:"project-d4698",storageBucket:"project-d4698.appspot.com",messagingSenderId:"229882964691",appId:"1:229882964691:web:82c46da9396fb258660226",measurementId:"G-K9FKHCTBHY"}).firestore()),B=g.a.auth();var I=function(){var e=Object(_.f)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),r=Object(o.a)(i,2),j=r[0],l=r[1];return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)(u.b,{to:"/",children:Object(h.jsx)("img",{className:"login_logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(h.jsxs)("div",{className:"login_container",children:[Object(h.jsx)("h1",{children:"Sign-in"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("h5",{children:"E-mail"}),Object(h.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("h5",{children:"Password"}),Object(h.jsx)("input",{type:"password",value:j,onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),B.signInWithEmailAndPassword(a,j).auth((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_signInButton",children:"Sign In"})]}),Object(h.jsx)("p",{children:"By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please See our Privacy Notice, our Cookies Notice and our Interest-Based Ads"}),Object(h.jsx)("button",{onClick:function(t){t.preventDefault(),B.createUserwithEmailAndPassword(a,j).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_registerButton",children:"Create your Amazon account"})]})]})},K=c(29),L=c(40),G=(c(95),c(24)),M=c(58),D=c.n(M).a.create({baseURL:"..."});var U=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],a=c.basket,s=c.user,i=t[1],r=Object(_.f)(),j=Object(G.useStripe)(),l=Object(G.useElements)(),d=Object(n.useState)(!1),b=Object(o.a)(d,2),O=b[0],m=b[1],x=Object(n.useState)(""),g=Object(o.a)(x,2),f=g[0],v=g[1],N=Object(n.useState)(null),k=Object(o.a)(N,2),S=k[0],E=k[1],A=Object(n.useState)(!0),T=Object(o.a)(A,2),P=T[0],B=T[1],I=Object(n.useState)(!0),M=Object(o.a)(I,2),U=M[0],z=M[1];Object(n.useEffect)((function(){var e=function(){var e=Object(L.a)(Object(K.a)().mark((function e(){var t;return Object(K.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D({method:"post",url:"/payments/create?total=".concat(100*w(a))});case 2:t=e.sent,z(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]),console.log("THE SECRET IS >>>",U),console.log("\ud83d\udc71",s);var F=function(){var e=Object(L.a)(Object(K.a)().mark((function e(t){return Object(K.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(!0),e.next=4,j.confirmCardPayment(U,{payment_method:{card:l.getElement(G.CardElement)}}).then((function(e){var t=e.paymentIntent;R.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").doc(t.id).set({basket:a,amount:t.amount,created:t.created}),m(!0),E(null),v(!1),i({type:"EMPTY_BASKET"}),r.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"payment",children:Object(h.jsxs)("div",{className:"payment_container",children:[Object(h.jsxs)("h1",{children:["Checkout ",Object(h.jsxs)(u.b,{to:"/checkout",children:[null===a||void 0===a?void 0:a.length," items"]})]}),Object(h.jsxs)("div",{className:"payment_section",children:[Object(h.jsx)("div",{className:"payment_title",children:Object(h.jsx)("h3",{children:"Delivery Address"})}),Object(h.jsxs)("div",{className:"payment_address",children:[Object(h.jsx)("p",{children:null===s||void 0===s?void 0:s.email}),Object(h.jsx)("p",{children:"123 React Lane"}),Object(h.jsx)("p",{children:"Los Angeles, CA"})]})]}),Object(h.jsxs)("div",{className:"payment_section",children:[Object(h.jsx)("div",{className:"payment_title",children:Object(h.jsx)("h3",{children:"Review items and delivery"})}),Object(h.jsx)("div",{className:"payment_items",children:a.map((function(e){return Object(h.jsx)(C,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(h.jsxs)("div",{className:"payment_section",children:[Object(h.jsx)("div",{className:"payment_title",children:Object(h.jsx)("h3",{children:"Payment Method"})}),Object(h.jsx)("div",{className:"payment_details",children:Object(h.jsxs)("form",{onSubmit:F,children:[Object(h.jsx)(G.CardElement,{onChange:function(e){B(e.empty),E(e.error?e.error.message:"")}}),Object(h.jsxs)("div",{className:"payment_priceContainer",children:[Object(h.jsx)(y.a,{renderText:function(e){return Object(h.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:w(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(h.jsx)("button",{disabled:f||P||O,children:Object(h.jsx)("span",{children:f?Object(h.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),S&&Object(h.jsx)("div",{children:S})]})})]})]})})},z=c(59),F=Object(z.a)("pk_test_51LhDNGSA92jVw3Es3D3fiXqhGU58fZKDkdrjjMrxKS74mgseUvx0KesypHwuEGAfwjFDHuuryelzPZQgYUwGZ2yM006emTmrdc");var q=function(){var e=p(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){B.onAuthStateChanged((function(e){console.log("The USER IS >>>",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(h.jsx)(u.a,{children:Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)(_.c,{children:[Object(h.jsx)(_.a,{path:"/login",children:Object(h.jsx)(I,{})}),Object(h.jsxs)(_.a,{path:"/checkout",children:[Object(h.jsx)(f,{}),Object(h.jsx)(P,{})]}),Object(h.jsxs)(_.a,{path:"/payment",children:[Object(h.jsx)(f,{}),Object(h.jsx)(G.Elements,{stripe:F,children:Object(h.jsx)(U,{})})]}),Object(h.jsxs)(_.a,{path:"/",children:[Object(h.jsx)(f,{}),Object(h.jsx)(N,{})]})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(m,{initialState:{basket:[],user:null},reducer:A,children:Object(h.jsx)(q,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},95:function(e,t,c){}},[[119,1,2]]]);
//# sourceMappingURL=main.7058edbe.chunk.js.map