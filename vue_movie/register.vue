<template>
	<div>
      <div class="page login-page">
          <div class="container d-flex align-items-center">
            <div class="form-holder has-shadow">
              <div class="row">
                <!-- Logo & Information Panel-->
                <div class="col-lg-6">
                  <div class="info d-flex align-items-center">
                    <div class="content">
                      <div class="logo">
                        <h1>影城用户注册</h1>
                      </div>
                      <p></p>
                    </div>
                  </div>
                </div>
                <!-- Form Panel    -->
                <div class="col-lg-6 bg-white">
                  <div class="form d-flex align-items-center">
                    <div class="content">
                      <form class="form-validate">
                        <div class="form-group">
                          <input v-model="username" id="register-username" type="text" name="registerUsername" required data-msg="Please enter your username" class="input-material">
                          <label for="register-username" class="label-material">用户名</label>
                        </div>
                        <div class="form-group">
                          <input id="register-email" type="email" name="registerEmail" required data-msg="Please enter a valid email address" class="input-material">
                          <label for="register-email" class="label-material">邮箱地址</label>
                        </div>
                        <div class="form-group">
                          <input v-model="password" id="register-password" type="password" name="registerPassword" required data-msg="Please enter your password" class="input-material">
                          <label for="register-password" class="label-material">密码</label>
                        </div>
                        <div class="form-group terms-conditions">
                          <input id="register-agree" name="registerAgree" type="checkbox" required value="1" data-msg="Your agreement is required" class="checkbox-template">
                          <label for="register-agree">同意用户协议</label>
                        </div>
                        <div class="form-group">
                          <button id="regidter" type="button" name="registerSubmit" class="btn btn-primary" @click="register">注册</button>
                        </div>
                      </form><small>已有帐户?</small><a href="#/login" class="signup">登录</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    
    <!-- </div> -->
</template>

<script>
    export default {
        
        
    }
</script>

<style>

</style>








