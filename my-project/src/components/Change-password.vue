<template>
  <div class="Register">
    <header class="header mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goback"></a>
      <h1 class="mui-title">更改密码</h1>
    </header>
    <!--header-end-->
    <div class="mui-content">
      <form>
        <div class="register-group">
          <!-- <div class="register-input mui-input-row yzm-icon"><input type="text" class="mui-input-clear" placeholder="请输入手机验证码"  v-model="yzmtext"/></div> -->
          <div class="register-input mui-input-row paddword-icon"><input type="password" class="mui-input-clear" placeholder="请输入6-16位带字母的密码" v-model="password" /></div>
          <div class="register-input mui-input-row paddword-icon"><input type="password" class="mui-input-clear" placeholder="请再次输入密码" v-model="password2" /></div>
        </div>
        <div class="settings-btn">
          <button class="btn" type="button" @click="change">更改密码</button>
        </div>
      </form>
    </div>
  </div>
  <!--container-end-->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      user: "",
      password: "",
      password2: ""
    };
  },
  mounted() {
    this.user = this.$route.query.user;
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    change() {
      if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(this.password)) {
        this.$http({
          headers: {
            Accept: "application/json,text/plain,*/*",
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
          }, //post --要加
          url: "http://localhost:3000/ajx",
          method: "post",
          data: this.$qs.stringify({
            act: "changepassword",
            user: this.user,
            password: this.password,
            password2: this.password2
          })
        }).then(res => {
          if (res.data == 0) {
            setTimeout(() => {
              this.$router.push("/index");
              alert("更改成功，1秒后跳转首页");
            }, 1000);
          }
        });
      } else {
        alert("密码输入不正确");
      }
       this.$http({
        headers:{
          'Accept':'application/json,text/plain,*/*',
          'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
        }, //post --要加
        url:'http://localhost:3000/ajx',
        method: 'post',
        data:this.$qs.stringify({
             'act': "tuichu",
        }),
      }).then((res)=>{
          this.$store.dispatch('VIEW_LOGIN','请用户登录');
      })
    }
  }
};
</script>



