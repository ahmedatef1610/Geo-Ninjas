webpackJsonp([1],{JT7O:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),a=s("yviF"),i=s.n(a),o=(s("881v"),s("dih4"),i.a.initializeApp({apiKey:"AIzaSyCyQbDRbVWoCz43GgvHYHlY7k6jKo3EwIM",authDomain:"geo-ninjas-c2840.firebaseapp.com",databaseURL:"https://geo-ninjas-c2840.firebaseio.com",projectId:"geo-ninjas-c2840",storageBucket:"",messagingSenderId:"510878729111",appId:"1:510878729111:web:c483dcfa86abc806"})),r=o.firestore(),l=o.auth(),c={data:function(){return{user:null}},methods:{logout:function(){var e=this;l.signOut().then(function(){e.$router.replace({name:"Login"})})}},created:function(){var e=this;l.onAuthStateChanged(function(t){e.user=t||null})}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"navbar"},[s("nav",{staticClass:"deep-purple darken-1"},[s("div",{staticClass:"container"},[s("div",{staticClass:"nav-wrapper"},[s("router-link",{staticClass:"brand-logo left",attrs:{to:"/",tag:"a"}},[e._v("Geo Ninjas")]),e._v(" "),s("ul",{staticClass:"right"},[e.user?e._e():s("router-link",{attrs:{to:"/signup",tag:"li","active-class":"active",exact:""}},[s("a",[e._v("Signup")])]),e._v(" "),e.user?e._e():s("router-link",{attrs:{to:"/login",tag:"li","active-class":"active",exact:""}},[s("a",[e._v("Login")])]),e._v(" "),e.user?s("li",[s("a",{staticClass:"user-email"},[e._v(e._s(e.user.email))])]):e._e(),e._v(" "),e.user?s("li",[s("a",{on:{click:e.logout}},[e._v("Logout")])]):e._e()],1)],1)])])])},staticRenderFns:[]};var d={data:function(){return{}},components:{Navbar:s("VU/8")(c,u,!1,function(e){s("ORHy")},null,null).exports}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app"},[t("Navbar"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var p=s("VU/8")(d,m,!1,function(e){s("soH5")},null,null).exports,f=s("/ocq"),v={data:function(){return{lat:27,lng:32}},methods:{renderMap:function(){var e=this,t=new google.maps.Map(document.getElementById("map"),{center:{lat:this.lat,lng:this.lng},zoom:6,maxZoom:20,minZoom:1,streetViewControl:!0});r.collection("users").get().then(function(s){s.docs.forEach(function(s){var n=s.data();n.geolocation&&new google.maps.Marker({position:{lat:n.geolocation.lat,lng:n.geolocation.lng},map:t}).addListener("click",function(){e.$router.push({name:"ViewProfile",params:{id:s.id}})})})})}},mounted:function(){var e=this,t=l.currentUser;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(s){e.lat=s.coords.latitude,e.lng=s.coords.longitude,r.collection("users").where("user_id","==",t.uid).get().then(function(e){e.forEach(function(e){r.collection("users").doc(e.id).update({geolocation:{lat:s.coords.latitude,lng:s.coords.longitude}})})}).then(function(){e.renderMap()})},function(t){console.log(t),e.renderMap()},{enableHighAccuracy:!0,maximumAge:3e4,timeout:5e3}):this.renderMap()}},h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"map"},[t("div",{staticClass:"google-map",attrs:{id:"map"}})])}]};var j=s("VU/8")(v,h,!1,function(e){s("j/Tt")},null,null).exports,g=s("wffv"),b=s.n(g),_=(s("p/MD"),{data:function(){return{email:"",password:"",alias:"",feedback:null,slug:null}},methods:{signup:function(){var e=this,t=this.alias.trim(),s=this.email.trim(),n=this.password.trim();if(t&&s&&n){this.feedback=null,this.slug=b()(t,{replacement:"-",remove:/[*+~.()'"!:@]/g,lower:!0});var a=r.collection("users").doc(this.slug);o.functions().httpsCallable("checkAlias")({slug:this.slug}).then(function(i){console.log(i),i.data.unique?(l.createUserWithEmailAndPassword(s,n).then(function(s){a.set({alias:t,geolocation:null,user_id:s.user.uid}).then(function(){e.$router.replace({name:"GMap"})})}).catch(function(t){console.log(t),e.feedback=t.message}),e.feedback="this alias is free to use"):e.feedback="this alias already exists"})}else this.feedback="you must enter an alias"}},created:function(){}}),w={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"signup container"},[s("form",{staticClass:"card-panel",on:{submit:function(t){return t.preventDefault(),e.signup(t)}}},[s("h2",{staticClass:"center-align deep-purple-text"},[e._v("Sign Up")]),e._v(" "),s("div",{staticClass:"input-field"},[s("label",{attrs:{for:"email"}},[e._v("Email:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"input-field"},[s("label",{attrs:{for:"password"}},[e._v("Password:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"input-field"},[s("label",{attrs:{for:"alias"}},[e._v("Alias:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.alias,expression:"alias"}],attrs:{id:"alias",type:"text"},domProps:{value:e.alias},on:{input:function(t){t.target.composing||(e.alias=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"input-field center-align"},[e.feedback?s("p",{staticClass:"red-text center feedback"},[e._v(e._s(e.feedback))]):e._e()]),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-field center-align"},[t("button",{staticClass:"btn deep-purple",attrs:{type:"submit"}},[this._v("Sign Up")])])}]};var k=s("VU/8")(_,w,!1,function(e){s("jEn2")},null,null).exports,C={data:function(){return{email:"",password:"",feedback:null}},methods:{login:function(){var e=this,t=this.email.trim(),s=this.password.trim();t&&s?(this.feedback=null,l.signInWithEmailAndPassword(t,s).then(function(t){console.log(t.user),e.$router.push("/")}).catch(function(t){console.log(t),e.feedback=t.message})):this.feedback="please fill in both fields"}}},y={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login container"},[s("form",{staticClass:"card-panel",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[s("h2",{staticClass:"center-align deep-purple-text"},[e._v("Login")]),e._v(" "),s("div",{staticClass:"input-field"},[s("label",{attrs:{for:"email"}},[e._v("Email:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"input-field"},[s("label",{attrs:{for:"password"}},[e._v("Password:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"input-field center-align"},[e.feedback?s("p",{staticClass:"red-text center feedback"},[e._v(e._s(e.feedback))]):e._e()]),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-field center-align"},[t("button",{staticClass:"btn deep-purple",attrs:{type:"submit"}},[this._v("login")])])}]};var z=s("VU/8")(C,y,!1,function(e){s("NQ+A")},null,null).exports,x=s("PJh5"),E=s.n(x),N={data:function(){return{profile:{},newComment:"",feedback:null,user:null,comments:[]}},methods:{addComment:function(){var e=this;this.newComment.trim()?(this.feedback=null,r.collection("comments").add({to:this.$route.params.id,from:this.user.alias,content:this.newComment,time:Date.now()}).then(function(){e.newComment=""}),this.newComment=""):this.feedback="you must enter comment to add it"},sortComments:function(){this.comments.sort(function(e,t){return e.time<t.time?1:e.time>t.time?-1:0})}},created:function(){var e=this,t=r.collection("users");t.doc(this.$route.params.id).get().then(function(t){e.profile=t.data()}),t.where("user_id","==",l.currentUser.uid).get().then(function(t){t.forEach(function(t){e.user=t.data(),e.user.id=t.id})}),r.collection("comments").where("to","==",this.$route.params.id).onSnapshot(function(t){t.docChanges().forEach(function(t){"added"==t.type&&e.comments.unshift({id:t.doc.id,to:t.doc.data().to,from:t.doc.data().from,content:t.doc.data().content,time:E()(t.doc.data().time).format("MMMM Do dddd YYYY, h:mm:ss a")})}),e.sortComments()})}},P={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view-profile container"},[s("div",{staticClass:"card"},[e.profile.alias?s("h2",{staticClass:"deep-purple-text center-align"},[e._v(e._s(e.profile.alias)+" Wall")]):e._e(),e._v(" "),0!==e.comments.length?s("ul",{staticClass:"comments collection"},e._l(e.comments,function(t){return s("li",{key:t.id,staticClass:"collection-item"},[s("div",{staticClass:"deep-purple-text"},[e._v(e._s(t.from)+" ------ "+e._s(t.time))]),e._v(" "),s("div",{staticClass:"grey-text text-darken-2"},[e._v("👇👉 "+e._s(t.content))])])}),0):e._e(),e._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),e.addComment(t)}}},[s("div",{staticClass:"input-field"},[s("label",{attrs:{for:"comment"}},[e._v("Add a comment:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newComment,expression:"newComment"}],attrs:{id:"comment",type:"text"},domProps:{value:e.newComment},on:{input:function(t){t.target.composing||(e.newComment=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"input-field center-align"},[e.feedback?s("p",{staticClass:"red-text center feedback"},[e._v(e._s(e.feedback))]):e._e()])])])])},staticRenderFns:[]};var F=s("VU/8")(N,P,!1,function(e){s("JT7O")},null,null).exports;n.a.use(f.a);var M=[{path:"/",name:"GMap",component:j,meta:{requiresAuth:!0}},{path:"/signup",name:"Signup",component:k},{path:"/login",name:"Login",component:z},{path:"/profile/:id",name:"ViewProfile",component:F,meta:{requiresAuth:!0}},{path:"*",redirect:{name:"GMap"}}],H=new f.a({routes:M,mode:"history"});H.beforeEach(function(e,t,s){e.matched.some(function(e){return e.meta.requiresAuth})?l.currentUser?s():s({path:"/login"}):s()});var O=H;n.a.config.productionTip=!1;var U=null;l.onAuthStateChanged(function(e){U||(U=new n.a({el:"#app",router:O,components:{App:p},template:"<App/>"}))})},"NQ+A":function(e,t){},ORHy:function(e,t){},"j/Tt":function(e,t){},jEn2:function(e,t){},soH5:function(e,t){},uslO:function(e,t,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-in":"yJfC","./en-in.js":"yJfC","./en-nz":"dyB6","./en-nz.js":"dyB6","./en-sg":"NYST","./en-sg.js":"NYST","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fil":"rMbQ","./fil.js":"rMbQ","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-deva":"VGQH","./gom-deva.js":"VGQH","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./oc-lnc":"KOFO","./oc-lnc.js":"KOFO","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tk":"+WRH","./tk.js":"+WRH","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-mo":"+WA1","./zh-mo.js":"+WA1","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(e){return s(i(e))}function i(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.9f7db4732b3c39669694.js.map