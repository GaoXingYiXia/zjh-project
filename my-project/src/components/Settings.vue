<template>
  <div class="Settings">
    <div class="mui-content">
      <div class="settings-group">
        <div class="settings-item">
          <span>消息通知开关</span>
          <div class="mui-switch mui-switch-mini" v-change>
              <div class="mui-switch-handle"></div>
          </div>
        </div>
        <div class="settings-item highlight right-arrow"><span>清除缓存</span><em class="fr">4.65M</em></div>
        <div class="settings-item highlight"><span>当前版本</span><em class="fr">V.12.1</em></div>
        <div class="settings-item highlight right-arrow"><span>喜欢首购？打分鼓励一下吧</span></div>
      </div>
      <div class="settings-btn"><router-link to="/Sign-in" tag="button" class="btn" @click.native = "tuichu" >{{mytext}}</router-link></div>
    </div>
  </div>
</template>


<style scoped>
.mui-switch.mui-active {
    border-color: #dd2727;
    background-color: #dd2727;
}
.mui-content { margin-top:50px}
</style>
<script>
import {mapGetters} from 'vuex'
  export default {
     data () {
      return {
        title:'综合设置',
      }
    },
    directives: {
      change: {
        // 指令的定义
        inserted(el) {
          el.onclick = function() {
            if($('.mui-switch.mui-switch-mini.mui-active')[0] !=undefined){
              $('.mui-switch.mui-switch-mini').removeClass('mui-active')
            }else{
              $('.mui-switch.mui-switch-mini').addClass('mui-active')
            }
          }
        }
      }
    },
   mounted() {
     this.$emit('mytitle',this.title)
   },
   methods: {
    tuichu(){
      this.$http({
        headers:{
          'Accept':'application/json,text/plain,*/*',
          'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
        }, //post --要加
        url:'http://localhost:3000/ajx',
        method: 'post',
        data:this.$qs.stringify({
             'act': "tuichu",
        }),
      }).then((res)=>{
          this.$store.dispatch('VIEW_LOGIN','请用户登录');
      })
    }
  },
  computed: {
    ...mapGetters([
      'mytext'
    ])
  }
  }
</script>
