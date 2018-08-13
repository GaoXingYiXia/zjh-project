<template>
  <div class="ft">
    <footer class="footer ind-footer mui-bar-tab" id="footer">
      <ul class="display-box-middle">
        <li>
          <router-link :to="{ name:'index'}" activeClass="on">
            <span class="footer-icon footer-index"></span>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name:'Classification'}" activeClass="on">
            <span class="footer-icon footer-classification"></span>
            <span>分类</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name:'back'}" activeClass="on">
            <span class="footer-icon footer-cash-back"></span>
            <span>超级返</span>

          </router-link>
        </li>
        <li>
          <router-link :to="{ name:'Cart'}" activeClass="on">
            <span class="footer-icon footer-cart"></span>
            <span>购物车</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name:'My'}" activeClass="on">
            <span class="footer-icon footer-my"></span>
            <span>我的首购</span>
          </router-link>
        </li>
      </ul>
    </footer>
    <!--footer-end-->
  </div>
</template>










