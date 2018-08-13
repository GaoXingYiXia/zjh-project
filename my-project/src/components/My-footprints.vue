<template>
  <div class="footprints">
    <!--header-end-->
    <div class="mui-content">
      <!--商品列表-->
      <div class="my-footprints-group" v-for="(item,index) in news" :key="index">

        <div class="my-footprints-date">
          <span>{{item.data}}</span>
        </div>`
        <div class="my-footprints-item" v-for="(item1,index1) in item.news1" :key="index1">
          <a class="highlight" href="#">
            <div class="my-footprints-item-l"><img :src="item1.img" style="width:100px;height:100px"></div>
            <div class="my-footprints-item-r">
              <div class="my-footprints-item-tit">{{item1.tit}}</div>
              <div class="my-footprints-item-tips">
                <span>￥
                  <em>{{item1.pieces}}</em>
                </span>
                <span class="tmall">{{item1.oldpieces}}</span>
              </div>
            </div>
          </a>
        </div>

      </div>
      <!--商品列表-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "我的足迹",
      news:[
        { data:'2月29日',
          news1:[
            {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
            {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
            {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
            {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
          ]
        },{ data:'2月28日',
          news1:[
            {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
            {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
            {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
            {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
          ]
        },{ data:'2月27日',
          news1:[
            {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
            {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
            {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
            {img:require('../assets/images/footprints-img.jpg'),tit:'卓诗尼专柜同款2016春季新款圆头平跟单鞋女松糕底女鞋中跟乐福鞋',pieces:'128',oldpieces:'天猫价：239元',},
          ]
        },
      ]
    };
  },
  mounted() {
    this.$emit("mytitle", this.title);
  }
};
</script>
<style scoped>
.mui-content {
  margin-top: 50px;
}
</style>



