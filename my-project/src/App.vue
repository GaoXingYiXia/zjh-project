<template>
  <div id="app">
    <loading v-show="bLoading"></loading>
    <hd v-if="bhead" :number="nums"></hd>
    <hd1 v-if="bhead1">
      <h1 class="mui-title" slot="mytext">{{title}}</h1>
    </hd1>
    <router-view @mytitle="totitle" @mynum="num"></router-view>
    <ft v-show="bfoot"></ft>
  </div>
</template>

<script>
import ft from "./components/ft";
import hd from "./components/hd";
import hd1 from "./components/hd1";
import { mapGetters } from "vuex"; //引入mapGetters  ---关键   bLoading

export default {
  name: "App",
  data() {
    return {
      title: "",
      nums:''
    };
  },
  components: {
    ft,
    hd,
    hd1
  },
  computed: {
    ...mapGetters(["bhead", "bhead1", "bfoot", "bLoading"])
  },
  watch: {
    //监听变化
    $route(data) {
      // console.log(data);
      this.checkpath(data.path);
      this.title = data.query.title;
      // this.$store.dispatch("VIEW_LOADING", true);
      // setTimeout(() => {
      //   this.$store.dispatch("VIEW_LOADING", false);
      // }, 300);
    }
  },
  mounted() {
    // console.log(this.$route.path);
    this.checkpath(this.$route.path);
    // setTimeout(() => {
    //   this.$store.dispatch("VIEW_LOADING", false);
    // }, 300);
  },
  methods: {
    checkpath(path) {
      if (/index|Classification|Cash-back|Shopping-Cart|My-i/.test(path)) {
        this.$store.dispatch("VIEW_HEADER", false);
        this.$store.dispatch("VIEW_HEADER1", false);
        this.$store.dispatch("VIEW_FOOT", true);
      } else if (/Activity-page/.test(path)) {
        this.$store.dispatch("VIEW_HEADER", true);
        this.$store.dispatch("VIEW_HEADER1", false);
        this.$store.dispatch("VIEW_FOOT", false);
      } else if (/My-Collection|Retrieve-password|Search-page|details|Red-package|Register|Sign-in/.test(path)) {
        this.$store.dispatch("VIEW_HEADER", false);
        this.$store.dispatch("VIEW_HEADER1", false);
        this.$store.dispatch("VIEW_FOOT", false);
      } else {
        this.$store.dispatch("VIEW_HEADER", false);
        this.$store.dispatch("VIEW_HEADER1", true);
        this.$store.dispatch("VIEW_FOOT", false);
      }
    },
    totitle(data) {
      // console.log(data);
      this.title = data;
    },
    num(data){
      this.nums = data
    }
  }
};
</script>

<style>
@import url("./assets/css/base");
@import url("./assets/css/common");
</style>
