<template>
  <div class="modal hide" id="navigation">
    <div class="modal-dialog">
      <div class="modal-bg"></div>
      <div class="modal-content">
        <div class="modal-header"></div>
        <div class="modal-body">
          <ul class="nav-bar">
            <li class="nav-item">菜单一</li>
            <li class="nav-item">菜单一</li>
            <li class="nav-item">菜单一</li>
            <li class="nav-item">菜单一</li>
            <li class="nav-item">菜单一</li>
            <li class="nav-item">菜单一</li>
            <li class="nav-item">菜单一</li>
            <li class="nav-item">菜单一</li>
          </ul>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'Navigation',
    data () {
      return {}
    },
    mounted: () => {
      console.log(this)
    }
  }
</script>

<style lang="less">
  @import "../assets/less/variable";

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 2.4rem;
    height: 100%;
    background-color: @white;
    transition: all 300ms ease;
    -webkit-overflow-scrolling: touch;
    .modal-bg {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      transition: all 300ms ease;
      background-color: rgba(0, 0, 0, .5);
    }
    .modal-content {

    }
    &.hide {
      transform: translateX(-2.4rem);
    }
  }

  #navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 2.4rem;
    height: 100%;
    text-align: center;
    overflow-x: hidden;
    overflow-y: auto;
    .nav-bar {
      .nav-item {
        height: 0.45rem;
        line-height: 0.45rem;
        border-bottom: 1px solid #ffffff;
      }
    }
  }
</style>
