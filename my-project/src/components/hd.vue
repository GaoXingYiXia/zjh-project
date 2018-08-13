<template>
  <div class="hd">
    <header class="header mui-bar mui-bar-nav">
      <a class=" mui-icon mui-icon-left-nav mui-pull-left" href="javascript:history.go(-1)"></a>
      <!-- <h1 class="mui-title">9.9包邮</h1> -->
       <router-link :to="{ name:'Cart'}" tag='div' class="shopping-cart-notice">
        <em>{{number1>=number?number1:number}} </em>
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
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      number1:'',
      off:false,
    }
  },
  props: ['number'],
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
      ]),
    },
  mounted () {
      this.number1 = this.id.length
  }
};
</script>


<style scoped>
.header {
  background-color: #dd2727;
  border-bottom: none;
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
