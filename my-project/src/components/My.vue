<template>
  <div class="My">
    <div class="my-head">
      <div class="my-head-top">
        <router-link to="/Account-modification">
          <div class="my-head-face-box">
            <div class="my-head-face"><img :src="pots"></div>
          </div>
          <h1>{{user}}</h1>
        </router-link>
      </div>
      <div class="notice-box">
        <span class="notice-icon"><img src="../assets/images/notice-icon.png">
          <em>2</em>
        </span>
        <span>消息</span>
      </div>
    </div>
    <div class="mui-content">
      <!--栏目列表-->
      <div class="my-group clearfix">
        <div class="my-item" v-for="(item,index) in news" :key="index">
          <div class="my-item-box">
            <router-link :to="item.http">
              <span><img :src="item.img"></span>
              <h2>{{item.istitle}}</h2>
            </router-link>
          </div>
        </div>
      </div>
      <!--栏目列表-->
      <!--商家合作报名专区-->
      <div class="cooperation-link">
        <router-link to="/Registration-area">商家合作报名专区</router-link>
      </div>
      <!--商家合作报名专区-->
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: "",
      pots:require('../assets/images/user_logo.jpg'),
      news:[
        {http:'/Shopping-Cart',img:require('../assets/images/my-order.png'),istitle:'我的订单'},
        {http:'/My-footprints',img:require('../assets/images/my-footprints.png'),istitle:'我的足迹'},
        {http:'/My-Collection',img:require('../assets/images/my-collection.png'),istitle:'我的收藏'},
        {http:'/My-comments',img:require('../assets/images/my-comment.png'),istitle:'评论记录'},
        {http:'/Invitation-Award',img:require('../assets/images/my-reward.png'),istitle:'邀请奖励'},
        {http:'/Account-modification',img:require('../assets/images/my-account-modification.png'),istitle:'账号修改'},
        {http:'/Online-Service',img:require('../assets/images/my-feedback.png'),istitle:'问题反馈'},
        {http:'/Settings',img:require('../assets/images/my-set-up.png'),istitle:'综合设置'},
      ]
    };
  },
  mounted() {
    // console.log(/My-i/.test(this.$route.path));
    //  if(/My-i/.test(this.$route.path)){
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
          this.user = res.data.user;
          this.$store.dispatch("VIEW_LOGIN", "退出登录");
        }
      });
  }
};
</script>
