export default {
  bhead: (state) => {
    // console.log(state.head1);
    return state.head1
  },
  bhead1: (state) => {
    // console.log(state.head2);
    return state.head2

  },
  // bbann: (state) => {
  //   return state.bann
  // },
  bfoot: (state) => {
    // console.log(state.foot);
    return state.foot

  },
   bLoading: (state) => {
     // console.log(state.foot);
     return state.Loading

   },
   mytext:(state)=>{
    return state.login
   },
   myzm:(state)=>{
    return state.yzm
   },
   id:(state)=>{
    return state.id
   },
    isupdata: (state) => {
    return state.updata
   }
}
