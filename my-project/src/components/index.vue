<template>
  <div class="index">
    <header class="header mui-bar mui-bar-nav hdbg">
      <router-link :to="{name:'Search'}" class="ind-search">
        <span>搜索想要的宝贝</span>
      </router-link>
      <div class="notice-box">
        <span class="notice-icon"><img :src="img1">
          <em>2</em>
        </span>
        <span>消息</span>
      </div>
    </header>
    <div class="banner" id="index-banner">
      <div class="banner-pics">
        <ul class="banner-pics-list OnSale-banner">
          <li v-for="(item,index) in img" :key="index">
            <a href="#"><img :src="item"  /></a>
          </li>
        </ul>
      </div>
      <ul class="banner-tit">
        <li class="on"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="mui-content">
      <!--秒杀--包邮--爆款必抢-->
      <div class="m-b-b-group clearfix">
        <div class="fl">
          <router-link :to="{name:'Seckill'}" class="miaosha" :style="{backgroundImage:'url(./static/images/miaosha.jpg)'}" >
            <div class="seckill-list-time">
              <span>05</span>:
              <span>34</span>:
              <span>25</span>
            </div>
          </router-link>
        </div>
        <div class="fr">
          <router-link :to="{name:'pieces'}" class="baoyou bg2"></router-link>
          <router-link :to="{name:'Hot'}" class="baokuanbiqiang bg3"></router-link>
        </div>
      </div>
      <!--秒杀--包邮--爆款必抢-->
      <!--栏目列表-->
      <div class="ind-column">
        <ul class="clearfix">
          <li v-for="(item,index) in mynews" :key="index">
            <router-link :to="item.http">
              <div class="ind-column-img"><img :src="item.img2"></div>
              <h2 :class="item.thisclass">{{item.text1}}</h2>
              <p>{{item.text2}}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <!--栏目列表-->
      <!--合肥地区专属公告-->
      <div class="tg-banner">
        <router-link :to="{name:'Hefei'}"><img :src="img2"></router-link>
      </div>
      <!--合肥地区专属公告-->
      <!--产品列表-->
      <div class="ind-pro-list" v-for="(item,index) in news" :key="index">
        <div class="ind-pro-list-img">
          <router-link :to="{name:'details'}"><img :src="item.img1"></router-link>
          <span class="cart-btn">
            <router-link :to="{name:'details'}"></router-link>
          </span>
        </div>
        <div class="ind-pro-list-txt">
          <p>{{text}}</p>
          <span class="ind-more-btn"></span>
        </div>
        <div class="relation-list">
          <h2>关联推荐</h2>
          <ul class="clearfix">
            <li v-for="(item1,index) in title" :key="index">
              <a href="#">
                <span>{{item1.t1}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="ind-pro-tips">
          <span :class="item.thison1">263</span>
          <span :class="item.thison2">128</span>
          <span :class="item.thison3">分享</span>
        </div>
      </div>

      <!--产品列表-->

    </div>
  </div>
</template>


<script>
import TouchSlide from "../assets/js/TouchSlide.1.1";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      user: "123",
      img:[
        require('../assets/images/banner1.jpg'),
        require('../assets/images/banner2.jpg'),
        require('../assets/images/banner3.jpg'),
        require('../assets/images/banner640x386.jpg'),
        require('../assets/images/banner750x320.jpg'),
        require('../assets/images/baoyou.jpg'),
      ],
      mynews:[
        {http:{name:'Museum'},img2:require('../assets/images/ind-my.jpg'),thisclass:"ind-column-tit1",text1:'母婴馆',text2:'上千家母婴品牌限时特卖'},
        {http:'',img2:require('../assets/images/ind-mz.jpg'),thisclass:"ind-column-tit2",text1:'美妆馆',text2:'美妆个护  |  面部护理套装'},
        {http:'',img2:require('../assets/images/ind-bh.jpg'),thisclass:"ind-column-tit3",text1:'百货馆',text2:'价格实惠,诚信可靠!'},
        {http:{name:'Activity'},img2:require('../assets/images/ind-sgzy.jpg'),thisclass:"ind-column-tit4",text1:'首购自营',text2:'全场100%正品保障!'},
      ],
      news:[
        {img1:require('../assets/images/d_sp_02.png'),thison1:'ind-guanzhu on',thison2:'ind-shoucang on',thison3:'ind-fenxiang on',},
        {img1:require('../assets/images/d_sp_03.png'),thison1:'ind-guanzhu',thison2:'ind-shoucang',thison3:'ind-fenxiang',},
        {img1:require('../assets/images/d_sp_04.png'),thison1:'ind-guanzhu on',thison2:'ind-shoucang on',thison3:'ind-fenxiang on',},
        {img1:require('../assets/images/d_sp_05.png'),thison1:'ind-guanzhu',thison2:'ind-shoucang',thison3:'ind-fenxiang',},
      ],
      title:[
        {t1:'编辑精选'},
        {t1:'个护彩妆'},
        {t1:'玉兰油'},
      ],
      text:'冻龄肌秘密，欧莱雅玻尿酸系列25岁是女孩跨入女人的阶段，也是女生最美好的时期。爱情事业都处于双赢时刻，但同时伴随的困扰就是，肌肤初老症状开始出现。新陈代谢慢了，皮肤也总觉得缺水，且干纹细纹都开始出现。就是因为玻尿酸的流失哦！！玻尿酸在护肤中一直很受追捧，相信很多姑娘冻龄肌秘密，欧莱雅玻尿酸系列25岁是女孩跨入女人的阶段，也是女生最美好的时期。爱情事业都处于双赢时刻，但同时伴随的困扰就是，肌肤初老症状开始出现。新陈代谢慢了，皮肤也总觉得缺水，且干纹细纹都开始出现。就是因为玻尿酸的流失哦！！玻尿酸在护肤中一直很受追捧，相信很多姑娘',
      img1:require('../assets/images/notice-icon.png'),
      img2:require('../assets/images/tg-banner.jpg'),
    };
  },
  mounted() {
    var myTouchSlide = new TouchSlide({
      slideCell: "#index-banner",
      titCell: ".banner-tit li", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
      mainCell: ".banner-pics-list",
      effect: "left",
      autoPlay: true //自动播放
      //autoPage:true, //自动分页
    });
    $(window).bind("scroll", function() {
      if ($(document).scrollTop() > 100) {
        $(".hdbg").css({ "background-color": "#dd2727", transition: "0.4s" });
      } else {
        $(".hdbg").css({
          "background-color": "transparent",
          transition: "0.4s"
        });
      }
    });
    $(".ind-pro-list").each(function() {
      var self = $(this);
      self.find(".ind-more-btn").click(function() {
        $(this)
          .prev()
          .toggleClass("height-auto");
      });
    });
    mui.init({
      swipeBack: true //启用右滑关闭功能
    });

    if (!this.user) {
      this.$router.push("/Sign-in");
    }
  }
};
</script>

<style scoped>
html,
body,
.mui-content {
  max-width: 100%;
}
.mui-bar-nav ~ .mui-content {
  padding-top: 0;
}
.hot-pro-bot-box {
  margin-top: 40px;
}
.hot-pro-nav {
  border-bottom: 1px solid #dd2727;
}
.mui-icon-back:before,
.mui-icon-left-nav:before {
  background-image: url("../assets/images/h-back-white.png");
}
.mui-bar {
  height: 50px;
  background-color: transparent;
  border-bottom: none;
}
.notice-box span.notice-icon em {
  background-color: #dd2727;
  color: #fff;
}
.banner .banner-pics .banner-pics-list li img {
  display: block;
  width: 100%;
  height: 230px;
}
.index {
  margin-bottom: 50px;
}
.m-b-b-group div.fl a.miaosha.bg1 {
  background-image: url("../assets/images/miaosha.jpg");
}
.baoyou.bg2 {
  background-image: url("../assets/images/baoyou.jpg");
}
.baokuanbiqiang.bg3 {
  background-image: url("../assets/images/baokuanbiqiang.jpg");
}
</style>
