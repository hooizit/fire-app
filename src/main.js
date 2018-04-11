import Vue from "vue";
import App from "./App";
import router from "./router";

import VueFire from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueFire);
firebase.initializeApp({
  projectId: "fire-app-d9c32",
  databaseURL: "https://fire-app-d9c32.firebaseio.com"
});
export const db = firebase.firestore();

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
