<template>
  <div class="Hefei">
    <div class="mui-content">
      <!--banner-->
      <ban></ban>
      <!--banner-->
      <!--商品列表-->
      <div class="area-pro">
        <div class="area-pro-tit">
          <h2>专享服务配送产品推荐</h2>
        </div>
        <p class="area-pro-tips">量贩装 更划算</p>
        <ul class="area-pro-list clearfix">
          <li v-for="(item,index) in news" :key="index">
            <a href="javascript:;">
              <div class="area-img" @click="additem(item.goodsid)"><img :src="item.img" ></div>
              <div class="area-tit">{{item.name}}</div>
              <div class="area-tips">
                <span>￥
                  <em>{{item.pieces}}</em>
                </span>
                <span class="tmall">{{item.oldpieces}}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!--商品列表-->
    </div>

  </div>
</template>

<script>
import ban from "./banner";
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      title: "合肥地区用户专属公告",
      news:[
        {goodsid:8,img:require('../assets/images/area-img.jpg'),name:'哈罗闪婴儿柔润护肤柔润护肤乳50ml',oldpieces:'天猫价：69.65元',pieces:'89.95'},
        {goodsid:8,img:require('../assets/images/area-img.jpg'),name:'哈罗闪婴儿柔润护肤柔润护肤乳50ml',oldpieces:'天猫价：69.65元',pieces:'89.95'},
        {goodsid:8,img:require('../assets/images/area-img.jpg'),name:'哈罗闪婴儿柔润护肤柔润护肤乳50ml',oldpieces:'天猫价：69.65元',pieces:'89.95'},
        {goodsid:8,img:require('../assets/images/area-img.jpg'),name:'哈罗闪婴儿柔润护肤柔润护肤乳50ml',oldpieces:'天猫价：69.65元',pieces:'89.95'},
        {goodsid:8,img:require('../assets/images/area-img.jpg'),name:'哈罗闪婴儿柔润护肤柔润护肤乳50ml',oldpieces:'天猫价：69.65元',pieces:'89.95'},
        {goodsid:8,img:require('../assets/images/area-img.jpg'),name:'哈罗闪婴儿柔润护肤柔润护肤乳50ml',oldpieces:'天猫价：69.65元',pieces:'89.95'},
        {goodsid:8,img:require('../assets/images/area-img.jpg'),name:'哈罗闪婴儿柔润护肤柔润护肤乳50ml',oldpieces:'天猫价：69.65元',pieces:'89.95'},
        {goodsid:8,img:require('../assets/images/area-img.jpg'),name:'哈罗闪婴儿柔润护肤柔润护肤乳50ml',oldpieces:'天猫价：69.65元',pieces:'89.95'},
        {goodsid:8,img:require('../assets/images/area-img.jpg'),name:'哈罗闪婴儿柔润护肤柔润护肤乳50ml',oldpieces:'天猫价：69.65元',pieces:'89.95'},
        {goodsid:8,img:require('../assets/images/area-img.jpg'),name:'哈罗闪婴儿柔润护肤柔润护肤乳50ml',oldpieces:'天猫价：69.65元',pieces:'89.95'},
        {goodsid:8,img:require('../assets/images/area-img.jpg'),name:'哈罗闪婴儿柔润护肤柔润护肤乳50ml',oldpieces:'天猫价：69.65元',pieces:'89.95'},
        {goodsid:8,img:require('../assets/images/area-img.jpg'),name:'哈罗闪婴儿柔润护肤柔润护肤乳50ml',oldpieces:'天猫价：69.65元',pieces:'89.95'},
      ],
    };
  },
  components: {
    ban
  },
  mounted() {
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
.mui-content {
  max-width: 100%;
  background-color: #ececec;
  margin: 45px 0 0px 0;
}

</style>


