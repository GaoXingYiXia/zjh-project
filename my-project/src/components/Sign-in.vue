<template>
  <div class="Sign-in">
    <header class="header mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goback"></a>
      <h1 class="mui-title">登录</h1>
    </header>
    <!--header-end-->
    <div class="mui-content">
      <form>
        <div class="register-group">
          <div class="register-input mui-input-row user-icon"><input type="text" class="mui-input-clear" placeholder="请输入手机号码" autofocus="autofocus" v-model="user" /></div>
          <div class="register-input mui-input-row paddword-icon"><input type="password" class="mui-input-clear" maxlength="16" placeholder="请输入6-16位密码" v-model="password" /></div>
        </div>
        <div class="settings-btn">
          <button class="btn" type="button" @click="login">登录</button>
        </div>
        <router-link to="/Register" class="register-now" tag="p">忘记密码?
          <a href="javascript:;">立即注册</a>
        </router-link>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: "",
      password: ""
    };
  },

  methods: {
    //  ...mapActions([
    //    'mytext'
    //  ]),
    goback() {
      this.$router.go(-1);
    },
    login() {
      this.$http({
        headers: {
          Accept: "application/json,text/plain,*/*",
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
        }, //post --要加
        url: "http://localhost:3000/ajx",
        method: "post",
        data: this.$qs.stringify({
          act: "login",
          user: this.user,
          password: this.password
        })
      }).then(res => {
        // console.log(res);
        switch (res.data) {
          case 0:
            alert("登录成功，点击确定 1秒后跳转主页");
            this.$store.dispatch("VIEW_LOGIN", "退出登录");
            setTimeout(() => {
              this.$router.push("/index");
            }, 1000);
            break;
          case 1:
            alert("用户名或者密码有误");
            break;
          case 2:
            alert("用户名不存在");
            break;
        }
      });
    }
  }
};
</script>
