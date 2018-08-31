<template>
  <div class="main">
    <div class="side">
      <Navigation :isOpen="isOpen" />
    </div>
    <div class="header">
      <button class="nav-trigger" @click="this.showNavigation">
        <i class="border"></i>
        <i class="border"></i>
        <i class="border"></i>
      </button>
    </div>
    <div class="context"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Navigation from '../../components/navigation.vue'
  export default{
    name: 'Main',
    components: {
      Navigation
    },
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      showNavigation: function () {
        this.isOpen = true
      }
    }
  }
</script>

<style type="text/less">
  .main {
    height: 100%;
    position: relative;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("../../assets/images/main_bg.jpg");
    .content {

    }
  }
</style>
