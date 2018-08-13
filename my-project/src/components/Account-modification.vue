<template>
  <div class="Account">
    <!--header-end-->
    <div class="mui-content">
      <div class="settings-group">
        <div class="settings-item highlight right-arrow modification-face">
          <a href="#">
            <span class="face-img fl"><img :src="pots"></span>
            <em class="fr">修改头像</em>
          </a>
        </div>
        <div class="settings-item highlight right-arrow">
          <a href="#">
            <span class="name-icon">昵称</span>
            <em class="fr">{{myname}}</em>
          </a>
        </div>
        <div class="settings-item highlight right-arrow">
          <a href="#">
            <span class="mobile-icon">手机号</span>
            <em class="fr">{{user}}</em>
          </a>
        </div>
        <div class="settings-item highlight right-arrow">
          <a href="#">
            <span class="address-icon">收货地址</span>
          </a>
        </div>
        <div class="settings-item highlight right-arrow">
          <router-link :to="{name:'password'}">
            <span class="password-icon">密码修改</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "账户修改",
      user:'',
      myname:'高兴一下',
      pots:require('../assets/images/user_logo.jpg')
    };
  },
  mounted() {
    this.$emit("mytitle", this.title);
    this.$http({
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
      }, //post --要加
      url: "http://localhost:3000/ajx",
      method: "post",
      data: this.$qs.stringify({
        act: "showlogin"
      })
    }).then(res => {
      if (res.data.user) {
        let arr1 =res.data.user.slice(0,3)
        let arr2 =res.data.user.slice(7,11)
        this.user = arr1+'****'+ arr2
      }
    });
  }
};
</script>
<style scoped>
.mui-content {
  margin-top: 50px;
}
</style>
