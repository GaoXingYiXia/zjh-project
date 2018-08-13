<template>
  <header class="header mui-bar mui-bar-nav">
    <a class="mui-icon mui-icon-left-nav mui-pull-left"  @click="goback"></a>
    <!-- <h1 class="mui-title">我的评论</h1> -->
    <slot name="mytext"></slot>
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
</template>

<script>
export default {
  methods: {
    goback() {
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
          let myon = setTimeout(() => {
            $(".am-dropdown").removeClass("am-active");
            clearTimeout(myon);
          }, 1500);
        };
      }
    }
  }
};
</script>


