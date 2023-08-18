<template>
  <div class="footer-container">
    <div class="footer-item">
      <div>
        © 2023 Yokca's Blog <br />
        Powered by <a href="https://v2.cn.vuejs.org/" target="_blank">Vue.js</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-container {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: white;
}
.footer-item {
  display: flex;
  flex-direction: column;
}
.footer-item div {
  text-align: center;
}
.footer-item div a {
  color: green;
}
</style>