<template>
  <div class="banner" id="index-banner">
    <div class="banner-pics">
      <ul class="banner-pics-list OnSale-banner">
        <li v-for="(item,index) in img" :key = "index">
          <a href="javascript:void(0)"><img :src="item"  /></a>
        </li>
      </ul>
    </div>
    <ul class="banner-tit">
      <li class="on"></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

 <script>
import TouchSlide from "../assets/js/TouchSlide.1.1";

export default {
  data () {
    return {
      img:[
        require('../assets/images/banner1.jpg'),
        require('../assets/images/banner2.jpg'),
        require('../assets/images/banner3.jpg')
      ]
    }
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
  }
};
</script>




