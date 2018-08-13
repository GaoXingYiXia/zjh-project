<template>
  <div class="Registration-area">
    <!--header-end-->
    <div class="mui-content">
      <form>
        <div class="registration-area mui-input-row"><input type="text" class="mui-input-clear" placeholder="联系人" autofocus="autofocus" /></div>
        <div class="registration-area mui-input-row"><input type="text" class="mui-input-clear" placeholder="联系电话" /></div>
        <div class="registration-area mui-input-row"><input type="text" class="mui-input-clear" placeholder="QQ" /></div>
        <div class="registration-area mui-input-row"><input type="text" class="mui-input-clear" placeholder="所属行业" /></div>
        <div class="registration-area mui-input-row"><input type="text" class="mui-input-clear" placeholder="主要店铺链接" /></div>
        <div class="registration-area mui-input-row">
          <textarea class="registration-area-textarea" name="query" rows="5" tip="" placeholder="期望合作方式简述"></textarea>
        </div>
        <div class="settings-btn">
          <button class="btn" type="submit">确认提交</button>
        </div>
      </form>
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
      title: "商家报名专区"
    };
  },
  mounted() {
    this.$emit("mytitle", this.title);
  }
};
</script>


