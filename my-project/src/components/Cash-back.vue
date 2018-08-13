<template>
  <div class="back">
    <div id="header" class="search-head header mui-bar mui-bar-nav">
      <h1 class="mui-title">超级返</h1>
      <div class="notice-box">
        <span class="notice-icon"><img src="../assets/images/notice-icon.png">
          <em>2</em>
        </span>
        <span>消息</span>
      </div>
    </div>

    <!--header-end-->
    <div class="mui-content">
      <!--导航-->
      <mynav></mynav>
      <!--导航-->
      <!--Banner-->
      <ban></ban>
      <!--banner-end-->
      <!--排序-->
      <sort></sort>
      <!--排序-->
      <!--活动列表-->
      <div class="cash-back-group">
        <div class="cash-back-item" v-for="(item,index) in news " :key="index">
          <div class="cash-back-img">
            <router-link :to="item.http">
              <img :src="item.img">
            </router-link>
          </div>
          <div class="cash-back-tit">
            <router-link :to="item.http">
              <h2>{{item.text1}}</h2>
              <span>{{item.text2}}</span>
            </router-link>
          </div>
          <div class="cash-back-bot clearfix">
            <div class="comments-list-bot-price fl">
              <em>￥
                <b>{{item.pieces1}}</b>
              </em>
              <span>返</span>
              <strong>{{item.pieces2}}</strong>
            </div>
            <div class="fr clearfix">
              <div class="percentage-out">
                <div class="percentage-in" style="width:30%"></div>
                <em>{{item.percent}}</em>
              </div>
              <div class="cash-back-robbed">已抢
                <em>{{item.num}}</em>件</div>
            </div>
          </div>
        </div>
      </div>
      <!--活动列表-->
    </div>
  </div>
</template>


<script>
import ban from "./banner";
import mynav from "./nav";
import sort from "./sort";


export default {
  data () {
    return {
      news:[
        {http:'/details',img:require('../assets/images/cash-back-img.jpg'),text1:'古尔莎（Gulsha1）晨露玫瑰滋养套装',text2:'让肌肤沐浴在玫瑰花丛中，肌肤享受恋爱与呵护',pieces1:'198',pieces2:'11.84',percent:'24%',num:'2371'},
        {http:'/details',img:require('../assets/images/cash-back-img.jpg'),text1:'古尔莎（Gulsha2）晨露玫瑰滋养套装',text2:'让肌肤沐浴在玫瑰花丛中，肌肤享受恋爱与呵护',pieces1:'198',pieces2:'11.84',percent:'24%',num:'2371'},
        {http:'/details',img:require('../assets/images/cash-back-img.jpg'),text1:'古尔莎（Gulsha3）晨露玫瑰滋养套装',text2:'让肌肤沐浴在玫瑰花丛中，肌肤享受恋爱与呵护',pieces1:'198',pieces2:'11.84',percent:'24%',num:'2371'},
        {http:'/details',img:require('../assets/images/cash-back-img.jpg'),text1:'古尔莎（Gulsha4）晨露玫瑰滋养套装',text2:'让肌肤沐浴在玫瑰花丛中，肌肤享受恋爱与呵护',pieces1:'198',pieces2:'11.84',percent:'24%',num:'2371'},
        {http:'/details',img:require('../assets/images/cash-back-img.jpg'),text1:'古尔莎（Gulsha5）晨露玫瑰滋养套装',text2:'让肌肤沐浴在玫瑰花丛中，肌肤享受恋爱与呵护',pieces1:'198',pieces2:'11.84',percent:'24%',num:'2371'},
      ]
    }
  },
  components: {
    ban,
    mynav,
    sort
  }
};
</script>




<style scoped>
html,
body,
.mui-content {
  max-width: 100%;
}
.mui-scroll-wrapper {
  height: 40px;
  width: auto;
  right: 10px;
}
.hot-pro-bot-box {
  margin-top: 40px;
}
.mui-icon-back:before,
.mui-icon-left-nav:before {
  background-image: url("../assets/images/h-back-white.png");
}
.mui-bar {
  background-color: #dd2727;
  border-bottom: none;
}
.mui-title {
  height: 50px;
  line-height: 50px;
}
.header h1 {
  color: #fff;
}
.banner {
  margin-top: 40px;
}
.cash-back-group {
  margin-bottom: 60px
}

</style>


