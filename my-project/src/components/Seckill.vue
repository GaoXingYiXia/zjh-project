<template>
  <div class="Seckill">
    <!--header-end-->
    <div class="mui-content" id="slider">
      <mynav1 :tit="title"></mynav1>

      <div class="hot-pro-bot-box">
        <a class="seckill-list" v-for="(item,index) in news" :key="index">
          <div class="seckill-list-l"><img :src="item.img"></div>
          <div class="seckill-list-r">
            <div class="seckill-list-top">
              <h2>{{item.text1}}</h2>
              <span>{{item.text2}}</span>
            </div>
            <div class="seckill-list-center clearfix">
              <div class="seckill-list-time fl">
                <span>{{item.h}}</span>:
                <span>{{item.m}}</span>:
                <span>{{item.s}}</span>
              </div>
              <div class="seckill-list-robbed fr">{{item.text3}}</div>
            </div>
            <div class="seckill-list-bot clearfix">
              <div class="fl">
                <span class="seckill-price">￥
                  <em>{{item.pieces}}</em>
                </span>
                <del class="sales-volume">{{item.oldpieces}}</del>
              </div>
              <span class="fr msq" @click="additem(item.goodsid)">马上抢></span>
            </div>
          </div>
        </a>
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
      title: "每日秒杀",
      news:[
        {goodsid:2,img:require('../assets/images/seckill-img.jpg'),text1:'不锈钢保温杯男女士水杯子',text2:'保温24小时 抢到赚到',text3:'已抢2371件',pieces:'58',oldpieces:'天猫价:108.4元',h:'05',m:'34',s:'25'},
        {goodsid:2,img:require('../assets/images/seckill-img.jpg'),text1:'不锈钢保温杯男女士水杯子',text2:'保温24小时 抢到赚到',text3:'已抢2371件',pieces:'58',oldpieces:'天猫价:108.4元',h:'05',m:'34',s:'25'},
        {goodsid:2,img:require('../assets/images/seckill-img.jpg'),text1:'不锈钢保温杯男女士水杯子',text2:'保温24小时 抢到赚到',text3:'已抢2371件',pieces:'58',oldpieces:'天猫价:108.4元',h:'05',m:'34',s:'25'},
        {goodsid:2,img:require('../assets/images/seckill-img.jpg'),text1:'不锈钢保温杯男女士水杯子',text2:'保温24小时 抢到赚到',text3:'已抢2371件',pieces:'58',oldpieces:'天猫价:108.4元',h:'05',m:'34',s:'25'},
        {goodsid:2,img:require('../assets/images/seckill-img.jpg'),text1:'不锈钢保温杯男女士水杯子',text2:'保温24小时 抢到赚到',text3:'已抢2371件',pieces:'58',oldpieces:'天猫价:108.4元',h:'05',m:'34',s:'25'},
        {goodsid:2,img:require('../assets/images/seckill-img.jpg'),text1:'不锈钢保温杯男女士水杯子',text2:'保温24小时 抢到赚到',text3:'已抢2371件',pieces:'58',oldpieces:'天猫价:108.4元',h:'05',m:'34',s:'25'},
      ]
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
  margin-bottom: 50px;
}
.mui-scroll-wrapper {
  top: 0px;
  height: 40px;
  width: auto;
  right: 10px;
}
.mui-content {
  margin-top: 130px;
}
</style>
