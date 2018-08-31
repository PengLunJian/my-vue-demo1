<template>
  <div class="login">
    <div class="content">
      <div class="header">
        <h1 class="title">Backstage management system</h1>
      </div>
      <div class="body">
        <div class="form-group">
          <label class="form-label" for="username"></label>
          <input type="text" class="form-input" id="username" placeholder="please enter your username"/>
        </div>
        <div class="form-group">
          <label class="form-label" for="password"></label>
          <input type="text" class="form-input" id="password" placeholder="please enter your password"/>
        </div>
        <div class="form-group">
          <input type="radio" class="form-radio" id="radio"/>
          <label class="form-label" for="radio">Remember the password</label>
        </div>
      </div>
      <div class="footer">
        <button class="btn btn-login" @click="this.handleLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'Login',
    data: function () {
      return {}
    },
    methods: {
      handleLogin: function () {
        this.$router.push(
          {path: '/Main'}
        )
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .login {
    height: 100%;
    position: relative;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("../../assets/images/login_bg.jpg");
    .content {
      width: 100%;
      padding: 0 0.3rem;
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -135px;
      background-color: rgba(255, 255, 255, .0);
    }
    .header {
      padding-bottom: 0.3rem;
      .title {
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
        font-weight: normal;
        font-style: italic;
        font-size: 0.2rem;
        color: @redColor;
      }
    }
    .body {
      .form-group {
        position: relative;
        margin-bottom: 0.2rem;
        &:last-child {
          text-align: right;
          font-size: 0;
        }
        .form-input {
          display: block;
          width: 100%;
          height: 0.45rem;
          line-height: 0.45rem;
          padding-left: 0.5rem;
          border: 1px solid @green;
          background-color: rgba(0, 153, 102, .3);
        }
        .form-radio {
          width: 0.16rem;
          height: 0.16rem;
          border-radius: 100%;
          border: 1.5px solid @green;
          display: inline-block;
          vertical-align: middle;
          margin-right: 0.08rem;
        }
        .form-label {
          position: absolute;
          top: 0;
          left: 0;
          width: 0.45rem;
          height: 100%;
          background-color: rgba(0, 153, 102, .5);
          &[for="radio"] {
            width: auto;
            font-size: 0.12rem;
            position: relative;
            display: inline-block;
            vertical-align: middle;
            background-color: transparent;
            color: @redColor;
          }
        }
      }
    }
    .footer {
      .btn-login {
        display: block;
        width: 100%;
        height: 0.45rem;
        color: @white;
        font-size: 0.2rem;
        border: 1px solid @green;
        background-color: rgba(0, 153, 102, .5);
      }
    }
  }
</style>
