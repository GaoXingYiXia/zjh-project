<template>
  <div class="Classification">
    <div id="header" class="search-head header mui-bar mui-bar-nav">
      <div class="search-box">
        <input id="search" class="search-input" type="search" name="search" placeholder="搜索想要的宝贝">
      </div>
      <div class="notice-box">
        <span class="notice-icon"><img src="../assets/images/notice-icon.png">
          <em>2</em>
        </span>
        <span>消息</span>
      </div>
    </div>
    <div class="mui-content mui-row mui-fullscreen">
      <div class="mui-col-xs-3 myscroll">
        <ul id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
          <li class="left-tit" v-for="(item,index) in news" :key="index">
            <a :href="item.http" class="mui-control-item">{{item.text}}</a>
          </li>
        </ul>
      </div>
      <div id="segmentedControlContents" class="mui-col-xs-9 myscroll" style="border-left: 1px solid #c8c7cc;">
        <div  v-for="(item1,index1) in news" :key="index1"  :id="item1.http1" class="mui-control-content mui-active">
          <!--一组分类-->
          <div class="classification-group" v-for="(item2,index2) in item1.news1" :key="index2">
            <div class="classification-tit">{{item2.text}}</div>
            <div class="classification-item">
              <ul class="clearfix">
                <li v-for="(item3,index3) in item2.news2" :key="index3">
                  <a href="#">
                    <div class="classification-img">
                      <img :src="item3.img">
                    </div>
                    <div class="classification-txt">{{item3.text}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
       news:[
        {http:'#atoa1',http1:'atoa1',text:'近期热门',news1:[

        {text:'居家小商品',news2:[
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
        {text:'近期热门',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
        {text:'品牌鞋类',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        ],},
      ],},
        {http:'#atoa2',http1:'atoa2',text:'居家小商品',news1:[

        {text:'居家小商品',news2:[
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
        {text:'潮流男装',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'裤子',img:require('../assets/images/fl_04.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'风衣',img:require('../assets/images/fl_06.png'),},

        ],},
        {text:'近期热门',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
      ],},
        {http:'#atoa3',http1:'atoa3',text:'品牌鞋类',news1:[
        {text:'品牌鞋类',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        ],},
        {text:'皮具箱包',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
        {text:'潮流男装',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'裤子',img:require('../assets/images/fl_04.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'风衣',img:require('../assets/images/fl_06.png'),},

        ],},
      ],},
        {http:'#atoa4',http1:'atoa4',text:'皮具箱包',news1:[
        {text:'近期热门',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
        {text:'品牌鞋类',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        ],},
        {text:'皮具箱包',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},

      ],},
        {http:'#atoa5',http1:'atoa5',text:'潮流男装',news1:[
        {text:'皮具箱包',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
        {text:'潮流男装',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'裤子',img:require('../assets/images/fl_04.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'风衣',img:require('../assets/images/fl_06.png'),},

        ],},
      ],},
        {http:'#atoa6',http1:'atoa6',text:'内衣针织',news1:[
        {text:'近期热门',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
        {text:'皮具箱包',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
        {text:'潮流男装',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'裤子',img:require('../assets/images/fl_04.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'风衣',img:require('../assets/images/fl_06.png'),},

        ],},
      ],},
        {http:'#atoa7',http1:'atoa7',text:'儿童玩具',news1:[
        {text:'近期热门',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
        {text:'居家小商品',news2:[
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
      ],},
        {http:'#atoa8',http1:'atoa8',text:'母婴用品',news1:[
        {text:'近期热门',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
        {text:'潮流男装',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'裤子',img:require('../assets/images/fl_04.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'风衣',img:require('../assets/images/fl_06.png'),},

        ],},
      ],},
        {http:'#atoa9',http1:'atoa9',text:'电子数码',news1:[
        {text:'近期热门',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
        {text:'居家小商品',news2:[
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
      ],},
        {http:'#atoa10',http1:'atoa10',text:'办公用品',news1:[
        {text:'近期热门',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
        {text:'品牌鞋类',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        ],},
        {text:'潮流男装',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'裤子',img:require('../assets/images/fl_04.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'风衣',img:require('../assets/images/fl_06.png'),},

        ],},
      ],},
        {http:'#atoa11',http1:'atoa11',text:'个护彩妆',news1:[
        {text:'居家小商品',news2:[
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
        {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
        ],},
        {text:'品牌鞋类',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        ],},
        {text:'潮流男装',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'裤子',img:require('../assets/images/fl_04.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'风衣',img:require('../assets/images/fl_06.png'),},

        ],},
      ],},
        {http:'#atoa12',http1:'atoa12',text:'妈咪宝贝',news1:[
        {text:'品牌鞋类',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        ],},
        {text:'潮流男装',news2:[
        {text:'衣衫',img:require('../assets/images/fl_01.png'),},
        {text:'衣衫',img:require('../assets/images/fl_02.png'),},
        {text:'半身裙',img:require('../assets/images/fl_03.png'),},
        {text:'裤子',img:require('../assets/images/fl_04.png'),},
        {text:'卫衣',img:require('../assets/images/fl_05.png'),},
        {text:'风衣',img:require('../assets/images/fl_06.png'),},

        ],},
      ],},
      ],
      //  news1:[
      //   {text:'近期热门',news2:[
      //   {text:'衣衫',img:require('../assets/images/fl_01.png'),},
      //   {text:'衣衫',img:require('../assets/images/fl_02.png'),},
      //   {text:'半身裙',img:require('../assets/images/fl_03.png'),},
      //   {text:'卫衣',img:require('../assets/images/fl_05.png'),},
      //   {text:'半身裙',img:require('../assets/images/fl_03.png'),},
      //   {text:'衣衫',img:require('../assets/images/fl_02.png'),},
      //   {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
      //   {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
      //   ],},
      //   {text:'居家小商品',news2:[
      //   {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
      //   {text:'卫衣',img:require('../assets/images/fl_05.png'),},
      //   {text:'半身裙',img:require('../assets/images/fl_03.png'),},
      //   {text:'衣衫',img:require('../assets/images/fl_02.png'),},
      //   {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
      //   {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
      //   ],},
      //   {text:'品牌鞋类',news2:[
      //   {text:'衣衫',img:require('../assets/images/fl_01.png'),},
      //   {text:'衣衫',img:require('../assets/images/fl_02.png'),},
      //   {text:'半身裙',img:require('../assets/images/fl_03.png'),},
      //   ],},
      //   {text:'皮具箱包',news2:[
      //   {text:'衣衫',img:require('../assets/images/fl_01.png'),},
      //   {text:'衣衫',img:require('../assets/images/fl_02.png'),},
      //   {text:'半身裙',img:require('../assets/images/fl_03.png'),},
      //   {text:'半身裙',img:require('../assets/images/fl_03.png'),},
      //   {text:'衣衫',img:require('../assets/images/fl_02.png'),},
      //   {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
      //   {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
      //   ],},
      //   {text:'潮流男装',news2:[
      //   {text:'衣衫',img:require('../assets/images/fl_01.png'),},
      //   {text:'衣衫',img:require('../assets/images/fl_02.png'),},
      //   {text:'半身裙',img:require('../assets/images/fl_03.png'),},
      //   {text:'裤子',img:require('../assets/images/fl_04.png'),},
      //   {text:'卫衣',img:require('../assets/images/fl_05.png'),},
      //   {text:'风衣',img:require('../assets/images/fl_06.png'),},

      //   ],},
      // ],
      // news2:[
      //   {text:'衣衫',img:require('../assets/images/fl_01.png'),},
      //   {text:'衣衫',img:require('../assets/images/fl_02.png'),},
      //   {text:'半身裙',img:require('../assets/images/fl_03.png'),},
      //   {text:'裤子',img:require('../assets/images/fl_04.png'),},
      //   {text:'卫衣',img:require('../assets/images/fl_05.png'),},
      //   {text:'风衣',img:require('../assets/images/fl_06.png'),},
      //   {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
      //   {text:'卫衣',img:require('../assets/images/fl_05.png'),},
      //   {text:'半身裙',img:require('../assets/images/fl_03.png'),},
      //   {text:'衣衫',img:require('../assets/images/fl_02.png'),},
      //   {text:'高帮鞋',img:require('../assets/images/fl_07.png'),},
      //   {text:'新生儿专用',img:require('../assets/images/classification-img.jpg'),},
      //   ],

    }
  },
  mounted() {
    mui.init({
      swipeBack: true //启用右滑关闭功能
    });
    var controls = document.getElementById("segmentedControls");
    var contents = document.getElementById("segmentedControlContents");
    controls.querySelector(".mui-control-item").classList.add("mui-active");
    contents.querySelector(".mui-control-content").classList.add("mui-active");
    mui(".myscroll").scroll({
      scrollY: true, //是否竖向滚动
      scrollX: false, //是否横向滚动
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


<style scoped>
body {
  max-width: 100%;
}
.mui-bar-nav ~ .mui-content {
  padding-top: 50px;
  overflow: hidden;
}
.mui-row.mui-fullscreen > [class*="mui-col-"] {
  height: 100%;
}
.mui-segmented-control .mui-control-item {
  line-height: 50px;
  width: 100%;
}
.mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  background-color: #fff;
}
.mui-segmented-control.mui-segmented-control-inverted.mui-segmented-control-vertical
  .mui-control-item,
.mui-segmented-control.mui-segmented-control-inverted.mui-segmented-control-vertical
  .mui-control-item.mui-active {
  color: #505050;
  border-bottom: 1px solid #ffffff;
  background-color: transparent;
}
.mui-segmented-control.mui-segmented-control-inverted.mui-segmented-control-vertical
  .mui-control-item.mui-active {
  color: #dd2727;
  border-left: 3px solid #dd2727;
}
.search-head {
  background-color: #dd2727;
  height: 50px;
  width: 100%;
}
</style>
