<template>
  <div class="Nine-pieces">
    <!--header-end-->
    <div class="mui-content" id="slider">
     <mynav1 :tit="title"></mynav1>
      <div class="hot-pro-bot-box">
        <!--爆款列表-->
        <div class="nine-pieces-group">
          <ul class="clearfix">
            <li class="fl" v-for="(item,index) in news" :key="index">
              <a href="#">
                <div class="nine-pieces-img" @click="additem(item.goodsid)"></div>
                <div class="nine-pieces-txt">
                  <div class="nine-pieces-txt-tit">{{item.text1}}</div>
                  <div class="nine-pieces-price clearfix">
                    <span class="fl">￥
                      <em>{{item.pieces}}</em>
                    </span>
                    <span class="fr">{{item.oldpieces}}</span>
                  </div>
                  <div class="nine-pieces-tips clearfix">
                    <span class="fl">包邮</span>
                    <span class="fr">已售
                      <em>{{item.num}}</em>件</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
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
    mynav1,
  },
  data() {
    return {
      title: "9.9包邮",
      news:[
        {goodsid:3,text1:'景德镇陶瓷器 碗套装景德镇陶瓷器 碗套装',pieces:'5.6',oldpieces:'天猫价：69.9元',num:'2371'},
        {goodsid:3,text1:'景德镇陶瓷器 碗套装景德镇陶瓷器 碗套装',pieces:'5.6',oldpieces:'天猫价：69.9元',num:'2371'},
        {goodsid:3,text1:'景德镇陶瓷器 碗套装景德镇陶瓷器 碗套装',pieces:'5.6',oldpieces:'天猫价：69.9元',num:'2371'},
        {goodsid:3,text1:'景德镇陶瓷器 碗套装景德镇陶瓷器 碗套装',pieces:'5.6',oldpieces:'天猫价：69.9元',num:'2371'},
        {goodsid:3,text1:'景德镇陶瓷器 碗套装景德镇陶瓷器 碗套装',pieces:'5.6',oldpieces:'天猫价：69.9元',num:'2371'},
        {goodsid:3,text1:'景德镇陶瓷器 碗套装景德镇陶瓷器 碗套装',pieces:'5.6',oldpieces:'天猫价：69.9元',num:'2371'},
      ]
    };
  },
  mounted() {
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
    this.$emit("mytitle", this.title);
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
}
.mui-scroll-wrapper {
  top: 0;
  height: 40px;
  width: auto;
  right: 10px;
}
.hot-pro-bot-box {
  margin-top: 120px;
}
.nine-pieces-img {
  background-image: url("../assets/images/nine-pieces-img.jpg");
}
.mui-content {
  margin-top: 85px;
}
</style>
