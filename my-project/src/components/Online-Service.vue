<template>
  <div class="Service">
    <!--header-end-->
    <div class="mui-content">
      <div class="online-service-group">
        <div class="online-service-item online-service-qq"><img src="../assets/images/qq-icon.png"></div>
        <div class="online-service-item online-service-feedback">
          <a href="#">有问题请反馈给我</a>
        </div>
        <div class="online-service-item online-service-time">
          <p>周一至周日&nbsp;&nbsp;8:00-23:00</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
html,
body,
.mui-content {
  background-color: #fff;
}
.mui-content {
  margin-top: 50px;
}
</style>
<script>
export default {
  data() {
    return {
      title: "问题反馈"
    };
  },
  mounted() {
    this.$emit("mytitle", this.title);
  }
};
</script>


