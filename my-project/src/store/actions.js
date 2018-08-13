
import * as types from './type'
//payload为参数 commit为函数
export default {
  [types.VIEW_HEADER]:({commit,state},payload)=>{
    commit(types.VIEW_HEADER, payload)
  },
  [types.VIEW_HEADER1]:({commit,state},payload)=>{
    commit(types.VIEW_HEADER1, payload)
  },
  // [types.VIEW_BANNER]:({commit,state},payload)=>{
  //   commit(types.VIEW_BANNER, payload)
  // },
  [types.VIEW_FOOT]:({commit,state},payload)=>{
    commit(types.VIEW_FOOT, payload)
  },
  [types.VIEW_LOADING]:({commit,state},payload)=>{
    commit(types.VIEW_LOADING, payload)
  },
  [types.VIEW_LOGIN]: ({commit,state}, payload) => {
    commit(types.VIEW_LOGIN, payload)
    // console.log(payload);
  },
  [types.VIEW_UPDATA]: ({commit,state}, payload) => {
    commit(types.VIEW_UPDATA, payload)
    // console.log(payload);
  },
  [types.VIEW_DELETE]: ({commit,state}, payload) => {
    for (let i = 0; i < state.id.length; i++) {
        for (let j = 0; j < payload.length; j++) {
          if (state.id[i] == payload[j]) {
            state.id.splice(i, 1);
            i= -1; //有 i++在 要减 1
          }
        }
      }
      commit(types.VIEW_ID, [...state.id])
  },
  [types.VIEW_ID]: ({commit,state}, payload) => {
    let off = true;
    state.id.forEach(item => {
      if (item == payload) {
        off = false;
      }
    });//重复的去掉
    if(off){
      state.id.push(payload);
      commit(types.VIEW_ID, [...state.id])
      //  [...state.id]  是一个数组  -----发送一个数组
    }
  },
  [types.VIEW_YZM]:({commit,state},payload)=>{
    //随机验证码
    function randomNumber() {
      function random(a, b) {
        return Math.round(Math.random() * (a - b) + b);
      }
      var str = "";
      for (var i = 0; i < 3; i++) {
        var num1 = String.fromCharCode(random(48, 57))
        var num2 = String.fromCharCode(random(97, 122))
        var num3 = String.fromCharCode(random(65, 90))
        str += num1 + num2 + num3;
      }
      var str2 = "";
      for (var i = 0; i < 4; i++) {
        var random = Math.round(Math.random() * (str.length - 1)); //随机索引
        str2 += str[random];
      }
      return str2;
    }
    // console.log(payload);
    if (payload){
      commit(types.VIEW_YZM, randomNumber())
    }else{
      commit(types.VIEW_YZM, '')
    }

  }



}
