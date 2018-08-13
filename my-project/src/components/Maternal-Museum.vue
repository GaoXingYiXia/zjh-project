<template>
  <div class="Museum">
    <!--header-end-->
    <div class="mui-content">
      <!--Banner-->
      <ban></ban>
      <!--banner-end-->
      <!--栏目列表开始-->
      <div id="picScroll" class="maternal-museum-group">
        <div class="hd">
          <span class="next"></span>
          <ul style="display:none;"></ul>
          <span class="prev"></span>
        </div>
        <div class="bd">
          <ul class="clearfix">
            <li v-for="(item,index) in news" :key="index">
              <a href="javascript:;">
                <span @click="additem(item.goodsid)"><img :src="item.img"></span>
                <span>{{item.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--栏目列表结束-->

      <div class="zones-group">
        <!--专区1-->
        <div class="zones-item">
          <div class="zones-item-tit">洗护专区</div>
          <ul class="zones-list clearfix">
            <li v-for="(item1,index1) in news1" :key="index1">
              <a href="javascript:;">
                <div class="zones-list-img" @click="additem(item1.goodsid)"><img :src="item1.img"></div>
                <div class="zones-list-txt">
                  <h2>{{item1.text1}}</h2>
                  <em>￥
                    <strong>{{item1.pieces}}</strong>
                  </em>
                  <span>{{item1.oldpieces}}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <!--专区1-->
        <!--专区2-->
        <div class="zones-item">
          <div class="zones-item-tit">纸尿裤专区</div>
          <ul class="zones-list clearfix">
            <li v-for="(item2,index2) in news2" :key="index2">
              <a href="javascript:;">
                <div class="zones-list-img" @click="additem(item2.goodsid)"><img :src="item2.img"></div>
                <div class="zones-list-txt">
                  <h2>{{item2.text1}}</h2>
                  <em>￥
                    <strong>{{item2.pieces}}</strong>
                  </em>
                  <span>{{item2.oldpieces}}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <!--专区2-->
      </div>

    </div>
  </div>
</template>

<script>
import ban from "./banner";
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      title: "母婴馆",
      news:[
        {goodsid:5,img:require('../assets/images/maternal-museum-img.jpg'),name:'妈咪宝贝'},
        {goodsid:6,img:require('../assets/images/pro-img-small.jpg'),name:'帮宝适'},
        {goodsid:5,img:require('../assets/images/maternal-museum-img.jpg'),name:'妈咪宝贝'},
        {goodsid:6,img:require('../assets/images/pro-img-small.jpg'),name:'帮宝适'},
        {goodsid:5,img:require('../assets/images/maternal-museum-img.jpg'),name:'妈咪宝贝'},
        {goodsid:6,img:require('../assets/images/pro-img-small.jpg'),name:'帮宝适'},
        {goodsid:5,img:require('../assets/images/maternal-museum-img.jpg'),name:'妈咪宝贝'},
        {goodsid:6,img:require('../assets/images/pro-img-small.jpg'),name:'帮宝适'},
        {goodsid:5,img:require('../assets/images/maternal-museum-img.jpg'),name:'妈咪宝贝'},
        {goodsid:6,img:require('../assets/images/pro-img-small.jpg'),name:'帮宝适'},
        {goodsid:5,img:require('../assets/images/maternal-museum-img.jpg'),name:'妈咪宝贝'},
        {goodsid:6,img:require('../assets/images/pro-img-small.jpg'),name:'帮宝适'},
      ],
      news1:[
          {goodsid:7,img:require('../assets/images/zones-img.jpg'),text1:'哈罗闪婴儿',pieces:'89',oldpieces:'天猫价：69.9元'},
          {goodsid:7,img:require('../assets/images/zones-img.jpg'),text1:'哈罗闪婴儿',pieces:'89',oldpieces:'天猫价：69.9元'},
          {goodsid:7,img:require('../assets/images/zones-img.jpg'),text1:'哈罗闪婴儿',pieces:'89',oldpieces:'天猫价：69.9元'},
      ],
      news2:[
          {goodsid:7,img:require('../assets/images/zones-img.jpg'),text1:'哈罗闪婴儿',pieces:'89',oldpieces:'天猫价：69.9元'},
          {goodsid:7,img:require('../assets/images/zones-img.jpg'),text1:'哈罗闪婴儿',pieces:'89',oldpieces:'天猫价：69.9元'},
          {goodsid:7,img:require('../assets/images/zones-img.jpg'),text1:'哈罗闪婴儿',pieces:'89',oldpieces:'天猫价：69.9元'},
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
  margin: 45px 0 0 0;
}
</style>



