<template>
  <div class="password">
    <header class="header mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goback"></a>
      <h1 class="mui-title">找回密码</h1>
    </header>
    <!--header-end-->
    <div class="mui-content">
      <form>
        <div class="my-input mui-input-row user-icon"><input type="password" class="mui-input-clear" placeholder="请输入需要找回的手机号码" autofocus="autofocus" v-model="user" /></div>
        <div class="settings-btn">
          <button class="btn" type="button" @click="goto">下一步</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ""
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    goto() {
      if (/^1[3|5|7|8]\d{9}$/gi.test(this.user)) {
        this.$router.push(`/Change-password?user=${this.user}`);
      } else {
        alert("手机号不正确");
      }
    }
  }
};
</script>
