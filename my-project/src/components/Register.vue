

<template>

  <div class="Register">
    <header class="header mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goback"></a>
      <h1 class="mui-title">注册</h1>
    </header>
    <!--header-end-->
    <div class="mui-content">
      <form>
        <div class="register-group">
          <div class="register-input mui-input-row user-icon"><input type="text" class="mui-input-clear" placeholder="请输入手机号" autofocus="autofocus" v-model="user" /></div>
          <div class="register-input mui-input-row yzm-icon"><input type="text" class="mui-input-clear" placeholder="请输入验证码" v-model="yzmtext" />
            <a :class="myzm?[myyzm]:[hqyzm]" href="#" @click="getyzm">{{myzm?myzm:'获取验证码'}}</a>
          </div>
          <div class="register-input mui-input-row paddword-icon"><input type="password" class="mui-input-clear" placeholder="请输入6-16位带字母的密码" v-model="password" /></div>
        </div>
        <div class="user-agreement">
          <label><input name="checkbox" type="checkbox" id="" class="checkbox" checked="checked">同意此《
            <a href="#" id="df_xieyi" class="tigger">用户协议</a>》</label>
        </div>
        <div class="settings-btn">
          <button class="btn" type="button" @click="reg">注册</button>
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
      hqyzm: "hqyzm",
      myyzm: "yzm",
      user: "",
      password: "",
      yzmtext: ""
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    reg() {
      if (/^1[3|5|7|8]\d{9}$/gi.test(this.user)) {
        if (
          /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(this.password)
        ) {
          this.$http({
            headers: {
              Accept: "application/json,text/plain,*/*",
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
            }, //post --要加
            url: "http://localhost:3000/ajx",
            method: "post",
            data: this.$qs.stringify({
              act: "reg",
              user: this.user,
              password: this.password,
              password2: this.password
            })
          }).then(res => {
            switch (res.data) {
              case 0:
                alert("用户名重名");
                break;
              case 1:
                alert("请输入用户名和密码");
                break;
              case 2:
                alert("请再次输入正确的密码");
                break;
              case 3:
                if (this.myzm === this.yzmtext) {
                  alert("注册成功，3秒后跳转登录页面");
                  setTimeout(() => {
                    this.$router.push("/Sign-in");
                    this.$store.dispatch("VIEW_YZM", false);
                  }, 3000);
                } else {
                  alert("验证码不符合要求，请重新输入");
                  this.$store.dispatch("VIEW_YZM", true);
                }
                break;
            }
          });
        } else {
          alert("密码不正确");
        }
      } else {
        alert("手机号不正确");
      }
    },
    getyzm() {
      this.$store.dispatch("VIEW_YZM", true);
    }
  },
  computed: {
    ...mapGetters(["myzm"])
  }
};
</script>


<style>
.yzm {
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -13px;
  line-height: 26px;
  padding: 0 10px;
}
</style>
