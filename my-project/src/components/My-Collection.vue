<template>
  <div class="My-Collection">
    <header class="header mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click='goback1' target="_self"></a>
      <h1 class="mui-title">我的收藏</h1>
      <span class="my-collection-delete"></span>
      <div class="am-dropdown">
        <span class="am-btn am-dropdown-toggle" v-adp>
          <em class="header-notice-tips"></em>
        </span>
        <ul class="am-dropdown-content">
          <li class="clearfix">
            <a href="#">
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
    <!--header-end-->

    <div class="mui-content">

      <div class="my-collection-page">
        <span>
          <a class="my-collection-pagelink" href="#">精选推荐</a>
        </span>
        <span>
          <a href="#">超级返</a>
        </span>
      </div>

      <!-- <div class="my-collection-nav">
        <div class="mui-scroll-wrapper">
          <ul class="mui-scroll">
            <li>
              <a class="my-collection-active" href="#">服饰</a>
            </li>
            <li>
              <a href="#">美妆</a>
            </li>
            <li>
              <a href="#">居家</a>
            </li>
            <li>
              <a href="#">生活</a>
            </li>
            <li>
              <a href="#">食品</a>
            </li>
            <li>
              <a href="#">美妆</a>
            </li>
            <li>
              <a href="#">居家</a>
            </li>
            <li>
              <a href="#">生活</a>
            </li>
            <li>
              <a href="#">食品</a>
            </li>
          </ul>
        </div>
      </div> -->
      <mynav></mynav>

      <div class="my-collection-con">
        <ul>
          <li class="my-footprints-item" v-for="(item,index) in news" :key="index">
            <a class="highlight" href="#">
              <div class="my-footprints-item-l"><img :src="item.img" style="width:100px;height:100px" /></div>
              <div class="my-footprints-item-r">
                <div class="my-footprints-item-tit">{{item.tit}}</div>
                <div class="my-footprints-item-tips">
                  <span>￥
                    <em>{{item.pieces}}</em>
                  </span>
                  <span class="tmall">{{item.oldpieces}}</span>
                  <span class="details-icon"><img :src="ftimg"></span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import mynav from './nav'

export default {
  data () {
    return {
        ftimg:require('../assets/images/details-icon.png'),
         news:[
           {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
           {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
           {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
           {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
           {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
           {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
           {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
           {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
         ]
    }
  },
  components: {
    mynav
  },
  methods: {
    goback1() {
      this.$router.go(-1);
    }
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
  }
};
</script>

<style scoped>
html,
body {
  background-color: #efeff4;
}
.mui-scroll-wrapper {
  left: 20px;
  right: 20px;
  width: auto;
}
.mui-bar-nav~.mui-content {
    padding-top: 85px;
}


</style>
