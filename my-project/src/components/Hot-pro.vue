<template>
  <div class="Hot">
    <!--header-end-->
    <div class="mui-content" id="slider">
      <mynav1 :tit="title"></mynav1>

      <div class="hot-pro-bot-box">
        <!--爆款列表-->
        <a herf="javascrit:;" class="hot-pro-list" v-for="(item,index) in news" :key="index">
          <div class="hot-pro-list-l"><img :src="item.img"></div>
          <div class="hot-pro-list-r">
            <div class="hot-pro-list-r-top">
              <h2>{{item.text1}}</h2>
              <span>{{item.keyword}}</span>
            </div>
            <div class="hot-pro-list-r-bot">
              <div class="hot-pro-price">
                <span>￥
                  <em>{{item.pieces}}</em>
                </span>
              </div>
              <div class="tmall-price">
                <div class="tmall-rmb">{{item.oldpieces}}</div>
                <div class="tmall-pay">
                  <em>{{item.num}}</em>件已付款</div>
              </div>
              <div class="rob-btn" @click="additem(item.goodsid)">抢!</div>
            </div>
          </div>
        </a>
        <!--爆款列表-->
      </div>
    </div>
  </div>
</template>


<script>
import mynav1 from "./nav1";
import {mapActions} from 'vuex';

export default {
   components: {
    mynav1
  },
  data() {
    return {
      title: "爆款必抢",
      news:[
        {goodsid:4,img:require('../assets/images/hot-pro-img.jpg'),text1:'厚底运动松糕板鞋',keyword:'2016新品 真材实料 运动休闲 时尚百搭 潮流',pieces:'58',oldpieces:'天猫价：69.9元',num:'2371'},
        {goodsid:4,img:require('../assets/images/hot-pro-img.jpg'),text1:'厚底运动松糕板鞋',keyword:'2016新品 真材实料 运动休闲 时尚百搭 潮流',pieces:'58',oldpieces:'天猫价：69.9元',num:'2371'},
        {goodsid:4,img:require('../assets/images/hot-pro-img.jpg'),text1:'厚底运动松糕板鞋',keyword:'2016新品 真材实料 运动休闲 时尚百搭 潮流',pieces:'58',oldpieces:'天猫价：69.9元',num:'2371'},
        {goodsid:4,img:require('../assets/images/hot-pro-img.jpg'),text1:'厚底运动松糕板鞋',keyword:'2016新品 真材实料 运动休闲 时尚百搭 潮流',pieces:'58',oldpieces:'天猫价：69.9元',num:'2371'},
        {goodsid:4,img:require('../assets/images/hot-pro-img.jpg'),text1:'厚底运动松糕板鞋',keyword:'2016新品 真材实料 运动休闲 时尚百搭 潮流',pieces:'58',oldpieces:'天猫价：69.9元',num:'2371'},
        {goodsid:4,img:require('../assets/images/hot-pro-img.jpg'),text1:'厚底运动松糕板鞋',keyword:'2016新品 真材实料 运动休闲 时尚百搭 潮流',pieces:'58',oldpieces:'天猫价：69.9元',num:'2371'},
        {goodsid:4,img:require('../assets/images/hot-pro-img.jpg'),text1:'厚底运动松糕板鞋',keyword:'2016新品 真材实料 运动休闲 时尚百搭 潮流',pieces:'58',oldpieces:'天猫价：69.9元',num:'2371'},
      ],
    };
  },
  mounted() {
    this.$emit("mytitle", this.title);
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
  }
};
</script>

<style scoped>
html,
body,
.mui-content {
  max-width: 100%;
  margin-top: 125px;
}
.mui-scroll-wrapper {
  top: 0px;
  height: 40px;
  width: auto;
  right: 10px;
}
</style>
