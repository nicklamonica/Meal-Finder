(function(e){function t(t){for(var r,i,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)i=o[d],a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0533":function(e,t,n){},"153d":function(e,t,n){"use strict";var r=n("0533"),a=n.n(r);a.a},"1d50":function(e,t,n){"use strict";var r=n("47c6"),a=n.n(r);a.a},"1ee1":function(e,t,n){},"3f51":function(e,t,n){"use strict";var r=n("5be9"),a=n.n(r);a.a},"40ed":function(e,t,n){},"47c6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"ui container"},[n("Navbar"),n("router-view")],1)])},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui stackable menu"},[n("router-link",{staticClass:"item",attrs:{to:"/"}},[n("i",{staticClass:"utensils icon"}),e._v(" Meal Finder\n  ")]),n("div",{staticClass:"right menu"},[e.isLoggedIn?n("router-link",{staticClass:"item",attrs:{to:"/new"}},[n("i",{staticClass:"plus icon"}),e._v("Find Recipes\n    ")]):e._e(),e.isLoggedIn?n("router-link",{staticClass:"item",attrs:{to:"/meals"}},[n("i",{staticClass:"save icon"}),e._v("Saved Recipies\n    ")]):e._e(),e.isLoggedIn?e._e():n("router-link",{staticClass:"item",attrs:{to:"/login"}},[n("i",{staticClass:"sign-in icon"}),e._v("Login\n    ")]),e.isLoggedIn?e._e():n("router-link",{staticClass:"item",attrs:{to:"/register"}},[n("i",{staticClass:"user plus icon"}),e._v("Register\n    ")]),e.isLoggedIn?n("a",{staticClass:"item",on:{click:e.logout}},[n("i",{staticClass:"sign-out icon"}),e._v("Logout\n    ")]):e._e()],1)],1)},o=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),l=n("2f62");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){Object(c["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p={name:"Navbar",methods:d({},Object(l["b"])(["logout"]),{isActive:function(){return!1}}),computed:Object(l["c"])(["isLoggedIn"])},m=p,f=(n("a7db"),n("2877")),v=Object(f["a"])(m,i,o,!1,null,"1b9d6030",null),g=v.exports,h={name:"app",components:{Navbar:g},actions:Object(l["c"])(["isLoggedIn"])},b=h,w=Object(f["a"])(b,a,s,!1,null,null,null),y=w.exports,_=n("8c4f"),C=(n("7f7f"),n("96cf"),n("3b8d")),O=n("bc3a"),k=n.n(O),j={token:window.localStorage.getItem("token")},x={isLoggedIn:function(e){return!!e.token}},P={login:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,k.a.post("/users/login",{headers:{"Content-type":"application/json"},email:n.email,password:n.password});case 4:a=e.sent,s=a.data.token,r("setToken",s),window.localStorage.setItem("token",s),he.push("/meals"),e.next=15;break;case 11:if(e.prev=11,e.t0=e["catch"](1),!e.t0.response){e.next=15;break}return e.abrupt("return",e.t0.response.data);case 15:case"end":return e.stop()}},e,null,[[1,11]])}));function t(t,n){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,k.a.post("/users/register",{headers:{"Content-type":"application/json"},name:n.name,email:n.email,password:n.password});case 4:a=e.sent,s=a.data.token,r("setToken",s),window.localStorage.setItem("token",s),he.push("/meals"),e.next=15;break;case 11:if(e.prev=11,e.t0=e["catch"](1),!e.t0.response){e.next=15;break}return e.abrupt("return",e.t0.response.data);case 15:case"end":return e.stop()}},e,null,[[1,11]])}));function t(t,n){return e.apply(this,arguments)}return t}(),logout:function(e){var t=e.commit;t("setToken",null),window.localStorage.removeItem("token"),he.push("/")}},M={setToken:function(e,t){e.token=t}},I={state:j,getters:x,actions:P,mutations:M};r["a"].use(l["a"]);var S=new l["a"].Store({modules:{auth:I}}),L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"ui two column grid"},[n("div",{staticClass:"centered column"},[n("form",{staticClass:"ui form"},[n("div",{staticClass:"item"},[n("label",[e._v("Search Your Meals")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",name:"search",placeholder:"Search By Name"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})])])])]),0==e.filteredMeals.length?n("div",{staticClass:"ui container center aligned"},[n("br"),n("br"),e._v("Seems You don't have any saved meals...\n    "),n("router-link",{attrs:{to:"/new"}},[e._v("Click here")]),e._v("to find some.\n  ")],1):e._e(),n("div",{staticClass:"card-list"},e._l(e.filteredMeals,function(t,r){return n("div",{key:r,staticClass:"six wide column"},[n("div",{staticClass:"ui card card-indv"},[n("div",{staticClass:"image"},[n("img",{attrs:{src:t.imageUrl}})]),n("div",{staticClass:"content"},[n("a",{staticClass:"header"},[e._v(e._s(t.name))]),e._m(0,!0),n("div",{staticClass:"description"},[n("ul",e._l(t.ingredients,function(t,r){return n("li",{key:r},[e._v(e._s(t))])}),0)])]),n("div",{staticClass:"extra content"},[n("a",{attrs:{href:t.link}},[n("button",{staticClass:"ui button primary"},[e._v("More info")])]),n("i",{staticClass:"trash alternate icon delete",on:{click:function(n){return e.deleteMeal(t._id)}}})])])])}),0)])},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"meta"},[n("span",{staticClass:"date"},[e._v("Ingredients needed")])])}],E=(n("386d"),n("4917"),{name:"MealList",data:function(){return{savedMeals:[],search:"",alerts:""}},created:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("/recipes",{headers:{"x-auth-token":window.localStorage.getItem("token")}});case 3:t=e.sent,this.savedMeals=t.data,e.next=13;break;case 7:if(e.prev=7,e.t0=e["catch"](0),!e.t0.response){e.next=13;break}return this.alerts=e.t0.response.data,he.push("/login"),e.abrupt("return");case 13:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}(),methods:{deleteMeal:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("/recipes/".concat(t),{headers:{"x-auth-token":window.localStorage.getItem("token")}});case 2:this.savedMeals=this.savedMeals.filter(function(e){return e._id!=t});case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},computed:{filteredMeals:function(){var e=this;return this.savedMeals.filter(function(t){return t.name.toLowerCase().match(e.search.toLowerCase())})}}}),N=E,D=(n("c819"),Object(f["a"])(N,L,R,!1,null,"16039d50",null)),$=D.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"ui two column grid ingredient-form"},[n("div",{staticClass:"centered column"},[n("form",{staticClass:"ui form centered",on:{submit:function(t){return t.preventDefault(),e.genMeals(t)}}},[e._l(e.ingredients,function(t,r){return n("div",{key:r,staticClass:"field"},[n("label",{attrs:{for:"ingredient"}},[e._v("Ingredient Added:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ingredients[r],expression:"ingredients[index]"}],attrs:{type:"text",name:"ingredient"},domProps:{value:e.ingredients[r]},on:{input:function(t){t.target.composing||e.$set(e.ingredients,r,t.target.value)}}}),n("i",{staticClass:"trash icon delete",on:{click:function(n){return e.deleteIngredient(t)}}})])}),n("div",{staticClass:"field"},[n("label",{attrs:{for:"add-ingredient"}},[e._v("Add an ingredient:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.entered,expression:"entered"}],attrs:{type:"text",name:"add-ingredient"},domProps:{value:e.entered},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.addIngredient(t))},input:function(t){t.target.composing||(e.entered=t.target.value)}}}),n("i",{staticClass:"plus icon add",on:{click:function(t){return t.preventDefault(),e.addIngredient(t)}}})]),e.alerts?n("p",[e._v(e._s(e.alerts))]):e._e(),n("button",{staticClass:"ui button"},[e._v("Find new meals")])],2)])]),e.alerts?n("div",[e._v(e._s(e.saveAlerts))]):e._e(),e.generatedMeals.length>0?n("div",{staticClass:"ui items item-wrapper"},e._l(e.generatedMeals,function(e,t){return n("div",{key:t},[n("NewMealCard",{attrs:{meal:e}})],1)}),0):e._e()])},q=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},[n("div",{staticClass:"image"},[n("img",{attrs:{src:e.meal.image}}),e.clicked?e._e():n("button",{staticClass:"positive ui button",on:{click:e.saveMeal}},[e.loading?e._e():n("i",{staticClass:"large plus icon"}),e.loading?n("i",{staticClass:"notched circle large loading icon"}):e._e()]),n("h4",{staticClass:"header"},[e._v(e._s(e.meal.title))])])])},F=[],Y={name:"NewMealCard",props:["meal"],data:function(){return{loading:!1,clicked:!1}},methods:{saveMeal:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,k.a.post("/recipes",{headers:{"x-auth-token":window.localStorage.getItem("token"),"Content-type":"application/json"},body:{mealId:this.meal.id}});case 3:this.loading=!1,this.clicked=!0;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},B=Y,J=(n("153d"),Object(f["a"])(B,A,F,!1,null,"1f27a37d",null)),U=J.exports,W={name:"NewMeal",data:function(){return{ingredients:[],generatedMeals:[],alerts:null,saveAlerts:null,entered:null}},components:{NewMealCard:U},computed:Object(l["c"])(["isLoggedIn"]),created:function(){this.isLoggedIn||he.push("/login")},methods:{genMeals:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post("/recipes/api",{headers:{"Content-type":"application/json"},body:{searchParams:this.ingredients}});case 3:t=e.sent,this.generatedMeals=t.data,this.ingredients=[],e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](0),this.saveAlerts="Must be logged in to save a meal",e.abrupt("return");case 12:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}(),addIngredient:function(){this.entered?(this.ingredients.push(this.entered),this.entered=null,this.alerts=null):this.alerts="You must enter a value to add an ingredient"},deleteIngredient:function(e){this.ingredients=this.ingredients.filter(function(t){return t!==e})}}},z=W,G=(n("9ce1"),Object(f["a"])(z,T,q,!1,null,"6946a206",null)),H=G.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui two column grid"},[n("div",{staticClass:"centered column"},[n("form",{staticClass:"ui form"},[e.alerts.length>0?n("p",[e._v(e._s(e.alerts.join(" ")))]):e._e(),n("div",{staticClass:"field"},[n("label",[e._v("First Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"Enter your full name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",placeholder:"Enter your email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Create a password",required:"",minlength:"6"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",[e._v("Password Confirm")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password2,expression:"password2"}],attrs:{type:"password",name:"passsword2",placeholder:"Re-enter password",required:"",minlength:"6"},domProps:{value:e.password2},on:{input:function(t){t.target.composing||(e.password2=t.target.value)}}})]),n("button",{staticClass:"ui button",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e._v("Submit")])])])])},Q=[];function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach(function(t){Object(c["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Z={name:"Register",data:function(){return{name:"",email:"",password:"",password2:"",alerts:[]}},methods:X({},Object(l["b"])(["register"]),{handleRegister:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.password===this.password2){e.next=3;break}return this.alerts="Passwords must match",e.abrupt("return");case 3:return e.next=5,this.register({name:this.name,email:this.email,password:this.password});case 5:if(t=e.sent,!t){e.next=9;break}return this.alerts=t.errors.map(function(e){return e.msg}),e.abrupt("return");case 9:this.alerts=[];case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()})},ee=Z,te=(n("7f03"),Object(f["a"])(ee,K,Q,!1,null,"65bf58c5",null)),ne=te.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui two column grid"},[n("div",{staticClass:"centered column"},[n("form",{staticClass:"ui form"},[e.alerts.length>0?n("p",[e._v(e._s(e.alerts.join(" ")))]):e._e(),n("div",{staticClass:"field"},[n("label",[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",placeholder:"Enter your email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Create a password",required:"",minlength:"6"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("button",{staticClass:"ui button",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Submit")])])])])},ae=[];function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach(function(t){Object(c["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var oe={name:"Login",methods:ie({},Object(l["b"])(["login"]),{handleLogin:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.login({email:this.email,password:this.password});case 2:if(t=e.sent,!t){e.next=6;break}return this.alerts=t.errors.map(function(e){return e.msg}),e.abrupt("return");case 6:this.alerts=[];case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}),data:function(){return{email:"",password:"",alerts:[]}}},ce=oe,le=(n("1d50"),Object(f["a"])(ce,re,ae,!1,null,"161a94d2",null)),ue=le.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"landing-container"},[n("div",{staticClass:"centered-items"},[n("h1",{staticClass:"ui header"},[e._v("Welcome to Meal Finder")]),n("h2",[e._v("Find Meals Based on Ingredients in your kitchen!")]),e.isLoggedIn?n("router-link",{staticClass:"ui primary button",attrs:{to:"/meals"}},[e._v("\n      Saved Meals\n      "),n("i",{staticClass:"right arrow icon"})]):n("router-link",{staticClass:"ui primary button",attrs:{to:"/login"}},[e._v("\n      Login\n      "),n("i",{staticClass:"right arrow icon"})])],1)])},pe=[],me={name:"Landing",computed:Object(l["c"])(["isLoggedIn"])},fe=me,ve=(n("3f51"),Object(f["a"])(fe,de,pe,!1,null,null,null)),ge=ve.exports;n.d(t,"router",function(){return he}),r["a"].use(_["a"]);var he=new _["a"]({mode:"history",routes:[{path:"/meals",component:$,name:"MealList"},{path:"/new",component:H,name:"NewMeal"},{path:"/login",component:ue,name:"Login"},{path:"/register",component:ne,name:"Register"},{path:"/",component:ge,name:ge}]});new r["a"]({router:he,store:S,render:function(e){return e(y)}}).$mount("#app")},"5be9":function(e,t,n){},"7f03":function(e,t,n){"use strict";var r=n("40ed"),a=n.n(r);a.a},"86f8":function(e,t,n){},"9ce1":function(e,t,n){"use strict";var r=n("86f8"),a=n.n(r);a.a},"9e47":function(e,t,n){},a7db:function(e,t,n){"use strict";var r=n("9e47"),a=n.n(r);a.a},c819:function(e,t,n){"use strict";var r=n("1ee1"),a=n.n(r);a.a}});
//# sourceMappingURL=app.b66d5608.js.map