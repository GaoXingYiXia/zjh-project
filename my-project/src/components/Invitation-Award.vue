<template>
  <div class="Invitation">
    <!--header-end-->
    <div class="mui-content">
      <div class="account-balance">
        <p>账户余额</p>
        <p class="money">
          <em>{{money}}</em>元</p>
      </div>
      <div class="exchange-group">
        <div class="exchange-item">
          <span class="exchange-item-top">推荐好友(人)</span>
          <em class="exchange-item-bot">{{friend}}</em>
        </div>
        <div class="exchange-item">
          <span class="exchange-item-top">完成兑换(元)</span>
          <em class="exchange-item-bot">{{success}}</em>
        </div>
        <div class="exchange-item">
          <a class="exchange-btn" href="#">兑换</a>
        </div>
      </div>
      <div class="rule-description right-arrow highlight">
        <a href="#">奖励规则说明</a>
      </div>
      <div class="settings-btn">
        <button class="btn" type="button">立即邀请</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "邀请奖励",
      money:'5000.5',
      friend:'245',
      success:'4500'
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
