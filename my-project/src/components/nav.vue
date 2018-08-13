<template>
  <div class="nav">
  <!--导航-->
    <div class="nav-out">
      <div class="hot-pro-nav">
        <div class="mui-scroll-wrapper">
          <ul class="mui-scroll clearfix">
            <li v-for="(item,index) in news"  :key="index">
              <router-link :to="path+'/00'+ index" activeClass="active"> {{item}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--导航-->
    <!--折叠展开列表内容-->
    <div class="nav-con">
      <ul class="clearfix">
        <li v-for="(item1,index1) in news1"  :key="index1">
          <a href="javascript:void(0)">{{item1}}</a>
        </li>

      </ul>
    </div>
    <!--折叠展开列表内容-->
  </div>
</template>

<style scoped>

.mui-scroll-wrapper {
  height: 40px;
  width: auto;
  right: 10px;
}
 .nav-out {
  position: fixed;
  top: 45px;
}
.nav-con {
  top: 90px;
  bottom: 53px;
}
</style>

<script>

export default {
  data () {
    return {
      path:'',
      news:['全部','服饰','美妆','居家','食品','全部','服饰','美妆','居家','食品','全部','服饰','美妆','居家','食品'],
      news1:['全部','服饰','美妆','居家','食品','全部','服饰','美妆','居家','食品','全部','服饰','美妆','居家','食品']
    }
  },
  mounted() {
    this.path = this.$route.path+'1';
    // this.$router.push(this.path+'/000') //初始‘全部’ 选中
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
  }
};
</script>
