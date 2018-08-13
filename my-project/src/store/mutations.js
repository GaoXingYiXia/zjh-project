import * as types from './type';

export default {
  [types.VIEW_HEADER]: (state, payload)=>{
    state.head1 =payload
  },
  [types.VIEW_HEADER1]: (state, payload)=>{
    state.head2 =payload
  },
  [types.VIEW_FOOT]: (state, payload) => {
    state.foot = payload
  },
  [types.VIEW_LOADING]: (state, payload) => {
    state.Loading = payload
  },
   [types.VIEW_LOGIN]: (state, payload) => {
     state.login = payload
  },
  [types.VIEW_YZM]: (state, payload) => {
    state.yzm = payload
  },
   [types.VIEW_ID]: (state, payload) => {
    state.id=payload
  },
  [types.VIEW_UPDATA]: (state, payload) => {
    state.updata = payload
  },
  //  [types.VIEW_DELETE]: (state, payload) => {
  //    state.isdelete = payload
  //  }


}
