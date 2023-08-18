<template>
  <div class="item-container">
    <div class="home-item">
      <div class="article-title">
        <router-link to="/article"><h1>Hello World</h1></router-link>
      </div>
      <div class="article-time">
        <p>- 2023-8-18</p>
      </div>
      <div class="article-discription">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae
          voluptates, quis odit laboriosam sequi alias, quam facilis fugit
          suscipit illum placeat nisi id. Minus optio eligendi aspernatur odit
          harum?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
};
</script>

<style scoped>
.home-item {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 20px;
}
.article-title h1 {
  margin-bottom: 5px;
  transition: 0.1s ease-out;
}
.article-title:hover h1 {
  color: #f8b042;
}
.article-time p {
  color: gray;
  margin: 0;
}
</style>