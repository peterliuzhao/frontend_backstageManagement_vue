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
                      <h1>影城后台管理系统登录</h1>
                    </div>
                    <p></p>
                  </div> 
                </div>
              </div>
              <!-- Form Panel    -->
              <div class="col-lg-6 bg-white">
                <div class="form d-flex align-items-center">
                  <div class="content">
                    <form method="post" class="form-validate">
                      <div class="form-group">
                        <input v-model="username" id="login-username" type="text" name="loginUsername" required data-msg="请输入你的用户名" class="input-material">
                        <label for="login-username" class="label-material">用户名</label>
                      </div>
                      <div class="form-group">
                        <input v-model="password" id="login-password" type="password" name="loginPassword" required data-msg="请输入你的密码" class="input-material">
                        <label for="login-password" class="label-material">密码</label>
                      </div><button type="button" id="login" @click="login" class="btn btn-outline-primary">登录</button>
                      <!-- This should be submit button but I replaced it with <a> for demo purposes-->
                    </form><a href="#" class="forgot-pass">忘记密码?</a><br><small>还没有帐户? </small><a href="#/register" class="signup">去注册</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyrights text-center">
          <p>Design by <a href="#" class="external">六组影城平台</a>
            <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                username:"",
                password:""
            }
        },

        methods: {
        login:function(){
            axios.get("users/login",{
            params:{
                uname:this.username,
                upwd:this.password
            } }
            ).then((response)=>{
                if(response.data.status == 200){
                window.location.href='index.html';
                }
                else if(response.data.status == 500){
                alert("输入信息有误，请核对")
                }
            });
        }}
    }
</script>

<style>

</style>








