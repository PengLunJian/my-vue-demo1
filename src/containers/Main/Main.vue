<template>
  <div class="login">
    <div class="content">
      <div class="header"></div>
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
        <button class="btn btn-login">Login</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'Main'
  }
</script>

<style type="text/less">
  .login {
    .content {

    }
    .header {

    }
    .body {

    }
    .footer {

    }
    .form-group {
      .form-input {

      }
      .form-label {

      }
    }
  }
</style>
