import Vue from 'vue'
import App from './App'
import router from './router'

import {
  db,
  auth,
  firebaseApp
} from "@/firebase/init";


Vue.config.productionTip = false;

// auth.onAuthStateChanged(user=>{
//   if(user){
//     //console.log(user);
//     router.push('/');
//   }else{
//     router.replace('/login');
//   }
// });


let app = null;

auth.onAuthStateChanged(user => {
  if (!app) {
    app=new Vue({
      el: '#app',
      router,
      components: {
        App
      },
      template: '<App/>'
    })
  }
});