<template>
  <div class="Activity">
    <!--header-end-->
    <div class="mui-content">
      <!--导航-->
      <mynav></mynav>
      <ban></ban>
      <!--banner-end-->

      <div class="activity-con  mui-scroll-wrapper1">
        <!--活动列表-->
        <div class="activity-group" v-for="(item,index) in news" :key="index">
          <div class="activity-group-tit">
            <a name="1f">
              <span>
                <em>{{item.floor}}</em>{{item.name}}</span>
            </a>
          </div>
          <ul class="clearfix">
            <li v-for="(item1,index1) in item.news1" :key="index1">
              <a href="javascript:void(0)">
                <div class="activity-group-img ptoimg"></div>
                <div class="activity-group-txt">
                  <div class="activity-group-name">{{item1.name}}</div>
                  <div class="sales-volume">{{item1.sales}}</div>
                  <div class="sales-volume">{{item1.oldpieces}}</div>
                  <div class="activity-group-tips clearfix">
                    <div class="activity-price">￥
                      <em>{{item1.pieces}}</em>
                    </div>
                    <div class="shopping-cart-btn" @click="additem(item1.goodsid);mynum()"></div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <!--活动列表-->
      </div>
    </div>
  </div>
</template>

<script>
import ban from "./banner";
import mynav from "./nav";

import TouchSlide from "../assets/js/TouchSlide.1.1";
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  data () {
    return {
      news:[
        { floor:'lF',
          name:'家居',
          news1:[
            {goodsid:1,name:'恋人赢行包邮三对装 小兔耳朵立体发夹 可爱萌物儿童',sales:'月销2080件',oldpieces:'天猫价：69.9元',pieces:'6.5'},
            {goodsid:1,name:'恋人赢行包邮三对装 小兔耳朵立体发夹 可爱萌物儿童',sales:'月销2080件',oldpieces:'天猫价：69.9元',pieces:'6.5'},
            ]
        },{ floor:'2F',
          name:'服饰',
          news1:[
            {goodsid:1,name:'恋人赢行包邮三对装 小兔耳朵立体发夹 可爱萌物儿童',sales:'月销2080件',oldpieces:'天猫价：69.9元',pieces:'6.5'},
            {goodsid:1,name:'恋人赢行包邮三对装 小兔耳朵立体发夹 可爱萌物儿童',sales:'月销2080件',oldpieces:'天猫价：69.9元',pieces:'6.5'},
            ]
        },{ floor:'3F',
          name:'美妆',
          news1:[
            {goodsid:1,name:'恋人赢行包邮三对装 小兔耳朵立体发夹 可爱萌物儿童',sales:'月销2080件',oldpieces:'天猫价：69.9元',pieces:'6.5'},
            {goodsid:1,name:'恋人赢行包邮三对装 小兔耳朵立体发夹 可爱萌物儿童',sales:'月销2080件',oldpieces:'天猫价：69.9元',pieces:'6.5'},
            ]
        },{ floor:'4F',
          name:'生活',
          news1:[
            {goodsid:1,name:'恋人赢行包邮三对装 小兔耳朵立体发夹 可爱萌物儿童',sales:'月销2080件',oldpieces:'天猫价：69.9元',pieces:'6.5'},
            {goodsid:1,name:'恋人赢行包邮三对装 小兔耳朵立体发夹 可爱萌物儿童',sales:'月销2080件',oldpieces:'天猫价：69.9元',pieces:'6.5'},
            ]
        },
      ],
    }
  },
  components: {
    ban,mynav
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
    // console.log(mui);
    mui.init({
      swipeBack: true //启用右滑关闭功能
    });

    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      scrollY: false, //是否竖向滚动
      scrollX: true, //是否横向滚动
      startX: 0, //初始化时滚动至x
      startY: 0, //初始化时滚动至y
      bounce: true, //是否启用回弹
      bounceTime: 500, //回弹动画时间
      scrollTime: 500,
      directionLockThreshold: 5,
      indicators: false
    });
  },
  methods: {
    ...mapActions([
      'additem'
    ]),
     mynum(){
      this.$emit("mynum", this.id.length);
    },
  },
  computed: {
    ...mapGetters([
      'id'
    ])
  },


};
</script>

<style scoped>
html,
body,
.mui-content {
  max-width: 100%;
  background-color: #ececec;
  margin: 85px 0 0 0;
}
.mui-bar-nav ~ .mui-content {
  padding-top: 84px;
}
.mui-scroll-wrapper {
  height: 40px;
  width: auto;
  right: 10px;
}
.am-dropdown .am-btn {
  background-image: url("../assets/images/h-notice-white-icon.png");
}
.nav-out {
  position: fixed;
  top: 44px;
}
.ptoimg {
  background-image: url("../assets/images/activity-group-img.jpg");
}

</style>
