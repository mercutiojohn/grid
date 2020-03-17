// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Grid from "vue-js-grid";

Vue.use(Grid);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
