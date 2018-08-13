<template>
  <div class="Cart">
    <div id="header" class="search-head header mui-bar mui-bar-nav">
      <h1 class="mui-title">购物车</h1>
      <div class="notice-box">
        <span class="notice-icon"><img src="../assets/images/notice-icon.png">
          <em>2</em>
        </span>
        <span>消息</span>
      </div>
    </div>

    <div class="mui-content">
      <div class="shopcart-group" v-for="(item) in news" :key ="item.goodsid">
        <div class="shopcart-tit clearfix">
          <div class="check-box fl">
            <label><input type="checkbox" value="" name="newslist" id="newslist-1" class="newslist"></label>
          </div>
          <span class="fl">
            <a href="javaScript:;">{{item.name}}</a>
          </span>
          <span class="fr clearfix" v-show="!isupdata">
            <a href="javaScript:;">领券</a>
            <a href="javaScript:;" @click="updata(true)">编辑</a>
          </span>
          <span class="fr clearfix" v-show="isupdata">
            <a href="javaScript:;" @click="mydelete(checkedid);updata(false);change()">删除所选</a>
            <!-- <a href="javaScript:;" @click="">编辑完成</a> -->
          </span>
        </div>
        <ul class="shopcart-item" v-for="(item1,index1) in redata" :key ="index1">
          <li class="clearfix">
            <div class="check-box">
              <label><input type="checkbox"  name="newslist"  class="newslist" :value="item1.goodsid" v-model="checkedid"></label>
            </div>
            <div class="pro-details">
              <div class="pro-details-l">
                <a href="#">
                  <img :src="item1?item1.img:''" >
                </a>
                <p>{{item1.preferential}}</p>
              </div>
              <div class="pro-details-r">
                <div class="pro-details-top">
                  <a href="#">
                    <h2 class="pro-details-text-tit">{{item1.text}}</h2>
                    <p class="pro-details-text-des">
                      <span>{{item1.Keyword1}}</span>
                      <span>{{item1.Keyword2}}</span>
                      <span>{{item1.Keyword3}}</span>
                    </p>
                  </a>
                </div>
                <div class="pro-details-tips clearfix">
                  <em>{{item1.special1}}</em>
                  <del>{{item1.special2}}</del>
                  <span>手机专享价</span>
                  <div class="pro-number fr norms-content-t norms-content-two">
		                <span class="icon norms-out" @click="reduce(index1)">-</span>
		                <span>{{item1.mtnum}}</span>
		                <span class="icon norms-add" @click="add(index1)">+</span>
                  </div>
                </div>
              </div>
            </div>
          </li>

        </ul>
      </div>
      <div id="shopcart-footer" class="shopcart-footer">
        <div class="check-box">
          <label class="checkall"><input id="checkAll" class="allselect" type="checkbox" v-model="checkedid1" @click="checkAll">&nbsp;全选</label>
        </div>
        <div class="total">
          <em>合计：￥{{pieces}}</em>
          <span>不含运费</span>
        </div>
        <div class="closing">
          <a href="#" class="btn-sub">去结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

  export default {
    data () {
      return {
        redata:'',
        news:[
          {name:'专卖店'},
          // {name:'苹果专卖店'},
          // {name:'Apple专卖店'},
          // {name:'水果专卖店'},
        ],
        checkedid:[],  //要写成数值
        checkedid1:'',
        pieces:0,
      }
    },
    computed: {
      ...mapGetters([
        'id','isupdata'
      ]),

    },
    mounted () {

      // console.log(this.id);
      if(this.id.length > 0){
        this.$http({
            url:'http://localhost:3000/goods',
            params:{
              id:this.id
            }
        }).then((res)=>{
          // console.log(res.data);
          this.redata = res.data
          this.redata.forEach(item => {
                this.pieces+=(item.special1.slice(1,11)-0)
            });
        })
      }
    },
    methods: {
      ...mapActions([
        'updata','mydelete',

      ]),
      change(){
          this.checkedid1 =false
         if(this.id.length > 0){
            this.$http({
                url:'http://localhost:3000/goods',
                params:{
                  id:this.id
                }
            }).then((res)=>{
              // console.log(res.data);
              this.redata = res.data;
              this.checkedid=[];
            })
        }else{
            this.redata =''
        }
      },
      checkAll(){   //因为是方法 ，要滞后一步
        if(this.checkedid1){
          this.checkedid =[]
        }else{
          this.checkedid =this.id
        }
      },
      add(index){
        this.pieces+=(this.redata[index].special1.slice(1,11)-0)
        this.redata[index].mtnum ++
      },
      reduce(index){
        if(this.redata[index].mtnum>1){
          this.redata[index].mtnum --
          this.pieces-=(this.redata[index].special1.slice(1,11)-0)
        }else{
          this.redata[index].mtnum=1;
        }
      }
    }

  }
</script>



<style scoped>
body {
  max-width: 100%;
}
.mui-bar .mui-title {
  height: 50px;
  line-height: 50px;
  color: #fff;
}
.mui-bar-nav ~ .mui-content {
  padding-top: 50px;
}

.norms-content-two span{
   background: #faf9f9;
    color: #000;
    font-size:20px;
}
.norms-content-two span.norms-out{
    background-size: 200px 200px;
    background-position: -106px -4px;
    border: 1px #000 solid;
}
.norms-content-two span.norms-add{
    background-size: 200px 200px;
    background-position: -106px -25px;
    background: #faf9f9;
    border: 1px #000 solid;

}
.norms-content-t{
  background: #faf9f9;
  color:#000;

}
.shopcart-group{
  margin-bottom: 100px;
}
.norms-content-two{ line-height: 1.5rem; font-size: .8rem;}
.norms-content-two span{
    width: 1rem;
    height: 1rem;
    margin: .25rem;
    line-height: 1rem;
    text-align: center;
    float: right;
}
.norms-content-two span.norms-out{
    background-size: 200px 200px;
    background-position: -106px -4px;
}
.norms-content-two span.norms-add{
    background-size: 200px 200px;
    background-position: -106px -25px;
}
</style>

// news1:[
//    {img:require('../assets/images/computer.jpg'),
//   preferential:'已降99.00元',
//   text:'Apple MacBook Pro 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/128GB SSD闪存/Retina屏 MF839CH/A)',
//   Keyword1:[{Keyword:'重量:3.3kg'},{Keyword:'颜色:标配版'},{Keyword:'版本:13.3英寸'}],
//   special1:'￥5209.00',
//   special2:'￥5308',
//   special3:'手机专享价',
//   num:'1'
//   }
// ]


