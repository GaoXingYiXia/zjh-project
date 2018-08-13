<template>
  <div class="My-comments">
    <!--header-end-->
    <div class="mui-content">
      <div id="segmentedControl" class="mui-segmented-control">
        <a class="mui-control-item mui-active" href="#it1">发出的评论</a>
        <a class="mui-control-item" href="#it2">收到的评论</a>
      </div>
      <div v-for="(item,index) in news" :key="index" :id="item.id" :class="item.thisclass" >
        <div class="comments-list" v-for="(item1,index1) in item.news1" :key="index1">
          <div class="comments-list-top display-box-middle">
            <div class="comments-list-top-l"><img :src="item1.myface"></div>
            <div class="comments-list-top-r">
              <div class="tit-time clearfix">
                <span class="fl">{{item1.name}}</span>
                <span class="fr">{{item1.time}}</span>
              </div>
              <div class="txt-del">
                <span class="fl">{{item1.text1}}</span>
                <span class="fr">删除</span>
              </div>
            </div>
          </div>
          <div class="comments-list-bot display-box-middle">
            <div class="comments-list-bot-l"><img :src="item1.proimg"></div>
            <div class="comments-list-bot-r">
              <span>{{item1.pro}}</span>
              <div class="comments-list-bot-price">
                <em>￥
                  <b>{{item1.pieces}}</b>
                </em>
                <span>返</span>
                <strong>{{item1.hui}}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "评论记录",
      news:[
        { id:'it1',
          thisclass:'mui-control-content mui-active',
          news1:[
            {
              myface:require('../assets/images/user_logo.jpg'),proimg:require('../assets/images/pro-img.jpg'),
              name:'花开话罗',time:'03-04 14:12',text1:'主要奔着四大功效去的，希望有效果。',pro:'古尔莎（Gulsha）晨露玫瑰滋养套装',pieces:'198',hui:'11.84'
            }, {
              myface:require('../assets/images/user_logo.jpg'),proimg:require('../assets/images/pro-img.jpg'),
              name:'花开话罗',time:'03-04 14:12',text1:'主要奔着四大功效去的，希望有效果。',pro:'古尔莎（Gulsha）晨露玫瑰滋养套装',pieces:'198',hui:'11.84'
            },
          ],
        },
        {id:'it2',
          thisclass:'mui-control-content',
          news1:[
              {
                myface:require('../assets/images/user_logo.jpg'),proimg:require('../assets/images/pro-img.jpg'),
                name:'花开话罗',time:'03-04 14:12',text1:'主要奔着四大功效去的，希望有效果。',pro:'古尔莎（Gulsha）晨露玫瑰滋养套装',pieces:'198',hui:'11.84'
              }, {
                myface:require('../assets/images/user_logo.jpg'),proimg:require('../assets/images/pro-img.jpg'),
                name:'花开话罗',time:'03-04 14:12',text1:'主要奔着四大功效去的，希望有效果。',pro:'古尔莎（Gulsha）晨露玫瑰滋养套装',pieces:'198',hui:'11.84'
              }, {
                myface:require('../assets/images/user_logo.jpg'),proimg:require('../assets/images/pro-img.jpg'),
                name:'花开话罗',time:'03-04 14:12',text1:'主要奔着四大功效去的，希望有效果。',pro:'古尔莎（Gulsha）晨露玫瑰滋养套装',pieces:'198',hui:'11.84'
              }, {
                myface:require('../assets/images/user_logo.jpg'),proimg:require('../assets/images/pro-img.jpg'),
                name:'花开话罗',time:'03-04 14:12',text1:'主要奔着四大功效去的，希望有效果。',pro:'古尔莎（Gulsha）晨露玫瑰滋养套装',pieces:'198',hui:'11.84'
              },
            ],
        },
      ]
    };
  },
  mounted() {
    this.$emit("mytitle", this.title);
    mui.init({
      swipeBack: true //启用右滑关闭功能
    });
    (function($) {
      $("#scroll").scroll({
        indicators: true //是否显示滚动条
      });
      var segmentedControl = document.getElementById("segmentedControl");
    })(mui);
  }
};
</script>


<style scoped>
/* .mui-content {
  max-width: 100%;
  background-color: #ececec;
  margin: 45px 0 50px 0;
} */
.mui-content {
  margin-top: 50px;
}
.mui-segmented-control {
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #dddddd;
}
.mui-segmented-control .mui-control-item {
  font-size: 14px;
  color: #4c4c4c;
  border-left: none;
}
.mui-segmented-control .mui-control-item.mui-active {
  border-bottom: 2px solid #dd2727;
  background-color: transparent;
  color: #dd2727;
}
</style>



