<template>
  <div class="details">
     <header class="header mui-bar mui-bar-nav heade">
      <a class=" mui-icon mui-icon-left-nav mui-pull-left" href="javascript:history.go(-1)"></a>
      <!-- <h1 class="mui-title">9.9包邮</h1> -->
       <router-link :to="{ name:'Cart'}" tag='div' class="shopping-cart-notice">
        <em>{{number}}</em>
      </router-link>
      <div class="am-dropdown">
        <span class="am-btn am-dropdown-toggle" v-adp>
          <em class="header-notice-tips"></em>
        </span>
        <ul class="am-dropdown-content">
          <li class="clearfix">
            <a href="javascript:void(0)">
              <i><img src="../assets/images/header-notice.png"></i>消息
              <em class="header-notice-tips fr"></em>
            </a>
          </li>
          <li>
            <router-link to="/index">
              <i><img src="../assets/images/header-home.png"></i>首页</router-link>
          </li>
        </ul>
      </div>
    </header>

    <div class="mui-content">
      <!--图文信息-->
      <div class="cash-back-details bigimg">
        <img :src="news.img1">
      </div>
      <div class="cash-back-tit-content">
        <div class="cash-back-tit">
          <h2>{{news.text1}}</h2>
          <span>{{news.text2}}</span>
        </div>
        <div class="cash-back-bot clearfix">
          <div class="comments-list-bot-price fl">
            <em>￥
              <b>{{news.pieces1}}</b>
            </em>
            <span>返</span>
            <strong>{{news.pieces2}}</strong>
          </div>
          <div class="fr clearfix">
            <div class="percentage-out">
              <div class="percentage-in" style="width:30%"></div>
              <em>{{news.percent}}</em>
            </div>
            <div class="cash-back-robbed">已抢
              <em>{{news.num}}</em>件</div>
          </div>
        </div>
      </div>
      <!--图文信息-->
      <!--图文详情-->
      <div class="cash-back-details-content">
        <div class="cash-back-details-box">
          <h2>{{news.text3}}</h2>
          <p>{{news.text4}}</p>
          <img :src="news.img2">
        </div>
      </div>
      <!--图文详情-->
      <!--购买流程--关注微信-->
      <div class="sales-process"><img :src="news.img3"></div>
      <div class="add-weixin">
        <p><img :src="news.img4">{{news.text5}}</p>
      </div>
      <!--购买流程--关注微信-->
      <!--评论-->
      <div class="all-comments">
        <div class="all-comments-tit">全部评论(10)</div>
        <div class="all-comments-list" v-for="(item,index) in news.news1" :key="index">
          <div class="all-comments-list-img"><img :src="item.img5"></div>
          <div class="all-comments-list-txt">
            <div class="user-name">{{item.user}}</div>
            <div class="comments-bot clearfix">
              <div class="comments-content fl">{{item.content}}</div>
              <div class="huifu fr">
                <span>回复</span>
              </div>
            </div>
          </div>
        </div>
        <div class="open-more">
          <span>展开全部</span>
        </div>
      </div>
      <!--评论-->
    </div>
    <footer class="footer mui-bar-tab display-box-middle" id="footer">
      <div class="Cash-back-details-l">
        <span class="icon-guanzhu">263</span>
        <span class="icon-xinxi">10</span>
        <span class="icon-fenxiang">分享</span>
      </div>
      <div class="Cash-back-details-r">
        <a href="javascript:;" @click="additem(news.goodsid);mynum()">加入购物车</a>
      </div>
    </footer>
    <!--footer-end-->
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';


export default {
  data () {
    return {
      news:{
        goodsid:9,
        img1:require('../assets/images/cash-back-banner.jpg'),
        img2:require('../assets/images/cash-back-details-img.jpg'),
        img3:require('../assets/images/sales-process-bg.jpg'),
        img4:require('../assets/images/add-weixin-icon.png'),
        text1:'古尔莎（Gulsha1）晨露玫瑰滋养套装',
        text2:'让肌肤沐浴在玫瑰花丛中，肌肤享受恋爱与呵护',
        text3:'优惠力度：',
        text4:'雅诗兰黛 (Estee Lauder）特润修护肌透精华露50ml（金猴贺岁限量版），前沿革新修护科技显著淡化各种时光印记，在修护受损肌肤的同时，帮助肌肤加强自我修复能力，重建防护屏障；夜晚 修护看不到的隐形损伤，具有强大锁水保湿力，立现年轻光彩！',
        text5:'"首购，就是省"！关注首购网官方微信：*****（点击复制后打开微信粘贴），不定期推送更多专属优惠福利哦。',
        pieces1:'198',
        pieces2:'11.84',
        percent:'24%',
        num:'2371',
        news1:[
          {img5:require('../assets/images/all-comments-face-img.jpg'),user:'花开话罗1',content:'主要奔着四大功效去的，希望有效果。主要奔着四大功效去的，希望有效果。'},
          {img5:require('../assets/images/all-comments-face-img.jpg'),user:'花开话罗2',content:'主要奔着四大功效去的，希望有效果。主要奔着四大功效去的，希望有效果。'},
          {img5:require('../assets/images/all-comments-face-img.jpg'),user:'花开话罗3',content:'主要奔着四大功效去的，希望有效果。主要奔着四大功效去的，希望有效果。'},
          {img5:require('../assets/images/all-comments-face-img.jpg'),user:'花开话罗4',content:'主要奔着四大功效去的，希望有效果。主要奔着四大功效去的，希望有效果。'},
          ],
      },
      number:'' ,
    }
  },
   mounted() {
      $(window).bind("scroll", function() {
        if ($(document).scrollTop() > 100) {
          $(".heade").css({ "background-color": "#dd2727", transition: "0.4s" });
          $("em.header-notice-tips").css({
            "background-color": "#fff",
            transition: "0.4s"
          });
        } else {
          $(".heade").css({
            "background-color": "transparent",
            transition: "0.4s"
          });
          $("em.header-notice-tips").css({
            "background-color": "#dd2727",
            transition: "0.4s"
          });
        }
      });
      this.number = this.id.length
  },
  methods: {
     ...mapActions([
      'additem'
    ]),
    goback() {
      this.$router.go(-1);
    },
    mynum(){
      this.number = this.id.length
    },
  },
  directives: {
    adp: {
      // 指令的定义
      inserted(el) {
        el.onclick = function() {
          if ($(".am-dropdown.am-active")[0] != undefined) {
            $(".am-dropdown").removeClass("am-active");
          } else {
            $(".am-dropdown").addClass("am-active");
          }
        };
      }
    }
  },
   computed: {
      ...mapGetters([
        'id'
      ])
    },
};
</script>
<style scoped>
.header {
  background-color: #dd2727;
  border-bottom: none;
  background-color: transparent;
}
.mui-bar-nav ~ .mui-content {
  padding-top: 0;
}
.cash-back-details {
  height: 100%;
}
em.header-notice-tips {
  background-color: #fff;
}
.am-dropdown .am-btn {
  background-image: url("../assets/images/h-notice-white-icon.png");
}
.mui-icon-back,
.mui-icon-left-nav {
  background-image: url("../assets/images/h-back-white.png");
}

</style>
