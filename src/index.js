import VueLadda from './vue-ladda.vue';

export default {
  install: (app, options) => {
    app.component('vue-ladda', VueLadda);
  }
}

 export { VueLadda };