<template>
  <button :class="buttonClass" ref="ladda" :data-style="dataStyle" @click="handleClick">
    <slot><span class="ladda-label">Submit</span></slot>
  </button>
</template>

<script>
  import * as Ladda from 'ladda';

  export default {
    name: 'VueLadda',

    emits: [
      'click',
    ],

    props: {
      // customizable button's class attribute - you can use your own CSS class
      'buttonClass': {
        type: [String, Object],
        default: 'ladda-button'
      },
      // use vue props validation to make sure "data-style" is given. (ladda need it)
      'dataStyle': {
        type: String,
        default: 'expand-left'
      },
      // loading prop to change the status of this component.
      loading: {
        type: Boolean,
        required: true
      },
      progress: {
        validator: function(progress) {
          return progress >= 0 && progress <= 1;
        },
        default: 0
      }
    },

    watch: {
      loading: function(loading) {
        loading ? this.ladda.start() : this.ladda.stop();
      },

      progress: function(progress) {
        this.ladda.setProgress(progress);
      }
    },

    methods: {
      handleClick: function(e) {
        this.$emit('click', e);
      },
    },

    mounted: function() {
        this.ladda = Ladda.create(this.$refs.ladda);
        this.loading ? this.ladda.start() : this.ladda.stop();
    },

    beforeUnmount: function() {
      this.ladda.remove();
      delete this.ladda;
    }
  };
</script>

<style lang="scss">
  // TODO: make themed a option?
  @import '~ladda/css/ladda-themed.scss';
</style>
