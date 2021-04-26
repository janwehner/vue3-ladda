import VueLadda from './vue-ladda.vue';

const install = (app, options) => {
    app.component('vue-ladda', VueLadda);
};

VueLadda.install = install;

export default VueLadda;

//export { VueLadda };